import React from 'react'
import '../styles/globals.css'
import '../styles/tycoon.scss'
import '../styles/video/videoPlayer.css'
// import 'shaka-player/dist/controls.css'
import '../styles/video/videojs.css'
import '../styles/video/videoPlayerTycoon.css'
import Head from 'next/head'
import Script from 'next/script'
import io from 'socket.io-client'
import { SocketContainer } from '/modules/socket'
import { resolveVariables } from '/app.config'
import { checkSignedIn } from '/modules/utility/onboarding/SignIn'
import { LocalEventEmitter } from '/modules/events/LocalEventEmitter'


function MyApp({ Component, pageProps }) {
	const [ _loggedIn, _setLoggedIn ] = React.useState(false)
	const [ _stripeSecret, _setStripeSecret ] = React.useState(false)
	const [ _loginError, _setLoginError ] = React.useState(false)
	const [ _pageError, _setPageError ] = React.useState(null)

	React.useEffect(() => {
        const muteLoginErr = () => {
            _setLoginError(null)
        }
        document.addEventListener("mute-login-error", muteLoginErr, { once: true })
    }, [])

	React.useEffect(() => {
		if (pageProps._loggedIn) {
			_setLoggedIn(pageProps._loggedIn)
		} else {
			const signedIn = checkSignedIn()
			if (signedIn) {
				_setLoggedIn(signedIn)
			}
		}
	}, [ _loggedIn, pageProps._loggedIn ])

	pageProps._LocalEventEmitter = LocalEventEmitter
	pageProps._loggedIn = _loggedIn
	pageProps._setLoggedIn = _setLoggedIn
	pageProps._stripeSecret = _stripeSecret
	pageProps._setStripeSecret = _setStripeSecret
	pageProps._loginError = _loginError
	pageProps._setLoginError = _setLoginError
	pageProps._pageError = _pageError
	pageProps._setPageError = _setPageError
	pageProps = Object.assign(resolveVariables(), pageProps)

	const socketIoConfig = {
		transports: ["websocket"],
		upgrade: false,
		reconnectAttempts: 1,
		reconnectionDelay: 5000
	}
	if (pageProps.socketpath) {
		socketIoConfig.path = pageProps.socketpath
	}
	const [ socket, setSocket ] = React.useState(null)
	const [ socketTimeout, setSocketTimeout ] = React.useState(null)
	React.useEffect(() => {
		if (!socket && !socketTimeout) {
			setSocket(io(pageProps.apiUrl, socketIoConfig))
			const r = setTimeout(() => {
				setSocketTimeout(null)
			}, 20000)
			setSocketTimeout(r)
		}
	}, [ socket, socketTimeout ])

  	return (
		<div>
			<Head>
				<meta name="google-signin-client_id" content="169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com"/>
				<title>Tycoon Systems</title>
			</Head>
			<>
				<Script src="https://accounts.google.com/gsi/client" async defer></Script>
				<Script strategy="lazyOnload" id='script_one_tap_sign_in' className="lazyOnload">
				{
					`// Register google one tap sign in event to pass data to registration/login function
					const onOneTapSignedInGoogle = data => {
						let event = new CustomEvent("thirdparty-signin", { "detail": data });
						document.dispatchEvent(event);
					}
					const doGoogleInit = (delay = 250) => {
						try {
							google.accounts.id.initialize({
								client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',
								callback: onOneTapSignedInGoogle
							})
							console.log('Google Loaded')
							return true
						} catch (err) {
							// fail silently
							setTimeout(() => {
								doGoogleInit(delay * 2)
							}, delay)
						}
					}
					try {
						let createdScripts = document.getElementsByClassName("lazyOnload");
						if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts
							for (let i = 1; i < createdScripts.length; i++) {
							createdScripts[i].remove();
							}
						}
						doGoogleInit()
					} catch (err) {
						// fail silently
						setTimeout(() => {
							doGoogleInit(500)
						}, 250)
					}
					`
				}
				</Script>
			</>
			<SocketContainer socket={socket} {...pageProps}></SocketContainer>
    		<Component socket={socket} {...pageProps} />
		</div>
  	)
}

export default MyApp
