import { fetchPost } from '../utility/fetch/fetch';
import { logout } from '/modules/utility/onboarding/SignIn.js';
import { _LocalEventEmitter } from '/modules/events/LocalEventEmitter';
export const inviteFriend = async (uri, domainKey, user, data) => {
  if (user.identifier && user.hash && data?.email) {
    let fetchBody = {
      domainKey: domainKey,
      data: data,
      hash: user.hash,
      identifier: user.identifier
    };
    let res = await fetchPost(uri + '/m/invitefriend', null, null, fetchBody);
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