"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ecommerce = require("../../utility/ecommerce");
var _utility = require("../../utility/utility");
var _util = require("../../util");
var _AllInclusive = _interopRequireDefault(require("@mui/icons-material/AllInclusive"));
var _ConfirmationNumber = _interopRequireDefault(require("@mui/icons-material/ConfirmationNumber"));
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _Stadium = _interopRequireDefault(require("@mui/icons-material/Stadium"));
var _ = require(".");
var _reactSlick = _interopRequireDefault(require("react-slick"));
var _ProductImageManagerModule = _interopRequireDefault(require("./ProductImageManager.module.scss"));
var _uuid = require("uuid");
var _localImports = require("../../internal/localImports");
var Module = function Module(props) {
  var _props$productData$pr, _props$productData, _product$name, _product$detailmeta$d, _product$detailmeta, _currentPrice$symbol, _currentPrice$price, _currentPrice$currenc, _product$detailmeta2;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(0),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    currentSlide = _React$useState6[0],
    setCurrentSlide = _React$useState6[1];
  var _React$useState7 = _react["default"].useState({}),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    selectedStyle = _React$useState8[0],
    setSelectedStyle = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    currentOption = _React$useState10[0],
    setCurrentOption = _React$useState10[1];
  var sliderTrackRef = _react["default"].useRef();
  var currency = '$';
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  var setSelectedStyleHandler = _react["default"].useCallback(function (e) {
    if (e && e.currentTarget) {
      if (e.currentTarget.value) {
        setSelectedStyle(e.currentTarget.value);
        var currentStyleObject = props.product.styles.find(function (m) {
          return m.sid === e.currentTarget.value;
        });
        console.log(currentStyleObject);
        if (currentStyleObject && currentStyleObject.option && currentStyleObject.option[0] && currentStyleObject.option[0].sid) {
          setCurrentOption(currentStyleObject.option[0].sid);
        }
      }
    }
  });
  var changeCurrentOption = _react["default"].useCallback(function (e) {
    setCurrentOption(e.currentTarget.value);
  });
  var handleFireGlobalEvent = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            (0, _utility.fireGlobalEvent)(e, props._LocalEventEmitter);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var product = (_props$productData$pr = props === null || props === void 0 || (_props$productData = props.productData) === null || _props$productData === void 0 ? void 0 : _props$productData.product) !== null && _props$productData$pr !== void 0 ? _props$productData$pr : null;
  (0, _ecommerce.resolveDefaultStyle)(product, selectedStyle, setSelectedStyle, currentOption, setCurrentOption);
  var validStyleObject = selectedStyle && product !== null && product !== void 0 && product.styles && product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) ? product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) : null;
  var validOptionObject = validStyleObject && validStyleObject.option ? currentOption ? validStyleObject.option.find(function (m) {
    return m.sid === currentOption;
  }) : validStyleObject.option[0] ? validStyleObject.option[0] : null : null;
  console.log(validStyleObject, product, selectedStyle);

  // console.log(props.product, props._loggedIn, currentOption, selectedStyle, props)
  var isAdmin = props.product && props.product.owner && props._loggedIn && props._loggedIn.identifier && props._loggedIn.identifier === props.product.owner;
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency, props.currentDefinePriceCurrency, props.priceInput, validStyleObject, props.editing, props);
  var currentPrice = _react["default"].useMemo(function () {
    return (0, _ecommerce.resolveRegionBasedPrice)(props, validStyleObject);
  }, [props.product, validStyleObject, currency]);
  var useSettings = {
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    touchThreshold: 60,
    arrows: false,
    beforeChange: function beforeChange(current, next) {
      if (next !== currentSlide) {
        setCurrentSlide(next);
      }
    }
  };
  var handleSetSlide = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute) {
      var i = e.currentTarget.getAttribute('i');
      sliderTrackRef.current.slickGoTo(i);
    }
  });
  console.log(product, currentPrice);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _localImports.ReactCarouselCss, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].container, " ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].innerContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].leadProductContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].singleProductCarouselProvider)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productSliderThumbnailListContainer)
  }, product !== null && product !== void 0 && product.images ? product.images.map(function (image, i) {
    var _props$cdn2;
    return /*#__PURE__*/_react["default"].createElement("div", {
      slide: i,
      key: i,
      className: "".concat(_ProductImageManagerModule["default"].productSliderThumbSelectMin),
      onClick: handleSetSlide,
      i: i
    }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
      className: "".concat(_ProductImageManagerModule["default"].sliderThumbSelectMinImg),
      loader: function loader() {
        var _props$cdn;
        return props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"] ? "".concat(props.cdn["static"], "/").concat(image.name) : null;
      },
      src: props !== null && props !== void 0 && (_props$cdn2 = props.cdn) !== null && _props$cdn2 !== void 0 && _props$cdn2["static"] ? "".concat(props.cdn["static"], "/").concat(image.name) : null,
      alt: "Title",
      width: 35,
      height: 45,
      layout: "responsive"
    }));
  }) : null), /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], (0, _extends2["default"])({}, useSettings, {
    className: "".concat(_ProductImageManagerModule["default"].productSliderProductContainer),
    ref: sliderTrackRef
  }), product !== null && product !== void 0 && product.images ? product.images.map(function (image, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      index: i,
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ProductImageManagerModule["default"].productSliderProductImg),
      style: {
        backgroundImage: "url(".concat(props.cdn["static"], "/").concat(image.name, ")")
      }
    }));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "".concat(_ProductImageManagerModule["default"].productPageTitle)
  }, (_product$name = product === null || product === void 0 ? void 0 : product.name) !== null && _product$name !== void 0 ? _product$name : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, (_product$detailmeta$d = product === null || product === void 0 || (_product$detailmeta = product.detailmeta) === null || _product$detailmeta === void 0 ? void 0 : _product$detailmeta.description) !== null && _product$detailmeta$d !== void 0 ? _product$detailmeta$d : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      margin: '.125rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 600
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, (_currentPrice$symbol = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.symbol) !== null && _currentPrice$symbol !== void 0 ? _currentPrice$symbol : null), /*#__PURE__*/_react["default"].createElement("span", null, (_currentPrice$price = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.price) !== null && _currentPrice$price !== void 0 ? _currentPrice$price : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_CurrencyLabel",
    style: {
      fontSize: '1.3rem',
      fontWeight: 600,
      background: 'rgba(150, 150, 150, .5)',
      padding: '.075rem',
      borderRadius: '.25rem'
    }
  }, (_currentPrice$currenc = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.currency) !== null && _currentPrice$currenc !== void 0 ? _currentPrice$currenc : 'USD'))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 wrap",
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleFireGlobalEvent,
    item: product === null || product === void 0 ? void 0 : product.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart"
  }, "Add To Cart"), product !== null && product !== void 0 && (_product$detailmeta2 = product.detailmeta) !== null && _product$detailmeta2 !== void 0 && _product$detailmeta2.subscription ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleFireGlobalEvent,
    item: product === null || product === void 0 ? void 0 : product.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart_subscribe"
  }, "Subscribe") : null)))))));
};
var _default = exports["default"] = Module;