import { resolveVariables } from '/app.config';
export const fetchPost = async (route, headers, cred, body = {}, options = {}) => {
  if (!headers && !options.formData) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }
  if (!cred) {
    cred = resolveVariables().corsdefault;
  }
  console.log(route, fetch);
  let updatedBody = body;
  if (options.formData) {
    body.append('dborigin', resolveVariables().dborigin);
    if (body.has('domainKey')) {
      body.delete('domainKey');
    }
    body.append('domainKey', resolveVariables().domainKey);
  } else {
    updatedBody.dborigin = resolveVariables().dborigin;
    updatedBody.domainKey = resolveVariables().domainKey;
  }
  console.log('Form Data', options.formData);
  const payload = {
    method: "POST",
    cred: cred,
    body: options.formData ? body : JSON.stringify(updatedBody)
  };
  if (headers) {
    payload.headers = headers;
  }
  return await fetch(route, payload).then(function (response) {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
    return err;
  });
};
export const fetchGet = async (route, headers, cred, options) => {
  if (!headers) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }
  if (!cred) {
    cred = resolveVariables().corsdefault;
  }
  return await fetch(route, {
    method: "GET",
    headers: headers,
    cred: cred
  }).then(function (response) {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    return err;
  });
};
export const retrieveUrlParams = () => {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
};