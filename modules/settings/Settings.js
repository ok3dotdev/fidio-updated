function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Styles from './Settings.module.scss';
import { CreditCard } from '../payment';
import { v4 as uuidv4 } from 'uuid';
import Close from '@mui/icons-material/Close';
import { checkSignedIn, requestSettingsUpdate } from '../utility/onboarding';
import { getOrders } from '../utility/utility/orders';
import { Order } from '../ecommerce/receipt';
const Module = props => {
  var _span;
  const router = useRouter();
  const {
    query,
    asPath
  } = router;
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [pageError, setPageError] = React.useState(null);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [editedInputs, setEditedInputs] = React.useState({});
  const [editingUsername, setEditingUsername] = React.useState(false);
  const [resolvedOrders, setResolvedOrders] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const settingsConfig = props?.settingsConfig ?? {};
  React.useEffect(() => {
    if (!componentDidMount) {
      if (query?.t) {
        const f = settingsConfig.tabs.findIndex(m => {
          console.log(m.label.toLowerCase(), query.t);
          if (m?.label.toLowerCase() === query?.t) {
            return true;
          }
          return false;
        });
        if (f > -1) {
          setCurrentTab(f);
        }
      }
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount, currentTab]);
  React.useEffect(() => {
    if (!resolvedOrders && settingsConfig?.tabs && settingsConfig?.tabs[currentTab] && settingsConfig.tabs[currentTab]?.items && !fetchBusy && props._loggedIn) {
      const indexOfOrders = settingsConfig.tabs[currentTab].items.findIndex(m => m.type && m.type === 'orders');
      if (indexOfOrders > -1) {
        const f = async () => {
          const user = checkSignedIn();
          const userOrders = await getOrders(props.apiUrl, props.domainKey, user, 'creation', 'desc', 0, 50);
          if (userOrders?.data) {
            setResolvedOrders({
              received: new Date().getTime(),
              orders: userOrders.data
            });
          } else {
            setResolvedOrders({});
          }
        };
        f();
      }
    }
  }, [resolvedOrders, settingsConfig?.tab, currentTab, fetchBusy]);
  const handleChange = e => {
    const modif = e?.currentTarget.getAttribute('modif');
    if (modif) {
      setEditedInputs({
        ...editedInputs,
        [modif]: true
      });
    }
  };
  const saveChange = async e => {
    const modif = e?.currentTarget.getAttribute('modif');
    if (modif) {
      let res;
      setPageError(null);
      if (modif === 'username') {
        console.log(e);
        const proposed = document.getElementById(`Settings_${componentId}_Username_Input`)?.value;
        console.log(proposed);
        if (proposed) {
          res = await requestSettingsUpdate(props.apiUrl, props.domainKey, {
            username: proposed
          }, props, setFetchBusy, fetchBusy);
        }
        handleChangeUsername();
      } else if (modif === 'firstName' || modif === 'lastName') {
        const proposed = {
          firstName: document.getElementById(`Settings_${componentId}_firstName_Input`)?.value ?? props?._loggedIn?.meta?.firstName,
          lastName: document.getElementById(`Settings_${componentId}_lastName_Input`)?.value ?? props?._loggedIn?.meta?.lastName
        };
        if (proposed) {
          res = await requestSettingsUpdate(props.apiUrl, props.domainKey, {
            fullName: proposed
          }, props, setFetchBusy, fetchBusy);
          setEditedInputs({
            ...editedInputs,
            firstName: false
          });
          setEditedInputs({
            ...editedInputs,
            lastName: false
          });
        }
      } else if (modif === 'keepSubscriptionsPrivate') {
        if (document.getElementById(`Settings_${componentId}_keepSubscriptionsPrivate_Input`)) {
          const proposed = document.getElementById(`Settings_${componentId}_keepSubscriptionsPrivate_Input`)?.checked;
          res = await requestSettingsUpdate(props.apiUrl, props.domainKey, {
            keepSubscriptionsPrivate: proposed
          }, props, setFetchBusy, fetchBusy);
        }
      }
      if (res?.status !== 'success' && res.message) {
        setPageError(res.message);
      }
      setEditedInputs({
        ...editedInputs,
        [modif]: false
      });
    }
  };
  const handleChangeUsername = () => {
    if (editingUsername) {
      setEditingUsername(false);
      return;
    }
    setEditingUsername(true);
    return;
  };
  const handleCloseError = () => {
    setPageError(null);
  };
  const cancelCloseAccount = () => {
    setEditedInputs({
      ...editedInputs,
      closeAccount: false
    });
  };
  const resolveOrderImg = m => {
    if (m && props?.cdn?.static) {
      if (m?.product?.images?.length > 0) {
        const useImg = m.product.images.find(n => n.leadImg ?? false);
        if (useImg) {
          return `${props.cdn.static}/${useImg.name}`;
        }
        return `${props.cdn.static}/${m.product.images[0].name}`;
      }
    }
    return '';
  };
  const resolvedCountry = props?.regionsData && props?._loggedIn?.meta?.locationMeta?.country && props.regionsData[props._loggedIn.meta.locationMeta.country] && props.regionsData[props._loggedIn.meta.locationMeta.country].name ? props.regionsData[props._loggedIn.meta.locationMeta.country].name : props?._loggedIn?.meta?.locationMeta?.country ?? null;
  console.log(editedInputs, currentTab, resolvedOrders);
  const resolveCurrentItem = itemType => {
    if (itemType === 'firstNameLastName') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: `${Styles.FirstName_LastName_Container}`
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, props?._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
        className: `${Styles.label}`
      }, "First Name"), !editedInputs['firstName'] ? /*#__PURE__*/React.createElement("div", {
        className: `${Styles.hoverHighlight}`,
        modif: "firstName",
        onClick: handleChange
      }, props?._loggedIn?.meta?.firstName && props?._loggedIn?.meta?.firstName !== '' ? props._loggedIn.meta.firstName : props?._loggedIn ? 'Add First Name' : '') : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "First Name",
        className: `${Styles.input}`,
        id: `Settings_${componentId}_firstName_Input`
      }), /*#__PURE__*/React.createElement("button", {
        className: `${Styles.Save_Button}`,
        modif: 'firstName',
        onClick: saveChange
      }, "Save"))) : null), /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, props?._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
        className: `${Styles.label}`
      }, "Last Name"), !editedInputs['lastName'] ? /*#__PURE__*/React.createElement("div", {
        className: `${Styles.hoverHighlight}`,
        modif: "lastName",
        onClick: handleChange
      }, props?._loggedIn?.meta?.lastName && props?._loggedIn?.meta?.lastName !== '' ? props._loggedIn.meta.lastName : props?._loggedIn ? 'Add Last Name' : '') : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Last Name",
        className: `${Styles.input}`,
        id: `Settings_${componentId}_lastName_Input`
      }), /*#__PURE__*/React.createElement("button", {
        className: `${Styles.Save_Button}`,
        modif: 'lastName',
        onClick: saveChange
      }, "Save"))) : null)));
    } else if (itemType === 'username') {
      return /*#__PURE__*/React.createElement("div", null, props?._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
        className: `${Styles.label} ${Styles.fullWidth}`
      }, "Username"), editingUsername ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: `${Styles.ItemsFlex}`
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Username",
        className: `${Styles.input}`,
        modif: 'username',
        id: `Settings_${componentId}_Username_Input`,
        onChange: handleChange
      }), /*#__PURE__*/React.createElement(Close, {
        className: `${Styles.Close}`,
        onClick: handleChangeUsername
      })), editedInputs['username'] ? /*#__PURE__*/React.createElement("button", {
        className: `${Styles.Save_Button}`,
        modif: 'username',
        onClick: saveChange
      }, "Save") : null) : /*#__PURE__*/React.createElement("div", {
        className: `${Styles.ItemsFlex}`
      }, /*#__PURE__*/React.createElement("div", null, props?._loggedIn?.username ?? null), /*#__PURE__*/React.createElement("button", {
        className: `${Styles.LowProfileButton}`,
        onClick: handleChangeUsername
      }, "Get New Username"))) : null);
    } else if (itemType === 'handleCreditCard') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
        className: `${Styles.label} ${Styles.fullWidth}`
      }, "Payment"), /*#__PURE__*/React.createElement(CreditCard, props));
    } else if (itemType === 'location') {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: `${Styles.Read_Only_Label}`
      }, "Location"), /*#__PURE__*/React.createElement("div", {
        className: `${Styles.Read_Only_Field}`
      }, /*#__PURE__*/React.createElement("span", null, props?._loggedIn?.meta?.locationMeta?.city ?? null), /*#__PURE__*/React.createElement("span", null, resolvedCountry ? ', ' : null), _span || (_span = /*#__PURE__*/React.createElement("span", null, resolvedCountry))));
    } else if (itemType === 'keepSubscriptionsPrivate') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: `${Styles.Settings_Checkbox_Container}`
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        name: "keepSubscriptionsPrivate",
        className: `${Styles.Settings_Checkbox}`,
        id: `Settings_${componentId}_keepSubscriptionsPrivate_Input`,
        modif: 'keepSubscriptionsPrivate',
        onChange: saveChange,
        defaultChecked: props?._loggedIn?.meta?.keepSubscriptionsPrivate
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "keepSubscriptionsPrivate",
        className: `${Styles.Checkbox_Label}`
      }, "Keep Subscriptions Private")));
    } else if (itemType === 'closeAccount') {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: `${Styles.Close_Account_Button_Container}`
      }, !editedInputs['closeAccount'] ? /*#__PURE__*/React.createElement("button", {
        className: `${Styles.Warning_Button}`,
        modif: 'closeAccount',
        onClick: handleChange
      }, "Close Account") : /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          marginTop: '1rem'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: '600'
        }
      }, "Are you sure you want to close your ", props?.siteTitle, " account?"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '.8rem',
          marginTop: '.5rem'
        }
      }, "This action is not reversible. All your data will be deleted and forgotten."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: '10rem',
          marginTop: '1rem'
        }
      }, /*#__PURE__*/React.createElement("button", {
        className: `${Styles.Save_Button}`,
        style: {
          fontWeight: '600'
        }
      }, "Yes"), /*#__PURE__*/React.createElement("button", {
        className: `${Styles.Save_Button}`,
        onClick: cancelCloseAccount,
        style: {
          fontWeight: '600'
        }
      }, "No")))));
    } else if (itemType === 'orders') {
      return /*#__PURE__*/React.createElement("div", null, props?._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
        className: `${Styles.label} ${Styles.fullWidth}`
      }, "Orders"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }
      }, resolvedOrders?.orders?.map ? resolvedOrders.orders.map((m, i) => /*#__PURE__*/React.createElement(Order, _extends({
        order: m
      }, props))) : null)) : null);
    } else {
      return /*#__PURE__*/React.createElement("div", null, itemType);
    }
  };
  const handleSetTab = React.useCallback(e => {
    const modif = e?.currentTarget?.getAttribute('modif');
    if (modif) {
      setCurrentTab(settingsConfig.tabs.findIndex(m => m.label === modif));
    }
  });
  const resolveInitials = props?._loggedIn?.meta?.firstName && props?._loggedIn?.meta?.lastName && props._loggedIn.meta.firstName.length > 0 && props._loggedIn.meta.lastName.length > 0 ? props._loggedIn.meta.firstName.charAt(0) + props._loggedIn.meta.lastName.charAt(0) : 'AV';
  console.log('Curr', currentTab, settingsConfig.tabs, props);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`
  }), /*#__PURE__*/React.createElement("div", {
    className: `${Styles.Settings_Container}`,
    style: {
      margin: '0 auto',
      width: '70vw',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.Settings_InternalContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.Settings_Menu}`
  }, settingsConfig?.tabs ? settingsConfig.tabs.map(tab => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.tab} ${settingsConfig?.tabs && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab].label === tab?.label ? Styles.currentTab : ''}`,
    onClick: handleSetTab,
    modif: tab?.label
  }, tab?.label ?? ''))) : null), /*#__PURE__*/React.createElement("div", {
    className: `${Styles.Settings_Data}`
  }, settingsConfig?.tabs && settingsConfig?.tabs[currentTab]?.avatar ? /*#__PURE__*/React.createElement("div", {
    className: `${Styles.Settings_Profile_Picture}`,
    style: {
      background: `url(${props?._loggedIn?.icon ?? null})`,
      backgroundSize: 'contain'
    }
  }, !props?._loggedIn?.icon ? /*#__PURE__*/React.createElement("span", {
    className: `${Styles.Avatar_Placeholder_Text}`
  }, resolveInitials) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.settingsItemContainer}`
  }, pageError ? /*#__PURE__*/React.createElement("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, pageError) : null, settingsConfig?.tabs && currentTab !== null && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab]?.items && Array.isArray(settingsConfig.tabs[currentTab]?.items) ? settingsConfig.tabs[currentTab].items.map(item => {
    const avatar = settingsConfig.tabs[currentTab].avatar;
    return /*#__PURE__*/React.createElement("div", {
      key: item.type
    }, resolveCurrentItem(item.type));
  }) : null)))));
};
export default Module;