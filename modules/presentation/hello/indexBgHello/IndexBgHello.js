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
var _ecommerce = require("../../../utility/ecommerce");
var moduleName = 'IndexBgHello';
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
    displayTime = _React$useState12[0],
    setDisplayTime = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    useHandler = _React$useState14[0],
    setUseHandler = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    resolvedUseItems = _React$useState16[0],
    setResolvedUseItems = _React$useState16[1];
  var ctaRef = _react["default"].useRef();
  var currentGlide = _react["default"].useRef();
  var useItems = _react["default"].useMemo(function () {
    var _props$items;
    if (resolvedUseItems && useHandler) {
      var useData = (0, _utility2.normalizeData)(resolvedUseItems);
      return useData;
    }
    if (props !== null && props !== void 0 && (_props$items = props.items) !== null && _props$items !== void 0 && _props$items.map) {
      return (0, _utility2.normalizeData)(props.items);
    }
    return [{}, {}, {}, {}];
  }, [resolvedUseItems, useHandler, props === null || props === void 0 ? void 0 : props.items]);
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, function (d) {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        var useCurrentTime = useItems[currentSlide] ? useItems[currentSlide].date : null;
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
      var id = (0, _uuid.v4)();
      setComponentId(id);
      if (props.request) {
        setUseHandler(true);
      }
      setInterval(function () {
        // Update time every second
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
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
    console.log(res);
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
  var useSettings = {
    infinite: useItems.length > 1,
    speed: 500,
    swipeToSlide: true,
    touchThreshold: 60,
    arrows: false,
    beforeChange: function beforeChange(current, next) {
      if (next !== currentSlide) {
        setCurrentSlide(next);
        setTimeout(function () {
          props._LocalEventEmitter.dispatch(componentId, {
            dispatch: 'updateCountdown'
          });
        }, 1);
      }
    }
  };
  var handleSliderLinkClickUpProxy = _react["default"].useCallback(function (e) {
    (0, _utility2.handleSliderLinkClickUp)(e, router);
  });
  console.log(useItems, resolvedUseItems);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IndexBgContainer, " glide_").concat(componentId, " ").concat(props.className, " ").concat(props.medium ? "".concat(_PresentationModule["default"].IndexBgContainerMedium) : null)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].SliderBulletsContainer, " ").concat(moduleName, "_SliderBulletsContainer ").concat(props.sliderBulletsContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].SliderBullets, " glide__bullets"),
    "data-glide-el": "controls[nav]"
  }, props.items && props.items.map && props.items.length > 1 ? props.items.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_PresentationModule["default"].SliderBullet, " glide__bullet"),
      "data-glide-dir": "=".concat(i),
      key: i
    });
  }) : null)), useHandler && props !== null && props !== void 0 && (_props$request = props.request) !== null && _props$request !== void 0 && _props$request.handlerArgs ? /*#__PURE__*/_react["default"].createElement(_fetch.FetchHandler, (0, _extends2["default"])({
    handlerArgs: props.request.handlerArgs,
    receiveData: receiveData
  }, props)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "swipe slick-full slider_".concat(componentId)
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], (0, _extends2["default"])({}, useSettings, {
    className: "".concat(_PresentationModule["default"].sliderContainer, " swiper-wrapper slider_slides"),
    style: {
      height: 'inherit'
    }
  }), useItems !== null && useItems !== void 0 && useItems.map ? useItems.map(function (m, i) {
    var _m$leadBg, _m$author, _m$icon2, _m$author2, _m$iconWidth, _m$iconHeight, _m$author3, _m$author4, _m$title, _m$description, _m$item, _m$item2, _m$item3, _m$item4, _m$item5, _m$item6;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].BgUpperContainer, " ").concat(moduleName, "_Container"),
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].BgContainer, " ").concat(moduleName, "_BgContainer ").concat(props.bgClassName),
      style: {
        backgroundImage: "url(".concat(resolveImage(m, (_m$leadBg = m === null || m === void 0 ? void 0 : m.leadBg) !== null && _m$leadBg !== void 0 ? _m$leadBg : null, 'bg'), ")")
      }
    }, props.children, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].FillPageContainer, " ").concat(moduleName, "_FillPageContainer")
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
        maxWidth: '50px',
        borderRadius: '4rem'
      },
      alt: (_m$author2 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author2 !== void 0 ? _m$author2 : '',
      width: (_m$iconWidth = m.iconWidth) !== null && _m$iconWidth !== void 0 ? _m$iconWidth : '50',
      height: (_m$iconHeight = m.iconHeight) !== null && _m$iconHeight !== void 0 ? _m$iconHeight : '50',
      layout: "responsive"
    }))) : null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat((_m$author3 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author3 !== void 0 ? _m$author3 : ''),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Author, " ").concat(moduleName, "_Author ").concat(props.authorClassName)
    }, (_m$author4 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author4 !== void 0 ? _m$author4 : ''))), /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: (0, _utility2.resolveMainLink)(m),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
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
        top: '-25px',
        right: '100px',
        fontSize: '.7rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, "New"), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '.7rem'
      },
      className: "star material-icons"
    }, "star")) : null), m.description && m.description !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Description, " ").concat(moduleName, "_Description ").concat(props.descriptionClassName)
    }, (_m$description = m === null || m === void 0 ? void 0 : m.description) !== null && _m$description !== void 0 ? _m$description : '') : null, m !== null && m !== void 0 && (_m$item = m.item) !== null && _m$item !== void 0 && _m$item.id && m !== null && m !== void 0 && (_m$item2 = m.item) !== null && _m$item2 !== void 0 && _m$item2.style && m !== null && m !== void 0 && (_m$item3 = m.item) !== null && _m$item3 !== void 0 && _m$item3.option ? /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        columnGap: '1rem',
        rowGap: '.25rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_PresentationModule["default"].CtaButton, " ").concat(moduleName, "_Cta ").concat(props.ctaClassName),
      onClick: handleFireGlobalEvent,
      action: ['add_to_cart', 'buy'].indexOf(m === null || m === void 0 ? void 0 : m.action) > -1 ? m.action : 'add_to_cart',
      item: m === null || m === void 0 || (_m$item4 = m.item) === null || _m$item4 === void 0 ? void 0 : _m$item4.id,
      selectedstyle: m === null || m === void 0 || (_m$item5 = m.item) === null || _m$item5 === void 0 ? void 0 : _m$item5.style,
      currentoption: m === null || m === void 0 || (_m$item6 = m.item) === null || _m$item6 === void 0 ? void 0 : _m$item6.option,
      ref: ctaRef,
      ctaAfter: m.ctaAfter,
      cta: m.cta
    }, m.cta), function (_m$styles, _m$item$useCustom, _m$item7) {
      var style = m !== null && m !== void 0 && (_m$styles = m.styles) !== null && _m$styles !== void 0 && _m$styles.find ? m.styles.find(function (n) {
        return n.sid === m.item.style;
      }) : null;
      var price = (0, _ecommerce.resolveRegionBasedPrice)(props, style, (_m$item$useCustom = m === null || m === void 0 || (_m$item7 = m.item) === null || _m$item7 === void 0 ? void 0 : _m$item7.useCustom) !== null && _m$item$useCustom !== void 0 ? _m$item$useCustom : null);
      if ((price === null || price === void 0 ? void 0 : price.price) == 0) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex",
          style: {
            fontSize: '1.5rem',
            fontWeight: '600'
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
      return paint !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          alignItems: 'center',
          display: 'flex',
          fontSize: '.75rem',
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
    }()) : null))));
  }) : null)));
};
var _default = exports["default"] = Module;