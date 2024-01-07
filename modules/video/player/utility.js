"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAutoPlay = ensureAutoPlay;
function _callback_onAutoplayBlocked() {
  // do something, for example "show big play button"
}
function isSafari() {
  var chr = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  var sfri = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  return !chr && sfri;
}
function ensureAutoPlay(p, player) {
  var s = window['Promise'] ? window['Promise'].toString() : '';
  if (s.indexOf('function Promise()') !== -1 || s.indexOf('function ZoneAwarePromise()') !== -1) {
    p["catch"](function (error) {
      console.error("_checkAutoPlay, error:", error);
      if (error.name == "NotAllowedError") {
        // For Chrome/Firefox
        console.error("_checkAutoPlay: error.name:", "NotAllowedError");
        _callback_onAutoplayBlocked();
      } else if (error.name == "AbortError" && isSafari()) {
        // Only for Safari
        console.error("_checkAutoPlay: AbortError (Safari)");
        _callback_onAutoplayBlocked();
      } else {
        console.error("_checkAutoPlay: happened something else ", error);
        // throw error; // happened something else
      }

      return error;
    }).then(function (error) {
      console.log("_checkAutoPlay: then");
      console.log(p, player);
      if (error && error.toString && /failed because the user didn\'t interact with the document first/.test(error.toString())) {
        player.muted(true);
      }
      player.play(); // Auto-play should start
    });
  } else {
    console.error("_checkAutoplay: promise could not work in your browser ", p);
  }
}