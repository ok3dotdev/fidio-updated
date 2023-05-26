import React from 'react'
import '@/styles/globals.css'
import credentials from '../../credentials'
import Head from 'next/head'
import Script from 'next/script'

const resolveDefaultDevAuth = () => {
	if (credentials && credentials.config && credentials.config.development && Object.prototype.hasOwnProperty.call(credentials.config, 'password')) {
		return false
	}
	return true
}

function MyApp({ Component, pageProps }) {
	const [ _loggedIn, _setLoggedIn ] = React.useState(false)
	const [ _stripeSecret, _setStripeSecret ] = React.useState(false)
	const [ _loginError, _setLoginError ] = React.useState(false)
	const [ _pageError, _setPageError ] = React.useState(null)
	const [ devAuth, setDevAuth ] = React.useState(resolveDefaultDevAuth())

	React.useEffect(() => {
        const muteLoginErr = () => {
            _setLoginError(false)
        }
		console.log(_loggedIn)
        document.addEventListener("mute-login-error", muteLoginErr, { once: true });
    }, [])

	console.log(pageProps)

  	const resolveDev = () => {
		try {
			if (credentials && credentials.config && credentials.config.development && credentials.config.password) {
				if (!localStorage.getItem('dev_auth')) {
					return false
				} else if (localStorage.getItem('dev_auth')) {
					const auth = localStorage.getItem('dev_auth')
					if (auth !== credentials.config.password) {
						return false
					}
				}
			}
			return true
		} catch (err) {
			return false // silent
		}
	}

	const setDevPw = e => {
		try {
			if (e.code == 'Enter') {
				if (e.target.value == credentials.config.password) {
					localStorage.setItem('dev_auth', e.target.value)
					setDevAuth(true)
				}
			}
		} catch (err) {
			// silent
		}
	}
	
	React.useEffect(() => {
		const d = resolveDev()
		if (d !== devAuth) {
			setDevAuth(d)
		}
	}, [ devAuth ])
  
	pageProps._loggedIn = _loggedIn
	pageProps._setLoggedIn = _setLoggedIn
	pageProps._stripeSecret = _stripeSecret
	pageProps._setStripeSecret = _setStripeSecret
	pageProps._loginError = _loginError
	pageProps._setLoginError = _setLoginError
	pageProps._pageError = _pageError
	pageProps._setPageError = _setPageError
	return (<React.Fragment>
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
		</div>
		{
			!devAuth
			? <main style={{ height: '100vh', margin: '0 auto', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<div>
					<div>You are not authorized</div>
					<input type='text' onKeyDown={setDevPw}></input>
				</div>
			</main>
			: null
		}
		<Component {...pageProps} hiddenDev={devAuth} />
	</React.Fragment>)
}

export default MyApp
