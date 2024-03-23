import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import InternalStyles from './Internal.module.scss';
const Module = props => {
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [currentSelected, setCurrentSelected] = React.useState({});
  const [paymentIssues, setPaymentIssues] = React.useState([]);
  const [helpIssues, setHelpIssues] = React.useState([]);
  const [settingsIssues, setSettingsIssues] = React.useState([]);
  const [allIssues, setAllIssues] = React.useState([]);
  React.useEffect(() => {
    if (props.paymentConfig) {
      let issues = [];
      if (props.paymentConfig.keys) {
        if (!props.paymentConfig.keys.stripe) {
          issues.push({
            m: 'Stripe key is not defined. You will not be able to process purchases in regions supported by Stripe https://stripe.com/en-ca/global',
            s: 'Add your Stripe key to the config under paymentConfig.keys.stripe'
          });
        }
        if (!props.paymentConfig.keys.stripe) {
          issues.push({
            m: 'Paystack key is not defined. You will not be able to process purchases in regions supported by Paystack https://paystack.com/countries',
            s: 'Add your Paystack key to the config under paymentConfig.keys.paystack'
          });
        }
      }
      setPaymentIssues(issues);
    } else {
      setPaymentIssues([{
        m: 'Payment Config is not defined. Please set in config file',
        s: 'In order for the payment processor to function properly you must add Payment Configurations to resolveVariables as paymentConfig {Object}'
      }]);
    }
  }, [props?.paymentConfig]);
  React.useEffect(() => {
    if (props.helpIndex) {
      let issues = [];
      if (!Array.isArray(props.helpIndex)) {
        issues.push({
          m: 'The Help Index is not of an Array type. Please ensure that it is of an array type.',
          s: 'Array Item Model: question {String}, answer {String}, a {String}, pinned {Boolean} (optional) Default False. In order for leverage quick FAQ capabilities for your business you must add Help Index to resolveVariables as helpIndex [ ...{Object} ]'
        });
      }
      setHelpIssues(issues);
    } else {
      setHelpIssues([{
        m: 'Help Index is not defined. Please set in config file',
        s: 'In order for leverage quick FAQ capabilities for your business you must add Help Index to resolveVariables as helpIndex [ ...{Object} ]'
      }]);
    }
  }, [props?.helpIndex]);
  React.useEffect(() => {
    if (props.settingsConfig) {
      let issues = [];
      if (!props.settingsConfig.tabs) {
        issues.push({
          m: 'The Settings Config does not have a tabs property. Please ensure that it has a tabs property under settingsConfig.tabs of type Array[ ...{Object} ]. Each tab must have an items Array[ ...{Object} ]. It may have an label {String} and avatar {Boolean}',
          s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object}'
        });
      } else if (!Array.isArray(props.settingsConfig.tabs)) {
        issues.push({
          m: 'The settingsConfig.tabs property is not of an Array type. Please ensure that it is of an array type.',
          s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object} and then create an array at settingsConfig.tabs Array[ ...{Object} ]'
        });
      } else {
        const badItem = props.settingsConfig.tabs.findIndex(m => !m.items ?? false);
        if (badItem > -1) {
          issues.push({
            m: `A tab in the settingsConfig.tabs array does not have an appropriate config. Please ensure that the tab ${badItem} has a property of type Array[ ...{Object} ].`,
            s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object} and then create an array at settingsConfig.tabs Array[ ...{Object} ]'
          });
        }
      }
      setSettingsIssues(issues);
    } else {
      setSettingsIssues([{
        m: 'Settings Config is not defined. Please set in config file',
        s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object}'
      }]);
    }
  }, [props?.settingsConfig]);
  React.useEffect(() => {
    if (props.menuConfig) {
      let issues = [];
      if (!Object.prototype.hasOwnProperty.call(props.menuConfig, 'height')) {
        issues.push({
          m: 'The Menu Config does not have a height property. Setting a height property on your Menu Config will ensure that all floating and static elements load at the correct height such that they do not block the users interaction height {Number}',
          s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
        });
      }
      if (!props.menuConfig.left || props.menuConfig.left && !Array.isArray(props.menuConfig.left)) {
        issues.push({
          m: 'The Menu Config does not have a correctly defined left property. This determines what items are loaded on the left. It must be of type array under props.menuConfig.left Array[ ...{Object} ]',
          s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
        });
      }
      if (!props.menuConfig.right || props.menuConfig.right && !Array.isArray(props.menuConfig.right)) {
        issues.push({
          m: 'The Menu Config does not have a correctly defined right property. This determines what items are loaded on the right. It must be of type array under props.menuConfig.right Array[ ...{Object} ]',
          s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
        });
      }
      setSettingsIssues(issues);
    } else {
      setSettingsIssues([{
        m: 'Menu Config is not defined. Please set in config file',
        s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
      }]);
    }
  }, [props?.menuConfig]);
  React.useEffect(() => {
    setAllIssues([].concat(paymentIssues, settingsIssues, helpIssues));
  }, [paymentIssues, settingsIssues, helpIssues]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, props?.dev && allIssues.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: `${InternalStyles.devContainer} ${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${InternalStyles.devInternalContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.5rem',
      fontSize: '.85rem'
    }
  }, "Developer"), /*#__PURE__*/React.createElement("div", {
    className: `${InternalStyles.devLogContainer}`
  }, allIssues.map(m => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
    title: m.s,
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", null, "* ", m.m))))))) : null);
};
export default Module;