/* Add Middleware Logic Here. Allows addition of properties to global props and any required business logic */
import React from 'react'

const Middleware = pageProps => {
	const [ passProps, setPassProps ] = React.useState({})

    /* Add Middleware Logic Here */
	console.log('TESTTTT')

  	return (
		<div className='Middleware_Container'>
			{/* Your Platform Versioning Here */}
			<div version='0.0.0' business={`${pageProps?.siteTitle ?? pageProps?.dborigin ?? ''}`} style={{ display: 'none' }} domain={pageProps?.domainUrl ?? ''}></div>
			{/* NECESSARY IMPORT. DO NOT REMOVE ATTRIBUTES FROM THIS COMPONENT OR ELSE APP WILL FAIL */}
    		<pageProps._MasterPageComponent {...pageProps} passProps={passProps} />
		</div>
  	)
}

export default Middleware
