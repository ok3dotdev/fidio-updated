"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _videoItemModule = _interopRequireDefault(require("./videoItem.module.scss"));
var _div, _div2;
var _excluded = ["item", "index", "setActive", "unsetActiveItem", "activeItem", "previousActiveItemData", "allowEditingFlag"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var VideoItem = function VideoItem(props) {
  var item = props.item,
    index = props.index,
    setActive = props.setActive,
    unsetActiveItem = props.unsetActiveItem,
    activeItem = props.activeItem,
    previousActiveItemData = props.previousActiveItemData,
    allowEditingFlag = props.allowEditingFlag,
    rest = _objectWithoutProperties(props, _excluded);
  var videoItemImageRef = _react["default"].useRef();
  var myLoader = function myLoader(_ref) {
    var src = _ref.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  _react["default"].useEffect(function () {
    var setActiveCall = function setActiveCall(e) {
      setActive(e, index, item, previousActiveItemData);
    };
    var unsetActiveItemCall = function unsetActiveItemCall() {
      unsetActiveItem(index);
    };
    if (typeof index == "number" && videoItemImageRef && videoItemImageRef.current && item) {
      videoItemImageRef.current.addEventListener('mouseenter', setActiveCall);
      videoItemImageRef.current.addEventListener('mouseleave', unsetActiveItemCall);
    }
    return function () {
      if (videoItemImageRef && videoItemImageRef.current && item) {
        videoItemImageRef.current.removeEventListener('mouseenter', setActiveCall);
        videoItemImageRef.current.removeEventListener('mouseleave', unsetActiveItemCall);
      }
    };
  }, [index, videoItemImageRef, item, activeItem, previousActiveItemData]);
  console.log(item, props);
  return <div className={"".concat(_videoItemModule["default"].leadContainer, " Item_GhostMetaItemContainer")} key={index}>
            <div className={activeItem == index ? "".concat(_videoItemModule["default"].container, " activeVideoItemContainer") : "".concat(_videoItemModule["default"].container)} ref={videoItemImageRef}>
                <_link.default href={"w?v=".concat(item.id)} style={{
        display: 'grid'
      }}>
                    <div className={activeItem == index ? "".concat(_videoItemModule["default"].ghostVideoContainer, " ").concat(_videoItemModule["default"].ghostVideoContainerActive, " ghostVideoContainerItem ghostVideoContainerItemActive") : "".concat(_videoItemModule["default"].ghostVideoContainer, " ghostVideoContainerItem")}>
                        {_div || (_div = <div className={"ghostVideoItem"}></div>)}
                        <div className={"ghostVideoMeta"}>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    </div>
                </_link.default>
                <_link.default href={"w?v=".concat(item.id)} style={{
        display: 'grid'
      }}>
                    {item && item.__typename == 'Live' && item.status == 'live' ? <div className='LiveTag' style={{
          borderRadius: '.25rem'
        }}>LIVE{_div2 || (_div2 = <div className='RecordingCircle RecordingCircle_Small'></div>)}</div> : null}
                    <div className='Item_GhostMetaContainer'>
                        {item && item.__typename == 'Live' ? <div className='Item_GhostMeta'>
                                    {item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? <div className='Item_TinyMetaText' style={{
              marginBottom: '.25rem',
              textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
            }}>Stream started {new Date(Number(item.creation)).toTimeString()}</div> : null}
                                    <div className='Item_GhostMetaContainerInternal'>
                                        <div>{item.description ? item.description : "Watch Livestream Now"}</div>
                                    </div>
                                </div> : null}
                    </div>
                    <_image.default loader={myLoader} src={item.gif && props.cdn && props.cdn["static"] ? item.gif : item.thumbnail && props.cdn && props.cdn["static"] ? item.thumbnail : 'img/default/greythumb.jpg'} alt={item.title ? item.title : ""} width={320} height={180} layout="responsive" />
                </_link.default>
            </div>
            <div className={"".concat(_videoItemModule["default"].metaContainer)}>
                <div>{item && item.title ? item.title : null}</div>
                
            </div>
        </div>;
};
var _default = exports["default"] = VideoItem;