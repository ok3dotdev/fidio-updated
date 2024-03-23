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
      return <React.Fragment>
					<div className={`${Styles.FirstName_LastName_Container}`}>
						<div style={{
            maxWidth: '100%',
            width: '100%'
          }}>
							{props?._loggedIn ? <React.Fragment>
										<label className={`${Styles.label}`}>First Name</label>
										{!editedInputs['firstName'] ? <div className={`${Styles.hoverHighlight}`} modif='firstName' onClick={handleChange}>{props?._loggedIn?.meta?.firstName && props?._loggedIn?.meta?.firstName !== '' ? props._loggedIn.meta.firstName : props?._loggedIn ? 'Add First Name' : ''}</div> : <React.Fragment>
													<input type='text' placeholder='First Name' className={`${Styles.input}`} id={`Settings_${componentId}_firstName_Input`} />
													<button className={`${Styles.Save_Button}`} modif={'firstName'} onClick={saveChange}>Save</button>
												</React.Fragment>}
									</React.Fragment> : null}
						</div>
						<div style={{
            maxWidth: '100%',
            width: '100%'
          }}>
							{props?._loggedIn ? <React.Fragment>
										<label className={`${Styles.label}`}>Last Name</label>
										{!editedInputs['lastName'] ? <div className={`${Styles.hoverHighlight}`} modif='lastName' onClick={handleChange}>{props?._loggedIn?.meta?.lastName && props?._loggedIn?.meta?.lastName !== '' ? props._loggedIn.meta.lastName : props?._loggedIn ? 'Add Last Name' : ''}</div> : <React.Fragment>
													<input type='text' placeholder='Last Name' className={`${Styles.input}`} id={`Settings_${componentId}_lastName_Input`} />
													<button className={`${Styles.Save_Button}`} modif={'lastName'} onClick={saveChange}>Save</button>
												</React.Fragment>}
									</React.Fragment> : null}
						</div>
					</div>
				</React.Fragment>;
    } else if (itemType === 'username') {
      return <div>
					{props?._loggedIn ? <React.Fragment>
							<label className={`${Styles.label} ${Styles.fullWidth}`}>Username</label>
							{editingUsername ? <React.Fragment>
										<div className={`${Styles.ItemsFlex}`}>
											<input type='text' placeholder='Username' className={`${Styles.input}`} modif={'username'} id={`Settings_${componentId}_Username_Input`} onChange={handleChange} />
											<Close className={`${Styles.Close}`} onClick={handleChangeUsername}></Close>
										</div>
										{editedInputs['username'] ? <button className={`${Styles.Save_Button}`} modif={'username'} onClick={saveChange}>Save</button> : null}
									</React.Fragment> : <div className={`${Styles.ItemsFlex}`}>
										<div>{props?._loggedIn?.username ?? null}</div>
										<button className={`${Styles.LowProfileButton}`} onClick={handleChangeUsername}>Get New Username</button>
									</div>}
							</React.Fragment> : null}
				</div>;
    } else if (itemType === 'handleCreditCard') {
      return <React.Fragment>
					<label className={`${Styles.label} ${Styles.fullWidth}`}>Payment</label>
					<CreditCard {...props}></CreditCard>
				</React.Fragment>;
    } else if (itemType === 'location') {
      return <div>
					<label className={`${Styles.Read_Only_Label}`}>Location</label>
					<div className={`${Styles.Read_Only_Field}`}>
                        <span>{props?._loggedIn?.meta?.locationMeta?.city ?? null}</span><span>{resolvedCountry ? ', ' : null}</span>
						{_span || (_span = <span>{resolvedCountry}</span>)}
					</div>
				</div>;
    } else if (itemType === 'keepSubscriptionsPrivate') {
      return <React.Fragment>
					<div className={`${Styles.Settings_Checkbox_Container}`}>
						<input type='checkbox' name='keepSubscriptionsPrivate' className={`${Styles.Settings_Checkbox}`} id={`Settings_${componentId}_keepSubscriptionsPrivate_Input`} modif={'keepSubscriptionsPrivate'} onChange={saveChange} defaultChecked={props?._loggedIn?.meta?.keepSubscriptionsPrivate} />
						<label htmlFor='keepSubscriptionsPrivate' className={`${Styles.Checkbox_Label}`}>Keep Subscriptions Private</label>
					</div>
				</React.Fragment>;
    } else if (itemType === 'closeAccount') {
      return <div>
					<div className={`${Styles.Close_Account_Button_Container}`}>
						{!editedInputs['closeAccount'] ? <button className={`${Styles.Warning_Button}`} modif={'closeAccount'} onClick={handleChange}>Close Account</button> : <div style={{
            textAlign: 'center',
            marginTop: '1rem'
          }}>
									<div style={{
              fontWeight: '600'
            }}>Are you sure you want to close your {props?.siteTitle} account?</div>
									<div style={{
              fontSize: '.8rem',
              marginTop: '.5rem'
            }}>This action is not reversible. All your data will be deleted and forgotten.</div>
									<div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10rem',
              marginTop: '1rem'
            }}>
										<button className={`${Styles.Save_Button}`} style={{
                fontWeight: '600'
              }}>Yes</button>
										<button className={`${Styles.Save_Button}`} onClick={cancelCloseAccount} style={{
                fontWeight: '600'
              }}>No</button>
									</div>
								</div>}
					</div>
				</div>;
    } else if (itemType === 'orders') {
      return <div>
					{props?._loggedIn ? <React.Fragment>
								<label className={`${Styles.label} ${Styles.fullWidth}`}>Orders</label>
								<div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
									{resolvedOrders?.orders?.map ? resolvedOrders.orders.map((m, i) => <Order order={m} {...props} />) : null}
								</div>
							</React.Fragment> : null}
				</div>;
    } else {
      return <div>{itemType}</div>;
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
  return <React.Fragment>
			<div className={`${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}></div>
			<div className={`${Styles.Settings_Container}`} style={{
      margin: '0 auto',
      width: '70vw',
      display: 'flex'
    }}>
				<div className={`${Styles.Settings_InternalContainer}`}>
					<div className={`${Styles.Settings_Menu}`}>
						{settingsConfig?.tabs ? settingsConfig.tabs.map(tab => <React.Fragment>
										<div className={`${Styles.tab} ${settingsConfig?.tabs && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab].label === tab?.label ? Styles.currentTab : ''}`} onClick={handleSetTab} modif={tab?.label}>{tab?.label ?? ''}</div>
									</React.Fragment>) : null}
					</div>
					<div className={`${Styles.Settings_Data}`}>
						{settingsConfig?.tabs && settingsConfig?.tabs[currentTab]?.avatar ? <div className={`${Styles.Settings_Profile_Picture}`} style={{
            background: `url(${props?._loggedIn?.icon ?? null})`,
            backgroundSize: 'contain'
          }}>
									{!props?._loggedIn?.icon ? <span className={`${Styles.Avatar_Placeholder_Text}`}>{resolveInitials}</span> : null}
									{/* <img src='/img/default/editIcon.svg' alt='Circular edit icon with white pencil in the middle' className={`${Styles.Edit_Icon}`} /> */}
								</div> : null}
						<div className={`${Styles.settingsItemContainer}`}>
							{pageError ? <p className='error' style={{
              marginTop: '.5rem'
            }} onClick={handleCloseError}>{pageError}</p> : null}
							{settingsConfig?.tabs && currentTab !== null && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab]?.items && Array.isArray(settingsConfig.tabs[currentTab]?.items) ? settingsConfig.tabs[currentTab].items.map(item => {
              const avatar = settingsConfig.tabs[currentTab].avatar;
              return <div key={item.type}>
													{resolveCurrentItem(item.type)}
												</div>;
            }) : null}
						</div>
					</div>
				</div>
			</div>	

		</React.Fragment>;
};
export default Module;