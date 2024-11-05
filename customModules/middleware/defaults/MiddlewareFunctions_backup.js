
  /**
* Paints meta based on incoming object
* @param {Router} router
* @param {Object} items - SEO tag objects
* @param {Object} props
* @returns 
*/
const transformMeta = (router, items, props) => {
    // Manipulate Items here to control your meta strategy.
    // Use router to determine what page you are on.
    // use data in props
    return items
  }
  
  const manualAllowResourceAuth = async (props, asPath, query, user, preAuth, resource) => {
  
    return true
  }
  
  const functions = {
  manualAllowResourceAuth,
  transformMeta
  }
  
  export default functions