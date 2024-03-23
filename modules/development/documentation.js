var _div;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { Banner } from '../admin';
import lunr from '../utility/utility/elasticlunr';
import styles from './documentation.module.scss';
import { fetchPost } from '../utility/fetch';
import DOMPurify from 'dompurify';
import { isObjectEmpty } from '../util';
import { CompanyLink } from '.';
const Module = props => {
  const router = useRouter();
  const {
    query,
    asPath
  } = router;
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [currentResults, setCurrentResults] = React.useState([]);
  const [devIndex, setDevIndex] = React.useState([]);
  const [firstInput, setFirstInput] = React.useState(-1);
  const [currentDoc, setCurrentDoc] = React.useState({});
  const [currentMenu, setCurrentMenu] = React.useState(0);
  const [menu, setMenu] = React.useState([]);
  const [currentMenuDocsList, setCurrentMenuDocsList] = React.useState(null);
  const [currentMenuResults, setCurrentMenuResults] = React.useState([]);
  const [usingQuery, setUsingQuery] = React.useState(false);
  const queryRef = React.useRef();
  const searchWillClose = React.useRef();
  const resolveDefault = async useData => {
    if (props?.apiUrl) {
      if (useData) {
        setDevIndex(useData);
        const allJustMenu = useData.map(m => m.menu);
        const menuItems = allJustMenu.filter((m, i) => allJustMenu.indexOf(m) === i);
        setMenu(menuItems);
        return 1;
      }
      const res = await fetchPost(props.apiUrl + '/m/getdocumentation', null, null, {
        spec: 'all'
      });
      if (res.hasOwnProperty('status')) {
        if (res.status == "success" && res.data) {
          setDevIndex(res.data);
          const allJustMenu = res.data.map(m => m.menu);
          const menuItems = allJustMenu.filter((m, i) => allJustMenu.indexOf(m) === i);
          setMenu(menuItems);
        }
      }
      return false;
    }
  };
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      resolveDefault(props?.documentationData);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const runSearch = (query, passedIndex) => {
    if (currentIndex || passedIndex) {
      const results = passedIndex ? passedIndex.search(query, {
        expand: true
      }) : currentIndex.search(query, {
        expand: true
      });
      const useIndex = devIndex.map((doc, i) => {
        doc.id = i;
        return doc;
      });
      const resultRecords = results.map(result => useIndex.find(doc => doc.id == result.ref)); // Id may or may not be number depending on user definition. Soft comparison
      setCurrentResults(resultRecords);
      if (resultRecords && resultRecords[0]) {
        if (resultRecords[0].menu) {
          setCurrentMenu(menu.indexOf(resultRecords[0].menu));
        }
        setCurrentDoc(resultRecords[0]);
      }
    }
  };
  React.useEffect(() => {
    if (componentDidMount && devIndex?.length > 0) {
      if (lunr && devIndex && !currentIndex) {
        const fullTextSearchIndex = lunr(function () {
          this.ref('id');
          this.field('lead');
          this.field('html');
          this.field('code');
          this.field('response');
          this.field('meta');
          if (Array.isArray(devIndex)) {
            devIndex.forEach((doc, i) => {
              doc.id = i;
              this.add(doc);
            });
          }
        });
        setCurrentIndex(fullTextSearchIndex);
        if (router?.query?.q) {
          queryRef.current.value = router.query.q;
          runSearch(router.query.q, fullTextSearchIndex);
        }
      }
    }
  }, [devIndex, componentDidMount]);
  React.useEffect(() => {
    if (componentDidMount && devIndex?.length > 0) {
      if (lunr && devIndex) {
        const useIndex = devIndex.filter(m => m.menu === menu[currentMenu]);
        console.log(useIndex);
        setCurrentMenuDocsList(useIndex);
      }
    }
  }, [currentMenu, menu, devIndex, componentDidMount]);
  const handleUpdateSearch = React.useCallback(e => {
    setFirstInput(new Date().getTime());
    const query = e?.currentTarget?.value;
    if (query !== null && query !== '' && currentIndex && devIndex) {
      runSearch(query);
    } else {
      setPinned();
    }
  });
  React.useEffect(() => {
    setPinned();
  }, [currentIndex]);
  const setPinned = () => {
    if (queryRef?.current && devIndex?.filter) {
      const value = queryRef.current.value;
      if (!value || value === '') {
        const pinned = devIndex?.filter(m => m.pinned);
        if (pinned.length > 0) {
          setCurrentResults(pinned);
        }
      }
    }
  };
  const resolvePaint = (m, field) => {
    try {
      if (m && m[field]) {
        return {
          __html: DOMPurify.sanitize(m[field] ?? '')
        };
      }
      return '';
    } catch (err) {
      return '';
    }
  };
  const handleSetCurrentMenu = React.useCallback(e => {
    if (e?.currentTarget?.getAttribute('modif')) {
      const modif = e.currentTarget.getAttribute('modif');
      if (modif) {
        const i = menu.indexOf(modif);
        if (i > -1) {
          setCurrentDoc({});
          setCurrentMenu(i);
        }
      }
    }
  });
  const handleSetCurrentRecord = React.useCallback(e => {
    if (e?.currentTarget?.getAttribute) {
      // Is number cannot resolve true 
      const modif = e.currentTarget.getAttribute('modif');
      if (modif > -1) {
        console.log(currentMenuDocsList, modif);
        if (e?.currentTarget?.getAttribute('currentresults')) {
          setCurrentDoc(currentResults[modif]);
        } else {
          setCurrentDoc(currentMenuDocsList[modif]);
        }
      }
    }
  });
  const handleSetSearchFocus = React.useCallback(e => {
    if (searchWillClose?.current) {
      clearTimeout(searchWillClose.current);
    }
    setUsingQuery(true);
  });
  const handleSetSearchFocusOff = React.useCallback(e => {
    try {
      searchWillClose.current = setTimeout(() => {
        setUsingQuery(false);
      }, 500);
    } catch (err) {
      // fail silently
    }
  });
  const detectFlags = doc => {
    const o = {};
    const flags = ['manual', 'simple'];
    console.log(devIndex, doc, typeof doc);
    if (typeof doc === 'string') {
      doc = devIndex.find(m => m.lead === doc);
    }
    flags.map(m => {
      o[m] = doc?.meta.indexOf(m) > -1;
    });
    return o;
  };
  console.log('Menu Items', menu, currentDoc);
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} Documentation_Container`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      alignContent: 'center',
      margin: '.5rem 1.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("h5", {
    className: `Misc_Label`,
    style: {
      fontSize: '1.5rem'
    }
  }, void 0, "Tycoon Documentation"), <CompanyLink {...props} />), /*#__PURE__*/_jsx("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      margin: '.5rem 0',
      marginTop: '0'
    }
  }, void 0, <input onChange={handleUpdateSearch} onFocus={handleSetSearchFocus} onBlur={handleSetSearchFocusOff} className={`${styles.activeSearch}`} ref={queryRef} style={{
    border: '0px',
    borderRadius: '.5rem',
    width: 'calc(100% - 1rem)',
    fontSize: '1.25rem',
    padding: '0 .5rem',
    margin: '0 .5rem'
  }} placeholder='How do I?'></input>, usingQuery ? /*#__PURE__*/_jsx("div", {
    className: `${styles.activeSearchResults}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      padding: '.25rem 0rem',
      paddingTop: '.5rem',
      display: 'grid',
      gap: '.5rem'
    }
  }, void 0, Array.isArray(currentResults) && currentResults.length > 0 ? currentResults.map((m, i) => /*#__PURE__*/_jsx("div", {
    className: `flex gap-p5`,
    style: {
      marginLeft: '.5rem',
      cursor: 'pointer'
    }
  }, i, /*#__PURE__*/_jsx("div", {
    className: `Misc_Item_Container Misc_Item_DarkContainerHover`,
    style: {
      padding: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${styles.lead}`,
    onClick: handleSetCurrentRecord,
    modif: i,
    currentresults: 'true'
  }, void 0, m.lead)))) : queryRef?.current?.value !== '' ? _div || (_div = /*#__PURE__*/_jsx("div", {})) : /*#__PURE__*/_jsx("div", {
    style: {
      textAlign: 'center',
      fontSize: '.95rem'
    }
  }, void 0, "Try Searching for something"))) : null), /*#__PURE__*/_jsx("ul", {
    className: `flex gap-p5 ${styles.menuContainer}`
  }, void 0, Array.isArray(menu) && menu.length > 0 ? menu.map((m, i) => /*#__PURE__*/_jsx("li", {
    style: {
      listStyle: 'none'
    },
    onClick: handleSetCurrentMenu,
    modif: m
  }, i, /*#__PURE__*/_jsx("div", {}, void 0, m?.charAt ? `${m.charAt(0).toUpperCase()}${m.slice(1, m.length)}` : m))) : null), /*#__PURE__*/_jsx("div", {
    className: `${styles.mainContainer}`
  }, void 0, /*#__PURE__*/_jsx("ul", {
    className: `${styles.menuList}`
  }, void 0, Array.isArray(currentMenuDocsList) && currentMenuDocsList.length > 0 ? currentMenuDocsList.map((m, i) => /*#__PURE__*/_jsx("li", {
    className: "flex gap-p2",
    onClick: handleSetCurrentRecord,
    modif: i
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, m?.lead), detectFlags(m)?.manual ? /*#__PURE__*/_jsx("div", {
    className: `${styles.tagUnmanaged} ${styles.tagSmall}`
  }, void 0, "m") : null, detectFlags(m)?.simple ? /*#__PURE__*/_jsx("div", {
    className: `${styles.tagSimple} ${styles.tagSmall}`
  }, void 0, "s") : null)) : null), /*#__PURE__*/_jsx("div", {
    className: `${styles.contentContainer}`
  }, void 0, currentDoc && !isObjectEmpty(currentDoc) ? /*#__PURE__*/_jsx("div", {
    className: `flex ${styles.quadrant}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `Misc_Item_Container Misc_Item_DarkContainerHover`,
    style: {
      padding: '.5rem',
      width: '100%'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${styles.lead}`
  }, void 0, currentDoc.lead), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p5"
  }, void 0, detectFlags(currentDoc)?.manual ? /*#__PURE__*/_jsx("div", {
    className: `${styles.tagUnmanaged} ${styles.tag}`
  }, void 0, "manual") : null), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p5"
  }, void 0, detectFlags(currentDoc)?.simple ? /*#__PURE__*/_jsx("div", {
    className: `${styles.tagSimple} ${styles.tag}`
  }, void 0, "simple") : null), /*#__PURE__*/_jsx("pre", {}, void 0, /*#__PURE__*/_jsx("code", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${styles.htmlParseContainer}`,
    dangerouslySetInnerHTML: resolvePaint(currentDoc, 'html'),
    style: {
      fontSize: '.85rem',
      lineHeight: 'normal',
      lineBreak: 'auto',
      whiteSpace: 'pre-wrap'
    }
  }))))) : null), /*#__PURE__*/_jsx("div", {}, void 0, currentDoc && !isObjectEmpty(currentDoc) ? /*#__PURE__*/_jsx("div", {
    className: `flex ${styles.container}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${styles.quadrant2}`
  }, void 0, /*#__PURE__*/_jsx("pre", {}, void 0, /*#__PURE__*/_jsx("code", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${styles.codePre}`
  }, void 0, currentDoc?.code))), /*#__PURE__*/_jsx("div", {}, void 0, currentDoc.response))) : null)));
};
export default Module;