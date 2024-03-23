var _h, _b, _b2, _b3, _b4, _b5, _b6;
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tooltip from '@mui/material/Tooltip';
import AdminStyles from './Admin.module.scss';
import { fetchPost } from '../utility/fetch';
const allowedTypes = ['application/gzip', 'application/x-gzip'];
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [pageError, setPageError] = React.useState(null);
  const [msg1, setMsg1] = React.useState(null);
  const [msg2, setMsg2] = React.useState(null);
  const [msg3, setMsg3] = React.useState(null);
  const [msg4, setMsg4] = React.useState(null);
  const [msg5, setMsg5] = React.useState(null);
  const [msg6, setMsg6] = React.useState(null);
  const [msg7, setMsg7] = React.useState(null);
  const [packages, setPackages] = React.useState(null);
  const [lastFetchPackages, setLastFetchPackages] = React.useState(-1);
  const buildInput = React.useRef();
  const buildInput2 = React.useRef();
  const installPackageRef = React.useRef();
  const uninstallPackageRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  React.useEffect(() => {
    if (lastFetchPackages === -1 && !packages && props.apiUrl && props.domainKey && props._loggedIn) {
      setLastFetchPackages(new Date().getTime());
      getPackages(props.apiUrl, props.domainKey, props._loggedIn);
    }
  }, [componentId, props.apiUrl, props.domainKey, props._loggedIn]);
  const getPackages = async (uri, domainKey, user) => {
    if (user.identifier && user.hash && domainKey) {
      const body = {
        identifier: user.identifier,
        hash: user.hash,
        domainKey: domainKey
      };
      let res = await fetchPost(uri + '/a/getpackages', null, null, body);
      if (!res) {
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == "disauthenticated") {
          logout();
          return "disauthenticated";
        } else if (res.status == "failed") {
          return false;
        } else if (res.status == "success" && res.data) {
          console.log(res.data);
          const stringified = res.data.toString();
          if (stringified && JSON.parse(stringified)) {
            setPackages(JSON.parse(stringified));
          }
          return res;
        }
      }
      return false;
    } else {
      return false;
    }
  };
  const installPackage = async (uri, domainKey, user, pkg, options = {}) => {
    setPageError(null);
    if (user.identifier && user.hash && domainKey) {
      let r;
      if (props.setFetchBusy) {
        props.setFetchBusy(true);
        r = setTimeout(() => {
          props.setFetchBusy(false);
        }, 10000);
      }
      if (options?.uninstall) {
        setMsg4(null);
      } else {
        setMsg3(null);
      }
      const body = {
        identifier: user.identifier,
        hash: user.hash,
        username: user.username,
        domainKey: domainKey,
        package: pkg,
        options: options
      };
      let res = await fetchPost(uri + '/a/installpackage', null, null, body);
      clearTimeout(r);
      props.setFetchBusy(false);
      if (!res) {
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == "disauthenticated") {
          logout();
          return "disauthenticated";
        } else if (res.status == "failed") {
          if (res.data) {
            if (options?.uninstall) {
              setMsg4(res.data);
            } else {
              setMsg3(res.data);
            }
          }
          return false;
        } else if (res.status == "success" && res.data) {
          if (options?.uninstall) {
            setMsg4(res.report ?? 'done');
          } else {
            setMsg3(res.report ?? 'done');
          }
          return res;
        }
      }
      return false;
    } else {
      return false;
    }
  };
  const handleNewBuild = React.useCallback(e => {
    try {
      console.log(e.target);
      setPageError(null);
      if (e && e.target && e.target.files) {
        const files = e.target.files;
        if (files && files.length > 0) {
          const filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(m => {
            const goodType = m.type && allowedTypes.indexOf(m.type) > -1;
            if (!goodType) {
              setPageError('Some types that were uploaded were not allowed. Please check that you are uploading the appropriate types for any file upload');
            }
            return goodType;
          }).map(m => {
            var blob = m.slice(0, m.size, m.type);
            return new File([blob], `${uuidv4()}.tar.gz`, {
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
              formData.append('domainKey', props.domainKey);
              formData.append('hash', props._loggedIn.hash);
              formData.append('identifier', props._loggedIn.identifier);
              if (props.setFetchBusy) {
                props.setFetchBusy(true);
                setTimeout(() => {
                  props.setFetchBusy(false);
                }, 30000);
              }
              let modif;
              if (e?.target?.getAttribute('modif')) {
                modif = e.target.getAttribute('modif');
              }
              const data = modif && modif === 'public' ? await doUploadBuildPublic(props.apiUrl, props.domainKey, props._loggedIn, formData) : await doUploadBuild(props.apiUrl, props.domainKey, props._loggedIn, formData);
              if (data) {
                if (props.setFetchBusy) {
                  props.setFetchBusy(false);
                }
                if (data.status === 'success') {
                  if (modif && modif === 'public') {
                    setMsg2(`Build Uploaded at ${new Date().toDateString()} ${new Date().toTimeString()}`);
                  } else {
                    setMsg1(`Build Uploaded at ${new Date().toDateString()} ${new Date().toTimeString()}`);
                  }
                }
              }
              if (buildInput.current) {
                buildInput.current.value = '';
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
  const doUploadBuild = async (uri, domainKey, user, body) => {
    if (user.identifier && user.hash && domainKey) {
      let res = await fetchPost(uri + '/a/uploadbuild', null, null, body, {
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
          return res;
        }
      }
      return false;
    } else {
      return false;
    }
  };
  const doUploadBuildPublic = async (uri, domainKey, user, body) => {
    if (user.identifier && user.hash && domainKey) {
      let res = await fetchPost(uri + '/a/uploadbuildpublic', null, null, body, {
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
          return res;
        }
      }
      return false;
    } else {
      return false;
    }
  };
  const handleUploadNewBuild = React.useCallback(e => {
    console.log(e.target);
    if (e?.target?.getAttribute('modif')) {
      const modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'public' && buildInput2.current) {
          buildInput2.current.click();
        }
      }
    } else if (buildInput.current) {
      buildInput.current.click(); // Prompt file upload
    }
  });
  const handleInstall = React.useCallback(e => {
    console.log(e);
    if (e?.target?.getAttribute('modif')) {
      const modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'uninstall' && uninstallPackageRef?.current?.value) {
          installPackage(props.apiUrl, props.domainKey, props._loggedIn, uninstallPackageRef.current.value, {
            uninstall: true
          });
        }
      }
    } else if (installPackageRef?.current?.value) {
      installPackage(props.apiUrl, props.domainKey, props._loggedIn, installPackageRef.current.value);
    }
  });
  const daemonBuild = async (uri, domainKey, user) => {
    setPageError(null);
    if (user.identifier && user.hash && domainKey) {
      let r;
      if (props.setFetchBusy) {
        props.setFetchBusy(true);
        r = setTimeout(() => {
          props.setFetchBusy(false);
        }, 10000);
      }
      setMsg7(null);
      const body = {
        identifier: user.identifier,
        hash: user.hash,
        username: user.username,
        domainKey: domainKey
      };
      let res = await fetchPost(uri + '/a/daemonbuild', null, null, body);
      clearTimeout(r);
      props.setFetchBusy(false);
      if (!res) {
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == "disauthenticated") {
          logout();
          return "disauthenticated";
        } else if (res.status == "failed") {
          setMsg7('Daemon Failed');
          return false;
        } else if (res.status == "success" && res.data) {
          setMsg7('Attempted to Daemon Build. Refresh on another tab to check');
          return res;
        }
      }
      return false;
    } else {
      return false;
    }
  };
  const handleDaemonBuild = React.useCallback(e => {
    daemonBuild(props.apiUrl, props.domainKey, props._loggedIn);
  });
  const handleSetCurrentBuildAsSafe = React.useCallback(e => {
    console.log(e);
  });
  const handleRecover = React.useCallback(e => {
    console.log(e);
  });
  const handleCloseError = () => {
    setPageError(null);
  };
  const strippedUrl = props?.domainUrl ? props.domainUrl.replace(/(?:www\.)?/, '') : '';
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className} Admin_Build_Container`
  }, pageError ? /*#__PURE__*/React.createElement("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, pageError) : null, _h || (_h = /*#__PURE__*/React.createElement("h3", null, "Build")), /*#__PURE__*/React.createElement("div", {
    className: `Admin_Build_InternalContainer`
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput,
    onChange: handleNewBuild
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Upload your new build in .next.tar.gz format. Use makebuild script to create new build",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, _b || (_b = /*#__PURE__*/React.createElement("b", null, "Push New Build"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleUploadNewBuild
  }, "Upload Build"), msg1 ? /*#__PURE__*/React.createElement("div", {
    className: "admin_update"
  }, msg1) : null))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput2,
    onChange: handleNewBuild,
    modif: "public"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Upload your new public folder in public.tar.gz format. Use makebuild script to create public folder tar",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, _b2 || (_b2 = /*#__PURE__*/React.createElement("b", null, "Push New Public Folder"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleUploadNewBuild,
    modif: "public"
  }, "Upload Public Folder"), msg2 ? /*#__PURE__*/React.createElement("div", {
    className: "admin_update"
  }, msg2) : null))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Daemons current build uploaded to client server directory",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, _b3 || (_b3 = /*#__PURE__*/React.createElement("b", null, "Run Build"))))), /*#__PURE__*/React.createElement("p", {
    className: "admin_prompt"
  }, "Caution: Running a bad build will bring down the platform immediately. Running new builds without having installed packages will cause the platform to be taken offline as well. This is temporary until platform at sys.", strippedUrl, " can be run to serve builds when ", props.domainUrl, " is offline."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleDaemonBuild,
    modif: "public"
  }, "Deploy Build"), msg7 ? /*#__PURE__*/React.createElement("div", {
    className: "admin_update"
  }, msg7) : null))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Currently installed Packages",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, _b4 || (_b4 = /*#__PURE__*/React.createElement("b", null, "Installed Client Packages"))))), /*#__PURE__*/React.createElement("div", {
    className: "admin_container",
    style: {
      maxHeight: '300px',
      overflow: 'auto'
    }
  }, packages?.dependencies && Object.entries(packages.dependencies) ? Object.entries(packages.dependencies).map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p5",
    key: i
  }, /*#__PURE__*/React.createElement("div", null, m[0]), /*#__PURE__*/React.createElement("div", null, m[1]))) : null))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Install NPM Package here. Use Package@Version syntax for specific Version if required. Request must be approved by repo if package not already whitelisted",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, _b5 || (_b5 = /*#__PURE__*/React.createElement("b", null, "Run Install"))))), /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.adminPair} admin_pair`
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: installPackageRef
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleInstall
  }, "Install")), msg3 ? /*#__PURE__*/React.createElement("div", {
    className: "admin_update"
  }, msg3) : null)), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Will uninstall package referenced here. Ensure to upload new build before uninstalling packages that current build relies on. Otherwise platform will go down",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, _b6 || (_b6 = /*#__PURE__*/React.createElement("b", null, "Run Uninstall"))))), /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.adminPair} admin_pair`
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: uninstallPackageRef
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleInstall,
    modif: "uninstall"
  }, "Uninstall")), msg4 ? /*#__PURE__*/React.createElement("div", {
    className: "admin_update"
  }, msg4) : null))));
};
export default Module;