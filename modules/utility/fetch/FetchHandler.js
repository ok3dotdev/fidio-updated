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
  return <div className={`${props.className}`}>
            
        </div>;
};
export default Module;