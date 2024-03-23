var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
      return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
        className: `${Styles.FirstName_LastName_Container}`
      }, void 0, /*#__PURE__*/_jsx("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, void 0, props?._loggedIn ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("label", {
        className: `${Styles.label}`
      }, void 0, "First Name"), !editedInputs['firstName'] ? /*#__PURE__*/_jsx("div", {
        className: `${Styles.hoverHighlight}`,
        modif: "firstName",
        onClick: handleChange
      }, void 0, props?._loggedIn?.meta?.firstName && props?._loggedIn?.meta?.firstName !== '' ? props._loggedIn.meta.firstName : props?._loggedIn ? 'Add First Name' : '') : /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("input", {
        type: "text",
        placeholder: "First Name",
        className: `${Styles.input}`,
        id: `Settings_${componentId}_firstName_Input`
      }), /*#__PURE__*/_jsx("button", {
        className: `${Styles.Save_Button}`,
        modif: 'firstName',
        onClick: saveChange
      }, void 0, "Save"))) : null), /*#__PURE__*/_jsx("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, void 0, props?._loggedIn ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("label", {
        className: `${Styles.label}`
      }, void 0, "Last Name"), !editedInputs['lastName'] ? /*#__PURE__*/_jsx("div", {
        className: `${Styles.hoverHighlight}`,
        modif: "lastName",
        onClick: handleChange
      }, void 0, props?._loggedIn?.meta?.lastName && props?._loggedIn?.meta?.lastName !== '' ? props._loggedIn.meta.lastName : props?._loggedIn ? 'Add Last Name' : '') : /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("input", {
        type: "text",
        placeholder: "Last Name",
        className: `${Styles.input}`,
        id: `Settings_${componentId}_lastName_Input`
      }), /*#__PURE__*/_jsx("button", {
        className: `${Styles.Save_Button}`,
        modif: 'lastName',
        onClick: saveChange
      }, void 0, "Save"))) : null)));
    } else if (itemType === 'username') {
      return /*#__PURE__*/_jsx("div", {}, void 0, props?._loggedIn ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("label", {
        className: `${Styles.label} ${Styles.fullWidth}`
      }, void 0, "Username"), editingUsername ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
        className: `${Styles.ItemsFlex}`
      }, void 0, /*#__PURE__*/_jsx("input", {
        type: "text",
        placeholder: "Username",
        className: `${Styles.input}`,
        modif: 'username',
        id: `Settings_${componentId}_Username_Input`,
        onChange: handleChange
      }), /*#__PURE__*/_jsx(Close, {
        className: `${Styles.Close}`,
        onClick: handleChangeUsername
      })), editedInputs['username'] ? /*#__PURE__*/_jsx("button", {
        className: `${Styles.Save_Button}`,
        modif: 'username',
        onClick: saveChange
      }, void 0, "Save") : null) : /*#__PURE__*/_jsx("div", {
        className: `${Styles.ItemsFlex}`
      }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, props?._loggedIn?.username ?? null), /*#__PURE__*/_jsx("button", {
        className: `${Styles.LowProfileButton}`,
        onClick: handleChangeUsername
      }, void 0, "Get New Username"))) : null);
    } else if (itemType === 'handleCreditCard') {
      return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("label", {
        className: `${Styles.label} ${Styles.fullWidth}`
      }, void 0, "Payment"), <CreditCard {...props}></CreditCard>);
    } else if (itemType === 'location') {
      return /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("label", {
        className: `${Styles.Read_Only_Label}`
      }, void 0, "Location"), /*#__PURE__*/_jsx("div", {
        className: `${Styles.Read_Only_Field}`
      }, void 0, /*#__PURE__*/_jsx("span", {}, void 0, props?._loggedIn?.meta?.locationMeta?.city ?? null), /*#__PURE__*/_jsx("span", {}, void 0, resolvedCountry ? ', ' : null), _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, resolvedCountry))));
    } else if (itemType === 'keepSubscriptionsPrivate') {
      return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
        className: `${Styles.Settings_Checkbox_Container}`
      }, void 0, /*#__PURE__*/_jsx("input", {
        type: "checkbox",
        name: "keepSubscriptionsPrivate",
        className: `${Styles.Settings_Checkbox}`,
        id: `Settings_${componentId}_keepSubscriptionsPrivate_Input`,
        modif: 'keepSubscriptionsPrivate',
        onChange: saveChange,
        defaultChecked: props?._loggedIn?.meta?.keepSubscriptionsPrivate
      }), /*#__PURE__*/_jsx("label", {
        htmlFor: "keepSubscriptionsPrivate",
        className: `${Styles.Checkbox_Label}`
      }, void 0, "Keep Subscriptions Private")));
    } else if (itemType === 'closeAccount') {
      return /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
        className: `${Styles.Close_Account_Button_Container}`
      }, void 0, !editedInputs['closeAccount'] ? /*#__PURE__*/_jsx("button", {
        className: `${Styles.Warning_Button}`,
        modif: 'closeAccount',
        onClick: handleChange
      }, void 0, "Close Account") : /*#__PURE__*/_jsx("div", {
        style: {
          textAlign: 'center',
          marginTop: '1rem'
        }
      }, void 0, /*#__PURE__*/_jsx("div", {
        style: {
          fontWeight: '600'
        }
      }, void 0, "Are you sure you want to close your ", props?.siteTitle, " account?"), /*#__PURE__*/_jsx("div", {
        style: {
          fontSize: '.8rem',
          marginTop: '.5rem'
        }
      }, void 0, "This action is not reversible. All your data will be deleted and forgotten."), /*#__PURE__*/_jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: '10rem',
          marginTop: '1rem'
        }
      }, void 0, /*#__PURE__*/_jsx("button", {
        className: `${Styles.Save_Button}`,
        style: {
          fontWeight: '600'
        }
      }, void 0, "Yes"), /*#__PURE__*/_jsx("button", {
        className: `${Styles.Save_Button}`,
        onClick: cancelCloseAccount,
        style: {
          fontWeight: '600'
        }
      }, void 0, "No")))));
    } else if (itemType === 'orders') {
      return /*#__PURE__*/_jsx("div", {}, void 0, props?._loggedIn ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("label", {
        className: `${Styles.label} ${Styles.fullWidth}`
      }, void 0, "Orders"), /*#__PURE__*/_jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }
      }, void 0, resolvedOrders?.orders?.map ? resolvedOrders.orders.map((m, i) => <Order order={m} {...props} />) : null)) : null);
    } else {
      return /*#__PURE__*/_jsx("div", {}, void 0, itemType);
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
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`
  }), /*#__PURE__*/_jsx("div", {
    className: `${Styles.Settings_Container}`,
    style: {
      margin: '0 auto',
      width: '70vw',
      display: 'flex'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.Settings_InternalContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.Settings_Menu}`
  }, void 0, settingsConfig?.tabs ? settingsConfig.tabs.map(tab => /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.tab} ${settingsConfig?.tabs && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab].label === tab?.label ? Styles.currentTab : ''}`,
    onClick: handleSetTab,
    modif: tab?.label
  }, void 0, tab?.label ?? ''))) : null), /*#__PURE__*/_jsx("div", {
    className: `${Styles.Settings_Data}`
  }, void 0, settingsConfig?.tabs && settingsConfig?.tabs[currentTab]?.avatar ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.Settings_Profile_Picture}`,
    style: {
      background: `url(${props?._loggedIn?.icon ?? null})`,
      backgroundSize: 'contain'
    }
  }, void 0, !props?._loggedIn?.icon ? /*#__PURE__*/_jsx("span", {
    className: `${Styles.Avatar_Placeholder_Text}`
  }, void 0, resolveInitials) : null) : null, /*#__PURE__*/_jsx("div", {
    className: `${Styles.settingsItemContainer}`
  }, void 0, pageError ? /*#__PURE__*/_jsx("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, void 0, pageError) : null, settingsConfig?.tabs && currentTab !== null && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab]?.items && Array.isArray(settingsConfig.tabs[currentTab]?.items) ? settingsConfig.tabs[currentTab].items.map(item => {
    const avatar = settingsConfig.tabs[currentTab].avatar;
    return /*#__PURE__*/_jsx("div", {}, item.type, resolveCurrentItem(item.type));
  }) : null)))));
};
export default Module;