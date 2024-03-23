var _Script;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Script from 'next/script';
import WatchPageStyles from './WatchPage.module.scss';
import { checkSignedIn } from '../../utility/onboarding';
import { doFetchAuthForStream } from '../../utility/streaming';
import { ensureAutoPlay } from '../../video/player/utility';
import { v4 as uuidv4 } from 'uuid';
import { handleInteractMedia } from '../../util';
import { Watch } from '/layout';
const defaultPoster = 'img/internal/videoposter.png';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [intent, setIntent] = React.useState({
    action: 'page_loaded',
    trying: 'play_video',
    src: ''
  });
  const [authorized, setAuthorized] = React.useState(false);
  const [authRequirement, setAuthRequirement] = React.useState({});
  const [streamLeadPrompt, setStreamLeadPrompt] = React.useState({});
  const [password, setPassword] = React.useState(null);
  const [relevantTicket, setRelevantTicket] = React.useState({});
  const [currentPoster, setCurrentPoster] = React.useState(defaultPoster);
  const [chatState, setChatState] = React.useState(true);
  const [mobileStyleConfigs, setMobileStyleConfigs] = React.useState(false);
  let videoPlayer = React.useRef();
  let videoContainer = React.useRef();
  let videoComponent = React.useRef();
  let controlsContainer = React.useRef();
  const authContainer = React.useRef();
  const checkAuthThreshold = 2500;
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, d => {
      if (d && d.dispatch) {
        if (d.dispatch === 'updateAuth') {
          if (!authorized && authContainer.current) {
            const prompt = {
              type: 'auth',
              lead: 'Not Authorized',
              description: 'You have not been authorized to watch the stream'
            };
            console.log('auth req', authRequirement);
            if (authRequirement) {
              if (authRequirement.password) {
                prompt.password = 'The stream requires a password';
              }
              if (authRequirement.tags && authRequirement.dates && (authRequirement.tags.length > 0 || authRequirement.dates.length > 0)) {
                prompt.tags = `The stream has tags that authorize viewership of the stream. Please purchase tickets from the users shop to watch`;
                prompt.tagsList = `${authRequirement.tags.map(m => m)} ${authRequirement.dates.map(m => m)}`;
              }
            }
            setStreamLeadPrompt(prompt);
          }
        }
      }
    });
  }
  React.useEffect(() => {
    if (props?._LocalEventEmitter) {
      props._LocalEventEmitter.unsubscribe('video_set_chat_state');
      props._LocalEventEmitter.subscribe('video_set_chat_state', e => {
        console.log('Open', chatState);
        setChatState(chatState ? false : true);
      });
    }
  }, [props._LocalEventEmitter, chatState]);
  React.useEffect(() => {
    const fn = async () => {
      if (!fetchBusy) {
        if (props.watchData && props.watchData.id) {
          if (!relevantTicket.stream || relevantTicket.stream && relevantTicket.stream !== props.watchData.id) {
            setFetchBusy(true);
            // Make request for relevant ticket of all users purchases for this stream to get auth
            const data = await doFetchAuthForStream(props.apiUrl, props.domainKey, props.watchData.id, checkSignedIn);
            console.log('do fetch auth', data);
            if (data) {
              setRelevantTicket({
                stream: props.watchData.id,
                allowed: data.allowed ? data.allowed : false,
                meta: data.meta
              });
            }
          }
        }
      }
    };
    fn();
  }, [props.watchData, relevantTicket, fetchBusy]);
  React.useEffect(() => {
    if (!componentDidMount && window.videojs) {
      setComponentDidMount(new Date().getTime());
      const id = uuidv4();
      setComponentId(id);
      setTimeout(() => {
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateAuth'
        });
      }, checkAuthThreshold);
      var options = {};
      if (props.cdn && props.watchData) {
        initializePlayer(options);
      }
    }
  }, [componentDidMount, videoPlayer.current, intent, props.cdn, props.watchData]);
  React.useEffect(() => {
    if (props.cdn && props.watchData) {
      const options = {};
      initializePlayer(options);
    }
  }, [videoPlayer.current, intent, props.cdn, props.watchData]);
  const initializePlayer = options => {
    if (!videoPlayer.current && window.videojs) {
      let players = window.videojs.players;
      if (players && Object.keys(players).length) {
        if (players['my-player']) {
          players['my-player'].dispose();
        }
      }
      videoPlayer.current = window.videojs('my-player', options, async function onPlayerReady() {
        window.videojs.log('Your player is ready!');
        console.log(videoPlayer.current);
        // Add Chat Button
        const chatButton = videoPlayer.current.controlBar.addChild('button');
        const chatButtonDom = chatButton.el();
        chatButtonDom.innerHTML = 'chat';
        chatButton.addClass('chat material-icons chat-button');
        console.log(chatButton, chatButtonDom);
        const dispatchSetVideoSetChatState = () => {
          props._LocalEventEmitter.dispatch('video_set_chat_state', {});
        };
        chatButtonDom.removeEventListener('click', dispatchSetVideoSetChatState);
        chatButtonDom.addEventListener('click', dispatchSetVideoSetChatState);

        // In this context, `this` is the player that was created by Video.js.
        console.log(intent, props);
        if (intent.trying === 'play_video' && props.watchData) {
          if (props.watchData.__typename == "Live") {
            if (props.watchData.id && props.cdn && props.cdn.live) {
              // const src = `${props.cdn.live}/${props.dborigin}_live${props.dev ? '_dev' : ''}${props.devLocal ? '_local' : ''}/${props.watchData.id}/index.m3u8`
              let src;
              if (props.watchData.meta && props.watchData.meta.channel && props.watchData.meta.channel.playbackUrl) {
                const temp = {
                  ...intent
                };
                src = props.watchData.meta.channel.playbackUrl;
                temp.src = src;
                setIntent(temp);
                handleInteractMedia(props, props.watchData, intent.trying);
              }
            }
          }
        }
        this.on('error', e => {
          console.log(e);
        });

        // How about an event listener?
        this.on('ended', function () {
          window.videojs.log('Awww...over so soon?!');
          this.dispose();
        });
        if (intent.src) {
          ensureAutoPlay(this.play(), this);
        }
      });
    }
  };
  const resetAuthPrompt = () => {
    if (streamLeadPrompt && streamLeadPrompt.type && streamLeadPrompt.type === 'prompt') {
      setStreamLeadPrompt({});
    }
  };
  const checkAuthorization = video => {
    if (video && video.meta && video.meta.streamSettings) {
      const settings = video.meta.streamSettings;
      console.log('Settings', settings);
      if (settings.private) {
        // Stream is private. Check for auth. Private requires login
        if (props._loggedIn && props._loggedIn.identifier && video.author == props._loggedIn.identifier) {
          resetAuthPrompt();
          return true;
        } else if (relevantTicket && relevantTicket.allowed) {
          console.log('relevant ticket', relevantTicket);
          resetAuthPrompt();
          return true;
        } else {
          return false;
        }
      }
    }
    resetAuthPrompt();
    return true;
  };
  React.useEffect(() => {
    if (props.watchData && props.watchData.__typename == 'Live' && props.watchData.id && videoPlayer.current && videoPlayer.current.paused()) {
      // const src = `${props.cdn.live}/${props.dborigin}_live${props.dev ? '_dev' : ''}${props.devLocal ? '_local' : ''}/${props.watchData.id}/index.m3u8`
      console.log('source', props.watchData);
      let src;
      if (props.watchData.meta && props.watchData.meta.channel && props.watchData.meta.channel.playbackUrl) {
        if (intent.src !== props.watchData.meta.channel.playbackUrl) {
          const temp = {
            ...intent
          };
          src = props.watchData.meta.channel.playbackUrl;
          temp.src = src;
          setIntent(temp);
          ensureAutoPlay(videoPlayer.current.play(), videoPlayer.current);
          handleInteractMedia(props, props.watchData, intent.trying);
        }
      }
    }
  }, [props.watchData, videoPlayer.current, intent]);
  React.useEffect(() => {
    if (props.watchData) {
      const auth = checkAuthorization(props.watchData);
      if (props.watchData.meta && props.watchData.meta.streamSettings) {
        setAuthRequirement(props.watchData.meta.streamSettings);
      }
      if (authorized !== auth && props.watchData && props.watchData.meta && props.watchData.meta.channel && props.watchData.meta.channel.playbackUrl && intent && intent.src === props.watchData.meta.channel.playbackUrl) {
        setAuthorized(auth);
        if (auth) {
          videoPlayer.current.src({
            src: intent.src,
            type: 'application/x-mpegURL'
          });
        }
      }
    }
  }, [intent, authorized, props.watchData, videoPlayer.current, relevantTicket]);
  const handleSetMobileStyleConfigs = status => {
    if (mobileStyleConfigs !== status) {
      setMobileStyleConfigs(status);
    }
  };

  // Check if watching user is owner -> give admin access
  // Smoothly display livestream
  // Play livestream without audio if no interaction/no audio access
  // Play livestream with audio if available

  // Title, Description, Tags, Author, Author Icon, Click to go to auhor profile

  // TODO:
  // Subscribe, Purchase Ticket, Donate

  console.log(props, chatState);
  const menuHeight = props.menuConfig && props.menuConfig.height ? props.menuConfig.height + 2 + 'px' : '35px'; // Handles user menuConfig height for height of video page

  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} WatchPage_Container`
  }, void 0, _Script || (_Script = /*#__PURE__*/_jsx(Script, {
    src: "https://d2zsu4v7czjhvo.cloudfront.net/all/videojs/8.9.0/video.min.js"
  })), <Watch {...props} chatState={chatState} handleSetMobileStyleConfigs={handleSetMobileStyleConfigs} menuHeight={menuHeight} currentPoster={currentPoster} streamLeadPrompt={streamLeadPrompt} authContainer={authContainer} WatchPageStyles={WatchPageStyles} />);
};
export default Module;