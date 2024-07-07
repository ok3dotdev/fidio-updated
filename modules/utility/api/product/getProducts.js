import { fetchPost } from '/modules/utility/fetch';
export default async function handler(t) {
  if (t?.apiUrl) {
    var r = { id: t.id, pagination: t.pagination },
      t =
        (Object.prototype.hasOwnProperty.call(t, 'meta') && (r.meta = t.meta),
        Object.prototype.hasOwnProperty.call(t, 'extra') && (r.extra = t.extra),
        t?.groupBy && (r.groupBy = t.groupBy),
        t?.lt && (r.lt = t.lt),
        t?.gt && (r.lt = t.gt),
        t?.sortField && (r.sortField = t.sortField),
        t?.sortDirection && (r.sortDirection = t.sortDirection),
        await fetchPost(t.apiUrl + '/m/getproducts', null, null, r));
    if (t && t.hasOwnProperty('status')) {
      if ('disauthenticated' == t.status) return logout(), 'disauthenticated';
      if ('failed' == t.status) return !1;
      if ('success' == t.status) return t;
    }
  }
  return !1;
}
