var _div, _Script, _link, _li;
import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import AdminStyles from './Admin.module.scss';
import BuildAdmin from './BuildAdmin';
import StreamAdmin from './StreamAdmin';
import PostAdmin from './PostAdmin';
import BillingAdmin from './BillingAdmin';
import StorageAdmin from './StorageAdmin';
import { SignIn, Username } from '/modules/onboarding/signin/index.js';
import { isObjectEmpty } from '/modules/util';
import { Banner } from '.';
import customAdmin from '/customModules/admin';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [page, setPage] = React.useState(null);
  const Auth_Table = {
    BuildAdmin: ['full'],
    StreamAdmin: ['full', 'administrative'],
    PostAdmin: ['full', 'administrative', 'marketing', 'writer'],
    BillingAdmin: ['full', 'administrative'],
    StorageAdmin: ['full', 'administrative', 'marketing', 'writer']
  };
  const resolveAuth = (page, auth) => {
    if (auth?.adminc?.access && Auth_Table[page].indexOf(auth.adminc.access) > -1) {
      return true;
    }
    return false;
  };
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const handleSetPage = React.useCallback(async e => {
    let page = e?.target?.getAttribute('modif');
    if (!page && e?.children && e?.children[0]) {
      page = e?.children[0]?.getAttribute('modif');
    }
    if (page) {
      setPage(page);
    }
  });
  console.log(page, props);
  const doShowSignIn = !props || !props._loggedIn || isObjectEmpty(props?._loggedIn) || !props?._loggedIn.identifier;
  const isAdmin = props?._adminAuth?.adminc?.admin && props?._loggedIn;
  console.log(isAdmin);
  const paintCustomAdmin = useComponent => {
    if (useComponent && useComponent[1] && typeof useComponent[1] === 'function') {
      const UseComponentDom = useComponent[1];
      return <UseComponentDom {...props} />;
    }
    return _div || (_div = <div></div>);
  };
  return <div className={`${props.className} ${AdminStyles.container} Admin_Container`}>
            {_Script || (_Script = <Script src='https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.min.js' />)}
            {_link || (_link = <link href="https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.snow.css" rel="stylesheet"></link>)}
            {props?._LocalEventEmitter ? <div className={`${doShowSignIn && !isAdmin ? 'simpleCenter' : ''}`}>
                        <SignIn {...props}></SignIn>
                        <Username {...props}></Username>
                    </div> : null}
            {isAdmin ? <div className={`${AdminStyles.internalContainer} Admin_InternalContainer`}>
                        <Banner {...props} />
                        <div className={`${AdminStyles.bodyContainer} Admin_BodyContainer`}>
                            <div>
                                <ul className={`${AdminStyles.adminMenuContainer} Admin_MenuContainer`}>
                                    {resolveAuth('StreamAdmin', props._adminAuth) ? <li>
                                            <button onClick={handleSetPage} modif='stream'>Stream</button>
                                        </li> : null}
                                    {resolveAuth('PostAdmin', props._adminAuth) ? <li>
                                            <button onClick={handleSetPage} modif='post'>Post</button>
                                        </li> : null}
                                    {resolveAuth('StorageAdmin', props._adminAuth) ? <li>
                                                <button onClick={handleSetPage} modif='storage'>Storage</button>
                                            </li> : null}
                                    {resolveAuth('BuildAdmin', props._adminAuth) ? <li>
                                                <button onClick={handleSetPage} modif='build'>Build</button>
                                            </li> : null}
                                    {resolveAuth('BillingAdmin', props._adminAuth) ? <li>
                                                <button onClick={handleSetPage} modif='billing'>Billing</button>
                                            </li> : null}
                                    {_li || (_li = <li>
                                        <button><Link href='/documentation'>Documentation</Link></button>
                                    </li>)}
                                </ul>
                                {Object.entries(customAdmin).length > 0 ? <ul className={`${AdminStyles.adminMenuContainer} ${AdminStyles.adminMenuContainerCustom} Admin_MenuContainerCustom`}>
                                            {Object.entries(customAdmin).map((m, i) => <li>
                                                        <button onClick={handleSetPage} modif={m[0]}>{m[0]?.slice(1, m[0].length) && m[0]?.length > 1 ? m[0].charAt(0).toUpperCase() + m[0].slice(1, m[0].length) : m[0]}</button>
                                                    </li>)}
                                        </ul> : null}
                            </div>
                            <div className={`${AdminStyles.contentBodyContainer} Admin_ContentBodyContainer`}>
                                {page ? page === 'build' && resolveAuth('BuildAdmin', props._adminAuth) ? <div><BuildAdmin {...props} /></div> : page === 'stream' && resolveAuth('StreamAdmin', props._adminAuth) ? <div><StreamAdmin {...props} /></div> : page === 'post' && resolveAuth('PostAdmin', props._adminAuth) ? <div><PostAdmin {...props} /></div> : page === 'billing' && resolveAuth('BillingAdmin', props._adminAuth) ? <div><BillingAdmin {...props} /></div> : page === 'storage' && resolveAuth('StorageAdmin', props._adminAuth) ? <div><StorageAdmin {...props} /></div> : Object.entries(customAdmin).findIndex(m => m[0] === page) > -1 // Leverage Custom Admin Pages
          ? paintCustomAdmin(Object.entries(customAdmin).find(m => m[0] === page)) : null : null}
                            </div>
                        </div>
                    </div> : null}
        </div>;
};
export default Module;