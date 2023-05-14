import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import credentials from '../../credentials'

const resolveDefaultDevAuth = () => {
	if (credentials && credentials.config && credentials.config.development && Object.prototype.hasOwnProperty.call(credentials.config, 'password')) {
		return false
	}
	return true
}

export default function App({ Component, pageProps }: AppProps) {
	
	const [ devAuth, setDevAuth ] = React.useState(resolveDefaultDevAuth())

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

	const setDevPw = (e: any) => {
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
  
	return (<React.Fragment>
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
