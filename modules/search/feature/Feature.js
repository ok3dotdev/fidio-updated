var _div, _div2, _div3, _span, _span2, _span3, _span4;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureStyles from './Feature.module.scss';
import { useRouter } from 'next/router';
import { compareObjects, isObjectEmpty } from '../../util';
import { fetchSearchData } from '../../utility/search';
import { v4 as uuidv4 } from 'uuid';
const isOverflown = (clientWidth, clientHeight, scrollWidth, scrollHeight) => {
  console.log(clientWidth, clientHeight, scrollWidth, scrollHeight);
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
const Module = props => {
  let [pageError, setPageError] = React.useState(null);
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [feed, setFeed] = React.useState([]);
  const [combinedFeed, setCombinedFeed] = React.useState([]);
  const [featureData, setFeatureData] = React.useState({});
  const [featureState, setFeatureState] = React.useState({
    size: 'thin'
  });
  const [stagger, setStagger] = React.useState(false);
  const [checkContainerOverflownTime, setCheckContainerOverflownTime] = React.useState(null);
  const [containerOverflownInterval, setContainerOverflownInterval] = React.useState(null);
  const [useOverflown, setUseOverflown] = React.useState(false);
  const [lastFeatureCheck, setLastFeatureCheck] = React.useState(-1);
  const router = useRouter();
  const staggerRef = React.useRef();
  const featureContainerRef = React.useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, d => {
      if (d && d.dispatch) {
        if (d.dispatch === 'checkContainerOverflown') {
          checkFeatureContainerOverflown();
        }
      }
    });
  }
  React.useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(new Date().getTime());
      if (props.stagger) {
        staggerRef.current = setTimeout(() => {
          setStagger(true);
        }, props.stagger);
      } else {
        setStagger(true);
      }
      const id = uuidv4();
      setComponentId(id);
    }
  }, [componentDidMount, props.stagger]);
  React.useEffect(() => {
    if (componentId && props._LocalEventEmitter && !containerOverflownInterval) {
      const r = setInterval(() => {
        props._LocalEventEmitter.dispatch(componentId, {
          dispatch: 'checkContainerOverflown'
        });
      }, 5000);
      setContainerOverflownInterval(r);
    }
  }, [props._LocalEventEmitter, componentId, containerOverflownInterval]);
  React.useEffect(() => {
    if (stagger) {
      if (props.defaultSize) {
        const temp = {
          ...featureState
        };
        temp.size = props.defaultSize;
        setFeatureState(temp);
      }
    }
  }, [stagger]);
  const cycleFeatureSize = React.useCallback(e => {
    if (featureState) {
      const temp = {
        ...featureState
      };
      if (temp.size === 'thin') {
        temp.size = props.defaultSize !== 'thin' ? props.defaultSize : 'medium';
      } else if (temp.size === 'medium') {
        temp.size = props.defaultSize !== 'medium' ? props.defaultSize : 'thin';
      } else if (temp.size === 'large') {
        temp.size = props.defaultSize !== 'large' ? props.defaultSize : 'thin';
      }
      setFeatureState(temp);
    }
  });
  React.useEffect(() => {
    const f = async () => {
      const selector = props.featureData ? 'featureData' : 'noSelection';
      let useData = isObjectEmpty(featureData) ? props[selector] : featureData;
      console.log(useData);
      if (useData && !fetchBusy) {
        console.log('Use Data!', useData);
        if (lastFeatureCheck < new Date().getTime() - 10000) {
          setLastFeatureCheck(new Date().getTime());
          setFetchBusy(true);
          if (!useData.user && props._loggedIn && props._loggedIn.identifier) {
            const args = {
              identifier: props._loggedIn.identifier,
              hash: props._loggedIn.hash,
              domainKey: props.domainKey,
              params: {
                u: props._loggedIn.identifier,
                s: props.s ?? ''
              }
            };
            const res = await fetchSearchData(props.apiUrl, ['featureData'], args);
            setFetchBusy(false);
            if (res) {
              if (res && res.data && res.data[selector]) {
                setFeatureData(res.data[selector]);
              }
            }
          } else {
            setFetchBusy(false);
            setFeatureData(props[selector]);
          }
        }
      }
    };
    f();
  }, [props.featureData, featureData, feed, fetchBusy, combinedFeed, props._loggedIn, props.domainKey]);
  React.useEffect(() => {
    const f = featureData.data && Array.isArray(featureData.data) ? featureData.data.concat(feed) : [];
    let update = false;
    for (let i = 0; i < combinedFeed.length; i++) {
      if (!compareObjects(combinedFeed, f)) {
        update = true;
        break;
      }
    }
    if (combinedFeed.length === 0 && f.length !== 0) {
      setCombinedFeed(f);
    }
  }, [featureData]);
  const myLoader = ({
    src
  }) => {
    if (src.match(/greythumb/)) {
      return `${src}`;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
      return `${props.cdn.static}/${src}`;
    }
  };
  const checkFeatureContainerOverflown = () => {
    if (!checkContainerOverflownTime || checkContainerOverflownTime && checkContainerOverflownTime < new Date().getTime() - 5000) {
      if (featureContainerRef.current) {
        setCheckContainerOverflownTime(new Date().getTime());
        const clientWidth = featureContainerRef.current.clientWidth;
        const clientHeight = featureContainerRef.current.clientHeight;
        const scrollWidth = featureContainerRef.current.scrollWidth;
        const scrollHeight = featureContainerRef.current.scrollHeight;
        const overflown = isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight);
        if (overflown) {
          setUseOverflown(overflown);
          return overflown;
        }
      }
      return false;
    }
  };
  return /*#__PURE__*/_jsx("div", {
    className: `${FeatureStyles.featureExternalContainer} ${combinedFeed.length > 0 ? featureState.size === 'thin' ? `FeatureContainerOpen` : featureState.size === 'medium' ? `FeatureContainerOpen ${FeatureStyles.featureContainerOpen} FeatureContainerOpenMedium` : featureState.size === 'large' ? `FeatureContainerOpen ${FeatureStyles.featureContainerOpen} FeatureContainerOpenLarge` : '' : ''} ${props.className}`
  }, void 0, !props.hideToggle && combinedFeed.length > 0 ? /*#__PURE__*/_jsx("div", {
    className: `${FeatureStyles.sizeExpandContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${FeatureStyles.sizeExpand}`,
    onClick: cycleFeatureSize
  })) : _div || (_div = /*#__PURE__*/_jsx("div", {})), combinedFeed.length > 0 ? <div className={`${FeatureStyles.featureContainer} ${featureState && featureState.size ? featureState.size === 'medium' ? FeatureStyles.featureContainerMedium : featureState.size === 'large' ? FeatureStyles.featureContainerLarge : '' : ''} ${useOverflown ? featureState.size === 'medium' ? 'featureContainerOverflown featureContainerOverflown_medium' : featureState.size === 'large' ? 'featureContainerOverflown featureContainerOverflown_large' : '' : ''}`} ref={featureContainerRef}>
                        /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.itemContainer} ${featureState.size === 'thin' ? FeatureStyles.itemContainerThin : ''}`
    }, void 0, combinedFeed.map((item, i) => /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.item} ${featureState.size === 'thin' ? FeatureStyles.itemThin : `Item_ContainerMetaController Item_ContainerMetaControllerFeature`} Item_ContainerMetaControllerFeature_${featureState?.size ?? ''} Feature_Item`
    }, i, /*#__PURE__*/_jsx(Link, {
      href: `w?v=${item.id}`
    }, void 0, item.status === 'live' && featureState.size !== 'thin' ? /*#__PURE__*/_jsx("div", {
      className: `LiveTag ${FeatureStyles.statusContainer}`
    }, void 0, "LIVE", _div2 || (_div2 = /*#__PURE__*/_jsx("div", {
      className: "RecordingCircle RecordingCircle_Small"
    }))) : '', featureState.size !== 'thin' ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx(Image, {
      loader: myLoader,
      src: item.thumbnail && props.cdn && props.cdn.static ? item.thumbnail : 'img/default/greythumb.jpg',
      alt: item.title ? item.title : "",
      width: 60,
      height: 30,
      layout: "responsive",
      className: "Feature_Img Feature_Img_Border"
    }), /*#__PURE__*/_jsx("div", {
      className: "Item_GhostMeta Item_GhostMetaFeature"
    }, void 0, item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? /*#__PURE__*/_jsx("div", {
      className: "Item_TinyMetaText Item_TinyMetaTextFeature",
      style: {
        marginBottom: '.25rem',
        textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
      }
    }, void 0, "Stream started ", new Date(Number(item.creation)).toTimeString()) : null, /*#__PURE__*/_jsx("div", {
      className: "Item_GhostMetaContainerInternal"
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, item.description ? item.description : `Watch Livestream Now`)))) : null, /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.itemMetaContainer} ${featureState.size === 'thin' ? FeatureStyles.thinMetaContainerSize : ''}`
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.itemMetaContainerPadding}`
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.itemMetaText}`
    }, void 0, item.status === 'live' && featureState.size === 'thin' ? /*#__PURE__*/_jsx("div", {
      className: `LiveTag ${FeatureStyles.statusContainerInline} LiveTag_Thin }`
    }, void 0, _div3 || (_div3 = /*#__PURE__*/_jsx("div", {
      className: "RecordingCircle RecordingCircle_Small"
    }))) : '', /*#__PURE__*/_jsx("div", {
      className: `flex gap-p2 ${(item.title.length ? item.title.length : `${item.author_username} is Streaming Now`.length) + item.author_username.length > 20 ? 'marquee' : ''} ${featureState.size === 'thin' ? FeatureStyles.thinMeta : ''} ${FeatureStyles.itemMarqueeContainer}`
    }, void 0, (item.title.length ? item.title.length : `${item.author_username} is Streaming Now`.length) + item.author_username.length > 20 ? /*#__PURE__*/_jsx("div", {
      className: `marqueeContainer ${featureState?.size === 'thin' ? `${FeatureStyles.marqueeContainerThin}` : ''}`
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: "marquee1"
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.titleText}`
    }, void 0, item.title ? item.title : `${item.author_username} is Streaming Now`), _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, " - ")), /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.authorUser}`
    }, void 0, item.author_username)), /*#__PURE__*/_jsx("div", {
      className: "marquee2"
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.titleText}`
    }, void 0, item.title ? item.title : `${item.author_username} is Streaming Now`), _span2 || (_span2 = /*#__PURE__*/_jsx("span", {}, void 0, " - ")), /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.authorUser}`
    }, void 0, item.author_username)), /*#__PURE__*/_jsx("div", {
      className: "marquee3"
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.titleText}`
    }, void 0, item.title ? item.title : `${item.author_username} is Streaming Now`), _span3 || (_span3 = /*#__PURE__*/_jsx("span", {}, void 0, " - ")), /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.authorUser}`
    }, void 0, item.author_username))) : /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.titleText}`
    }, void 0, item.title ? item.title : `${item.author_username} is Streaming Now`), _span4 || (_span4 = /*#__PURE__*/_jsx("span", {}, void 0, " - ")), /*#__PURE__*/_jsx("div", {
      className: `${FeatureStyles.authorUser}`
    }, void 0, item.author_username))))))))))
                    </div> : null);
};
export default Module;