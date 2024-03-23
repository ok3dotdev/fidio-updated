import { fetchPost } from "./utility/fetch";
export const sendUserAnalytics = async (uri, domainKey, user, ledger, force) => {
  if (user.identifier && user.hash && domainKey && ledger) {
    if (ledger?.ledger && (ledger.ledger.length % 25 === 0 || force)) {
      const body = {
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier,
        ledger: ledger
      };
      let res = await fetchPost(uri + '/m/senduseranalytics', null, null, body);
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
    }
    return false;
  } else {
    return false;
  }
};