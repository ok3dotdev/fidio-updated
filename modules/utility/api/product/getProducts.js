import { fetchPost } from '/modules/utility/fetch';
export default async function handler(body) {
  if (body?.apiUrl) {
    const useBody = {
      id: body.id,
      // If existing, get product matching id
      pagination: body.pagination // Paginate
    };
    if (Object.prototype.hasOwnProperty.call(body, 'meta')) {
      useBody.meta = body.meta; // If true, only get where meta matches type
    }
    if (Object.prototype.hasOwnProperty.call(body, 'extra')) {
      useBody.extra = body.extra; // Extra fields match
    }
    const res = await fetchPost(body.apiUrl + '/m/getproducts', null, null, useBody);
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