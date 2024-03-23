function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useRouter } from 'next/router';
import { Profile } from '/layout';
import ManagerStyles from '../streaming/manager/Manager.module.scss';
const OPEN_PANEL_OFFSET = 1000;
const Module = props => {
  const router = useRouter();
  const {
    query,
    asPath
  } = router;
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [currentLive, setCurrentLive] = React.useState({});
  const [feed, setFeed] = React.useState([]);
  const [combinedFeed, setCombinedFeed] = React.useState([]);
  const [adminPanelState, setAdminPanelState] = React.useState(false);
  const adminPanelContainerRef = React.useRef();
  props._LocalEventEmitter.unsubscribe('profilePage');
  props._LocalEventEmitter.subscribe('profilePage', d => {
    if (d && d.dispatch) {
      if (d.dispatch === 'openAdminPanel') {
        setAdminPanelState(true);
        props._setManagerOpen(true);
        if (d?.menu === 'stream') {
          props._LocalEventEmitter.dispatch('manager', {
            dispatch: 'setMenu',
            menu: 'stream'
          });
        }
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 1500);
      }
    }
  });
  React.useEffect(() => {
    if (!componentDidMount) {
      if (query?.a === 'openbeginstream') {
        setTimeout(() => {
          setAdminPanelState(true);
          props._setManagerOpen(true);
          props._LocalEventEmitter.dispatch('manager', {
            dispatch: 'setMenu',
            menu: 'stream'
          });
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 1500);
        }, OPEN_PANEL_OFFSET);
      } else if (query?.a === 'golive') {
        setTimeout(() => {
          setAdminPanelState(true);
          props._setManagerOpen(true);
          props._LocalEventEmitter.dispatch('manager', {
            dispatch: 'setMenu',
            menu: 'stream'
          });
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 1500);
        }, OPEN_PANEL_OFFSET);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  React.useEffect(() => {
    if (props?.profileData?.currentLive) {
      setCurrentLive(props.profileData.currentLive);
      setCombinedFeed([props.profileData.currentLive].concat(feed));
    } else if (!props?.profileData?.currentLive) {
      console.log('Remove');
      const temp = [...feed];
      const f = temp.findIndex(m => m?.author === props?.profileData?.user?.id && m?.status === 'live');
      console.log(f, temp);
      if (f > -1) {
        temp.splice(f, 1);
      }
      setCurrentLive({});
      setCombinedFeed(temp);
    }
  }, [props.profileData, feed]);
  const adminAuth = props._loggedIn && props._loggedIn.identifier && props.profileData && props.profileData.user && props.profileData.user.id && props._loggedIn.identifier === props.profileData.user.id;
  const toggleAdminPanel = React.useCallback(e => {
    let temp = adminPanelState;
    console.log(temp);
    if (temp) {
      temp = false;
    } else {
      temp = true;
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 1500);
    }
    setAdminPanelState(temp);
    props._setManagerOpen(temp);
  }, [adminPanelState]);

  // Enforce out of step global manager open state
  React.useEffect(() => {
    if (props._managerOpen === false && adminPanelState === true) {
      props._setManagerOpen(true);
    }
  }, [adminPanelState, props._managerOpen]);
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className}`
  }, /*#__PURE__*/React.createElement(Profile, _extends({}, props, {
    adminAuth: adminAuth,
    combinedFeed: combinedFeed,
    adminPanelState: adminPanelState,
    toggleAdminPanel: toggleAdminPanel,
    adminPanelContainerRef: adminPanelContainerRef,
    ManagerStyles: ManagerStyles
  })));
};
export default Module;