import { fetchPost } from "../fetch";
export const getOrders = async (uri, domainKey, user, sortField, sort, offset, limit) => {
  if (user.identifier && user.hash && domainKey) {
    const body = {
      identifier: user.identifier,
      hash: user.hash,
      domainKey: domainKey,
      sortField: sortField,
      sort: sort,
      offset: offset,
      limit: limit
    };
    let res = await fetchPost(uri + '/m/getorders', null, null, body);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success" && res.data) {
        return res;
      }
    }
    return false;
  } else {
    return false;
  }
};