// entry.js
import { SignIn, SignInPage } from './onboarding/signin/index';
import { WatchPage } from './streaming/watch/index';
import { CreditCard } from './payment/index';
import { fetchGet, fetchPost, retrieveUrlParams, FetchHandler } from './utility/fetch/index';
import { fetchSearchData } from './utility/search/index';
import { attemptThirdPartySignIn, checkSignedIn, checkSignedInAndPrompt, checkUserData, logout, requestSettingsUpdate, updateLocalLoginSession } from './utility/onboarding/index';
import { fetchStripeSecret, getStripeSecretData, setStripeSecretData, saveCreditCardInfo } from './utility/payment/index';
import { createShop, doUploadImageForProduct } from './utility/ecommerce/index';
import { beginStream, doFetchAuthForStream, endStream, updateStreamConfigRequest } from './utility/streaming/index';
import { initialize, joinChat, sendChat } from './utility/socket/index';
import { normalizeText, fireGlobalEvent, getTimeRemaining } from './utility/utility/index';
import { generateComponent, resolveComponent, resolvePage } from './utility';
import { IndexCta } from './cta';
import { ProfilePage } from './profile';
import { ReceiptPage } from './ecommerce/receipt';
import { Product, ProductImageManager } from './ecommerce/product';
import { Feature } from './search/feature';
import { WideFeature } from './search/wideFeature';
import { Settings } from './settings';
import { isObjectEmpty, debounce, detectAllowEditingFlag, getFormattedDate, handleInteractMedia, handleRouteChange, throttleFunctionCall, registerProxyConsoleLog, registerCheckLocalStorageSize, registerCheckMobile } from './util';
import { sendUserAnalytics } from './analytics';
import { forceUpdateProps, handleCheckUserData, handleGlobalEvent, handleSetCart, handleSetLoggedIn, registerGoogleSignIn, registerSocket, toggleSingleOpenMenu } from './utility/_app';
const Fetch = {
  fetchGet,
  fetchPost,
  retrieveUrlParams,
  FetchHandler
};
const Template = {
  IndexCta
};
const Onboarding = {
  attemptThirdPartySignIn,
  checkSignedIn,
  checkSignedInAndPrompt,
  checkUserData,
  logout,
  updateLocalLoginSession,
  requestSettingsUpdate
};
const Ecommerce = {
  createShop,
  doUploadImageForProduct,
  Product,
  ProductImageManager
};
const Payment = {
  fetchStripeSecret,
  getStripeSecretData,
  setStripeSecretData,
  saveCreditCardInfo
};
const Search = {
  Feature,
  WideFeature,
  fetchSearchData
};
const Socket = {
  initialize,
  joinChat,
  sendChat
};
const Stream = {
  beginStream,
  doFetchAuthForStream,
  endStream,
  updateStreamConfigRequest
};
const Utility = {
  generateComponent,
  resolveComponent,
  resolvePage,
  normalizeText,
  fireGlobalEvent,
  getTimeRemaining
};
const Util = {
  isObjectEmpty,
  debounce,
  detectAllowEditingFlag,
  getFormattedDate,
  handleInteractMedia,
  handleRouteChange,
  throttleFunctionCall,
  registerProxyConsoleLog,
  registerCheckLocalStorageSize,
  registerCheckMobile
};
const SettingsModules = {
  Settings
};
const Pages = {
  SignInPage,
  ProfilePage,
  WatchPage,
  ReceiptPage
};
const Analytics = {
  sendUserAnalytics
};
const _App = {
  forceUpdateProps,
  handleCheckUserData,
  handleGlobalEvent,
  handleSetCart,
  handleSetLoggedIn,
  registerGoogleSignIn,
  registerSocket,
  toggleSingleOpenMenu
};
const Modules = {
  _App,
  Analytics,
  CreditCard,
  Ecommerce,
  Fetch,
  SignIn,
  Pages,
  Onboarding,
  Payment,
  Search,
  SettingsModules,
  Stream,
  Template,
  Utility,
  Util,
  Socket
};
export default Modules;