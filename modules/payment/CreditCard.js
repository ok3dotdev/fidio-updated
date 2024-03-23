var _button;
import React from 'react';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { getStripeSecretData, saveCreditCardInfo } from '../utility/payment/index';
import { checkSignedIn, checkSignedInAndPrompt, logout } from '../utility/onboarding/SignIn';
const DEFAULT_SOLUTION = {
  payment: 'stripe'
};
const Module = props => {
  const nameOnCard = React.useRef();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [stagger, setStagger] = React.useState(false);
  const [validCc, setValidCc] = React.useState(false);
  const [fetchingCc, setFetchingCc] = React.useState(false);
  const [stripePromise, setStripePromise] = React.useState(null);
  const [registerNewCard, setRegisterNewCard] = React.useState(false);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [solution, setSolution] = React.useState(DEFAULT_SOLUTION);
  const staggerRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      // TODO on mount. If user logged in but no locationData must request location data from server to see if it has been loaded and load it to _loggedIn
      if (props.setSolution) {
        props.setSolution(solution);
      }
      if (props.stagger) {
        staggerRef.current = setTimeout(() => {
          setStagger(true);
        }, props.stagger);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.stagger, solution]);

  /**
   * Sets payment solution based off of users current location
   */
  React.useEffect(() => {
    if (props?._loggedIn?.meta?.location && props?.regionsData) {
      if (props.regionsData[props._loggedIn.meta.location]) {
        const useSolution = props.regionsData[props._loggedIn.meta.location];
        if (useSolution.payment !== solution.payment || !solution || solution && !solution.payment) {
          setSolution(useSolution);
          if (props.setSolution) {
            props.setSolution(useSolution);
          }
          if (props.setShowContent) {
            props.setShowContent(['stripe'].indexOf(useSolution.payment) > -1);
          }
        }
      }
    }
  }, [props._loggedIn, props.regionsData, solution, props.setSolution]);
  React.useEffect(() => {
    console.log(props.useAdmin, props.paymentConfig);
    if (props?.useAdmin) {
      // Register with Admin Payment Client Stripe Key
      const prom = loadStripe(props.useAdmin);
      if (prom) {
        setStripePromise(prom);
      }
    } else if (props?.paymentConfig?.keys?.stripe && !stripePromise) {
      // Register with normal Payment Client Stripe Key
      const prom = loadStripe(props.paymentConfig.keys.stripe);
      if (prom) {
        setStripePromise(prom);
      }
    }
  }, [props?.paymentConfig?.keys?.stripe, props.useAdmin]);
  React.useEffect(() => {
    async function fn() {
      if (solution.payment === 'stripe') {
        // Only fetch stripe secret if payment solution is stripe
        if (!validCc && props._loggedIn && !fetchingCc && !props._stripeSecret) {
          try {
            setFetchingCc(true);
            let data = await getStripeSecretData(props.apiUrl, props.domainKey, props._loggedIn, {
              useAdmin: props?.useAdmin
            }); // Fetches client secret for allowing Stripe actions on frontend
            if (data && data.client_secret && data.card) {
              props._setStripeSecret(data);
              setFetchingCc(false);
            } else {
              throw new Error();
            }
          } catch (err) {
            console.log(err);
            setFetchingCc(false);
          }
        }
      }
    }
    fn();
  }, [props._loggedIn, props._stripeSecret, solution, props.useAdmin]);
  const handleSaveBillingInfo = async (e, elements, stripe, nameOnCard) => {
    try {
      e.preventDefault();
      console.log(e, elements, stripe, nameOnCard);
      if (!fetchBusy) {
        setFetchBusy(true);
        setTimeout(() => {
          setFetchBusy(false);
        }, 15000);
        const user = checkSignedInAndPrompt();
        if (user) {
          if (nameOnCard && nameOnCard.current && nameOnCard.current.value) {
            let data = {
              fullName: "",
              result: null,
              stripeSecret: props._stripeSecret
            };
            data.fullName = nameOnCard.current.value;
            data.result = await stripe.confirmCardSetup(props._stripeSecret.client_secret, {
              // Stores credit card on users account
              payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                  name: data.fullName
                }
              }
            });
            console.log('Stripe Payment', data, props);
            let res = await saveCreditCardInfo(props.apiUrl, props.domainKey, data, checkSignedIn, {
              useAdmin: props?.useAdmin
            });
            if (!res) {
              props._setPageError("Failed to save Credit Card");
              setFetchBusy(false);
            } else if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              logout();
              setFetchBusy(false);
            } else if (res.status == "success" && res.newSecret) {
              setRegisterNewCard(false);
              // On successfull credit card received, purchase phone number and then update locally
              props._setStripeSecret(res.newSecret);
              setFetchBusy(false);
            }
          } else {
            props._setPageError("Please type in your Full Name as it appears on your Credit Card");
            setFetchBusy(false);
          }
        }
      }
    } catch (err) {
      console.log(err); // fail silently
      setFetchBusy(false);
    }
  };
  React.useEffect(() => {
    buildValidCc(props._stripeSecret);
  }, [props._stripeSecret]);
  const buildValidCc = secret => {
    if (secret?.card?.data && secret.card.data[0] && secret.card.data[0]?.card && secret.card.data[0]?.billing_details) {
      if (secret.card.data[0].card?.last4 && secret.card.data[0].card?.exp_month && secret.card.data[0].card?.exp_year) {
        let convExp = exp => {
          try {
            const temp = exp.toString();
            if (temp.length === 4) {
              return temp.substring(2, 4);
            }
            throw new Error();
          } catch (err) {
            return exp;
          }
        };
        setValidCc({
          name: secret.card.data[0].billing_details.name ? secret.card.data[0].billing_details.name : null,
          last4: secret.card.data[0].card.last4,
          exp_month: secret.card.data[0].card.exp_month,
          exp_year: convExp(secret.card.data[0].card.exp_year)
        });
      }
    }
  };
  if (props.setValidCc && props.validCc !== validCc) {
    props.setValidCc(validCc);
  }
  React.useEffect(() => {
    if (props?._stripeSecret.adminSecret && props.validCc && !props.useAdmin) {
      // Use admin is off and the stripe secret is for an admin. Turn off stripe secret. Reset
      setValidCc(false);
      props._setStripeSecret(false);
    } else if (props.useAdmin && props?._stripeSecret && !props._stripeSecret.adminSecret) {
      // Use admin is true but stripe secret does not have adminSecret flag. Turn off stripe secret. Reset
      setValidCc(false);
      props._setStripeSecret(false);
    }
  }, [props?._stripeSecret, props?.useAdmin, props?.validCc]);
  const handleRegisterNewCard = React.useCallback(e => {
    if (registerNewCard) {
      setRegisterNewCard(false);
      return 1;
    }
    setRegisterNewCard(true);
  });
  console.log('CC', solution, props._stripeSecret);
  return <div className={`${props.className}`} style={props.sx}>
            <div className={`${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}></div>
            {props.useAdmin ? <div style={{
      background: '#353535'
    }}>Payments to Tycoon Systems Corp.</div> : null}
            {!props.stagger || props.stagger && stagger ? <React.Fragment>
                    {solution?.payment === 'stripe' ? validCc && !registerNewCard ? <div>
                                <div className='Ecommerce_CreditCard_Container' style={{
          padding: '.125rem'
        }}>
                                    {props.purchaseDescription ? <span>{props.purchaseDescription}</span> : null}
                                    <div className='Ecommerce_CreditCard_Container_Meta'>
                                        <div>
                                            <p style={{
                marginBottom: .1 + "rem",
                paddingBottom: 0 + "rem",
                margin: 0
              }}>Ending in <span>{validCc.last4}</span></p>
                                            <p style={{
                marginBottom: .1 + "rem",
                paddingBottom: 0 + "rem",
                margin: 0
              }}>Expiry <span>{validCc.exp_month} / {validCc.exp_year}</span></p>
                                        </div>
                                        {validCc.name ? <p style={{
              marginTop: 0,
              margin: 0
            }}>{validCc.name}</p> : null}
                                    </div>
                                </div>
                            </div> : props._stripeSecret && props._stripeSecret.client_secret ? <Elements stripe={stripePromise} options={{
        clientSecret: props._stripeSecret.client_secret
      }}>
                                    <ElementsConsumer>
                                        {({
            elements,
            stripe
          }) => <form onSubmit={e => {
            handleSaveBillingInfo(e, elements, stripe, nameOnCard);
          }} style={{
            display: 'grid',
            gap: '.125rem'
          }}>
                                                <input type="text" placeholder="Full Name on Card" ref={nameOnCard}></input>
                                                <CardElement options={{
              iconStyle: 'solid',
              style: {
                base: {
                  fontSize: '16px',
                  color: 'black',
                  fontWeight: 500,
                  '::placeholder': {
                    color: 'grey'
                  },
                  fontSmoothing: 'antialiased',
                  width: 100 + "%",
                  backgroundColor: 'white'
                },
                invalid: {
                  color: '#9e2146'
                }
              }
            }} />
                                                {_button || (_button = <button type="submit">Save Billing Info</button>)}
                                            </form>}
                                    </ElementsConsumer>
                                </Elements> : null : null}
                    {solution?.payment === 'stripe' ? validCc ? <div style={{
        display: 'grid',
        gap: '.125rem',
        marginTop: '.125rem'
      }}>
                                    <button type='submit' onClick={handleRegisterNewCard}>{registerNewCard ? 'Use Current Card' : 'Register New Card'}</button>
                                </div> : null : null}
                </React.Fragment> : null}
            {props.children}
        </div>;
};
export default Module;