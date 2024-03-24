/* AVOID EDITING THIS FILE. DEFAULT APPLICATION ENTRY. MANIPULATE customModules/middleware/Middleware.js FILE FOR MIDDLEWARE LOGIC. If files missing run node init_app.js */

import React from 'react'
import '../styles/globals.scss' // Place style import declarations in /styles/styles.scss and actual style css files under /styles/appstyles/
import { Internal } from '/modules/internal/'


function MyApp({ Component, pageProps }) {
  	return (
		<div>
    		<Internal {...pageProps} _MasterPageComponent={Component} /> {/* Application Start */}
		</div>
  	)
}

export default MyApp
