#####
## Please Read the following for documentation on all TYCOON SYSTEMS Livestreaming Plaform Modules & Functionality

## Initialization
# Before using this application it is best to fork it to your own repo. We will not maintain any branches on the official TYCOON SYSTEMS repos. Access is provided such that you may take ownership and leverage the platform within your own unique development environment and repo branching.

# To receive new updates always pull from this branch using the following:

git remote add upstream https://github.com/Tycoon-Systems-Corp/video-streaming-client
git remote update

# Use your own branch
git switch -c your-branch-name

git pull upstream
git merge upstream/master

# Necessary implementation of server modules
./extract_modules_dist
npm install
npm run dev

## Application configuration
# Your application must leverage the app.config.js file. This allows for us to store an entire configuration for a website in just one file. You can leverage all the modules of Tycoon without building your own and get your Livestreaming app up and running. You can also use custom modules under /customModules. You will see some examples under app.config.js.dummy
# Your app will not run without an app.config.js file. Start from app.config.js.dummy and copy that into an app.config.js file in root.

## Building with modules
# You can build with modules using normal jsx like so
<Username {...props} prompt='Select your Username' confirm='Confirm' />

# Or you can leverage the app.config.js file to make your platform dynamic. These can be targeted later in the platform CMS using simple matching strings.
# The following would be placed with the resolveConfig function under temporaryComponents > pages > *individual page object* > data > div > children
{ type: 'Username', props: { prompt='Select your Username' confirm='Confirm' className: 'content', ...variables, ...props }}

# You will see an example of above in the app.config.js.dummy file. You can avoid all of this syntax but that means the parts of your platform built without this will not be targetable by the Admin CMS.

# Q

"Why do I need to put {...props} in my modules?"
# If you do not pass all of the props the majority of these modules will not work. For example, the Username component relies on the _loggedIn property which is automatically passed in {...props}

"How do I pass jsx into these modules?"
# Compatible modules will allow for children to be passed into them either using the app.config.js definition or when called directly as jsx. You can achieve this like so in app.config.js:
{
    type: 'SignInPage', props: { className: 'content', backgroundUrl: 'img/internal/index_bg.png' }, redirectOnAuth: '/p', ...variables, ...props }, children: [
        {
            type: 'CustomModule', props: { className: 'content', customModule: 'MyModule', ...variables, ...props }
        }
    ]
}

# You can achieve the same in jsx like so:
<SignInPage {...props} children={(<MyModule></MyModule>)}>

## Custom Modules
# Your custom Module will resolve as long as you put it in index.js under customModules/
# Or if you just pull it directly in your jsx.
# Never manipulate any of the code under modules/ as this controls the underlying functionality of the platform
# Never manipulate any of the styling that is served with the platform. Always override internal styling. The platform is built to provide default styling out of the box. Starting from scratch can be helpful in some situations but ignoring the initial styling is often not the best solution.
# Your index.js file under customModules should look like so:
// entry.js
import MyModule from './features/MyModule'

const Modules = {
    MyModule
}

export default Modules



# Modules in which children do not make sense will not support the following solution. You can hide some default styling for some modules by passing the following prop as a true boolean. This is not recommended and will significantly reduce functionality for specific modules
<ProfilePage hideDefault={true} />

## Classes and styling
# To override styling please place your CSS in a file here src/styles/styles.scss
# Then at the top of the file, import all your other organized styles like so:
@import "custom/mycustomstyles1.css"
@import "custom/mycustomstyles2.css"

# These files should go under src/styles/custom/
# To utilize your styles import the single src/styles/styles.scss file in _app.js

# Most modules have a master element that contains a 'className' variable under className. If you pass a property of 'className' to any usage of these internal modules it will use that as a lead className value for the containing element. This is a simple way to target styling for that module

## Onboarding
# Allow users to sign in on any page using the following
import { SignIn, Username } from 'modules/onboarding/signin'
(<div><SignIn {...props} /><Username {...props} /></div>)

# Logout
import { logout } from '/modules/utility/onboarding/SignIn.js'

const handleLogout = React.useCallback(e => {
    if (props._setLoggedIn && props._LocalEventEmitter) {
        logout(props._setLoggedIn)
        setTimeout(() => {
            props._LocalEventEmitter.dispatch('showSignIn', {})
        }, 4000) // Give time to logout before firing event
    }
})

# You can use custom prompts for Username registration like so:
<Username {...props} prompt='Select your Username' confirm='Confirm' />

## Finance
# Allow users to manage their credit cards by using the Credit Card module
import { CreditCard } from 'modules/payment'
<CreditCard {...props} />

## Cart
# You can use the Cart on any page but it will default to move to the right. By default it functions with the Menu. The Menu component is a useful component that only allows submenus of a specific type to open one at a time. For example, if a user wants to open the settings drop down it will close the cart and vice versa. If you want to override that functionality you can use the cart simply
import { Cart } from 'modules/ecommerce/cart'
<Cart {...props} open={true} passOveride={myOverideFunction} />

# passOveride
# {function}
# You can use the prop 'passOveride' on Cart as a function to fire a function when the Cart is advised to "flash". The cart "flashes" anytime a product is added to cart or the user attempts to Checkout their cart. You should use this if you want to keep the Cart open based on this event as the cart "flash" will only keep cart open for 5-15 seconds. For example, if you had state paired to the open prop you can set that to true if the passOveride function fires to keep the cart

# A Cart implemented normally through the proprietary Menu will stay open after add_to_cart or buy event if property menuOpenAfterCartInteraction with value true is added to predefined.MenuConfig
const predefined = {
    ...
    MenuConfig: {
        menuOpenAfterCartInteraction: true
    }
}

# ccChildren
# {JSX}
# Children that are passed to Credit Card within Cart

## Video poster
# The video page allows for a default poster. This will show in standby stages when the video player is not playing anything. Ensure you have set it by putting a 'videoposter.png' file under public/img/internal/

## Product Interaction
# There is default Product manipulation capabilities supported in the modules and pages shown below:
/p Profile Page <ProfilePage {...props} />

# You can examine product ids in the DOM and use those to fetch them from the server using the FetchHandler. See an example of this in a React component.
import { FetchHandler } from 'modules/utility/fetch'


const Module = props => {
    const [ serverData, setServerData ] = React.useState(null)
    const handlerArgs = [
        {
            productReq: [ '856c144a-b588-4abf-9b93-dc9c2de3b1c0', '29f0c7f1-07c8-46cf-a41b-e3b386e06c64' ] // Product id's in array for request from server
        }
    ]
    const receiveData = data => {
        if (data) {
            setServerData(data)
        }
    }
    return (
        <FetchHandler {...props} handlerName='my_handler' handlerArgs={handlerArgs} receiveData={receiveData} />
    )
}

export default Module

# The above will retrieve the products if they exist. If you want to allow for users to add these items to cart in your own custom logic you can do this besides using Tycoon product modules.
# If you prefer to use the Tycoon product modules please skip ahead
# To start, note the product id, a style sid under 'styles' and an option id under styles > item > option > sid on the retrieved records from server. Use the following syntax to create a button to add items to cart
import { fireGlobalEvent } from 'modules/utility/utility'
...
const handleFireGlobalEvent = React.useCallback(async e => {
    fireGlobalEvent(e, props._LocalEventEmitter) // Dependent on {...props} in this component use
})
...
<button onClick={handleFireGlobalEvent} item={id} selectedstyle={p_style} currentoption={p_option} action='buy'>Buy Now</button>
<button onClick={handleFireGlobalEvent} item={id} selectedstyle={p_style} currentoption={p_option} action='add_to_cart'>Add To Cart</button>

# Using the product object retrieved from the fetch handler you will recieve product name, images, styles, options, quantities, creation date, meta details, whether it is published, if its a ticket, etc. You can paint that on the frontend in any way you choose.

## Feature
# The feature module is a great way to show the current streams happening on the platform. It will run a fuzzy search against the database for the 's' prop that you use for it. If you just want to trust the server aglorithm to retrieve the most relevant then do not pass s prop. This can be used to allow users to see what is currently streaming on the platform quickly. It can be minimized or expanded by the user.
<Feature {...props} s='2tbsp sumalkic set 1 hour' defaultSize='large' stagger={2000}>

# defaultSize
# {String} thin, medium, large

# Stagger
# {Number}

# If you want to hide the toggle button that allows for the user to toggle the size of the Feature Bar you can pass prop hideToggle as true to the Feature component

# The above would run the search against the database with the appropriate records and return the following:
Title: 1tbsp sumoclick 1 hour stream | Author: sumoclick
Title: enter shibuya backstage 1tbsp | Author: xxKmothManSk8Day
Title: test stream tokyo yeah! | Author: 1tbsp

## Terms and Conditions
# You can save your terms and conditions under public/doc/internal as js files with a default export and then pull this in your custom modules. See what an example privacy.js file under /public/doc/internal/ would contain
export default `OUR PRIVACY POLICY...`

## Chat
# If the chat is not successfully scrolling down on new items it may be because of the chat item height. If you have styled the chat records to appear higher or shorter using styles you will have to set the chatItemHeight such that the function for checking scroll threshold uses the appropriate configuration
# In app.config.js ensure that ChatConfig is set under the predefined variable object like so

const predefined = {
    ...
    ChatConfig: {
        chatItemHeight: 17.5 // @param {Number} Set your Chat Item Height here as a number
    }
}

# If the Reply Thread that appears when users click to attempt a reply seems too short or too high change the menuThreadOffset by setting the variable under ChatConfig under predefined
const predefined = {
    ...
    ChatConfig: {
        menuThreadOffset: 2.8 // @param {Number} Set your Menu Thread Offset here as a number
    }
}

# Turn off Reply System by adding replyOff with value tue to ChatConfig under predefined variable object
const predefined = {
    ...
    ChatConfig: {
        replyOff: true // @param {Boolean} Set Reply System off here, on by default if undefined
    }
}

# Under resolveVariables function in the return object add a record "chatConfig" with the value of predefined.ChatConfig