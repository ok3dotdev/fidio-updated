"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _stripeJs = require("@stripe/stripe-js");
var _index = require("../utility/payment/index");
var _SignIn = require("../utility/onboarding/SignIn");
var DEFAULT_SOLUTION = {
  payment: 'stripe'
};
var Module = function Module(props) {
  var _props$paymentConfig2;
  var nameOnCard = _react["default"].useRef();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    stagger = _React$useState4[0],
    setStagger = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    validCc = _React$useState6[0],
    setValidCc = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    fetchingCc = _React$useState8[0],
    setFetchingCc = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    stripePromise = _React$useState10[0],
    setStripePromise = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    registerNewCard = _React$useState12[0],
    setRegisterNewCard = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    fetchBusy = _React$useState14[0],
    setFetchBusy = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(DEFAULT_SOLUTION),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    solution = _React$useState16[0],
    setSolution = _React$useState16[1];
  var staggerRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      // TODO on mount. If user logged in but no locationData must request location data from server to see if it has been loaded and load it to _loggedIn
      if (props.setSolution) {
        props.setSolution(solution);
      }
      if (props.stagger) {
        staggerRef.current = setTimeout(function () {
          setStagger(true);
        }, props.stagger);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.stagger, solution]);

  /**
   * Sets payment solution based off of users current location
   */
  _react["default"].useEffect(function () {
    var _props$_loggedIn;
    if (props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.location && props !== null && props !== void 0 && props.regionsData) {
      if (props.regionsData[props._loggedIn.meta.location]) {
        var useSolution = props.regionsData[props._loggedIn.meta.location];
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
  _react["default"].useEffect(function () {
    var _props$paymentConfig;
    console.log(props.useAdmin, props.paymentConfig);
    if (props !== null && props !== void 0 && props.useAdmin) {
      // Register with Admin Payment Client Stripe Key
      var prom = (0, _stripeJs.loadStripe)(props.useAdmin);
      if (prom) {
        setStripePromise(prom);
      }
    } else if (props !== null && props !== void 0 && (_props$paymentConfig = props.paymentConfig) !== null && _props$paymentConfig !== void 0 && (_props$paymentConfig = _props$paymentConfig.keys) !== null && _props$paymentConfig !== void 0 && _props$paymentConfig.stripe && !stripePromise) {
      // Register with normal Payment Client Stripe Key
      var _prom = (0, _stripeJs.loadStripe)(props.paymentConfig.keys.stripe);
      if (_prom) {
        setStripePromise(_prom);
      }
    }
  }, [props === null || props === void 0 || (_props$paymentConfig2 = props.paymentConfig) === null || _props$paymentConfig2 === void 0 || (_props$paymentConfig2 = _props$paymentConfig2.keys) === null || _props$paymentConfig2 === void 0 ? void 0 : _props$paymentConfig2.stripe, props.useAdmin]);
  _react["default"].useEffect(function () {
    function fn() {
      return _fn.apply(this, arguments);
    }
    function _fn() {
      _fn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(solution.payment === 'stripe')) {
                _context.next = 19;
                break;
              }
              if (!(!validCc && props._loggedIn && !fetchingCc && !props._stripeSecret)) {
                _context.next = 19;
                break;
              }
              _context.prev = 2;
              setFetchingCc(true);
              _context.next = 6;
              return (0, _index.getStripeSecretData)(props.apiUrl, props.domainKey, props._loggedIn, {
                useAdmin: props === null || props === void 0 ? void 0 : props.useAdmin
              });
            case 6:
              data = _context.sent;
              if (!(data && data.client_secret && data.card)) {
                _context.next = 12;
                break;
              }
              props._setStripeSecret(data);
              setFetchingCc(false);
              _context.next = 13;
              break;
            case 12:
              throw new Error();
            case 13:
              _context.next = 19;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setFetchingCc(false);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 15]]);
      }));
      return _fn.apply(this, arguments);
    }
    fn();
  }, [props._loggedIn, props._stripeSecret, solution, props.useAdmin]);
  var handleSaveBillingInfo = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e, elements, stripe, nameOnCard) {
      var user, data, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            e.preventDefault();
            console.log(e, elements, stripe, nameOnCard);
            if (fetchBusy) {
              _context2.next = 23;
              break;
            }
            setFetchBusy(true);
            setTimeout(function () {
              setFetchBusy(false);
            }, 15000);
            user = (0, _SignIn.checkSignedInAndPrompt)();
            if (!user) {
              _context2.next = 23;
              break;
            }
            if (!(nameOnCard && nameOnCard.current && nameOnCard.current.value)) {
              _context2.next = 21;
              break;
            }
            data = {
              fullName: "",
              result: null,
              stripeSecret: props._stripeSecret
            };
            data.fullName = nameOnCard.current.value;
            _context2.next = 13;
            return stripe.confirmCardSetup(props._stripeSecret.client_secret, {
              // Stores credit card on users account
              payment_method: {
                card: elements.getElement(_reactStripeJs.CardElement),
                billing_details: {
                  name: data.fullName
                }
              }
            });
          case 13:
            data.result = _context2.sent;
            console.log('Stripe Payment', data, props);
            _context2.next = 17;
            return (0, _index.saveCreditCardInfo)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn, {
              useAdmin: props === null || props === void 0 ? void 0 : props.useAdmin
            });
          case 17:
            res = _context2.sent;
            if (!res) {
              props._setPageError("Failed to save Credit Card");
              setFetchBusy(false);
            } else if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              (0, _SignIn.logout)();
              setFetchBusy(false);
            } else if (res.status == "success" && res.newSecret) {
              setRegisterNewCard(false);
              // On successfull credit card received, purchase phone number and then update locally
              props._setStripeSecret(res.newSecret);
              setFetchBusy(false);
            }
            _context2.next = 23;
            break;
          case 21:
            props._setPageError("Please type in your Full Name as it appears on your Credit Card");
            setFetchBusy(false);
          case 23:
            _context2.next = 29;
            break;
          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0); // fail silently
            setFetchBusy(false);
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 25]]);
    }));
    return function handleSaveBillingInfo(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    buildValidCc(props._stripeSecret);
  }, [props._stripeSecret]);
  var buildValidCc = function buildValidCc(secret) {
    var _secret$card, _secret$card$data$, _secret$card$data$2;
    if (secret !== null && secret !== void 0 && (_secret$card = secret.card) !== null && _secret$card !== void 0 && _secret$card.data && secret.card.data[0] && (_secret$card$data$ = secret.card.data[0]) !== null && _secret$card$data$ !== void 0 && _secret$card$data$.card && (_secret$card$data$2 = secret.card.data[0]) !== null && _secret$card$data$2 !== void 0 && _secret$card$data$2.billing_details) {
      var _secret$card$data$0$c, _secret$card$data$0$c2, _secret$card$data$0$c3;
      if ((_secret$card$data$0$c = secret.card.data[0].card) !== null && _secret$card$data$0$c !== void 0 && _secret$card$data$0$c.last4 && (_secret$card$data$0$c2 = secret.card.data[0].card) !== null && _secret$card$data$0$c2 !== void 0 && _secret$card$data$0$c2.exp_month && (_secret$card$data$0$c3 = secret.card.data[0].card) !== null && _secret$card$data$0$c3 !== void 0 && _secret$card$data$0$c3.exp_year) {
        var convExp = function convExp(exp) {
          try {
            var temp = exp.toString();
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
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props._stripeSecret.adminSecret && props.validCc && !props.useAdmin) {
      // Use admin is off and the stripe secret is for an admin. Turn off stripe secret. Reset
      setValidCc(false);
      props._setStripeSecret(false);
    } else if (props.useAdmin && props !== null && props !== void 0 && props._stripeSecret && !props._stripeSecret.adminSecret) {
      // Use admin is true but stripe secret does not have adminSecret flag. Turn off stripe secret. Reset
      setValidCc(false);
      props._setStripeSecret(false);
    }
  }, [props === null || props === void 0 ? void 0 : props._stripeSecret, props === null || props === void 0 ? void 0 : props.useAdmin, props === null || props === void 0 ? void 0 : props.validCc]);
  var handleRegisterNewCard = _react["default"].useCallback(function (e) {
    if (registerNewCard) {
      setRegisterNewCard(false);
      return 1;
    }
    setRegisterNewCard(true);
  });
  console.log('CC', solution, props._stripeSecret);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className),
    style: props.sx
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), props.useAdmin ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#353535'
    }
  }, "Payments to Tycoon Systems Corp.") : null, !props.stagger || props.stagger && stagger ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (solution === null || solution === void 0 ? void 0 : solution.payment) === 'stripe' ? validCc && !registerNewCard ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_CreditCard_Container",
    style: {
      padding: '.125rem'
    }
  }, props.purchaseDescription ? /*#__PURE__*/_react["default"].createElement("span", null, props.purchaseDescription) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_CreditCard_Container_Meta"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginBottom: .1 + "rem",
      paddingBottom: 0 + "rem",
      margin: 0
    }
  }, "Ending in ", /*#__PURE__*/_react["default"].createElement("span", null, validCc.last4)), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginBottom: .1 + "rem",
      paddingBottom: 0 + "rem",
      margin: 0
    }
  }, "Expiry ", /*#__PURE__*/_react["default"].createElement("span", null, validCc.exp_month, " / ", validCc.exp_year))), validCc.name ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginTop: 0,
      margin: 0
    }
  }, validCc.name) : null))) : props._stripeSecret && props._stripeSecret.client_secret ? /*#__PURE__*/_react["default"].createElement(_reactStripeJs.Elements, {
    stripe: stripePromise,
    options: {
      clientSecret: props._stripeSecret.client_secret
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactStripeJs.ElementsConsumer, null, function (_ref2) {
    var elements = _ref2.elements,
      stripe = _ref2.stripe;
    return /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: function onSubmit(e) {
        handleSaveBillingInfo(e, elements, stripe, nameOnCard);
      },
      style: {
        display: 'grid',
        gap: '.125rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      placeholder: "Full Name on Card",
      ref: nameOnCard
    }), /*#__PURE__*/_react["default"].createElement(_reactStripeJs.CardElement, {
      options: {
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
      }
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "submit"
    }, "Save Billing Info"));
  })) : null : null, (solution === null || solution === void 0 ? void 0 : solution.payment) === 'stripe' ? validCc ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gap: '.125rem',
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleRegisterNewCard
  }, registerNewCard ? 'Use Current Card' : 'Register New Card')) : null : null) : null, props.children);
};
var _default = exports["default"] = Module;