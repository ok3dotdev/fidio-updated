import React from 'react';
import { debounce } from '../../util.js';
import GridListStyles from './gridList.module.scss';
import VideoItem from './videoItem.js';
import { detectAllowEditingFlag } from '../../util.js';
const GridList = props => {
  let isMounted = React.useRef(false);
  let [activeItem, setActiveItem] = React.useState(-1);
  let [activeItemData, setActiveItemData] = React.useState(null);
  let [previousActiveItemData, setPreviousActiveItemData] = React.useState(null);
  const ACTIVE_ITEM_DELAY = 1000;
  React.useEffect(() => {
    if (!isMounted.current && props.cdn) {
      isMounted.current = true;
    }
    return () => {};
  }, [props.cdn]);
  const delayedSetActiveItem = React.useCallback(debounce((e, i, d, p) => handleSetActiveItem(e, i, d, p), ACTIVE_ITEM_DELAY), []); // Debounce activation of highlighted list item after mouseover
  const handleSetActiveItem = async (e, i, d, p) => {
    try {
      setActiveItemData(d);
      let gc = getGhostContainerOfIndex(i, 'ghostVideoItem');
      if (gc && moveableVideoComponent && moveableVideoComponent.current && d && videoComponent && videoComponent.current) {
        gc.appendChild(moveableVideoComponent.current);
        let mvc = document && document.getElementsByClassName('moveableVideoContainer') && document.getElementsByClassName('moveableVideoContainer')[0] ? document.getElementsByClassName('moveableVideoContainer')[0] : null;
        if (mvc) {
          mvc.style.display = "block";
          if (p != d) {
            videoContainer.current.style.transition = 0 + "ms";
            mvc.style.opacity = "0";
          }
          setPreviousActiveItemData(d);
          videoContainer.current.style.transition = 200 + "ms";
          setTimeout(() => {
            setActiveItem(i); // Sets active grid item for highlight and playback
            mvc.style.opacity = "1";
          }, 750);
          const allowPlayback = checkAllowedPlayback(d);
          if (!allowPlayback) {
            return;
          }
          let r = await videoPlayer.current.loadMedia(d, cdnData.videoCdn, "/video/", true, true); // Get config: videoPlayer.current.player.getConfiguration()
          videoComponent.current.play();
        }
      }
    } catch (err) {
      // Component was unmounted. Fail silently
    }
  };

  // transition in opacity slowly during playback
  // stop, freeze, disappear on mouseout

  /**
   * Initialize moveable Video Component
   * @param {*} cdn 
   */
  const initializeVideoPlayer = async cdn => {
    videoPlayer.current = new VideoPlayer();
    videoPlayer.current.initPlayer(videoComponent.current).then(async data => {
      if (videoComponent && videoPlayer && videoPlayer.current) {
        videoPlayer.current.cdn = cdn;
        //let a = await videoPlayer.current.player.configure('abr.defaultBandwidthEstimate', 1);
        // const uiConfig = {};
        // uiConfig['controlPanelElements'] = ['time_and_duration', 'spacer'];
        // const ui = new videoPlayer.current.shaka.ui.Overlay(videoPlayer.current.player, videoContainer.current, videoComponent.current);
        // ui.configure(uiConfig);
        // ui.getControls();
        // let r = await videoPlayer.current.loadMedia({
        //     mpd: '847f6af4d6454924ae606335143bfc74-mpd.mpd',
        //     hls: "847f6af4d6454924ae606335143bfc74-hls.m3u8"
        // }, cdnData.videoCdn, "/video/");
        // videoComponent.current.play();
        moveableVideoComponent.current = videoContainer.current;
        videoContainer.current.style.opacity = "0";
        videoContainer.current.remove();
      }
    });
  };
  return <div className={`${GridListStyles.leadContainer}`}>
            {props._gridItems && props._gridItems.map ? props._gridListType == 'video' ? props._gridItems.map((item, i) => <div className={`${GridListStyles.col}`} key={i}>
                                <VideoItem item={item} index={i} setActive={(e, i, d, p) => {
        delayedSetActiveItem(e, i, d, p);
      }} unsetActiveItem={i => {
        // setActiveItem(-1);
        setActiveItemData(null);
      }} activeItem={activeItem} previousActiveItemData={previousActiveItemData} allowEditingFlag={detectAllowEditingFlag(item, props._loggedIn)} {...props}></VideoItem>
                            </div>) : props._gridListType == 'product' ? props._gridItems.map((item, i) => <div className={`${GridListStyles.col}`} key={i}>
                            Product
                        </div>) : null : null}
        </div>;
};
export default GridList;