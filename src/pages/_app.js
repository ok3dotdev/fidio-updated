/* AVOID EDITING THIS FILE. DEFAULT APPLICATION ENTRY. MANIPULATE customModules/middleware/Middleware.js FILE FOR MIDDLEWARE LOGIC. If files missing run node init_app.js */

import React from 'react'
import '../styles/globals.scss' // Place style import declarations in /styles/styles.scss and actual style css files under /styles/appstyles/
import Head from 'next/head'
import { Internal } from '/modules/internal/'
import { GoogleGsiClient, GoogleSignInRegister } from '../modules/internal/localImports'

function MyApp({ Component, pageProps }) {
  	return (
		<div>
			<Head>
				<meta name="google-signin-client_id" content="169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com"/>
				<title>{pageProps.siteTitle}</title>
			</Head>
			<>
				{ GoogleGsiClient }
				{ GoogleSignInRegister }
			</>
    		<Internal {...pageProps} _MasterPageComponent={Component} /> {/* Application Start */}
		</div>
  	)
}

export default MyApp
