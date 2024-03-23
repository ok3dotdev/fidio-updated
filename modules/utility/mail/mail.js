import { fetchPost } from '../fetch/fetch';
import { logout } from '/modules/utility/onboarding/SignIn.js';

/**
* Sends single survey email
* @param {string} uri
* @param {string} domainKey
* @param {*} data 
* @param {Object} who Optional identification of user
* @returns 
*/
export const sendSurveyEmail = async (uri, domainKey, data, surveyName, who) => {
  let fetchBody = {
    domainKey: domainKey,
    hash: who?.hash,
    identifier: who?.identifier,
    answers: data,
    surveyName: surveyName
  };
  console.log(uri, fetchBody);
  let res = await fetchPost(uri + '/m/sendsurveyemail', null, null, fetchBody);
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
};