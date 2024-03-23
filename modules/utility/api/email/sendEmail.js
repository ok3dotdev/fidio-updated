import { fetchPost } from '/modules/utility/fetch';
import { resolveVariables } from '../../../../app.config';
export default async function handler(body) {
  if (body) {
    let useBody = {};
    const handleAdd = (keys, b) => {
      if (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
          if (Object.prototype.hasOwnProperty.call(body, keys[i])) {
            b[keys[i]] = body[keys[i]];
          }
        }
      }
      return b;
    };
    useBody = handleAdd(['toUserId', 'toUsername', 'toEmail', 'subject', 'content'], useBody);
    const res = await fetchPost(resolveVariables()?.apiUrl + '/m/sendemail', null, null, useBody);
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
}