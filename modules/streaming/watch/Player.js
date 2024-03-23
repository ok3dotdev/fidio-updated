var _p;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import WatchPageStyles from './WatchPage.module.scss';
const Module = props => {
  return /*#__PURE__*/_jsx("div", {
    className: `${props?.className ?? ''} ${WatchPageStyles.videoContainer} ${props?.mobileStyleConfigs ? `${WatchPageStyles.mobileVideoPlayer}` : null} WatchPage_VideoContainer`
  }, void 0, /*#__PURE__*/_jsx("video", {
    id: "my-player",
    class: `${WatchPageStyles.videoPlayer} video-js WatchPage_VideoPlayer`,
    style: {
      maxHeight: `calc(100vh - ${props?.menuHeight}`
    },
    controls: true,
    preload: "auto",
    playsInline: true,
    poster: props?.currentPoster
  }, void 0, _p || (_p = /*#__PURE__*/_jsx("p", {
    class: "vjs-no-js"
  }, void 0, "To view this video please enable JavaScript, and consider upgrading to a web browser that", /*#__PURE__*/_jsx("a", {
    href: "https://videojs.com/html5-video-support/",
    target: "_blank"
  }, void 0, "supports HTML5 video")))));
};
export default Module;