import { fetchPost } from '/modules/utility/fetch/fetch.js';
import { logout } from '/modules/utility/onboarding/SignIn.js';

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
export const beginStream = async (apiUrl, domainKey, data, checkSignedIn) => {
  let user = checkSignedIn();
  if (user) {
    if (user.identifier && user.hash) {
      let fetchBody = {
        cus_id: data.stripeSecret.user,
        dontForce: data.dontForce,
        streamSettings: data.streamSettings,
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier
      };
      let res = await fetchPost(apiUrl + '/m/beginstream', null, null, fetchBody);
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
  } else {
    return false;
  }
};

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
export const endStream = async (apiUrl, domainKey, data, checkSignedIn) => {
  let user = checkSignedIn();
  if (user) {
    if (user.identifier && user.hash) {
      let fetchBody = {
        stream: data.stream,
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier
      };
      let res = await fetchPost(apiUrl + '/m/endstream', null, null, fetchBody);
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
  } else {
    return false;
  }
};

/**
* Check auth for stream
* @param {string} uri
* @param {string} domainKey
* @param {*} stream
* @param {function} checkSignedIn
* @returns 
*/
export const doFetchAuthForStream = async (apiUrl, domainKey, stream, checkSignedIn) => {
  let user = checkSignedIn();
  if (user) {
    if (user.identifier && user.hash) {
      let fetchBody = {
        stream: stream,
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier
      };
      let res = await fetchPost(apiUrl + '/m/getauthforstream', null, null, fetchBody);
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
  } else {
    return false;
  }
};

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
export const updateStreamConfigRequest = async (apiUrl, domainKey, data, checkSignedIn) => {
  let user = checkSignedIn();
  if (user) {
    if (user.identifier && user.hash) {
      let fetchBody = {
        stream: data.stream,
        streamData: data.streamData,
        streamSettings: data.streamSettings,
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier
      };
      console.log(fetchBody);
      let res = await fetchPost(apiUrl + '/m/updatestreamconfig', null, null, fetchBody);
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
  } else {
    return false;
  }
};

/**
* Begin single live stream
* @param {string} uri
* @param {string} domainKey
* @param {*} data
* @param {function} checkSignedIn
* @returns 
*/
export const requestStreamingPermissions = async (apiUrl, domainKey, checkSignedIn) => {
  let user = checkSignedIn();
  if (user) {
    if (user.identifier && user.hash) {
      let fetchBody = {
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier
      };
      console.log(fetchBody);
      let res = await fetchPost(apiUrl + '/m/requeststreamingpermissions', null, null, fetchBody);
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
  } else {
    return false;
  }
};