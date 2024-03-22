"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _PresentationModule = _interopRequireDefault(require("../../Presentation.module.scss"));
var _ProductImageManagerModule = _interopRequireDefault(require("../../../ecommerce/product/ProductImageManager.module.scss"));
var _ecommerce = require("../../../utility/ecommerce");
var _utility = require("../../../utility/utility");
var _utility2 = require("../../utility");
var _util = require("../../../util");
var _link = _interopRequireDefault(require("next/link"));
var _image = _interopRequireDefault(require("next/image"));
var _uuid = require("uuid");
var moduleName = 'IndexHello';
var RESET_CTA_TIMER = 180000;
var Module = function Module(props) {
  var _m$leadBg, _props$menuConfig$hei, _props$menuConfig, _m$author, _m$icon2, _m$author2, _m$iconWidth, _m$iconHeight, _m$author3, _m$author4, _m$title, _m$item, _m$item2, _m$item3, _m$description, _m$detailmeta;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    reqData = _React$useState4[0],
    setReqData = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(-1),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    lastSetReqData = _React$useState6[0],
    setLastSetReqData = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    useCountdown = _React$useState8[0],
    setUseCountdown = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    ctaClickedOnce = _React$useState10[0],
    setCtaClickedOnce = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    displayTime = _React$useState12[0],
    setDisplayTime = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    componentId = _React$useState14[0],
    setComponentId = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var ctaRef = _react["default"].useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, function (d) {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        var _reqData$date;
        var useCurrentTime = (_reqData$date = reqData === null || reqData === void 0 ? void 0 : reqData.date) !== null && _reqData$date !== void 0 ? _reqData$date : null;
        if (useCurrentTime !== null && useCurrentTime !== undefined) {
          var useTime = typeof useCurrentTime === 'string' ? new Date(Number(useCurrentTime)) : (0, _typeof2["default"])(useCurrentTime) === 'object' ? new Date(useCurrentTime) : new Date(useCurrentTime);
          if ((0, _utility2.datePassed)(useTime)) {
            setUseCountdown('nodate');
          } else if (!isNaN(useTime)) {
            var timeRemaining = (0, _utility.getTimeRemaining)(useTime, new Date());
            if (timeRemaining) {
              setUseCountdown(timeRemaining);
              setDisplayTime(true);
            }
          }
        } else {
          setUseCountdown('nodate');
          setDisplayTime(false);
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(new Date().getTime());
      var id = (0, _uuid.v4)();
      setDisplayTime(false);
      setInterval(function () {
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setComponentId(id);
    }
  }, [componentDidMount, props === null || props === void 0 ? void 0 : props.eventData]);
  var handleFireGlobalEvent = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var _e$currentTarget;
      var cta, tempRef;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCtaClickedOnce(true);
            if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute('ctaAfter')) {
              e.currentTarget.innerHTML = e.currentTarget.getAttribute('ctaAfter');
              cta = e.currentTarget.getAttribute('cta');
              tempRef = e.currentTarget;
              setTimeout(function () {
                try {
                  tempRef.innerHTML = cta;
                } catch (err) {
                  // fail silently
                }
              }, RESET_CTA_TIMER);
            }
            (0, _utility.fireGlobalEvent)(e, props._LocalEventEmitter);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  _react["default"].useEffect(function () {
    var _props$eventData;
    if (props !== null && props !== void 0 && (_props$eventData = props.eventData) !== null && _props$eventData !== void 0 && _props$eventData.id) {
      if (props.eventData.id !== reqData && (lastSetReqData === -1 || lastSetReqData < new Date().getTime() - 5000)) {
        var useData = (0, _utility2.normalizeData)([props.eventData]);
        setReqData(useData[0]);
      }
    }
  }, [props === null || props === void 0 ? void 0 : props.eventData, reqData]);
  var resolveImage = function resolveImage(item, img, type) {
    if (item !== null && item !== void 0 && item.rawBg && type === 'bg') {
      return img;
    } else if (item !== null && item !== void 0 && item.raw && type === 'icon') {
      return img;
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0 && img) {
      return "".concat(props.cdn["static"], "/").concat(img);
    }
    return 'img/default/greythumb.jpg';
  };
  var m = reqData !== null && reqData !== void 0 && reqData.id ? reqData : null;
  console.log(m);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(_PresentationModule["default"].IndexBgContainer, " EventPage_Container")
  }, props.children, !props.hideDefault ? m ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].Container, " EventPage_EventContainer ")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].BgUpperContainer, " ").concat(moduleName, "_Container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].BgContainer, " ").concat(moduleName, "_BgContainer ").concat(props.bgClassName),
    style: {
      backgroundImage: "url(".concat(resolveImage(m, (_m$leadBg = m === null || m === void 0 ? void 0 : m.leadBg) !== null && _m$leadBg !== void 0 ? _m$leadBg : null, 'bg'), ")")
    }
  }, props.children, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].FillPageContainer, " ").concat(_PresentationModule["default"].FillPageContainerEvent, " ").concat(moduleName, "_FillPageContainer"),
    style: {
      height: "calc(100vh - ".concat((_props$menuConfig$hei = props === null || props === void 0 || (_props$menuConfig = props.menuConfig) === null || _props$menuConfig === void 0 ? void 0 : _props$menuConfig.height) !== null && _props$menuConfig$hei !== void 0 ? _props$menuConfig$hei : 45, "px)")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeContainer, " ").concat(moduleName, "_TimeContainer ").concat(props.timeContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeCountdown, " ").concat(moduleName, "_TimeCountdown ").concat(props.timeCountdownClassName, " ").concat(useCountdown ? "".concat(_PresentationModule["default"].TimeCountdownVisible) : null)
  }, useCountdown && setDisplayTime ? useCountdown === 'nodate' ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, useCountdown.days > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSection, " ").concat(moduleName, "_TimeSection ").concat(_PresentationModule["default"].TimeSectionDay, " ").concat(props.timeSectionClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionValue, " ").concat(moduleName, "_TimeSectionValue ").concat(props.timeSectionValueClassName)
  }, useCountdown.days), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionLabel, " ").concat(moduleName, "_TimeSectionLabel ").concat(props.TimeSectionLabelClassName)
  }, "Days")) : null, useCountdown.days > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionColon, " ").concat(moduleName, "_TimeSectionColon ").concat(props.timeSectionColonClassName)
  }, ":") : null, useCountdown.hours === 0 && useCountdown.minutes === 0 && useCountdown.seconds === 0 ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSection, " ").concat(moduleName, "_TimeSection ").concat(props.timeSectionClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionValue, " ").concat(moduleName, "_TimeSectionValue ").concat(props.timeSectionValueClassName)
  }, useCountdown.hours), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionLabel, " ").concat(moduleName, "_TimeSectionLabel ").concat(props.TimeSectionLabelClassName)
  }, "Hours")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionColon, " ").concat(moduleName, "_TimeSectionColon ").concat(props.timeSectionColonClassName)
  }, ":"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSection, " ").concat(moduleName, "_TimeSection ").concat(props.timeSectionClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionValue, " ").concat(moduleName, "_TimeSectionValue ").concat(props.timeSectionValueClassName)
  }, useCountdown.minutes), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionLabel, " ").concat(moduleName, "_TimeSectionLabel ").concat(props.TimeSectionLabelClassName)
  }, "Minutes")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionColon, " ").concat(moduleName, "_TimeSectionColon ").concat(props.timeSectionColonClassName)
  }, ":"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSection, " ").concat(moduleName, "_TimeSection ").concat(props.timeSectionClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionValue, " ").concat(moduleName, "_TimeSectionValue ").concat(props.timeSectionValueClassName)
  }, useCountdown.seconds), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSectionLabel, " ").concat(moduleName, "_TimeSectionLabel ").concat(props.TimeSectionLabelClassName)
  }, "Seconds")))) : null), m.showSimpleDate && useCountdown ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSimple, " ").concat(moduleName, "_TimeSimple ").concat(props.timeSimpleClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && m.date ? (0, _utility2.resolveGoodDate)(m.date) : '')) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].DataContainer, " ").concat(moduleName, "_DataContainer ").concat(props.DataContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].AuthorContainer, " ").concat(moduleName, "_AuthorContainer ").concat(props.authorContainerClassName)
  }, (m === null || m === void 0 ? void 0 : m.icon) !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IconContainer, " ").concat(moduleName, "_IconContainer ").concat(props.iconContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p?u=".concat((_m$author = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author !== void 0 ? _m$author : ''),
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    loader: function loader() {
      var _m$icon;
      return resolveImage(m, (_m$icon = m === null || m === void 0 ? void 0 : m.icon) !== null && _m$icon !== void 0 ? _m$icon : null, 'icon');
    },
    src: resolveImage(m, (_m$icon2 = m === null || m === void 0 ? void 0 : m.icon) !== null && _m$icon2 !== void 0 ? _m$icon2 : null, 'icon'),
    style: {
      maxWidth: '50px',
      borderRadius: '4rem'
    },
    alt: (_m$author2 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author2 !== void 0 ? _m$author2 : '',
    width: (_m$iconWidth = m.iconWidth) !== null && _m$iconWidth !== void 0 ? _m$iconWidth : '50',
    height: (_m$iconHeight = m.iconHeight) !== null && _m$iconHeight !== void 0 ? _m$iconHeight : '50',
    layout: "responsive"
  }))) : null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p?u=".concat((_m$author3 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author3 !== void 0 ? _m$author3 : ''),
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].Author, " ").concat(moduleName, "_Author ").concat(props.authorClassName)
  }, (_m$author4 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author4 !== void 0 ? _m$author4 : ''))), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: (0, _utility2.resolveMainLink)(m),
    style: {
      alignSelf: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].Lead, " ").concat(moduleName, "_Lead ").concat(props.leadClassName)
  }, (_m$title = m === null || m === void 0 ? void 0 : m.title) !== null && _m$title !== void 0 ? _m$title : ''), m.created && !isNaN(new Date(m.created)) && new Date(m.created).getTime() > new Date().getTime() - 1296000000 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "newItem",
    style: {
      position: 'absolute',
      top: '-18.5px',
      left: '75px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "New"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '.9rem'
    },
    className: "star material-icons"
  }, "star")) : null), m !== null && m !== void 0 && (_m$item = m.item) !== null && _m$item !== void 0 && _m$item.id && m !== null && m !== void 0 && (_m$item2 = m.item) !== null && _m$item2 !== void 0 && _m$item2.style && m !== null && m !== void 0 && (_m$item3 = m.item) !== null && _m$item3 !== void 0 && _m$item3.option ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      alignItems: 'center',
      columnGap: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(_PresentationModule["default"].CtaButton, " ").concat(moduleName, "_Cta ").concat(props.ctaClassName),
    onClick: handleFireGlobalEvent,
    action: ['add_to_cart', 'buy'].indexOf(m === null || m === void 0 ? void 0 : m.action) > -1 ? m.action : 'add_to_cart',
    item: m.item.id,
    selectedstyle: m.item.style,
    currentoption: m.item.option,
    ref: ctaRef,
    ctaAfter: m.ctaAfter,
    cta: m.cta
  }, m.cta), function (_m$styles) {
    var style = m !== null && m !== void 0 && (_m$styles = m.styles) !== null && _m$styles !== void 0 && _m$styles.find ? m.styles.find(function (n) {
      return n.sid === m.item.style;
    }) : null;
    var price = (0, _ecommerce.resolveRegionBasedPrice)(props, style);
    if ((price === null || price === void 0 ? void 0 : price.price) == 0) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex",
        style: {
          fontSize: '1.5rem',
          fontWeight: '600',
          marginTop: '.5rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, "Free"));
    } else if (price !== null && price !== void 0 && price.currency && price !== null && price !== void 0 && price.symbol && Object.prototype.hasOwnProperty.call(price, 'price')) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex",
        style: {
          fontSize: '1.25rem',
          fontWeight: '600'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, price.symbol), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginRight: '.25rem'
        }
      }, (0, _ecommerce.resolveMoneyFormat)(price.price)), /*#__PURE__*/_react["default"].createElement("div", null, price.currency));
    }
    return /*#__PURE__*/_react["default"].createElement("div", null);
  }(), function () {
    var option = (0, _ecommerce.resolveOption)(m, m.item.style, m.item.option, true);
    var paint = option !== null && option !== void 0 && option.quantity && option.quantity > 300 ? '' : option !== null && option !== void 0 && option.quantity && option.quantity <= 300 ? "Not much left in stock" : '';
    console.log(option, paint);
    return paint !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        alignItems: 'center',
        display: 'flex',
        fontSize: '.85rem',
        fontWeight: '700',
        gap: '.25rem',
        color: '#ff8686'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, paint), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '1.15rem'
      },
      className: "inventory material-icons"
    }, "inventory")) : null;
  }()) : null)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].SecondDataContainer)
  }, m.description && m.description !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].Description, " ").concat(moduleName, "_Description ").concat(props.descriptionClassName)
  }, (_m$description = m === null || m === void 0 ? void 0 : m.description) !== null && _m$description !== void 0 ? _m$description : '') : null, m.showSimpleDate && useCountdown ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].TimeSimpleInline, " ").concat(moduleName, "_TimeSimple ").concat(props.timeSimpleClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && m.date ? (0, _utility2.resolveGoodDate)(m.date) : '')) : null, /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && (_m$detailmeta = m.detailmeta) !== null && _m$detailmeta !== void 0 && _m$detailmeta.lineup && m.detailmeta.lineup.map && m.detailmeta.lineup.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].LineupLabel, " EventPage_Lineup_Label")
  }, "Lineup"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].LineupContainer)
  }, m.detailmeta.lineup.map(function (n, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].LineupItem),
      index: i,
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginTop: '.125rem',
        marginBottom: '1rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].LineupImageContainer),
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].LineupImageInternalContainer),
      style: {
        backgroundImage: "url(".concat(props.cdn["static"], "/").concat(n.image, ")")
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: "".concat((0, _ecommerce.resolveImg)(null)),
      className: "".concat(_PresentationModule["default"].LineupImage),
      style: {
        opacity: n.image ? 0 : 1
      }
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].ParticipantLabel)
    }, n.title !== '' ? n.title : /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        opacity: '.7'
      }
    }, "Participant")), n.description ? /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginBottom: '.5rem'
      }
    }, n.description) : null, n.time ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "lineupItem_time ".concat(_PresentationModule["default"].LineupItemTime)
    }, (0, _util.getFormattedTime)(n.time, {
      simple: true
    })) : null);
  }))) : null))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "PagePadding"
  }, "No Event") : null, props.childrenAfter);
};
var _default = exports["default"] = Module;