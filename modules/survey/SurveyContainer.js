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
  return <React.Fragment>
            <div className={`Misc_Container Misc_Container_Bigger ${props.className} ${props.open || menuOpen && !closing ? 'Misc_Container_Visible' : ''}`} ref={container} style={{
      top: props?.menuConfig?.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
    }}>
                {props.open || menuOpen ? <React.Fragment>
                            <div className={`${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}></div>
                            <div style={{
          position: 'sticky',
          top: '.5rem',
          right: 0,
          zIndex: 10
        }}>
                                    <Close className={'Misc_Icon_Button'} style={{
            margin: '0rem 0',
            position: 'absolute',
            right: '.5rem'
          }} onClick={handleClose}></Close>
                                </div>
                            <div>
                                <Survey survey={props?.survey} height={250} close={handleClose} {...props}></Survey>
                            </div>
                        </React.Fragment> : null}
            </div>
        </React.Fragment>;
};
export default Module;