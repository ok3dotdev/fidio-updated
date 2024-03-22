"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _gridList = _interopRequireDefault(require("../../video/player/gridList"));
var _ShopModule = _interopRequireDefault(require("./Shop.module.scss"));
var _ProductImageManagerModule = _interopRequireDefault(require("../product/ProductImageManager.module.scss"));
var _util = require("../../util");
var _uuid = require("uuid");
var _AllInclusive = _interopRequireDefault(require("@mui/icons-material/AllInclusive"));
var _ConfirmationNumber = _interopRequireDefault(require("@mui/icons-material/ConfirmationNumber"));
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _Stadium = _interopRequireDefault(require("@mui/icons-material/Stadium"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _ecommerce = require("../../utility/ecommerce");
var _product = require("../product");
var _signin = require("../../onboarding/signin");
var _Functions = require("./Functions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultEditingOptionsMeta = {
  description: '',
  productType: 'virtual',
  ticket: false,
  livestream: false,
  livestreamDef: {
    dates: [],
    tags: [],
    input: ''
  },
  eventDateDef: {
    dates: [],
    input: ''
  },
  lineup: []
};
var defaultDefinePriceCurrency = {
  code: 'US',
  name: 'United States',
  payment: 'stripe',
  region: 'NORTH AMERICA',
  currency: 'USD',
  symbol: '$'
};
var Module = function Module(props) {
  var _selectedStyle$option, _props$_loggedIn, _editing$detailmeta, _currentDefinePriceCu, _priceInput$current, _priceInput$current2, _ref2, _currentDefinePriceCu2, _editing$meta, _currentDefinePriceCu3, _props$_loggedIn2;
  var router = (0, _router.useRouter)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    fetchBusy = _React$useState6[0],
    setFetchBusy = _React$useState6[1];
  var _React$useState7 = _react["default"].useState({}),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentSelected = _React$useState8[0],
    setCurrentSelected = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    feed = _React$useState10[0],
    setFeed = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    combinedFeed = _React$useState12[0],
    setCombinedFeed = _React$useState12[1];
  var _React$useState13 = _react["default"].useState({}),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    editing = _React$useState14[0],
    setEditing = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    editingSelectedStyle = _React$useState16[0],
    setEditingSelectedStyle = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(null),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    editingSelectedOption = _React$useState18[0],
    setEditingSelectedOption = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(Object.assign({}, defaultEditingOptionsMeta)),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    editingOptionsMeta = _React$useState20[0],
    setEditingOptionsMeta = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    shop = _React$useState22[0],
    setShop = _React$useState22[1];
  var _React$useState23 = _react["default"].useState({}),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    pageError = _React$useState24[0],
    setPageError = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(null),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    tempImagesForCurrentlyEditing = _React$useState26[0],
    setTempImagesForCurrentlyEditing = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(0),
    _React$useState28 = (0, _slicedToArray2["default"])(_React$useState27, 2),
    currentLineupEditing = _React$useState28[0],
    setCurrentLineupEditing = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(false),
    _React$useState30 = (0, _slicedToArray2["default"])(_React$useState29, 2),
    isSettingCurrency = _React$useState30[0],
    setIsSettingCurrency = _React$useState30[1];
  var _React$useState31 = _react["default"].useState(defaultDefinePriceCurrency),
    _React$useState32 = (0, _slicedToArray2["default"])(_React$useState31, 2),
    currentDefinePriceCurrency = _React$useState32[0],
    setCurrentDefinePriceCurrency = _React$useState32[1];
  var _React$useState33 = _react["default"].useState(new FormData()),
    _React$useState34 = (0, _slicedToArray2["default"])(_React$useState33, 2),
    useFormData = _React$useState34[0],
    setUseFormData = _React$useState34[1];
  var _React$useState35 = _react["default"].useState([]),
    _React$useState36 = (0, _slicedToArray2["default"])(_React$useState35, 2),
    useImageNames = _React$useState36[0],
    setUseImageNames = _React$useState36[1];
  var descriptionInputRef = _react["default"].useRef();
  var styleInput = _react["default"].useRef();
  var optionInput = _react["default"].useRef();
  var quantityInput = _react["default"].useRef();
  var priceInput = _react["default"].useRef();
  var optionSelect = _react["default"].useRef();
  var nameRef = _react["default"].useRef();
  var setCurrencySelect = _react["default"].useRef();
  var currentCurrencyRef = _react["default"].useRef();
  var lineupNameRef = _react["default"].useRef();
  var lineupDescriptionRef = _react["default"].useRef();
  var lineupTimeRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    var selector = props.profile ? 'shopProfileData' : 'shop';
    if (props && props[selector]) {
      var f = props[selector].products && Array.isArray(props[selector].products) ? props[selector].products.concat(feed) : [];
      var s = props[selector].shop;
      var update = false;
      for (var i = 0; i < combinedFeed.length; i++) {
        if (!(0, _util.compareObjects)(combinedFeed, f)) {
          update = true;
          break;
        }
      }
      if (!shop || !s || s && !s.id) {
        setShop(s);
      }
      if (combinedFeed.length === 0 && f.length !== 0) {
        setCombinedFeed(f);
      }
    }
  }, [props.shopData, props.shopProfileData, feed, combinedFeed]);
  var defaultOption = function defaultOption() {
    var addOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var o = {
      sid: (0, _uuid.v4)(),
      quantity: 100
    };
    if (addOption) {
      o.option = '';
    }
    return o;
  };
  var defaultStyle = function defaultStyle() {
    return {
      price: 10,
      currency: 'USD',
      priceTable: {},
      sid: (0, _uuid.v4)(),
      style: '',
      option: [defaultOption(false)]
    };
  };
  var defaultLineup = function defaultLineup() {
    return {
      id: (0, _uuid.v4)(),
      title: '',
      description: '',
      time: null,
      image: ''
    };
  };
  var adminAuth = props._loggedIn && props._loggedIn.identifier && props.profileData && props.profileData.user && props.profileData.user.id && props._loggedIn.identifier === props.profileData.user.id;
  var handleEdit = function handleEdit(product) {
    console.log(product);
    if (shop !== null && shop !== void 0 && shop.id || !shop && props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
      setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
      setEditing(product);
      setTimeout(function () {
        var temp = _objectSpread({}, product);
        temp.name = product.name;
        setEditing(temp);
      }, 200);
    }
  };
  var createNewProduct = _react["default"].useCallback(function (e) {
    try {
      console.log('Start');
      if ((0, _util.isObjectEmpty)(editing)) {
        if (shop !== null && shop !== void 0 && shop.id || props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
          var _shop$id;
          var style = defaultStyle();
          var product = {
            id: (0, _uuid.v4)(),
            shop: (_shop$id = shop === null || shop === void 0 ? void 0 : shop.id) !== null && _shop$id !== void 0 ? _shop$id : null,
            name: '',
            detailmeta: {},
            styles: [style],
            shipping: [],
            published: false,
            images: [],
            protype: {
              type: 'virtual',
              subscription: false
            },
            infinite: false,
            meta: {},
            files: {},
            "new": true
          };
          setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
          setEditing(product);
          setEditingSelectedStyle(style.sid);
          setCurrentLineupEditing(null);
          setTempImagesForCurrentlyEditing(null);
          var tempMeta = Object.assign({}, defaultEditingOptionsMeta);
          tempMeta.productType = 'virtual';
          setEditingOptionsMeta(tempMeta);
          setTimeout(function () {
            var _window;
            styleInput.current.value = style.style;
            if (style.option[0] && Object.hasOwnProperty.call(style.option[0], 'option')) {
              optionInput.current.value = style.option[0].option;
            }
            var currentProduct = document.getElementById(product.id);
            if (currentProduct !== null && currentProduct !== void 0 && currentProduct.offsetTop && (_window = window) !== null && _window !== void 0 && _window.scrollTo && props._isMobile) {
              window.scrollTo({
                behavior: 'smooth',
                top: currentProduct.offsetTop - 5
              });
            }
          }, 200);
        }
      }
      // create template for new product
    } catch (err) {
      console.log(err); // fail silently
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      if (props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
        createNewProduct();
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props === null || props === void 0 ? void 0 : props.forceOpenRedirectOnDone]);
  var handleCancelProduct = _react["default"].useCallback(function (e) {
    setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
    setEditing({});
  });
  var resolveOptions = function resolveOptions(product) {
    if (product && product.styles) {
      var f = product.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        return product.styles[f].option;
      }
    }
    return [];
  };
  var resolveOption = function resolveOption(option, prop) {
    console.log(option);
    var o = option.find(function (m) {
      return m.sid === editingSelectedOption;
    });
    if (o) {
      return o[prop];
    }
    return null;
  };
  var setCurrentStyleName = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = editing.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        temp.styles[f].style = e.currentTarget.value;
      }
      setEditing(temp);
    }
  });
  var setCurrentOptionName = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value, editingSelectedOption);
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        if (editingSelectedOption == null) {
          setEditingSelectedOption(editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].sid : '');
        }
        console.log(f, temp.styles[f].option, editingSelectedOption);
        var f2 = temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        console.log(f2);
        if (f2 > -1) {
          temp.styles[f].option[f2].option = e.currentTarget.value;
        }
        setEditing(temp);
      }
    }
  });
  var setCurrentQuantity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        console.log(f, editingSelectedStyle, temp);
        var f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        console.log(f2);
        if (f2 > -1) {
          if (!isNaN(Number(e.currentTarget.value))) {
            temp.styles[f].option[f2].quantity = Number(e.currentTarget.value);
          }
        }
        setEditing(temp);
      }
    }
  });
  var setInfinity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        var f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(function (m) {
          return m.sid === editingSelectedOption;
        });
        if (f2 > -1) {
          if (!Object.prototype.hasOwnProperty.call(temp.styles[f].option[f2], 'quantity') || temp.styles[f].option[f2].quantity && temp.styles[f].option[f2].quantity !== 10000000) {
            temp.styles[f].option[f2].quantity = Number(10000000);
          } else {
            temp.styles[f].option[f2].quantity = 1;
          }
        }
        setEditing(temp);
      }
    }
  });
  var setCurrentPrice = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var temp = _objectSpread({}, editing);
      var f = temp.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        if (!isNaN(Number(e.currentTarget.value))) {
          if ((currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) === 'USD') {
            temp.styles[f].price = Number(e.currentTarget.value);
          } else {
            if (!temp.styles[f].priceTable) {
              temp.styles[f].priceTable = {};
            }
            temp.styles[f].priceTable[currentDefinePriceCurrency.currency] = Number(e.currentTarget.value);
          }
          setEditing(temp);
        }
      }
    }
  });
  var changeCurrentStyle = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      setEditingSelectedStyle(e.currentTarget.value);
      var f = editing.styles.findIndex(function (m) {
        return m.sid === e.currentTarget.value;
      });
      styleInput.current.value = editing.styles[f].style;
      console.log(editing.styles);
      setTimeout(function () {
        if (optionInput && optionInput.current) {
          optionInput.current.value = editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].option : '';
          setEditingSelectedOption(editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].sid : '');
          if (optionSelect.current) {
            optionSelect.current.selectedIndex = 0;
          }
        }
      }, 250);
      quantityInput.current.value = editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].quantity : 1;
      priceInput.current.value = editing.styles[f] ? editing.styles[f].price : 1;
    }
  });
  var changeCurrentOption = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      var f = editing.styles.findIndex(function (m) {
        return m.sid === editingSelectedStyle;
      });
      if (f > -1) {
        var temp = editing.styles[f].option.find(function (m) {
          return m.sid === e.currentTarget.value;
        });
        console.log(temp);
        if (temp) {
          optionInput.current.value = temp.option;
          setEditingSelectedOption(temp.sid);
          quantityInput.current.value = temp.quantity;
        }
      }
    }
  });
  var addStyle = _react["default"].useCallback(function (e) {
    var temp = _objectSpread({}, editing);
    temp.styles.push(defaultStyle());
    setEditing(temp);
  });
  var addOption = _react["default"].useCallback(function (e) {
    console.log(editing, editingSelectedStyle);
    var temp = _objectSpread({}, editing);
    var f = editing.styles.findIndex(function (m) {
      return m.sid === editingSelectedStyle;
    });
    console.log(f);
    if (f > -1) {
      var o = defaultOption();
      if (editing.styles[f].option[0] && !Object.hasOwnProperty.call(editing.styles[f].option[0], 'option')) {
        editing.styles[f].option[0].option = '';
        setEditingSelectedOption(editing.styles[f].option[0].sid);
      } else {
        editing.styles[f].option.push(o);
        setEditingSelectedOption(o.sid);
      }
    }
    setEditing(temp);
  });
  var onProductTypeChange = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var value = e.currentTarget.value;
      var temp = _objectSpread({}, editingOptionsMeta);
      temp.productType = value;
      var tempPro = _objectSpread({}, editing);
      tempPro.protype.type = value;
      setEditing(tempPro);
      setEditingOptionsMeta(temp);
    }
  });
  var setOptionsMetaData = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.checked, e.currentTarget.getAttribute('option'));
    (0, _Functions.doSetOptionsMetaData)(e, editingOptionsMeta, editing, setEditing, setEditingOptionsMeta, currentLineupEditing, setCurrentLineupEditing);
  });
  var updateLineup = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        var temp = _objectSpread({}, editingOptionsMeta);
        if (e.currentTarget.getAttribute('option') === 'add') {
          if (temp.lineup && temp.lineup.length < 10) {
            temp.lineup.push(defaultLineup());
            setCurrentLineupEditing(temp.lineup.length - 1);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'remove') {
          if (temp.lineup && temp.lineup.length > 0) {
            temp.lineup.pop();
            setCurrentLineupEditing(temp.lineup.length - 1 > -1 ? temp.lineup.length - 1 : null);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'setSelected') {
          var index = e.currentTarget.getAttribute('index');
          if (!isNaN(index)) {
            setCurrentLineupEditing(index);
            lineupNameRef.current.value = temp.lineup[index].title;
            lineupDescriptionRef.current.value = temp.lineup[index].description;
            lineupTimeRef.current.value = temp.lineup[index].time;
          }
        }
      }
    }
  });
  var setCurrentName = _react["default"].useCallback(function (e) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif') && e.currentTarget.getAttribute('modif') === 'product_name') {
        var temp = _objectSpread({}, editing);
        temp.name = e.currentTarget.value;
        setEditing(temp);
      }
    }
  });
  var publishProduct = function publishProduct(modif, existing) {
    var dontSetProducts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    try {
      var fn = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var _shop$id2, _shop$id3, product, formData, imgNames, data, _data$product;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (fetchBusy) {
                  _context.next = 32;
                  break;
                }
                setPageError({});
                product = _objectSpread({}, editing);
                console.log(product);
                product.detailmeta = _objectSpread({}, editingOptionsMeta);
                console.log('Publish Product', product);
                if (!(product.name === '')) {
                  _context.next = 10;
                  break;
                }
                setPageError({
                  message: 'Please enter a name for your product',
                  location: 'product_name'
                });
                setFetchBusy(false);
                return _context.abrupt("return", 1);
              case 10:
                formData = useFormData;
                imgNames = useImageNames;
                if (tempImagesForCurrentlyEditing && tempImagesForCurrentlyEditing.editing === product.id) {
                  // Retrieve files for upload if matching upload image edit
                  tempImagesForCurrentlyEditing.images.forEach(function (img) {
                    console.log('Img', img);
                    formData.append("image", img);
                    imgNames.push({
                      name: img.name,
                      modif: 'productImage'
                    });
                  });
                  formData.append('imgNames', JSON.stringify(imgNames));
                }
                setUseFormData(formData); // Set form data before setting other variables to ensure only images stored
                setUseImageNames(imgNames);
                formData.append('domainKey', props.domainKey);
                formData.append('hash', props._loggedIn.hash);
                formData.append('identifier', props._loggedIn.identifier);
                formData.append('product', JSON.stringify(product));
                formData.append('shop', (_shop$id2 = shop === null || shop === void 0 ? void 0 : shop.id) !== null && _shop$id2 !== void 0 ? _shop$id2 : null);
                formData.append('status', modif);
                formData.append('existing', existing);
                setFetchBusy(true);
                setTimeout(function () {
                  setFetchBusy(false);
                }, 10000);
                _context.next = 26;
                return (0, _ecommerce.doPublishProduct)(props.apiUrl, props.domainKey, (_shop$id3 = shop === null || shop === void 0 ? void 0 : shop.id) !== null && _shop$id3 !== void 0 ? _shop$id3 : null, props._loggedIn, product, formData);
              case 26:
                data = _context.sent;
                console.log(data);
                if (data) {
                  setUseFormData(new FormData()); // Reset form data due to created product
                  setUseImageNames([]);
                  if (data.product) {
                    if (props !== null && props !== void 0 && props.forceOpenRedirectOnDone) {
                      if (props.redirect) {
                        router.push(props.redirect);
                      } else if (props.redirectToProduct && data !== null && data !== void 0 && (_data$product = data.product) !== null && _data$product !== void 0 && (_data$product = _data$product.product) !== null && _data$product !== void 0 && _data$product.id) {
                        router.push("/pr?p=".concat(data.product.product.id));
                      }
                    }
                    if (data.product.products) {
                      if (!dontSetProducts) {
                        // We use this if we run publishProduct then another request because some requests dont update everything publishProduct does, for example upload lineup images. Upload lineup images will return a new combined feed after so we dont need to run this here as it will interrupt the view and functions of other queued requests
                        setCombinedFeed(data.product.products);
                        setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
                        setEditing({});
                      }
                      setFetchBusy(false);
                    }
                  }
                }
                return _context.abrupt("return", data);
              case 32:
                return _context.abrupt("return", null);
              case 33:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function fn() {
          return _ref.apply(this, arguments);
        };
      }();
      return fn();
    } catch (err) {
      // fail silently
      return null;
    }
  };
  var handlePublishProduct = _react["default"].useCallback(function (e) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif')) {
        var modif = e.currentTarget.getAttribute('modif');
        var existing = e.currentTarget.getAttribute('existing');
        publishProduct(modif, existing);
      }
    }
  });
  var passTempImages = function passTempImages(images) {
    setTempImagesForCurrentlyEditing({
      editing: editing.id,
      images: images
    });
  };
  var handleSetIsSettingCurrency = _react["default"].useCallback(function (e) {
    if (isSettingCurrency) {
      setIsSettingCurrency(false);
      return false;
    }
    setIsSettingCurrency(true);
    return true;
  });
  var changeCurrentCurrency = function changeCurrentCurrency(product, value) {
    console.log('Product Value', product, value);
    if (product["new"]) {
      var temp = editing;
      editing.meta.currency = value;
      setEditing(temp);
      return value;
    } else {
      var _temp = (0, _toConsumableArray2["default"])(combinedFeed);
      var f = _temp.findIndex(function (m) {
        return m.id === product.id;
      });
      if (f > -1) {
        _temp[f].meta.currency = value;
        setCombinedFeed(_temp);
        return value;
      }
    }
    return null;
  };
  var handleChangeCurrentCurrency = _react["default"].useCallback(function (e) {
    var v = changeCurrentCurrency(editing, e.currentTarget.value);
    if (v) {
      currentCurrencyRef.current.innerHTML = v;
      var f = Object.entries(props.regionsData).find(function (m) {
        return m[1].currency === v;
      });
      if (f && f[1]) {
        setCurrentDefinePriceCurrency(f[1]);
        setDefaultPriceHtml(f[1]);
      }
    }
  });
  var handleUpdateProductDescription = _react["default"].useCallback(function (e) {
    var value = e.currentTarget.value;
    console.log(value);
    if (editing) {
      var temp = _objectSpread({}, editingOptionsMeta);
      console.log(temp, editingOptionsMeta, editing);
      if (temp) {
        temp.description = value;
        var newEditing = _objectSpread({}, editing);
        newEditing.detailmeta = temp;
        setEditing(newEditing);
        if (temp) {
          setEditingOptionsMeta(temp);
        }
      }
    }
  });
  var appendFormData = function appendFormData(filesRenamed) {
    var modif = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'lineup';
    var useId = arguments.length > 2 ? arguments[2] : undefined;
    var formData = useFormData;
    var imgNames = useImageNames;
    if (filesRenamed) {
      filesRenamed.forEach(function (img) {
        formData.append("image", img);
        imgNames.push({
          name: img.name,
          modif: modif,
          id: useId
        });
      });
      formData.append('imgNames', JSON.stringify(imgNames));
    }
    setUseFormData(formData);
    setUseImageNames(imgNames);
  };

  // list all shop items
  // allow for creation of shop item with
  // product name, description, options, size per option (os or custom) w/ quantity, type, publish, images
  // console.log(adminAuth, props, combinedFeed, shop, editing, editingOptionsMeta, editingOptionsMeta.productType, editingSelectedOption, editingSelectedStyle)

  var selectedStyle = editing && editing.styles ? editing.styles.find(function (m) {
    return m.sid === editingSelectedStyle;
  }) : null;
  var selectedOption = editing && selectedStyle && selectedStyle.option ? ((_selectedStyle$option = selectedStyle.option.find(function (m) {
    return m.sid === editingSelectedOption;
  })) !== null && _selectedStyle$option !== void 0 ? _selectedStyle$option : selectedStyle.option.length === 1) ? selectedStyle.option[0] : null : null;
  var setDefaultPriceHtml = function setDefaultPriceHtml(useDefinePriceCurrency) {
    var _useDefinePriceCurren;
    if (!useDefinePriceCurrency) {
      useDefinePriceCurrency = currentDefinePriceCurrency;
    }
    if (((_useDefinePriceCurren = useDefinePriceCurrency) === null || _useDefinePriceCurren === void 0 ? void 0 : _useDefinePriceCurren.currency) !== 'USD' && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, useDefinePriceCurrency.currency)) {
      priceInput.current.value = selectedStyle.priceTable[useDefinePriceCurrency.currency];
    } else if (selectedStyle !== null && selectedStyle !== void 0 && selectedStyle.price) {
      priceInput.current.value = selectedStyle.price;
    }
  };
  console.log(adminAuth, shop);
  var noShop = shop && shop.status && shop.status === 'nonexistent';
  console.log(noShop, editing, tempImagesForCurrentlyEditing, currentDefinePriceCurrency);
  console.log(editingOptionsMeta, currentLineupEditing, selectedStyle, combinedFeed);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ShopModule["default"].container, " ").concat(props.smaller ? "".concat(_ProductImageManagerModule["default"].smallContainer) : null)
  }, adminAuth && !noShop ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ShopModule["default"].adminContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'heading'
  }, "Shop"), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'flex options',
    style: {
      gap: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    disabled: !(0, _util.isObjectEmpty)(editing),
    onClick: createNewProduct
  }, "Create Product"), editing && !(0, _util.isObjectEmpty)(editing) ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing["new"] ? 'Abandon' : 'Cancel') : null)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Product_flex_container"
  }, editing !== null && editing !== void 0 && editing["new"] ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContainer, " ").concat(props !== null && props !== void 0 && props.noFixedPosition ? _ProductImageManagerModule["default"].currentlyEditingNoFixed : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentEditingProductInnerContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].currentlyEditingProductContent)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImgContainer, " Product_img_container Product_img_container_large")
  }, /*#__PURE__*/_react["default"].createElement(_product.ProductImageManager, (0, _extends2["default"])({}, props, {
    editing: editing,
    passTempImages: passTempImages
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productMetaContainer, " Product_meta_container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "calc(100% - ".concat(props._loggedIn ? !(props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.username) ? '100' : '25' : '40', "px)"),
      maxHeight: '75vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Name of Product",
    placement: "right"
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
    onChange: setCurrentName,
    ref: nameRef,
    modif: "product_name"
  })), pageError.location && pageError.location === 'product_name' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error"
  }, pageError.message) : null), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Product Description",
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    className: "".concat(_ProductImageManagerModule["default"].textArea),
    name: "description",
    placeholder: "Description",
    defaultValue: editing === null || editing === void 0 || (_editing$detailmeta = editing.detailmeta) === null || _editing$detailmeta === void 0 ? void 0 : _editing$detailmeta.description,
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
  }, (_currentDefinePriceCu = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.symbol) !== null && _currentDefinePriceCu !== void 0 ? _currentDefinePriceCu : '$')), /*#__PURE__*/_react["default"].createElement("input", {
    type: "currency",
    style: {
      width: '100%'
    },
    defaultValue: "10.00",
    ref: priceInput,
    onChange: setCurrentPrice
  }), selectedStyle && (currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) === 'USD' && selectedStyle.price != (priceInput === null || priceInput === void 0 || (_priceInput$current = priceInput.current) === null || _priceInput$current === void 0 ? void 0 : _priceInput$current.value) || (currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== 'USD' && (!selectedStyle.priceTable || selectedStyle.priceTable && !selectedStyle.priceTable[currentDefinePriceCurrency.currency] || currentDefinePriceCurrency !== null && currentDefinePriceCurrency !== void 0 && currentDefinePriceCurrency.currency && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, currentDefinePriceCurrency.currency) && selectedStyle.priceTable[currentDefinePriceCurrency.currency] != priceInput.current.value) ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The price displayed is currently not set for this product style. Click here to set it"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: setCurrentPrice,
    value: priceInput === null || priceInput === void 0 || (_priceInput$current2 = priceInput.current) === null || _priceInput$current2 === void 0 ? void 0 : _priceInput$current2.value,
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
  }, (_ref2 = (_currentDefinePriceCu2 = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== null && _currentDefinePriceCu2 !== void 0 ? _currentDefinePriceCu2 : editing === null || editing === void 0 || (_editing$meta = editing.meta) === null || _editing$meta === void 0 ? void 0 : _editing$meta.currency) !== null && _ref2 !== void 0 ? _ref2 : 'USD')), isSettingCurrency ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyExternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].setCurrencyContainer)
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_setCurrency',
    name: editing.id + '_setCurrency',
    style: {
      width: '100%'
    },
    onChange: handleChangeCurrentCurrency,
    ref: setCurrencySelect,
    defaultValue: (_currentDefinePriceCu3 = currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) !== null && _currentDefinePriceCu3 !== void 0 ? _currentDefinePriceCu3 : 'USD'
  }, props !== null && props !== void 0 && props.regionsData ? Object.entries(props.regionsData).map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      className: "".concat(_ProductImageManagerModule["default"].setCurrencyOption, " ").concat(m[1].currency !== 'USD' ? selectedStyle !== null && selectedStyle !== void 0 && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, m[1].currency) ? _ProductImageManagerModule["default"].currencyOptionUsed : m[1].currency === 'USD' ? _ProductImageManagerModule["default"].currencyOptionUsed : null : null),
      value: m[1].currency,
      symbol: m[1].symbol
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[1].currency), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].name), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, m[1].symbol));
  }) : null))) : null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Set the quantity for the currently selected Style & Option combo"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    }
  }, "Qty")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    style: {
      width: '100%',
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    },
    defaultValue: "100",
    ref: quantityInput,
    onChange: setCurrentQuantity
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Infinite stock"
  }, /*#__PURE__*/_react["default"].createElement(_AllInclusive["default"], null)), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    onChange: setInfinity,
    checked: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000
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
    ref: styleInput,
    onChange: setCurrentStyleName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_styles',
    name: editing.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: changeCurrentStyle
  }, (0, _ecommerce.resolveStyles)(editing).map(function (style, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))))), selectedStyle && selectedStyle.option.length > 0 && selectedStyle.option[0] && Object.hasOwnProperty.call(selectedStyle.option[0], 'option') ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
    ref: optionInput,
    onChange: setCurrentOptionName
  }), /*#__PURE__*/_react["default"].createElement("select", {
    id: editing.id + '_options',
    name: editing.id + '_options',
    style: {
      width: '100%'
    },
    onChange: changeCurrentOption,
    ref: optionSelect
  }, editing.styles.find(function (m) {
    return m.sid === editingSelectedStyle;
  }).option.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  }))))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: addStyle
  }, "Add Style"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: addOption
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
    onChange: onProductTypeChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "virtual"
  }, "Virtual")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "physical",
    name: "fav_language",
    value: "physical",
    onChange: onProductTypeChange
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
    value: editingOptionsMeta.ticket,
    defaultChecked: editingOptionsMeta.ticket,
    onChange: setOptionsMetaData,
    option: "ticket"
  })), editingOptionsMeta.ticket ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
    onInput: setOptionsMetaData,
    option: "eventDateDef",
    option2: "input",
    defaultValue: editingOptionsMeta.eventDateDef.input
  })), editingOptionsMeta.eventDateDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem',
      marginBottom: '.25rem'
    }
  }, editingOptionsMeta.eventDateDef.dates.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null)) : null), editingOptionsMeta && editingOptionsMeta.productType === 'virtual' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
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
    placement: "left",
    paddin: true
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
    value: editingOptionsMeta.livestream,
    defaultChecked: editingOptionsMeta.livestream,
    onChange: setOptionsMetaData,
    option: "livestream"
  })), editingOptionsMeta.livestream ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
    onInput: setOptionsMetaData,
    option: "livestreamDef",
    option2: "input",
    defaultValue: editingOptionsMeta.livestreamDef.input
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex gap-p2",
    style: {
      marginBottom: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.dates.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.dates.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d ? (0, _util.getFormattedDate)(d, {
      pretty: true
    }) : '') : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null), editingOptionsMeta.livestreamDef.tags.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.tags.map(function (d, i) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem",
      key: i
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : /*#__PURE__*/_react["default"].createElement("div", null))) : null, /*#__PURE__*/_react["default"].createElement(_product.Lineup, (0, _extends2["default"])({}, props, {
    product: editing,
    editing: editing,
    editingOptionsMeta: editingOptionsMeta,
    setOptionsMetaData: setOptionsMetaData,
    currentLineupEditing: currentLineupEditing,
    setCurrentLineupEditing: setCurrentLineupEditing,
    appendFormData: appendFormData
  })))) : /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
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
    value: editingOptionsMeta.subscription,
    defaultChecked: editingOptionsMeta.subscription,
    onChange: setOptionsMetaData,
    option: "subscription"
  }))), !(props !== null && props !== void 0 && props._loggedIn) || !(props !== null && props !== void 0 && (_props$_loggedIn2 = props._loggedIn) !== null && _props$_loggedIn2 !== void 0 && _props$_loggedIn2.username) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_signin.SignIn, props), /*#__PURE__*/_react["default"].createElement(_signin.Username, props)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePublishProduct,
    modif: "publish"
  }, "Publish"), !(props !== null && props !== void 0 && props.forceOpenRedirectOnDone) ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePublishProduct,
    modif: "save"
  }, "Save") : null, editing && !(props !== null && props !== void 0 && props.forceOpenRedirectOnDone) ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing["new"] ? 'Abandon' : 'Cancel') : null))))) : null, combinedFeed && combinedFeed.map && !props.hideFeed ? combinedFeed.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_product.Product, (0, _extends2["default"])({}, props, {
      product: item,
      key: i,
      apiUrl: props.apiUrl,
      domainKey: props.domainKey,
      _loggedIn: props._loggedIn,
      fetchBusy: fetchBusy,
      setFetchBusy: setFetchBusy,
      _setLoggedIn: props._setLoggedIn,
      handleEdit: handleEdit,
      editing: editing,
      setEditing: setEditing,
      setCurrentName: setCurrentName,
      pageError: pageError,
      styleInput: styleInput,
      setCurrentStyleName: setCurrentStyleName,
      changeCurrentStyle: changeCurrentStyle,
      resolveStyles: _ecommerce.resolveStyles,
      selectedStyle: selectedStyle,
      setCurrentOptionName: setCurrentOptionName,
      optionInput: optionInput,
      changeCurrentOption: changeCurrentOption,
      optionSelect: optionSelect,
      editingSelectedStyle: editingSelectedStyle,
      priceInput: priceInput,
      setCurrentPrice: setCurrentPrice,
      selectedOption: selectedOption,
      quantityInput: quantityInput,
      setCurrentQuantity: setCurrentQuantity,
      setInfinity: setInfinity,
      addStyle: addStyle,
      addOption: addOption,
      onProductTypeChange: onProductTypeChange,
      editingOptionsMeta: editingOptionsMeta,
      setEditingOptionsMeta: setEditingOptionsMeta,
      setOptionsMetaData: setOptionsMetaData,
      handlePublishProduct: handlePublishProduct,
      publishProduct: publishProduct,
      handleCancelProduct: handleCancelProduct,
      nameRef: nameRef,
      setEditingSelectedStyle: setEditingSelectedStyle,
      setEditingSelectedOption: setEditingSelectedOption,
      setCombinedFeed: setCombinedFeed,
      setCurrentLineupEditing: setCurrentLineupEditing,
      currentLineupEditing: currentLineupEditing,
      defaultLineup: defaultLineup,
      setCurrencySelect: setCurrencySelect,
      changeCurrentCurrency: changeCurrentCurrency,
      currentDefinePriceCurrency: currentDefinePriceCurrency,
      setCurrentDefinePriceCurrency: setCurrentDefinePriceCurrency,
      setDefaultPriceHtml: setDefaultPriceHtml,
      appendFormData: appendFormData
    }));
  }) : null)));
};
var _default = exports["default"] = Module;