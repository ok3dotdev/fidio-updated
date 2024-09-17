const devIndex=[{lead:"Dropdown Menu",text:`You can change the contents of the Dropdown Menu under layout/DropMenu. If the file is not there start by running node init_app.js
        
The easiest way to manipulate the order of the dropdown menu is using the JSX in this file.`,code:`import { Account, GoLive, Help, Feedback } from '../modules/menu/parts'
import { Username } from '../modules/onboarding/signin'

        
const Module = props => {
    return (
        <React.Fragment>
            {
                props._loggedIn
                    ? <Account { ...props } />
                    <Username { ...props } />
                    <GoLive { ...props } />
                    <Help { ...props } />
                    <Feedback { ...props } />
                    : null
            }
        </React.Fragment>
    )
}
`,response:null,pinned:!0,meta:"menu dropdown layout initialize init"},{lead:"Turn Off Lead Menu",text:"Shut off the main menu by setting a property of useMenu to false on the page.props in the app.config.js file or commenting it out in the page file under pages",code:`const resolveConfig = (variables, props) => {
    return {
        platform: {
            pages: [
                {
                    url: '/p',
                    data: {
                        type: 'div',
                        props: { useMenu: false, className: 'lead-background' },
                        ...
`,response:null,pinned:!0,meta:"useMenu hide main menu layout property props app.config.js app resolveConfig"},{lead:"Import Styles",text:`You can import your own styles in the styles/styles.scss file. If there is no styles.scss file under styles make sure to run node init_app.js. This will create that file. 
        
You can place your actual stylesheets in the appstyles folder under styles. Then you will want to import those styles in the styles.scss. This is the recommended method for applying global styles to the application`,code:`.borderLarge {
    border: 4px dotted grey;
}

@import "appstyles/business.scss";
@import "appstyles/marketing.scss";
`,response:null,pinned:!0,meta:"styles appstyles folder application global file import classes graphics design"},{lead:"Turn Off App Config Layout",text:`Shut off the App Config Layout by setting a property of useAppConfigLayout to false on the page.props in the app.config.js file or commenting it out in the page file under pages.
        
This will disable all internal children under <AppConfigLayout /> so please be careful`,code:`const resolveConfig = (variables, props) => {
    return {
        platform: {
            pages: [
                {
                    url: '/p',
                    data: {
                        type: 'div',
                        props: { useAppConfigLayout: false, className: 'lead-background' },
                        ...
`,response:null,pinned:!0,meta:"useAppConfigLayout app config layout hide application property props app.config.js resolveConfig config"}];export default devIndex;