var _div, _div2;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VideoItemStyles from './videoItem.module.scss';
const VideoItem = props => {
  let {
    item,
    index,
    setActive,
    unsetActiveItem,
    activeItem,
    previousActiveItemData,
    allowEditingFlag,
    ...rest
  } = props;
  let videoItemImageRef = React.useRef();
  const myLoader = ({
    src
  }) => {
    if (src.match(/greythumb/)) {
      return `${src}`;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
      return `${props.cdn.static}/${src}`;
    }
  };
  React.useEffect(() => {
    const setActiveCall = e => {
      setActive(e, index, item, previousActiveItemData);
    };
    const unsetActiveItemCall = () => {
      unsetActiveItem(index);
    };
    if (typeof index == "number" && videoItemImageRef && videoItemImageRef.current && item) {
      videoItemImageRef.current.addEventListener('mouseenter', setActiveCall);
      videoItemImageRef.current.addEventListener('mouseleave', unsetActiveItemCall);
    }
    return () => {
      if (videoItemImageRef && videoItemImageRef.current && item) {
        videoItemImageRef.current.removeEventListener('mouseenter', setActiveCall);
        videoItemImageRef.current.removeEventListener('mouseleave', unsetActiveItemCall);
      }
    };
  }, [index, videoItemImageRef, item, activeItem, previousActiveItemData]);
  console.log(item, props);
  return /*#__PURE__*/_jsx("div", {
    className: `${VideoItemStyles.leadContainer} Item_GhostMetaItemContainer`
  }, index, <div className={activeItem == index ? `${VideoItemStyles.container} activeVideoItemContainer` : `${VideoItemStyles.container}`} ref={videoItemImageRef}>
                /*#__PURE__*/_jsx(Link, {
      href: `w?v=${item.id}`,
      style: {
        display: 'grid'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: activeItem == index ? `${VideoItemStyles.ghostVideoContainer} ${VideoItemStyles.ghostVideoContainerActive} ghostVideoContainerItem ghostVideoContainerItemActive` : `${VideoItemStyles.ghostVideoContainer} ghostVideoContainerItem`
    }, void 0, _div || (_div = /*#__PURE__*/_jsx("div", {
      className: `ghostVideoItem`
    })), /*#__PURE__*/_jsx("div", {
      className: `ghostVideoMeta`
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, item.title))))
                /*#__PURE__*/_jsx(Link, {
      href: `w?v=${item.id}`,
      style: {
        display: 'grid'
      }
    }, void 0, item && item.__typename == 'Live' && item.status == 'live' ? /*#__PURE__*/_jsx("div", {
      className: "LiveTag",
      style: {
        borderRadius: '.25rem'
      }
    }, void 0, "LIVE", _div2 || (_div2 = /*#__PURE__*/_jsx("div", {
      className: "RecordingCircle RecordingCircle_Small"
    }))) : null, /*#__PURE__*/_jsx("div", {
      className: "Item_GhostMetaContainer"
    }, void 0, item && item.__typename == 'Live' ? /*#__PURE__*/_jsx("div", {
      className: "Item_GhostMeta"
    }, void 0, item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? /*#__PURE__*/_jsx("div", {
      className: "Item_TinyMetaText",
      style: {
        marginBottom: '.25rem',
        textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
      }
    }, void 0, "Stream started ", new Date(Number(item.creation)).toTimeString()) : null, /*#__PURE__*/_jsx("div", {
      className: "Item_GhostMetaContainerInternal"
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, item.description ? item.description : `Watch Livestream Now`))) : null), /*#__PURE__*/_jsx(Image, {
      loader: myLoader,
      src: item.gif && props.cdn && props.cdn.static ? item.gif : item.thumbnail && props.cdn && props.cdn.static ? item.thumbnail : 'img/default/greythumb.jpg',
      alt: item.title ? item.title : "",
      width: 320,
      height: 180,
      layout: "responsive"
    }))
            </div>, /*#__PURE__*/_jsx("div", {
    className: `${VideoItemStyles.metaContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, item && item.title ? item.title : null)));
};
export default VideoItem;