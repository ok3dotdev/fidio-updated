var _p;
import React from 'react';
import WatchPageStyles from './WatchPage.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${props?.className ?? ''} ${WatchPageStyles.videoContainer} ${props?.mobileStyleConfigs ? `${WatchPageStyles.mobileVideoPlayer}` : null} WatchPage_VideoContainer`
  }, /*#__PURE__*/React.createElement("video", {
    id: "my-player",
    class: `${WatchPageStyles.videoPlayer} video-js WatchPage_VideoPlayer`,
    style: {
      maxHeight: `calc(100vh - ${props?.menuHeight}`
    },
    controls: true,
    preload: "auto",
    playsInline: true,
    poster: props?.currentPoster
  }, _p || (_p = /*#__PURE__*/React.createElement("p", {
    class: "vjs-no-js"
  }, "To view this video please enable JavaScript, and consider upgrading to a web browser that", /*#__PURE__*/React.createElement("a", {
    href: "https://videojs.com/html5-video-support/",
    target: "_blank"
  }, "supports HTML5 video")))));
};
export default Module;