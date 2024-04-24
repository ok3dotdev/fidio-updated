import resolveConfig, { resolveVariables } from "/app.config"
import { getPropDefaults, resolvePage } from "/modules/utility"

// Valid Server Prop Bundles
// shopProfile, watch, profile, article, event, product

/**
 * Empowers you to get server side props before page load. Use conditionals to determine which pages to run specific requests
 * @param {*} data - Add your items to data.props. Props from previously ran internal get server side props will be passed here
 * @param {*} context - Request context, return this under data.props to examine it
 * @returns 
 */
const getServerSidePropsFunc = async (data, context) => {
    const variables = resolveVariables()
    const config = resolveConfig(variables)
    const resolvedPage = resolvePage(config, context.req.url)
    // You can see the path path in the url at resolvedPage.url to match requests based on url user is on
    // if (resolvedPage && resolvedPage.url === '/shopPage') { // Match for specific page

    // You can make requests for prop defaults from server for CDN or user info, shop info, etc
    // const tempData = await getPropDefaults(data, context, [ 'profile', 'product', 'shopProfile' ], { u: 'username' }) // This runs without any access to state so you must use query params either as an argument as shown here or in the url e.g http://localhost:3000/privacy?u=theusername
    // data.props = Object.assign(data.props, tempData) // Merge data

    // You can just run call and it will attempt to overwrite matching data on props
    // await getPropDefaults(data, context, [ 'profile', 'event', 'watch', 'product', 'shopProfile' ], { u: 'username' })

    // ... You can also add your own data to props by setting it on data object
    // data.props['my_data'] = myData

    // }

    // Now your data will appear in props on any component!
    return data
}

export {
    getServerSidePropsFunc
}