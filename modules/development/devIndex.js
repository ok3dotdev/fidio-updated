"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var devIndex = [{
  lead: 'Dropdown Menu',
  text: "You can change the contents of the Dropdown Menu under layout/DropMenu. If the file is not there start by running node init_app.js\n        \nThe easiest way to manipulate the order of the dropdown menu is using the JSX in this file.",
  code: "import { Account, GoLive, Help, Feedback } from '../modules/menu/parts'\nimport { Username } from '../modules/onboarding/signin'\n\n        \nconst Module = props => {\n    return (\n        <React.Fragment>\n            {\n                props._loggedIn\n                    ? <Account { ...props } />\n                    <Username { ...props } />\n                    <GoLive { ...props } />\n                    <Help { ...props } />\n                    <Feedback { ...props } />\n                    : null\n            }\n        </React.Fragment>\n    )\n}\n",
  response: null,
  pinned: true,
  meta: 'menu dropdown layout initialize init'
}, {
  lead: 'Turn Off Lead Menu',
  text: "Shut off the main menu by setting a property of useMenu to false on the page.props in the app.config.js file or commenting it out in the page file under pages",
  code: "const resolveConfig = (variables, props) => {\n    return {\n        temporaryComponents: {\n            pages: [\n                {\n                    url: '/p',\n                    data: {\n                        type: 'div',\n                        props: { useMenu: false, className: 'lead-background' },\n                        ...\n",
  response: null,
  pinned: true,
  meta: 'useMenu hide main menu layout property props app.config.js app resolveConfig'
}, {
  lead: 'Import Styles',
  text: "You can import your own styles in the styles/styles.scss file. If there is no styles.scss file under styles make sure to run node init_app.js. This will create that file. \n        \nYou can place your actual stylesheets in the appstyles folder under styles. Then you will want to import those styles in the styles.scss. This is the recommended method for applying global styles to the application",
  code: ".borderLarge {\n    border: 4px dotted grey;\n},\n\n@import \"appstyles/business.scss\";\n@import \"appstyles/marketing.scss\";\n",
  response: null,
  pinned: true,
  meta: 'styles appstyles folder application global file import classes graphics design'
}, {
  lead: 'Turn Off App Config Layout',
  text: "Shut off the App Config Layout by setting a property of useAppConfigLayout to false on the page.props in the app.config.js file or commenting it out in the page file under pages.\n        \nThis will disable all internal children under <AppConfigLayout /> so please be careful",
  code: "const resolveConfig = (variables, props) => {\n    return {\n        temporaryComponents: {\n            pages: [\n                {\n                    url: '/p',\n                    data: {\n                        type: 'div',\n                        props: { useAppConfigLayout: false, className: 'lead-background' },\n                        ...\n",
  response: null,
  pinned: true,
  meta: 'useAppConfigLayout app config layout hide application property props app.config.js resolveConfig config'
}];
var _default = exports["default"] = devIndex;