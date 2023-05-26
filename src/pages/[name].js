import React from 'react'
import resolveConfig, { resolveVariables } from '/app.config'
import { generateComponent, resolvePage } from '@modules/utility.js'

const config = resolveConfig(resolveVariables())
const resolvedPage = resolvePage(config)
let resolvedDefinition = resolvedPage && resolvedPage.data // Access the `data` property

export const page = props => {
    const config = resolveConfig(resolveVariables(), props)
    const resolvedPage = resolvePage(config, props.path)
    resolvedDefinition = resolvedPage && resolvedPage.data // Access the `data` property
    if (!resolvedDefinition) {
        return null // Handle the case when the resolvedDefinition is not available
    }
    
    console.log(resolvedDefinition)
    const components = generateComponent(resolvedDefinition)  	
  	
	return (
		<div>
			<div>{components}</div>
		</div>
	)
}

page.getInitialProps = async (ctx) => {
    // Access the request object from the context
    const { req } = ctx
  
    // Get the URL from the request object
    const url = req && req.url
    return {
        path: url
    }
}

export default page