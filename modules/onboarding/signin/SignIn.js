import React from 'react';
import { useRouter } from 'next/router';
import { checkSignedIn, attemptThirdPartySignIn } from '../../utility/onboarding/SignIn';
import { setStripeSecretData } from '../../utility/payment/index';
import { fetchPost } from '../../utility/fetch';
// import RegisterUsername from './RegisterUsername.js'

const Module = props => {
  const router = useRouter();
  const {
    query,
    asPath
  } = router;
  let googleSignIn = React.useRef();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [didCheckAdminAuth, setDidCheckAdminAuth] = React.useState(false);
  let [registerUsernameOn, setRegisterUsernameOn] = React.useState(false);
  let [googleSignInRendered, googleSignInRenderedSet] = React.useState(false);
  let [hideGoogleSignIn, setHideGoogleSignIn] = React.useState(false);
  let [pageError, setPageError] = React.useState(null);
  React.useEffect(() => {
    setComponentDidMount(true);
  }, [componentDidMount]);
  props._LocalEventEmitter.unsubscribe('showSignIn');
  props._LocalEventEmitter.subscribe('showSignIn', e => {
    setHideGoogleSignIn(false);
    buildButtonAndTryPrompt(500);
  });
  props._LocalEventEmitter.unsubscribe('checkAdminAuth');
  props._LocalEventEmitter.subscribe('checkAdminAuth', e => {
    handleGetAdminAuth(true);
  });
  React.useEffect(() => {
    const muteLoginErr = () => {
      setPageError(null);
    };
    document.addEventListener('mute-login-error', muteLoginErr, {
      once: true
    });
  }, []);
  const buildLoginAndUpdate = async data => {
    let status = await attemptThirdPartySignIn(data, props.apiUrl, props.domainKey, props._LocalEventEmitter, props._setAdminAuth);
    if (status && status.hasOwnProperty('username')) {
      if (!status.username) {
        setRegisterUsernameOn(true);
      }
    }
    console.log(status);
    if (typeof status !== 'error') {
      setStripeSecretData(props.apiUrl, props.domainKey, status, props._setStripeSecret);
      props._setLoggedIn(status);
      console.log(props.redirectOnAuth, status.username);
      if (asPath === '/admin') {
        setTimeout(() => {
          props._LocalEventEmitter.dispatch('checkAdminAuth', {});
        }, 1000);
      }
      if (props.redirectOnAuth && status.username && asPath !== props.redirectOnAuth) {
        router.push(props.redirectOnAuth);
      } else if (props.redirectOnAuth && status.username && asPath === props.redirectOnAuth) {
        router.reload(props.redirectOnAuth);
      }
      setTimeout(() => {
        setPageError(null);
      }, 20000);
      setTimeout(() => {
        setHideGoogleSignIn(true);
      });
    }
  };
  const buildButtonAndTryPrompt = delay => {
    try {
      if (!googleSignInRendered) {
        const googleBtn = {
          theme: 'outline',
          size: 'medium',
          logo_alignment: 'center'
        };
        setTimeout(() => {
          try {
            let signInStatus = checkSignedIn();
            if (!signInStatus) {
              google.accounts.id.renderButton(googleSignIn.current, googleBtn);
              googleSignInRenderedSet(true);
              google.accounts.id.prompt(notification => {
                console.log('on prompt notification', notification);
              });
            } else {
              props._setLoggedIn(signInStatus);
            }
          } catch (err) {
            setTimeout(() => {
              try {
                let signInStatus = checkSignedIn();
                if (!signInStatus) {
                  // @ts-ignore
                  google.accounts.id.renderButton(googleSignIn.current, googleBtn);
                  googleSignInRenderedSet(true);
                  // @ts-ignore
                  google.accounts.id.prompt(notification => {
                    console.log('on prompt notification', notification);
                  });
                } else {
                  props._setLoggedIn(signInStatus);
                }
              } catch (err) {
                console.log(err); // fail silently
              }
            }, 10000);
          }
        }, delay);
      }
    } catch (err) {
      console.log(err); // fail silently
    }
  };

  // Register google sign in button. Necessary for register CC and login
  React.useEffect(() => {
    document.removeEventListener('thirdparty-signin', buildLoginAndUpdate); // Without this a request for Sign in can fire multiple times
    document.addEventListener('thirdparty-signin', buildLoginAndUpdate);
    buildButtonAndTryPrompt(500);
  }, []);
  const getAdminAuth = async (uri, identifier, hash, domainKey) => {
    if (identifier) {
      let res = await fetchPost(uri + '/m/checkadminauth', null, null, {
        identifier: identifier,
        hash: hash,
        domainKey: domainKey
      });
      if (!res) {
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == "disauthenticated") {
          logout();
          return "disauthenticated";
        } else if (res.status == "failed") {
          return false;
        } else if (res.status == "success") {
          return res;
        }
      }
    }
  };

  /**
   * Handles check to see if user is admin
   * @param {*} force 
   */
  const handleGetAdminAuth = async force => {
    if (props?.path.match(/\/admin/) && !didCheckAdminAuth || force) {
      console.log(props);
      if (props?._loggedIn?.identifier && props?._loggedIn?.hash && props?.domainKey && !props._adminAuth && props?._setAdminAuth) {
        setDidCheckAdminAuth(true);
        const res = await getAdminAuth(props.apiUrl, props._loggedIn.identifier, props._loggedIn.hash, props.domainKey);
        if (res?.admin) {
          props._setAdminAuth(res.admin);
        }
      }
    }
  };
  React.useEffect(() => {
    if (props?._loggedIn?.identifier && props?._adminAuth?.userid && props._loggedIn.identifier !== props._adminAuth.userid) {
      props._setAdminAuth(null);
    }
  }, [props._loggedIn, props._adminAuth]);
  handleGetAdminAuth();
  const checkGoogleSignInIsLoaded = () => {
    try {
      const container = document.getElementsByClassName('google-sign-in-btn');
      if (container && container[0]) {
        if (container[0].children.length > 0) {
          if (container[0].children[0]) {
            console.log(container[0].children[0]);
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      // fail silently
      return false;
    }
  };
  const googleSignInIsLoaded = checkGoogleSignInIsLoaded();
  return <div className={`${props.classNameAlways} ${props._loggedIn || !googleSignInIsLoaded ? '' : props.className}`}> {/* Do not show styles if Sign In hidden */}
            {/* <RegisterUsername registerUsernameOn={registerUsernameOn} setRegisterUsernameOn={setRegisterUsernameOn}></RegisterUsername> */}
            <div className={hideGoogleSignIn || !googleSignInIsLoaded ? `display-none` : null} style={{
      maxWidth: props.maxWidth ?? '170px'
    }}>
                <div className={googleSignInRendered ? `googleSignInContainer googleSignInContainer-padding` : `googleSignInContainer`}>
                    <div className="g_id_signin google-sign-in-btn" ref={googleSignIn} data-size="medium" data-logo_alignment="center" data-theme="outline"></div>
                </div>
            </div>
            {pageError ? <div style={{
      paddingLeft: 1 + 'rem',
      paddingRight: 1 + 'rem'
    }}>
                        <p className={`googleSignInPromptSmall error errorBg`}>{pageError}</p> 
                    </div> : null}
        </div>;
};
export default Module;