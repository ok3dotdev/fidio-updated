var _p;
import React from 'react';
import WatchPageStyles from './WatchPage.module.scss';
const Module = props => {
  return <div className={`${props?.className ?? ''} ${WatchPageStyles.videoContainer} ${props?.mobileStyleConfigs ? `${WatchPageStyles.mobileVideoPlayer}` : null} WatchPage_VideoContainer`}>
            <video id="my-player" class={`${WatchPageStyles.videoPlayer} video-js WatchPage_VideoPlayer`} style={{
      maxHeight: `calc(100vh - ${props?.menuHeight}`
    }} controls preload="auto" playsInline poster={props?.currentPoster}>
                {_p || (_p = <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                    </a>
                </p>)}
            </video>
        </div>;
};
export default Module;