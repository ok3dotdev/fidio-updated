/* Add Middleware Logic Here. Allows addition of properties to global props and any required business logic */
import React from 'react'

const Middleware = pageProps => {
	const [ passProps, setPassProps ] = React.useState({})

    /* Add Middleware Logic Here */

  	return (
		<div className='Middleware_Container'>
			{/* NECESSARY IMPORT. DO NOT REMOVE ATTRIBUTES FROM THIS COMPONENT OR ELSE APP WILL FAIL */}
    		<pageProps._MasterPageComponent {...pageProps} passProps={passProps} />
		</div>
  	)
}

export default Middleware
