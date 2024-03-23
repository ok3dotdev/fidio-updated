var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { fetchPost } from './fetch';
const Module = props => {
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [didFetch, setDidFetch] = React.useState(false);
  const [lastFetch, setLastFetch] = React.useState(-1);
  React.useEffect(() => {
    const f = async () => {
      try {
        if (props.apiUrl) {
          if (!fetchBusy && props.handlerArgs && props.domainKey && props.apiUrl && !didFetch) {
            setFetchBusy(true);
            setTimeout(() => {
              setFetchBusy(false);
            }, 15000);
            setLastFetch(new Date().getTime());
            setDidFetch(true);
            let fetchBody = {
              domainKey: props.domainKey,
              handlerName: props.handlerName ?? null,
              handlerArgs: props.handlerArgs
            };
            let res = await fetchPost(props.apiUrl + '/m/fetchhandler', null, null, fetchBody);
            console.log('Handler', res);
            if (!res) {
              setFetchBusy(false);
              return false;
            } else if (res.hasOwnProperty('status')) {
              if (res.status == "failed") {
                setFetchBusy(false);
                return false;
              } else if (res.status == "success") {
                setFetchBusy(false);
                if (props.receiveData) {
                  props.receiveData(res);
                }
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
        setFetchBusy(false);
      }
    };
    f();
  }, [didFetch, fetchBusy, props?.handlerName, props.handlerArgs, props.domainKey]);
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className}`
  });
};
export default Module;