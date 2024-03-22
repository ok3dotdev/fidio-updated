"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _reactSlick = _interopRequireDefault(require("react-slick"));
var _PresentationModule = _interopRequireDefault(require("../../Presentation.module.scss"));
var _uuid = require("uuid");
var _utility = require("../../../utility/utility");
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _fetch = require("../../../utility/fetch");
var _utility2 = require("../../utility");
var _date = require("../../../utility/utility/date");
var _iconsMaterial = require("@mui/icons-material");
var moduleName = 'IndexHello';
var RESET_CTA_TIMER = 180000;
var Module = function Module(props) {
  var _props$request;
  var router = (0, _router.useRouter)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    useCountdown = _React$useState6[0],
    setUseCountdown = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(0),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentSlide = _React$useState8[0],
    setCurrentSlide = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    ctaClickedOnce = _React$useState10[0],
    setCtaClickedOnce = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    useHandler = _React$useState12[0],
    setUseHandler = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    resolvedUseItems = _React$useState14[0],
    setResolvedUseItems = _React$useState14[1];
  var ctaRef = _react["default"].useRef();
  var currentSlider = _react["default"].useRef();
  var sliderTrackRef = _react["default"].useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, function (d) {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        var useCurrentTime = props.items && props.items[currentSlide] ? props.items[currentSlide].date : null;
        if (useCurrentTime !== null) {
          var useTime = typeof useCurrentTime === 'string' ? new Date(Number(useCurrentTime)) : (0, _typeof2["default"])(useCurrentTime) === 'object' ? new Date(useCurrentTime) : new Date(useCurrentTime);
          if (!isNaN(useTime)) {
            var timeRemaining = (0, _utility.getTimeRemaining)(useTime, new Date());
            if (timeRemaining) {
              setUseCountdown(timeRemaining);
            }
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      if (props.request) {
        setUseHandler(true);
      }
      setInterval(function () {
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setTimeout(function () {
        var slickTracks = document.getElementsByClassName("slider_slides_".concat(id));
        if (slickTracks && slickTracks[0] && slickTracks[0].childNodes && slickTracks[0].childNodes[0] && slickTracks[0].childNodes[0].childNodes && slickTracks[0].childNodes[0].childNodes[0]) {
          var useContainer = slickTracks[0].childNodes[0].childNodes[0];
          useContainer.style.transition = '500ms';
          useContainer.style.left = '-25px';
          setTimeout(function () {
            useContainer ? useContainer.style.left = '0' : null;
          }, 2000);
        }
      }, 2000);
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.request]);
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
  var receiveData = function receiveData(res) {
    var _res$data;
    if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.fetchedData) {
      var items = [];
      var validGroups = res.data.fetchedData.map(function (m) {
        return Object.entries(m).map(function (n) {
          return n[1].map(function (o) {
            if (Array.isArray(o)) {
              return o.map(function (p) {
                if (p.id) {
                  items.push(p);
                  return p;
                }
                return null;
              });
            } else {
              if (o.id) {
                items.push(o);
                return o;
              }
            }
            return null;
          });
        });
      });
      var flattened = validGroups.flat(3);
      if (flattened) {
        var _useItems = flattened.filter(Boolean);
        setResolvedUseItems(_useItems);
      }
    }
    // Use Received data instead props.items. Can set to useItems. Use useItems as state
    // Must set image based on if feature image present. if no feature image present use 1st image (if tall view, look for tall image first)
    // Use Name for title. Use author username for author
  };
  var useItems = _react["default"].useMemo(function () {
    var _props$items;
    if (resolvedUseItems && useHandler) {
      var useData = (0, _utility2.normalizeData)(resolvedUseItems);
      return useData;
    }
    if (props !== null && props !== void 0 && (_props$items = props.items) !== null && _props$items !== void 0 && _props$items.map) {
      return (0, _utility2.normalizeData)(props.items);
    }
    return [{}, {}, {}, {}, {}, {}];
  }, [resolvedUseItems, useHandler, props === null || props === void 0 ? void 0 : props.items]);
  var useSettings = {
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false,
    // variableWidth: true,
    responsive: [{
      breakpoint: 4000,
      settings: {
        slidesToShow: 6,
        touchThreshold: 120
      }
    }, {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        touchThreshold: 100
      }
    }, {
      breakpoint: 1680,
      settings: {
        slidesToShow: 4,
        touchThreshold: 80
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        touchThreshold: 60
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        touchThreshold: 40
      }
    }, {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        touchThreshold: 20
      }
    }]
  };
  var handleSliderLinkClickUpProxy = _react["default"].useCallback(function (e) {
    (0, _utility2.handleSliderLinkClickUp)(e, router);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IndexHelloContainer, " sliderContainer_").concat(componentId, " ").concat(moduleName, "_IndexHelloContainer ").concat(props.className),
    ref: sliderTrackRef
  }, props.groupLabel ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabelContainer, " ").concat(moduleName, "_groupLabelContainer ").concat(props.groupLabelContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabel, " ").concat(moduleName, "_groupLabel ").concat(props.groupLabelClassName)
  }, props.groupLabel)) : null, useHandler && props !== null && props !== void 0 && (_props$request = props.request) !== null && _props$request !== void 0 && _props$request.handlerArgs ? /*#__PURE__*/_react["default"].createElement(_fetch.FetchHandler, (0, _extends2["default"])({
    handlerArgs: props.request.handlerArgs,
    receiveData: receiveData
  }, props)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "swipe slider_".concat(componentId)
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], (0, _extends2["default"])({}, useSettings, {
    className: "".concat(_PresentationModule["default"].IndexItemsContainer, " swiper-wrapper slider_slides ").concat(moduleName, "_IndexItemsContainer slider_slides_").concat(componentId, " ").concat(props.IndexItemsContainerClassName)
  }), useItems !== null && useItems !== void 0 && useItems.map ? useItems.map(function (m, i) {
    var _m$leadBg, _m$item, _m$author, _m$icon2, _m$author2, _m$iconWidth, _m$iconHeight, _m$title, _m$author3, _m$item2, _m$item3, _m$item4, _m$item5, _m$item6, _m$item7;
    var useDate = m !== null && m !== void 0 && m.date && !isNaN(new Date(m.date)) ? new Date(m.date) : '';
    console.log(useDate, useDate.getMonth, m);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "swiper-slide ".concat(_PresentationModule["default"].IndexItemUpperContainer, " ").concat(props.tall ? "".concat(_PresentationModule["default"].IndexItemsUpperContainerTall) : null, " ").concat(moduleName, "_Container ").concat(componentId, "_IndexItemUpperContainer ").concat(m.important ? "slider_item_important" : ''),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: (0, _utility2.resolveMainLink)(m),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].BgContainer, " ").concat(props.tall ? "".concat(_PresentationModule["default"].BgContainerTall) : null, " ").concat(moduleName, "_BgContainer ").concat(props.bgClassName),
      style: {
        backgroundImage: "url(".concat(resolveImage(m, (_m$leadBg = m === null || m === void 0 ? void 0 : m.leadBg) !== null && _m$leadBg !== void 0 ? _m$leadBg : null, 'bg'), ")"),
        position: 'relative'
      }
    }, props.children, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].FillPageContainer, " ").concat(moduleName, "_FillPageContainer")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TimeContainer, " ").concat(moduleName, "_TimeContainer ").concat(props.timeContainerClassName)
    }, m !== null && m !== void 0 && m.showSimpleDate && useDate !== null && useDate !== void 0 && useDate.getMonth && useDate !== null && useDate !== void 0 && useDate.getDate ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TimeSimple, " ").concat(moduleName, "_TimeSimple ").concat(props.timeSimpleClassName, " ").concat((0, _utility2.datePassed)(m.date) ? "".concat(_PresentationModule["default"].DatePassed) : '')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TimeShowContainer, " flex gap-p5")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].dateIconContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].dateIconMonth)
    }, (0, _date.retrieveMonth)(useDate.getMonth())), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].dateIconDate)
    }, useDate.getDate())), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].dateMetaContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].dateText)
    }, (0, _date.retrieveDay)(useDate.getDay()), ", ", useDate.toLocaleString('en-US', {
      month: 'long'
    }), " ", useDate.toLocaleDateString('en-US', {
      day: '2-digit'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].timeMeta, " flex gap-p2"),
      style: {
        alignContent: 'center'
      }
    }, m.created && !isNaN(new Date(m.created)) && new Date(m.created).getTime() > new Date().getTime() - 1296000000 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "newItem",
      style: {
        fontSize: '.7rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, "New"), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '.7rem'
      },
      className: "star material-icons"
    }, "star")) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].timeText)
    }, useDate.toLocaleString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    })), (m === null || m === void 0 || (_m$item = m.item) === null || _m$item === void 0 ? void 0 : _m$item.type) === 'ticket' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].ticketIcon),
      style: {
        height: '1rem'
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ConfirmationNumber, {
      style: {
        fontSize: '1rem',
        height: '1rem'
      }
    })) : null)))) : null)))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].MetaContainer, " ").concat(moduleName, "_MetaContainer ").concat(props.metaContainerClassName)
    }, (m === null || m === void 0 ? void 0 : m.icon) !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].IconContainer, " ").concat(moduleName, "_IconContainer ").concat(props.iconContainerClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat((_m$author = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author !== void 0 ? _m$author : ''),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
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
        maxWidth: '60px',
        borderRadius: '4rem',
        minHeight: '50px'
      },
      alt: (_m$author2 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author2 !== void 0 ? _m$author2 : '',
      width: (_m$iconWidth = m === null || m === void 0 ? void 0 : m.iconWidth) !== null && _m$iconWidth !== void 0 ? _m$iconWidth : '50',
      height: (_m$iconHeight = m === null || m === void 0 ? void 0 : m.iconHeight) !== null && _m$iconHeight !== void 0 ? _m$iconHeight : '50',
      layout: "responsive"
    }))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].DataContainer, " ").concat(moduleName, "_DataContainer ").concat(props.DataContainerClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: (0, _utility2.resolveMainLink)(m),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Lead, " ").concat(moduleName, "_Lead ").concat(props.leadClassName)
    }, (_m$title = m === null || m === void 0 ? void 0 : m.title) !== null && _m$title !== void 0 ? _m$title : '')), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].CtaHolder, " ").concat(moduleName, "_CtaHolder ").concat(props.CtaHolderClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat(m === null || m === void 0 ? void 0 : m.author),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Author, " ").concat(moduleName, "_Author ").concat(props.authorClassName)
    }, (_m$author3 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author3 !== void 0 ? _m$author3 : '')), m !== null && m !== void 0 && (_m$item2 = m.item) !== null && _m$item2 !== void 0 && _m$item2.id && m !== null && m !== void 0 && (_m$item3 = m.item) !== null && _m$item3 !== void 0 && _m$item3.style && m !== null && m !== void 0 && (_m$item4 = m.item) !== null && _m$item4 !== void 0 && _m$item4.option ? /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_PresentationModule["default"].CtaButton, " ").concat(moduleName, "_Cta ").concat(props.ctaClassName),
      onClick: handleFireGlobalEvent,
      action: ['add_to_cart', 'buy'].indexOf(m === null || m === void 0 ? void 0 : m.action) > -1 ? m.action : 'add_to_cart',
      item: m === null || m === void 0 || (_m$item5 = m.item) === null || _m$item5 === void 0 ? void 0 : _m$item5.id,
      selectedstyle: m === null || m === void 0 || (_m$item6 = m.item) === null || _m$item6 === void 0 ? void 0 : _m$item6.style,
      currentoption: m === null || m === void 0 || (_m$item7 = m.item) === null || _m$item7 === void 0 ? void 0 : _m$item7.option,
      ref: ctaRef,
      ctaAfter: m.ctaAfter,
      cta: m.cta
    }, m.cta) : null)))));
  }) : null)));
};
var _default = exports["default"] = Module;