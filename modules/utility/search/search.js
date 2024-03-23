import { fetchPost } from "../fetch";

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
export const fetchSearchData = async (apiUrl, dataFetch, args) => {
  const body = args;
  for (let i = 0; i < dataFetch.length; i++) {
    body[dataFetch[i] + 'Req'] = true;
  }
  body.function = 'fetchSearchData';
  const defaults = await fetchPost(apiUrl + '/m/pagedefaults', null, null, body);
  return defaults;
};