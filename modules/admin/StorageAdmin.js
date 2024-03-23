var _h, _h2, _div, _section, _PhotoCamera, _div2;
import React from 'react';
import { debounce } from '../util';
import { v4 as uuidv4 } from 'uuid';
import Tooltip from '@mui/material/Tooltip';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AdminStyles from './Admin.module.scss';
import { logout } from '../utility/onboarding/SignIn';
import { fetchPost } from '../utility/fetch';
import { selectThisText } from '../utility/utility/event';
const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp', 'image/bmp', 'image/tiff'];
const moduleName = 'StreamAdmin';
const USE_OFFSET_INTERVAL = 200;
const DO_SEARCH_DELAY = 1500;
const DEFAULT_VIEW_IMAGE = {
  location: 'img/default/greythumb_product.jpg',
  internal: true
};
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [pageError, setPageError] = React.useState(null);
  const [storageFiles, setStorageFiles] = React.useState(null);
  const [folders, setFolders] = React.useState([]);
  const [currentDir, setCurrentDir] = React.useState('');
  const [currentImage, setCurrentImage] = React.useState(DEFAULT_VIEW_IMAGE);
  const [itemOffset, setItemOffset] = React.useState(0);
  const uploadFile = React.useRef();
  const searchRef = React.useRef();
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, e => {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        loadDefault();
      }
    }
  });
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const loadDefault = async search => {
    const body = {
      domainKey: props.domainKey,
      hash: props._loggedIn.hash,
      identifier: props._loggedIn.identifier,
      directory: currentDir,
      itemOffset: itemOffset * USE_OFFSET_INTERVAL
    };
    if (search !== undefined) {
      body.search = search;
    }
    let res = await fetchPost(props.apiUrl + '/a/getstoragefiles', null, null, body);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        if (res.contents) {
          setFolders(res.folders ?? []);
          setStorageFiles(res.contents);
        }
        return res;
      }
    }
  };
  const handleItemInteraction = React.useCallback(e => {
    const modif = e.currentTarget.getAttribute('modif');
    const useKey = e.currentTarget.getAttribute('usekey');
    if (modif && useKey) {
      handleUpdate(useKey, modif);
    }
  });
  const handleGoBack = React.useCallback(e => {
    let useDir = currentDir.match(/([^\/]+)\/$/);
    if (useDir && useDir[1]) {
      const useNewDir = currentDir.replace(useDir[1] + '/', '');
      setCurrentDir(useNewDir);
      setTimeout(() => {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 150);
    }
  });
  const handleUpdate = async (key, modif) => {
    let useOffset = itemOffset;
    let useDir = currentDir;
    if (modif === 'goto') {
      // If entering directory, restart at 0 index
      setItemOffset(0);
      useOffset = 0;
      useDir = key;
      setCurrentDir(key);
    } else if (modif === 'delete') {
      let temp = {
        ...currentImage
      };
      temp = Object.assign({}, DEFAULT_VIEW_IMAGE);
      setCurrentImage(temp);
    }
    const body = {
      domainKey: props.domainKey,
      hash: props._loggedIn.hash,
      identifier: props._loggedIn.identifier,
      key: key,
      modif: modif,
      directory: useDir,
      itemOffset: useOffset * USE_OFFSET_INTERVAL
    };
    let res = await fetchPost(props.apiUrl + '/a/storagecrudupdate', null, null, body);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        if (res.contents) {
          setFolders(res.folders ?? []);
          setStorageFiles(res.contents);
        }
        return res;
      }
    }
  };
  const handleSelectUploadFile = React.useCallback(e => {
    if (e?.target?.getAttribute('modif')) {
      const modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'img' && uploadFile?.current) {
          uploadFile.current.click();
        }
      }
    }
  });
  const handleUploadFile = React.useCallback(e => {
    try {
      console.log(e.target);
      setPageError(null);
      if (e && e.target && e.target.files) {
        const files = e.target.files;
        console.log(files);
        if (files && files.length > 0) {
          const filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(m => {
            const goodType = m.type && allowedTypes.indexOf(m.type) > -1;
            if (!goodType) {
              setPageError('Some types that were uploaded were not allowed. Please check that you are uploading the appropriate types for any file upload');
            }
            return goodType;
          }).map(m => {
            const nameSplit = m.name.split('.');
            const originalName = nameSplit[0].replace(/\s/g, '');
            const extension = nameSplit.pop();
            var blob = m.slice(0, m.size, m.type);
            return new File([blob], `${originalName}.${extension}`, {
              type: m.type
            });
          });
          const f = async () => {
            if (!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn) {
              const formData = new FormData();
              if (filesRenamed) {
                filesRenamed.forEach(file => {
                  formData.append("file", file);
                });
              }
              let modif;
              if (e?.target?.getAttribute('modif')) {
                modif = e.target.getAttribute('modif');
              }
              formData.append('domainKey', props.domainKey);
              formData.append('hash', props._loggedIn.hash);
              formData.append('identifier', props._loggedIn.identifier);
              formData.append('directory', currentDir);
              formData.append('modif', modif);
              if (props.setFetchBusy) {
                props.setFetchBusy(true);
                setTimeout(() => {
                  props.setFetchBusy(false);
                }, 30000);
              }
              if (modif && modif === 'image') {
                let res = await fetchPost(props.apiUrl + '/a/uploadfile', null, null, formData, {
                  formData: true
                });
                if (!res) {
                  return false;
                } else if (res.hasOwnProperty('status')) {
                  if (res.status == "disauthenticated") {
                    logout();
                    return "disauthenticated";
                  } else if (res.status == "failed") {
                    return false;
                  } else if (res.status == "success") {
                    props.setFetchBusy(false);
                    setTimeout(() => {
                      props._LocalEventEmitter.dispatch(moduleName, {
                        dispatch: 'loadDefault'
                      });
                    }, 150);
                    return res;
                  }
                }
              }
            }
          };
          f();
        }
      }
    } catch (err) {
      console.log(err);
      setWarning({
        message: 'There was an issue uploading images'
      });
    }
  });
  const handleSetPagination = React.useCallback(e => {
    const scope = e.currentTarget.getAttribute('scope');
    if (scope) {
      const nextValue = e.currentTarget.getAttribute('i');
      if (scope === 'itemOffset') {
        setItemOffset(Number(nextValue));
      }
      setTimeout(() => {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 150);
    }
  });
  const handleCloseError = () => {
    setPageError(null);
  };
  const handleDoLoad = React.useCallback(e => {
    if (e?.currentTarget?.getAttribute) {
      const useKey = e.currentTarget.getAttribute('useKey');
      if (useKey) {
        const temp = {
          ...currentImage
        };
        temp.location = `${props?.cdn?.static ?? ''}/${useKey}`;
        temp.internal = false;
        setCurrentImage(temp);
        selectThisText(e);
      }
    }
  });
  const itemOffsetPages = [itemOffset - 2, itemOffset - 1, itemOffset, itemOffset + 1, itemOffset + 2];
  const handleDoSearch = React.useCallback(debounce(e => {
    if (e?.target) {
      const value = e.target.value;
      if (value !== undefined) {
        loadDefault(value);
      }
    }
  }, DO_SEARCH_DELAY), []); // Debounce Search

  console.log(storageFiles, folders, props, currentDir, currentImage);
  return <div className={`${props.className} ${moduleName}_Container`}>
            {pageError ? <p className='error' style={{
      marginTop: '.5rem'
    }} onClick={handleCloseError}>{pageError}</p> : null}
            {!props?.vert ? _h || (_h = <h3>Storage</h3>) : null}
            <div className={`${AdminStyles.containerTwoSmallRight} ${props?.vert ? `${AdminStyles.vertView}` : null}`}>
                <div className={`${moduleName}_InternalContainer`}>
                    <section>
                        <Tooltip title={`See Storage for ${props.siteTitle ?? 'your Platform'} below`} placement='bottom'>
                            {_h2 || (_h2 = <h4>Files</h4>)}
                        </Tooltip>
                        <div className={`${AdminStyles.storageActionContainer} flex gap-p2`} style={{
            marginBottom: '.25rem'
          }}>
                            {currentDir !== '' ? <React.Fragment>
                                        <Tooltip title='Go back'>
                                            <div className={`flex gap-p2 al-cen pointer ${AdminStyles.itemContainer}`} onClick={handleGoBack} style={{
                  width: 'fit-content',
                  fontWeight: '600'
                }}>
                                                <div className='material-icons' style={{
                    fontSize: '1rem'
                  }}>arrow_back</div>
                                                {_div || (_div = <div>back</div>)}
                                            </div>
                                        </Tooltip>
                                        <Tooltip title='Upload New File to this Directory'>
                                            <button onClick={handleSelectUploadFile} modif='img'>Upload New Image</button>
                                        </Tooltip>
                                </React.Fragment> : null}
                            <input placeholder='Search' ref={searchRef} style={{
              borderRadius: '1rem',
              borderWidth: 0,
              padding: '.0rem .5rem'
            }} onChange={handleDoSearch} />
                        </div>
                        <input type='file' modif='image' style={{
            display: 'none'
          }} ref={uploadFile} onChange={handleUploadFile} />
                        <div className={`${AdminStyles.listContainer}`} style={{
            maxHeight: `${props.vert ? '200px' : '65vh'}`
          }}>
                            {folders?.map ? folders.map((m, i) => <div className={`${AdminStyles.itemContainer} pointer`} key={i} modif='goto' usekey={`${m.Prefix}`} onClick={handleItemInteraction}>
                                            <div>{m.Prefix}</div>
                                            <div className='flex gap-p2'>
                                                <button className='material-icons' style={{
                  fontSize: '1rem'
                }}>arrow_forward</button>
                                                {/* Dont allow deletion of folders. Users cannot create folders for now. Deletion of top level folders will fault app */}
                                            </div>
                                        </div>) : null}
                            {storageFiles?.map ? storageFiles.map((m, i) => {
              return m.Key !== currentDir ? <div className={`${AdminStyles.itemContainer}`} key={i}>
                                                    <div className={`${props?.vert ? `${AdminStyles.shortened}` : null}`} selectValue={`${props?.cdn?.static ?? ''}/${m.Key}`} onClick={handleDoLoad} useKey={`${m.Key}`} style={{
                  cursor: 'pointer'
                }}>{m.Key}</div>
                                                    <div className='flex gap-p2'>
                                                        <Tooltip title='Copy URL' placement='left'>
                                                            <button className='material-icons' modif='copy_url' usekey={`${m.Key}`} selectValue={`${props?.cdn?.static ?? ''}/${m.Key}`} onClick={selectThisText} style={{
                      fontSize: '1rem'
                    }}>link</button>
                                                        </Tooltip>
                                                        <Tooltip title='Delete' placement='left'>
                                                            <button className='material-icons' modif='delete' usekey={`${m.Key}`} onClick={handleItemInteraction} style={{
                      fontSize: '1rem'
                    }}>delete</button>
                                                        </Tooltip>
                                                    </div>
                                                </div> : null;
            }) : null}
                        </div>
                        <ul className={`PaginationContainer`}>
                            {itemOffsetPages.map((m, i) => {
              return m > -1 ? <li className={`${m == itemOffset ? 'ActivePage' : ''}`} scope='itemOffset' key={i} i={m} onClick={handleSetPagination}>{m + 1}</li> : null;
            })}
                        </ul>
                    </section>
                    {!props?.vert ? _section || (_section = <section>
                                <div className='flex gap-p2'>
                                    <div>Platform Storage Status:</div>
                                    <div>Good</div>
                                </div>
                                <div className='flex gap-p2'>
                                    <div>Platform Content Delivery Network Status:</div>
                                    <div>Good</div>
                                </div>
                            </section>) : null}
                </div>
                <div>
                    <div style={{
          fontWeight: '600'
        }}>View</div>
                    <div>
                        <Tooltip title='Click to Copy URL'>
                            <img style={{
              backgroundImage: `url(${currentImage?.location ?? null}`,
              height: `${props.vert ? '200px' : '400px'}`,
              width: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} selectValue={`${currentImage?.location ?? null}`} onClick={selectThisText} />
                        </Tooltip>
                        <div style={{
            display: 'flex'
          }}>
                            <div className={`flex gap-p2 shareButton`} selectValue={`${currentImage?.location ?? null}`} onClick={selectThisText}>
                                {_PhotoCamera || (_PhotoCamera = <PhotoCamera></PhotoCamera>)}
                                {_div2 || (_div2 = <div>Copy URL</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
};
export default Module;