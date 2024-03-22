"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ecommerce = require("../../utility/ecommerce");
var _utility = require("../../utility/utility");
var _util = require("../../util");
var _AllInclusive = _interopRequireDefault(require("@mui/icons-material/AllInclusive"));
var _ConfirmationNumber = _interopRequireDefault(require("@mui/icons-material/ConfirmationNumber"));
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _Stadium = _interopRequireDefault(require("@mui/icons-material/Stadium"));
var _ = require(".");
var _ProductImageManagerModule = _interopRequireDefault(require("./ProductImageManager.module.scss"));
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _event = require("../../utility/utility/event");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Module = function Module(props) {
  var _props$editing, _props$product2, _props$editing2, _props$editing3, _props$currentDefineP, _props$currentDefineP2, _props$currentDefineP3, _props$priceInput, _props$currentDefineP4, _props$currentDefineP5, _props$priceInput2, _ref2, _props$currentDefineP6, _props$currentDefineP7, _isEditing$meta, _props$currentDefineP8, _props$currentDefineP9, _props$product3, _props$product4, _props$editingOptions, _props$product5, _props$product6, _props$product7, _props$product8, _props$product9, _props$product10, _props$classes$produc, _props$classes, _currentPrice$symbol, _currentPrice$price, _currentPrice$currenc, _props$product11;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState({}),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    selectedStyle = _React$useState4[0],
    setSelectedStyle = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    currentOption = _React$useState6[0],
    setCurrentOption = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    warning = _React$useState8[0],
    setWarning = _React$useState8[1];
  var optionSelect = _react["default"].useRef();
  var styleSelect = _react["default"].useRef();
  var isTicketRef = _react["default"].useRef();
  var isLivestreamRef = _react["default"].useRef();
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    isSettingCurrency = _React$useState10[0],
    setIsSettingCurrency = _React$useState10[1];
  var descriptionInputRef = _react["default"].useRef();
  var currentCurrencyRef = _react["default"].useRef();
  var currency = '$';
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      props.setDefaultPriceHtml();
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  (0, _ecommerce.resolveDefaultStyle)(props.product, selectedStyle, setSelectedStyle, currentOption, setCurrentOption);
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
  var handleEdit = _react["default"].useCallback(function (e) {
    console.log(e, 'edit');
    if (e && e.currentTarget && e.currentTarget.getAttribute && e.currentTarget.getAttribute('modif')) {
      var modif = e.currentTarget.getAttribute('modif');
      var saveTarget = e.currentTarget;
      if (modif === 'edit' && props.handleEdit) {
        props.handleEdit(props.product);
        setTimeout(function () {
          var _props$product;
          props.nameRef.current.value = props === null || props === void 0 || (_props$product = props.product) === null || _props$product === void 0 ? void 0 : _props$product.name;
          if (props.product.styles && props.product.styles[0]) {
            props.styleInput.current.value = props.product.styles[0].style;
            props.setEditingSelectedStyle(props.product.styles[0].sid);
            setTimeout(function () {
              var _window;
              console.log(props, props.product.styles[0].option && props.product.styles[0].option[0]);
              if (props.product.styles[0].option && props.product.styles[0].option[0]) {
                if (props.optionInput.current) {
                  props.optionInput.current.value = props.product.styles[0].option[0].option;
                }
                props.setEditingSelectedOption(props.product.styles[0].option[0].sid);
                props.quantityInput.current.value = props.product.styles[0].option[0].quantity;
                props.priceInput.current.value = props.product.styles[0].price;
                console.log(props.product.detailmeta);
                if (props.product.detailmeta) {
                  if (isTicketRef.current) {
                    isTicketRef.current.value = props.product.detailmeta.ticket;
                  }
                  if (isLivestreamRef.current) {
                    isLivestreamRef.current.value = props.product.detailmeta.livestream;
                  }
                }
                props.setEditingOptionsMeta(props.product.detailmeta);
              }
              var currentProduct = document.getElementById(props.product.id);
              if (currentProduct !== null && currentProduct !== void 0 && currentProduct.offsetTop && (_window = window) !== null && _window !== void 0 && _window.scrollTo && props._isMobile) {
                window.scrollTo({
                  behavior: 'smooth',
                  top: currentProduct.offsetTop - 5
                });
              }
            }, 250);
          }
        }, 250);
      }
    }
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
  var handleSetIsSettingCurrency = _react["default"].useCallback(function (e) {
    if (isSettingCurrency) {
      setIsSettingCurrency(false);
      return false;
    }
    setIsSettingCurrency(true);
    return true;
  });
  var handleChangeCurrentCurrency = _react["default"].useCallback(function (e) {
    var v = props.changeCurrentCurrency(props.editing, e.currentTarget.value);
    if (v) {
      currentCurrencyRef.current.innerHTML = v;
      var f = Object.entries(props.regionsData).find(function (m) {
        return m[1].currency === v;
      });
      if (f && f[1]) {
        props.setCurrentDefinePriceCurrency(f[1]);
        props.setDefaultPriceHtml(f[1]);
      }
    }
  });
  var handleUpdateProductDescription = _react["default"].useCallback(function (e) {
    var value = e.currentTarget.value;
    console.log(value, props.editing, props.editingOptionsMeta);
    if (props.editing) {
      var temp = _objectSpread({}, props.editingOptionsMeta);
      console.log(temp, props.editingOptionsMeta, props.editing);
      if (temp && props.setEditing) {
        temp.description = value;
        var newEditing = _objectSpread({}, props.editing);
        newEditing.detailmeta = temp;
        props.setEditing(newEditing);
        if (temp && props.setEditingOptionsMeta) {
          props.setEditingOptionsMeta(temp);
        }
      }
    }
  });
  var validStyleObject = selectedStyle && props.product && props.product.styles && props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) ? props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }) : null;
  var validOptionObject = validStyleObject && validStyleObject.option ? currentOption ? validStyleObject.option.find(function (m) {
    return m.sid === currentOption;
  }) : validStyleObject.option[0] ? validStyleObject.option[0] : null : null;

  // console.log(props.product, props._loggedIn, currentOption, selectedStyle, props)
  var isAdmin = props.product && props.product.owner && props._loggedIn && props._loggedIn.identifier && props._loggedIn.identifier === props.product.owner;
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency, props.currentDefinePriceCurrency, props.priceInput, validStyleObject, props.editing);
  var currentPrice = _react["default"].useMemo(function () {
    return (0, _ecommerce.resolveRegionBasedPrice)(props, validStyleObject);
  }, [props.product, validStyleObject, currency]);
  var isEditing = (props === null || props === void 0 || (_props$editing = props.editing) === null || _props$editing === void 0 ? void 0 : _props$editing.id) && (props === null || props === void 0 || (_props$product2 = props.product) === null || _props$product2 === void 0 ? void 0 : _props$product2.id) && props.editing.id === props.product.id;
  var useEditingOptions = isEditing && (props === null || props === void 0 ? void 0 : props.editingOptionsMeta) || !isEditing && props.product.detailmeta;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(isEditing ? _ProductImageManagerModule["default"].currentlyEditingProductContainer : 'Product_col', " ").concat(props.className),
    id: props.product && props.product.id ? props.product.id : '',
    selectedstyle: validStyleObject !== null && validStyleObject !== void 0 && validStyleObject.sid ? validStyleObject.sid : '',
    currentoption: validOptionObject !== null && validOptionObject !== void 0 && validOptionObject.sid ? validOptionObject.sid : ''
  }, isEditing ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentEditingProductInnerContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContent)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImgContainer, " ").concat(!isEditing ? 'Product_img_container' : '', " Product_img_container_large")
  }, /*#__PURE__*/_react["default"].createElement(_.ProductImageManager, props)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productMetaContainer, " Product_meta_container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "calc(100% - ".concat(props._loggedIn ? '25' : '40', "px)"),
      maxHeight: '75vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Name of Product",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontWeight: '600'
    }
  }, "Title: ")), /*#__PURE__*/_react["default"].createElement("input", {
    name: "name",
    placeholder: "Product Title",
    style: {
      fontWeight: '600',
      width: '100%'
    },
    onChange: props.setCurrentName,
    ref: props.nameRef,
    modif: "product_name",
    defaultValue: props === null || props === void 0 || (_props$editing2 = props.editing) === null || _props$editing2 === void 0 ? void 0 : _props$editing2.name
  })), props.pageError.location && props.pageError.location === 'product_name' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error"
  }, props.pageError.message) : null), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Product Description",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    className: "".concat(_ProductImageManagerModule["default"].textArea),
    name: "description",
    placeholder: "Description",
    defaultValue: props === null || props === void 0 || (_props$editing3 = props.editing) === null || _props$editing3 === void 0 || (_props$editing3 = _props$editing3.detailmeta) === null || _props$editing3 === void 0 ? void 0 : _props$editing3.description,
    onChange: handleUpdateProductDescription,
    ref: descriptionInputRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the price for the currently selected Style",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, (_props$currentDefineP = (_props$currentDefineP2 = props.currentDefinePriceCurrency) === null || _props$currentDefineP2 === void 0 ? void 0 : _props$currentDefineP2.symbol) !== null && _props$currentDefineP !== void 0 ? _props$currentDefineP : '$')), /*#__PURE__*/_react["default"].createElement("input", {
    type: "currency",
    style: {
      width: '100%'
    },
    defaultValue: "10.00",
    ref: props.priceInput,
    onChange: props.setCurrentPrice
  }), validStyleObject && ((_props$currentDefineP3 = props.currentDefinePriceCurrency) === null || _props$currentDefineP3 === void 0 ? void 0 : _props$currentDefineP3.currency) === 'USD' && (validStyleObject === null || validStyleObject === void 0 ? void 0 : validStyleObject.price) != (props === null || props === void 0 || (_props$priceInput = props.priceInput) === null || _props$priceInput === void 0 || (_props$priceInput = _props$priceInput.current) === null || _props$priceInput === void 0 ? void 0 : _props$priceInput.value) || ((_props$currentDefineP4 = props.currentDefinePriceCurrency) === null || _props$currentDefineP4 === void 0 ? void 0 : _props$currentDefineP4.currency) !== 'USD' && (!validStyleObject.priceTable || validStyleObject.priceTable && !validStyleObject.priceTable[props.currentDefinePriceCurrency.currency] || props !== null && props !== void 0 && (_props$currentDefineP5 = props.currentDefinePriceCurrency) !== null && _props$currentDefineP5 !== void 0 && _props$currentDefineP5.currency && validStyleObject.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, props.currentDefinePriceCurrency.currency) && validStyleObject.priceTable[props.currentDefinePriceCurrency.currency] != props.priceInput.current.value) ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The price displayed is currently not set for this product style. Click here to set it"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.setCurrentPrice,
    value: (_props$priceInput2 = props.priceInput) === null || _props$priceInput2 === void 0 || (_props$priceInput2 = _props$priceInput2.current) === null || _props$priceInput2 === void 0 ? void 0 : _props$priceInput2.value,
    style: {
      whiteSpace: 'nowrap',
      lineHeight: '.5rem',
      fontSize: '.75rem'
    }
  }, "Set Price")) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "You can set pricing in multiple currencies. Although the value you keep selected here will be the primary currency. Use the currency selector to choose a currency to begin setting prices in the respective currency. Countries that users reside in for which you have not set a currency will be presented the closest relevant currency you have defined a pricepoint in"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currencyLabel, " ").concat(isSettingCurrency ? "".concat(_ProductImageManagerModule["default"].currencyLabelActive) : null),
    style: {
      lineHeight: '.5rem'
    },
    onClick: handleSetIsSettingCurrency,
    ref: currentCurrencyRef
  }, (_ref2 = (_props$currentDefineP6 = (_props$currentDefineP7 = props.currentDefinePriceCurrency) === null || _props$currentDefineP7 === void 0 ? void 0 : _props$currentDefineP7.currency) !== null && _props$currentDefineP6 !== void 0 ? _props$currentDefineP6 : isEditing === null || isEditing === void 0 || (_isEditing$meta = isEditing.meta) === null || _isEditing$meta === void 0 ? void 0 : _isEditing$meta.currency) !== null && _ref2 !== void 0 ? _ref2 : 'USD')), isSettingCurrency ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyExternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyContainer)
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: props.editing.id + '_setCurrency',
    name: props.editing.id + '_setCurrency',
    style: {
      width: '100%'
    },
    onChange: handleChangeCurrentCurrency,
    ref: props.setCurrencySelect,
    defaultValue: (_props$currentDefineP8 = (_props$currentDefineP9 = props.currentDefinePriceCurrency) === null || _props$currentDefineP9 === void 0 ? void 0 : _props$currentDefineP9.currency) !== null && _props$currentDefineP8 !== void 0 ? _props$currentDefineP8 : 'USD'
  }, props !== null && props !== void 0 && props.regionsData ? Object.entries(props.regionsData).map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      className: "".concat(_ProductImageManagerModule["default"].setCurrencyOption, " ").concat(m[1].currency !== 'USD' && validStyleObject !== null && validStyleObject !== void 0 && validStyleObject.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, m[1].currency) ? _ProductImageManagerModule["default"].currencyOptionUsed : null, " ").concat(m[1].currency === 'USD' ? _ProductImageManagerModule["default"].currencyOptionUsed : null),
      value: m[1].currency
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[1].currency), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].name), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].symbol));
  }) : null))) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the quantity for the currently selected Style & Option combo"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      display: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000 ? 'none' : 'block'
    }
  }, "Qty")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    style: {
      width: '100%',
      display: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000 ? 'none' : 'block'
    },
    defaultValue: "10",
    ref: props.quantityInput,
    onChange: props.setCurrentQuantity
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Infinite stock"
  }, /*#__PURE__*/_react["default"].createElement(_AllInclusive["default"], null)), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    onChange: props.setInfinity,
    checked: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: '1px solid #484848',
      marginTop: '.125rem',
      marginBottom: '.25rem'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      flexWrap: 'wrap',
      gap: '.05rem 0.2rem',
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "If your product has multiple styles, set them here. A style should be an alternate design or color for a single product that you want to track as single product. For example you might have white, black, grey for t-shirts as individual styles.",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Style"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: props.styleInput,
    onChange: props.setCurrentStyleName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: props.editing.id + '_styles',
    name: props.editing.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: props.changeCurrentStyle
  }, props.resolveStyles(props.editing).map(function (style, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))))), props.selectedStyle && props.selectedStyle.option.length > 0 && props.selectedStyle.option[0] && Object.hasOwnProperty.call(props.selectedStyle.option[0], 'option') ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "If your product has options, set them here. An option should be a sizing or format choice that exists for all or most styles. For example you might have sizes XS, S, M, L, XL or OS as individual options per style.",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Option"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    ref: props.optionInput,
    onChange: props.setCurrentOptionName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: props.editing.id + '_options',
    name: props.editing.id + '_options',
    style: {
      width: '100%'
    },
    onChange: props.changeCurrentOption,
    ref: props.optionSelect
  }, props.editing.styles.find(function (m) {
    return m.sid === props.editingSelectedStyle;
  }).option.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  }))))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.addStyle
  }, "Add Style"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.addOption
  }, "Add Option"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the product type",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      fontSize: '.8rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "virtual",
    name: "fav_language",
    value: "virtual",
    defaultChecked: true,
    onChange: props.onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "virtual"
  }, "Virtual")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "physical",
    name: "fav_language",
    value: "physical",
    onChange: props.onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "physical"
  }, "Physical"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "promptContainer",
    style: {
      alignItems: 'center',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Ticketed Products offer universally unique ids that are unique across the product being sold and can be stamped onto Ticket Images. Virtual Tickets are for Virtual Events. Physical Tickets serve Virtual Tickets for your own In Person Events.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a ticket?"), /*#__PURE__*/_react["default"].createElement(_ConfirmationNumber["default"], {
    style: {
      width: '15px',
      height: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: props.product.detailmeta.ticket,
    defaultChecked: props.product.detailmeta.ticket,
    onChange: props.setOptionsMetaData,
    option: "ticket",
    ref: isTicketRef
  })), useEditingOptions.ticket ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Please add dates your event is happening. Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600',
      whiteSpace: 'nowrap'
    }
  }, "Date for Event"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in MON-DD-YYYY-HH:MM format. If the ticket does not have an event date leave empty",
    onInput: props.setOptionsMetaData,
    option: "eventDateDef",
    option2: "input",
    defaultValue: props === null || props === void 0 || (_props$product3 = props.product) === null || _props$product3 === void 0 || (_props$product3 = _props$product3.detailmeta) === null || _props$product3 === void 0 || (_props$product3 = _props$product3.eventDateDef) === null || _props$product3 === void 0 ? void 0 : _props$product3.input
  })), (props === null || props === void 0 || (_props$product4 = props.product) === null || _props$product4 === void 0 || (_props$product4 = _props$product4.detailmeta) === null || _props$product4 === void 0 || (_props$product4 = _props$product4.eventDateDef) === null || _props$product4 === void 0 || (_props$product4 = _props$product4.dates) === null || _props$product4 === void 0 ? void 0 : _props$product4.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem',
      marginBottom: '.25rem'
    }
  }, props.product.detailmeta.eventDateDef.dates.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null)) : null), (props === null || props === void 0 || (_props$editingOptions = props.editingOptionsMeta) === null || _props$editingOptions === void 0 ? void 0 : _props$editingOptions.productType) === 'virtual' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "promptContainer",
    style: {
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      height: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "You can use a date to authorize all users that purchase this ticket for access to your livestreams on that day. Or you can use a tag that you must include in the livestream tags field when you create it. Please use this if you want to put your livestream behind this paywalled purchase",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this for a livestream?"), /*#__PURE__*/_react["default"].createElement(_Stadium["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: props.product.detailmeta.livestream,
    defaultChecked: props.product.detailmeta.livestream,
    onChange: props.setOptionsMetaData,
    option: "livestream",
    ref: isLivestreamRef
  })), useEditingOptions.livestream ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Enter dates or words for matching authorization. Enter dates in the following format MON-DD-YYYY-HH:MM. Time must be input in 24 H military time. Values that do not match dates will be parsed as Tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600',
      whiteSpace: 'nowrap'
    }
  }, "Auth Keys | Tags"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      marginBottom: '.125rem',
      width: '-webkit-fill-available'
    },
    placeholder: "Date in DD/MM/YY format or a Tag",
    onInput: props.setOptionsMetaData,
    option: "livestreamDef",
    option2: "input",
    defaultValue: props === null || props === void 0 || (_props$product5 = props.product) === null || _props$product5 === void 0 || (_props$product5 = _props$product5.detailmeta) === null || _props$product5 === void 0 || (_props$product5 = _props$product5.livestreamDef) === null || _props$product5 === void 0 ? void 0 : _props$product5.input
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex gap-p2",
    style: {
      marginBottom: '.25rem'
    }
  }, (props === null || props === void 0 || (_props$product6 = props.product) === null || _props$product6 === void 0 || (_props$product6 = _props$product6.detailmeta) === null || _props$product6 === void 0 || (_props$product6 = _props$product6.livestreamDef) === null || _props$product6 === void 0 ? void 0 : _props$product6.dates.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, props.product.detailmeta.livestreamDef.dates.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), (props === null || props === void 0 || (_props$product7 = props.product) === null || _props$product7 === void 0 || (_props$product7 = _props$product7.detailmeta) === null || _props$product7 === void 0 || (_props$product7 = _props$product7.livestreamDef) === null || _props$product7 === void 0 ? void 0 : _props$product7.tags.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, props.product.detailmeta.livestreamDef.tags.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null))) : null, /*#__PURE__*/_react["default"].createElement(_.Lineup, (0, _extends2["default"])({}, props, {
    product: props.product,
    setWarning: setWarning,
    appendFormData: props === null || props === void 0 ? void 0 : props.appendFormData
  }))), warning && warning.message ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warning)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItemContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItem)
  }, warning.message))) : null) : /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 promptContainer",
    style: {
      alignItems: 'center',
      height: '20px',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Allow for your customers to subscribe to your product. This is a guarantee by your company that you will continue to deliver your Product to any subscribed customers. Subscriptions will charge monthly by default.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a subscription?"), /*#__PURE__*/_react["default"].createElement(_Inventory["default"], {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: props.product.detailmeta.subscription,
    defaultChecked: props.product.detailmeta.subscription,
    onChange: props.setOptionsMetaData,
    option: "subscription"
  })), props !== null && props !== void 0 && (_props$product8 = props.product) !== null && _props$product8 !== void 0 && _props$product8.published ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 shareButton",
    selectValue: "".concat(props !== null && props !== void 0 && (_props$product9 = props.product) !== null && _props$product9 !== void 0 && _props$product9.id ? "".concat(props.dev ? props.devAddress : props === null || props === void 0 ? void 0 : props.domainUrl, "/pr?p=").concat(props.product.id) : null),
    onClick: _event.selectThisText
  }, /*#__PURE__*/_react["default"].createElement(_Inventory["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, "Share")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props !== null && props !== void 0 && (_props$product10 = props.product) !== null && _props$product10 !== void 0 && _props$product10.id ? "".concat(props.dev ? props.devAddress : props === null || props === void 0 ? void 0 : props.domainUrl, "/pr?p=").concat(props.product.id) : null)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 shareButton"
  }, /*#__PURE__*/_react["default"].createElement(_Inventory["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, "View")))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.handlePublishProduct,
    modif: "publish",
    existing: "true"
  }, "Publish"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.handlePublishProduct,
    modif: "save",
    existing: "true"
  }, "Save"), props.editing ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: props.handleCancelProduct,
    modif: "save"
  }, props.editing["new"] ? 'Abandon' : 'Cancel') : null)))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImgContainer, " Product_img_container"),
    style: {
      position: 'relative'
    }
  }, isAdmin ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Edit Product",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(_ProductImageManagerModule["default"].editProductButton, " ").concat(props._isMobile ? "".concat(_ProductImageManagerModule["default"].editProductButtonMobile) : null),
    onClick: handleEdit,
    modif: "edit",
    alt: "edit"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "edit material-icons",
    style: {
      fontSize: '.85rem'
    }
  }, "edit"))) : null, /*#__PURE__*/_react["default"].createElement(_.ProductImageManager, {
    cdn: props.cdn,
    product: props.product,
    _loggedIn: props._loggedIn,
    domainKey: props.domainKey,
    apiUrl: props.apiUrl,
    setEditing: props.setEditing,
    setCombinedFeed: props.setCombinedFeed
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_meta_container"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((_props$classes$produc = props === null || props === void 0 || (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.productName) !== null && _props$classes$produc !== void 0 ? _props$classes$produc : '')
  }, props.product.name)), props.product && props.product.styles && props.product.styles.length > 1 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: props.product.id + '_styles',
    name: props.product.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: setSelectedStyleHandler,
    ref: styleSelect
  }, (0, _ecommerce.resolveStyles)(props.product).map(function (style, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))) : null, validStyleObject && validStyleObject.option && validStyleObject.option[0] && validStyleObject.option[0].option // Only show if base option is named (non default option for tracking quantity)
  ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: props.product.id + '_options',
    name: props.product.id + '_options',
    style: {
      width: '100%'
    },
    onChange: changeCurrentOption,
    ref: optionSelect
  }, props.product.styles.find(function (m) {
    return m.sid === selectedStyle;
  }).option.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  })))) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      margin: '.125rem 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: 600
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, (_currentPrice$symbol = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.symbol) !== null && _currentPrice$symbol !== void 0 ? _currentPrice$symbol : null), /*#__PURE__*/_react["default"].createElement("span", null, (_currentPrice$price = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.price) !== null && _currentPrice$price !== void 0 ? _currentPrice$price : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_CurrencyLabel",
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      background: 'rgba(150, 150, 150, .5)',
      padding: '.075rem',
      borderRadius: '.25rem'
    }
  }, (_currentPrice$currenc = currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.currency) !== null && _currentPrice$currenc !== void 0 ? _currentPrice$currenc : 'USD')), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'none',
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, validOptionObject && validOptionObject.quantity ? validOptionObject.quantity : '')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container wrap",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleFireGlobalEvent,
    item: props.product.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart"
  }, "Add To Cart"), props !== null && props !== void 0 && (_props$product11 = props.product) !== null && _props$product11 !== void 0 && (_props$product11 = _props$product11.detailmeta) !== null && _props$product11 !== void 0 && _props$product11.subscription ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleFireGlobalEvent,
    item: props.product.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart_subscribe"
  }, "Subscribe") : null))));
};
var _default = exports["default"] = Module;