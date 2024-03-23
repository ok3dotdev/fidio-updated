var _div;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import lunr from '../utility/utility/elasticlunr';
import Styles from '../settings/Settings.module.scss';
import Close from '@mui/icons-material/Close';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [pageError, setPageError] = React.useState(null);
  const [validCc, setValidCc] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const [firstInput, setFirstInput] = React.useState(-1);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [currentResults, setCurrentResults] = React.useState([]);
  const closeTimeoutRef = React.useRef();
  const queryRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  if (componentDidMount) {
    if (lunr && props.helpIndex && !currentIndex) {
      const fullTextSearchIndex = lunr(function () {
        this.ref('id');
        this.field('question');
        this.field('answer');
        this.field('a');
        this.field('meta');
        if (Array.isArray(props.helpIndex)) {
          props.helpIndex.forEach((doc, i) => {
            doc.id = i;
            this.add(doc);
          });
        }
      });
      setCurrentIndex(fullTextSearchIndex);
    }
  }
  React.useEffect(() => {
    if (props?.open) {
      setMenuOpen(true);
      setClosing(true);
      if (closeTimeoutRef?.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if (!props || !props?.open) {
      // We track open state internally because we want to animate the cart closing as opposed to destroying it immediately
      setClosing(true);
      setMenuOpen(false);
      const r = setTimeout(() => {
        setClosing(false);
        if (queryRef?.current) {
          queryRef.current.value = '';
        }
        closeTimeoutRef.current = null;
      }, 1500);
      closeTimeoutRef.current = r;
    }
  }, [closing, menuOpen, props?.open, closeTimeoutRef?.current, queryRef?.current]);
  const handleUpdateSearch = React.useCallback(e => {
    setFirstInput(new Date().getTime());
    const query = e?.currentTarget?.value;
    console.log(query);
    if (query !== null && query !== '' && currentIndex && props.helpIndex) {
      const results = currentIndex.search(query, {
        expand: true
      });
      const useIndex = props.helpIndex.map((doc, i) => {
        doc.id = i;
        return doc;
      });
      console.log(useIndex, results);
      const resultRecords = results.map(result => useIndex.find(doc => doc.id == result.ref)); // Id may or may not be number depending on user definition. Soft comparison
      setCurrentResults(resultRecords);
    } else {
      setPinned();
    }
  });
  const handleClose = React.useCallback(e => {
    if (props?.setHelpOpen) {
      props.setHelpOpen(false);
    }
  });
  const setPinned = () => {
    if (queryRef?.current && props?.helpIndex?.filter) {
      const value = queryRef.current.value;
      if (!value || value === '') {
        const pinned = props.helpIndex.filter(m => m.pinned);
        if (pinned.length > 0) {
          setCurrentResults(pinned);
        }
      }
    }
  };
  React.useEffect(() => {
    setPinned();
  }, [currentIndex]);
  React.useEffect(() => {
    console.log(props._openMenu);
    if (props?._openMenu?.currentMenu !== 'main_settings') {
      props.setHelpOpen(false);
    }
  }, [props?._openMenu?.currentMenu]);
  return /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `Misc_Container ${props.className} ${menuOpen && closing ? 'Misc_Container_Visible' : ''}`,
    style: {
      top: props?.menuConfig?.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "Misc_Internal_Container",
    style: {
      paddingTop: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      right: 0,
      zIndex: 10
    }
  }, void 0, /*#__PURE__*/_jsx(Close, {
    className: `${Styles.Close}`,
    style: {
      margin: '0rem 0',
      float: 'right'
    },
    onClick: handleClose
  })), /*#__PURE__*/_jsx("h5", {
    className: `Misc_Label`,
    style: {
      marginTop: 0
    }
  }, void 0, "Help"), /*#__PURE__*/_jsx("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      margin: '.5rem 0',
      marginTop: '0'
    }
  }, void 0, <input onChange={handleUpdateSearch} ref={queryRef} style={{
    border: '0px',
    borderRadius: '.5rem',
    width: '87.5%',
    fontSize: '1.25rem',
    padding: '0 .5rem'
  }} placeholder='How can we help?'></input>), /*#__PURE__*/_jsx("div", {
    style: {
      padding: '.25rem 0rem',
      display: 'grid',
      gap: '.5rem'
    }
  }, void 0, Array.isArray(currentResults) && currentResults.length > 0 ? currentResults.map((m, i) => m?.a ? /*#__PURE__*/_jsx("a", {
    href: m.a,
    style: {
      cursor: 'pointer'
    }
  }, i, /*#__PURE__*/_jsx("div", {
    className: `Misc_Item_Container Misc_Item_DarkContainerHover`,
    style: {
      padding: '.5rem',
      display: 'grid',
      gap: '.25rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontWeight: '500'
    }
  }, void 0, m.question), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.85rem',
      lineHeight: 'normal'
    }
  }, void 0, m.answer))) : /*#__PURE__*/_jsx("div", {
    className: `Misc_Item_Container`,
    style: {
      padding: '.5rem',
      display: 'grid',
      gap: '.25rem'
    }
  }, i, /*#__PURE__*/_jsx("div", {
    style: {
      fontWeight: '500'
    }
  }, void 0, m.question), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.85rem',
      lineHeight: 'normal'
    }
  }, void 0, m.answer))) : queryRef?.current?.value !== '' ? _div || (_div = /*#__PURE__*/_jsx("div", {})) : /*#__PURE__*/_jsx("div", {
    style: {
      textAlign: 'center',
      fontSize: '.95rem'
    }
  }, void 0, "Try Searching for something")))));
};
export default Module;