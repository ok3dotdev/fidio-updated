var _div;
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
  return <div className={`${props.className} Documentation_Container`}>
            {/* <Banner { ...props } /> */}
            <div className='flex' style={{
      justifyContent: 'space-between',
      alignContent: 'center',
      margin: '.5rem 1.5rem'
    }}>
                <h5 className={`Misc_Label`} style={{
        fontSize: '1.5rem'
      }}>Tycoon Documentation</h5>
                <CompanyLink {...props} />
            </div>
            <div style={{
      position: 'sticky',
      top: '.5rem',
      margin: '.5rem 0',
      marginTop: '0'
    }}>
                <input onChange={handleUpdateSearch} onFocus={handleSetSearchFocus} onBlur={handleSetSearchFocusOff} className={`${styles.activeSearch}`} ref={queryRef} style={{
        border: '0px',
        borderRadius: '.5rem',
        width: 'calc(100% - 1rem)',
        fontSize: '1.25rem',
        padding: '0 .5rem',
        margin: '0 .5rem'
      }} placeholder='How do I?'></input>
                {usingQuery ? <div className={`${styles.activeSearchResults}`}>
                        <div style={{
          padding: '.25rem 0rem',
          paddingTop: '.5rem',
          display: 'grid',
          gap: '.5rem'
        }}>
                            {Array.isArray(currentResults) && currentResults.length > 0 ? currentResults.map((m, i) => <div className={`flex gap-p5`} style={{
            marginLeft: '.5rem',
            cursor: 'pointer'
          }} key={i}>
                                            <div className={`Misc_Item_Container Misc_Item_DarkContainerHover`} style={{
              padding: '.5rem'
            }}>
                                                <div className={`${styles.lead}`} onClick={handleSetCurrentRecord} modif={i} currentresults={'true'}>{m.lead}</div>
                                            </div>
                                        </div>) : queryRef?.current?.value !== '' ? _div || (_div = <div></div>) : <div style={{
            textAlign: 'center',
            fontSize: '.95rem'
          }}>Try Searching for something</div>}
                            </div>
                        </div> : null}
            </div>
            <ul className={`flex gap-p5 ${styles.menuContainer}`}>
                {Array.isArray(menu) && menu.length > 0 ? menu.map((m, i) => <li key={i} style={{
        listStyle: 'none'
      }} onClick={handleSetCurrentMenu} modif={m}>
                                <div>{m?.charAt ? `${m.charAt(0).toUpperCase()}${m.slice(1, m.length)}` : m}</div>
                            </li>) : null}
            </ul>
            <div className={`${styles.mainContainer}`}>
                <ul className={`${styles.menuList}`}>
                    {Array.isArray(currentMenuDocsList) && currentMenuDocsList.length > 0 ? currentMenuDocsList.map((m, i) => <li className='flex gap-p2' onClick={handleSetCurrentRecord} modif={i}>
                                    <div>{m?.lead}</div>
                                    {detectFlags(m)?.manual ? <div className={`${styles.tagUnmanaged} ${styles.tagSmall}`}>m</div> : null}
                                    {detectFlags(m)?.simple ? <div className={`${styles.tagSimple} ${styles.tagSmall}`}>s</div> : null}
                                </li>) : null}
                </ul>
                <div className={`${styles.contentContainer}`}>
                    {currentDoc && !isObjectEmpty(currentDoc) ? <div className={`flex ${styles.quadrant}`}>
                                <div className={`Misc_Item_Container Misc_Item_DarkContainerHover`} style={{
            padding: '.5rem',
            width: '100%'
          }}>
                                    <div className={`${styles.lead}`}>{currentDoc.lead}</div>
                                    <div className='flex gap-p5'>{detectFlags(currentDoc)?.manual ? <div className={`${styles.tagUnmanaged} ${styles.tag}`}>manual</div> : null}</div>
                                    <div className='flex gap-p5'>{detectFlags(currentDoc)?.simple ? <div className={`${styles.tagSimple} ${styles.tag}`}>simple</div> : null}</div>
                                    <pre><code><div className={`${styles.htmlParseContainer}`} dangerouslySetInnerHTML={resolvePaint(currentDoc, 'html')} style={{
                  fontSize: '.85rem',
                  lineHeight: 'normal',
                  lineBreak: 'auto',
                  whiteSpace: 'pre-wrap'
                }}></div></code></pre>
                                </div>
                            </div> : null}
                </div>
                <div>
                    {currentDoc && !isObjectEmpty(currentDoc) ? <div className={`flex ${styles.container}`}>
                                <div className={`${styles.quadrant2}`}>
                                    <pre><code><div className={`${styles.codePre}`}>{currentDoc?.code}</div></code></pre>
                                    <div>{currentDoc.response}</div>
                                </div>
                            </div> : null}
                </div>
            </div>
        </div>;
};
export default Module;