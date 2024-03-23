var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Close from '@mui/icons-material/Close';
import { Survey } from '.';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [pageError, setPageError] = React.useState(null);
  const [tempOveride, setTempOveride] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const container = React.useRef();
  const closeTimeoutRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const mouseOverContainer = () => {
    props._LocalEventEmitter.dispatch(props?.handleName, {
      dispatch: 'mouseOver'
    });
  };
  props._LocalEventEmitter.unsubscribe(props?.handleName);
  props._LocalEventEmitter.subscribe(props?.handleName, e => {
    if (e) {
      console.log('Notification Update', e);
      if (e.dispatch === 'mouseOver') {
        console.log('Did mouse over', props, closing);
        if (props?._openMenu?.currentMenu === props?.handleName) {
          if (!closing && props._toggleSingleOpenMenu) {
            props._toggleSingleOpenMenu(null, props?.handleName, true);
          }
        }
      }
    }
  });
  React.useEffect(() => {
    if ((props?._openMenu?.currentMenu === props?.handleName || tempOveride) && !menuOpen) {
      setMenuOpen(true);
      setClosing(false);
      if (closeTimeoutRef?.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if (props?._openMenu?.currentMenu !== props?.handleName && !tempOveride && menuOpen) {
      // We track open state internally because we want to animate the cart closing as opposed to destroying it immediately
      setClosing(true);
      const r = setTimeout(() => {
        setClosing(false);
        setMenuOpen(false);
        closeTimeoutRef.current = null;
      }, 500);
      closeTimeoutRef.current = r;
    }
  }, [props?._openMenu?.currentMenu, closing, menuOpen, closeTimeoutRef?.current]);
  const handleClose = React.useCallback(e => {
    setClosing(true);
    props._toggleSingleOpenMenu(null, props?.handleName, false);
  });
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, <div className={`Misc_Container Misc_Container_Bigger ${props.className} ${props.open || menuOpen && !closing ? 'Misc_Container_Visible' : ''}`} ref={container} style={{
    top: props?.menuConfig?.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
  }}>
                {props.open || menuOpen ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
      className: `${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`
    }), /*#__PURE__*/_jsx("div", {
      style: {
        position: 'sticky',
        top: '.5rem',
        right: 0,
        zIndex: 10
      }
    }, void 0, /*#__PURE__*/_jsx(Close, {
      className: 'Misc_Icon_Button',
      style: {
        margin: '0rem 0',
        position: 'absolute',
        right: '.5rem'
      },
      onClick: handleClose
    })), /*#__PURE__*/_jsx("div", {}, void 0, <Survey survey={props?.survey} height={250} close={handleClose} {...props}></Survey>)) : null}
            </div>);
};
export default Module;