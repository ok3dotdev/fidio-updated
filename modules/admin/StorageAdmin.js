var _h, _h2, _div, _section, _PhotoCamera, _div2;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} ${moduleName}_Container`
  }, void 0, pageError ? /*#__PURE__*/_jsx("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, void 0, pageError) : null, !props?.vert ? _h || (_h = /*#__PURE__*/_jsx("h3", {}, void 0, "Storage")) : null, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.containerTwoSmallRight} ${props?.vert ? `${AdminStyles.vertView}` : null}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${moduleName}_InternalContainer`
  }, void 0, /*#__PURE__*/_jsx("section", {}, void 0, /*#__PURE__*/_jsx(Tooltip, {
    title: `See Storage for ${props.siteTitle ?? 'your Platform'} below`,
    placement: "bottom"
  }, void 0, _h2 || (_h2 = /*#__PURE__*/_jsx("h4", {}, void 0, "Files"))), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.storageActionContainer} flex gap-p2`,
    style: {
      marginBottom: '.25rem'
    }
  }, void 0, currentDir !== '' ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx(Tooltip, {
    title: "Go back"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `flex gap-p2 al-cen pointer ${AdminStyles.itemContainer}`,
    onClick: handleGoBack,
    style: {
      width: 'fit-content',
      fontWeight: '600'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "material-icons",
    style: {
      fontSize: '1rem'
    }
  }, void 0, "arrow_back"), _div || (_div = /*#__PURE__*/_jsx("div", {}, void 0, "back")))), /*#__PURE__*/_jsx(Tooltip, {
    title: "Upload New File to this Directory"
  }, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleSelectUploadFile,
    modif: "img"
  }, void 0, "Upload New Image"))) : null, <input placeholder='Search' ref={searchRef} style={{
    borderRadius: '1rem',
    borderWidth: 0,
    padding: '.0rem .5rem'
  }} onChange={handleDoSearch} />), <input type='file' modif='image' style={{
    display: 'none'
  }} ref={uploadFile} onChange={handleUploadFile} />, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.listContainer}`,
    style: {
      maxHeight: `${props.vert ? '200px' : '65vh'}`
    }
  }, void 0, folders?.map ? folders.map((m, i) => /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.itemContainer} pointer`,
    modif: "goto",
    usekey: `${m.Prefix}`,
    onClick: handleItemInteraction
  }, i, /*#__PURE__*/_jsx("div", {}, void 0, m.Prefix), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, /*#__PURE__*/_jsx("button", {
    className: "material-icons",
    style: {
      fontSize: '1rem'
    }
  }, void 0, "arrow_forward")))) : null, storageFiles?.map ? storageFiles.map((m, i) => {
    return m.Key !== currentDir ? /*#__PURE__*/_jsx("div", {
      className: `${AdminStyles.itemContainer}`
    }, i, /*#__PURE__*/_jsx("div", {
      className: `${props?.vert ? `${AdminStyles.shortened}` : null}`,
      selectValue: `${props?.cdn?.static ?? ''}/${m.Key}`,
      onClick: handleDoLoad,
      useKey: `${m.Key}`,
      style: {
        cursor: 'pointer'
      }
    }, void 0, m.Key), /*#__PURE__*/_jsx("div", {
      className: "flex gap-p2"
    }, void 0, /*#__PURE__*/_jsx(Tooltip, {
      title: "Copy URL",
      placement: "left"
    }, void 0, /*#__PURE__*/_jsx("button", {
      className: "material-icons",
      modif: "copy_url",
      usekey: `${m.Key}`,
      selectValue: `${props?.cdn?.static ?? ''}/${m.Key}`,
      onClick: selectThisText,
      style: {
        fontSize: '1rem'
      }
    }, void 0, "link")), /*#__PURE__*/_jsx(Tooltip, {
      title: "Delete",
      placement: "left"
    }, void 0, /*#__PURE__*/_jsx("button", {
      className: "material-icons",
      modif: "delete",
      usekey: `${m.Key}`,
      onClick: handleItemInteraction,
      style: {
        fontSize: '1rem'
      }
    }, void 0, "delete")))) : null;
  }) : null), /*#__PURE__*/_jsx("ul", {
    className: `PaginationContainer`
  }, void 0, itemOffsetPages.map((m, i) => {
    return m > -1 ? /*#__PURE__*/_jsx("li", {
      className: `${m == itemOffset ? 'ActivePage' : ''}`,
      scope: "itemOffset",
      i: m,
      onClick: handleSetPagination
    }, i, m + 1) : null;
  }))), !props?.vert ? _section || (_section = /*#__PURE__*/_jsx("section", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, "Platform Storage Status:"), /*#__PURE__*/_jsx("div", {}, void 0, "Good")), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, "Platform Content Delivery Network Status:"), /*#__PURE__*/_jsx("div", {}, void 0, "Good")))) : null), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontWeight: '600'
    }
  }, void 0, "View"), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx(Tooltip, {
    title: "Click to Copy URL"
  }, void 0, /*#__PURE__*/_jsx("img", {
    style: {
      backgroundImage: `url(${currentImage?.location ?? null}`,
      height: `${props.vert ? '200px' : '400px'}`,
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    selectValue: `${currentImage?.location ?? null}`,
    onClick: selectThisText
  })), /*#__PURE__*/_jsx("div", {
    style: {
      display: 'flex'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `flex gap-p2 shareButton`,
    selectValue: `${currentImage?.location ?? null}`,
    onClick: selectThisText
  }, void 0, _PhotoCamera || (_PhotoCamera = /*#__PURE__*/_jsx(PhotoCamera, {})), _div2 || (_div2 = /*#__PURE__*/_jsx("div", {}, void 0, "Copy URL"))))))));
};
export default Module;