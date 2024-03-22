"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _ecommerce = require("../../utility/ecommerce");
var _util = require("../../util");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ProductImageManagerModule = _interopRequireDefault(require("./ProductImageManager.module.scss"));
var _uuid = require("uuid");
var allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
var Module = function Module(props) {
  var _props$product3, _props$product4;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    warning = _React$useState4[0],
    setWarning = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    useImage = _React$useState6[0],
    setUseImage = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    itemId = _React$useState8[0],
    setItemId = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(0),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    currentlySelectedImage = _React$useState10[0],
    setCurrentlySelectedImage = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    imageThumbnailFeed = _React$useState12[0],
    setImageThumbnailFeed = _React$useState12[1];
  var fileInput = _react["default"].useRef();
  var productImageRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  _react["default"].useEffect(function () {
    if (props.product && props.product.id !== itemId) {
      setItemId(props.product.id);
      setUseImage(null);
      setCurrentlySelectedImage(0);
    }
  }, [props.product]);
  var handleUploadImage = _react["default"].useCallback(function (e) {
    setWarning(null);
    if (fileInput.current) {
      fileInput.current.click(); // Prompt file upload
    }
  });
  var handleNewFile = _react["default"].useCallback(function (e) {
    try {
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 4 ? 4 : files.length).filter(function (m) {
            return m.type && allowedTypes.indexOf(m.type) > -1;
          }).map(function (m) {
            var blob = m.slice(0, m.size, m.type);
            var ext = allowedTypes[allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
            return new File([blob], "".concat((0, _uuid.v4)(), ".").concat(ext), {
              type: m.type
            });
          });
          var n = props.editing && props.editing["new"];
          if (n && props.passTempImages) {
            // Product not created yet, do not upload image. We can load image as temp image to show user
            props.passTempImages(filesRenamed);
            var reader = new FileReader();
            reader.onload = function (event) {
              setUseImage(event.target.result);
            };
            reader.readAsDataURL(filesRenamed[0]);
          } else {
            // Product created already, immediately upload
            try {
              var f = /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                  var formData, imgNames, data, _f;
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn && props.editing)) {
                          _context.next = 14;
                          break;
                        }
                        formData = new FormData();
                        imgNames = [];
                        if (filesRenamed) {
                          filesRenamed.forEach(function (img) {
                            formData.append("image", img);
                            imgNames.push({
                              name: img.name,
                              modif: 'productImage'
                            });
                          });
                          formData.append('imgNames', JSON.stringify(imgNames));
                        }
                        formData.append('domainKey', props.domainKey);
                        formData.append('hash', props._loggedIn.hash);
                        formData.append('identifier', props._loggedIn.identifier);
                        formData.append('product', props.editing.id);
                        if (props.setFetchBusy) {
                          props.setFetchBusy(true);
                          setTimeout(function () {
                            props.setFetchBusy(false);
                          }, 10000);
                        }
                        console.log(formData.get('image'), filesRenamed);
                        _context.next = 12;
                        return (0, _ecommerce.doUploadImageForProduct)(props.apiUrl, props.domainKey, props.editing.id, props._loggedIn, formData);
                      case 12:
                        data = _context.sent;
                        if (data && data.product && data.product.products) {
                          if (props.setCombinedFeed) {
                            props.setCombinedFeed(data.product.products);
                            if (props.setEditing) {
                              _f = data.product.products.find(function (m) {
                                return m.id === props.editing.id;
                              });
                              if (_f) {
                                props.setEditing(_f);
                              }
                            }
                          }
                          if (props.setFetchBusy) {
                            props.setFetchBusy(false);
                          }
                        }
                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function f() {
                  return _ref.apply(this, arguments);
                };
              }();
              f();
            } catch (err) {
              // fail silently
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
      setWarning({
        message: 'There was an issue uploading images'
      });
    }
  });
  _react["default"].useEffect(function () {
    if (props.editing && !props.editing["new"]) {
      if (!useImage) {
        if (props.editing.images && props.editing.images[0] && props.editing.images[0].name && props.cdn && props.cdn["static"]) {
          setUseImage(props.cdn["static"] + '/' + props.editing.images[0].name);
        }
      }
    }
    if (props.product) {
      if (!useImage) {
        if (props.product.images && props.product.images[0] && props.product.images[0].name && props.cdn && props.cdn["static"]) {
          setUseImage(props.cdn["static"] + '/' + props.product.images[0].name);
        }
      }
    }
  }, [props.editing, useImage, props.product]);
  _react["default"].useEffect(function () {
    console.log(props.editing, props.product);
    if (props.editing) {
      setImageThumbnailFeed(props.editing.images);
    } else if (props.product) {
      setImageThumbnailFeed([]);
    }
  }, [props.editing, props.product]);

  // select container
  // .on("mouseover", function() {
  //     $(this)
  //       .children(".img_producto")
  //       .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  //   })
  //   .on("mouseout", function() {
  //     $(this)
  //       .children(".img_producto")
  //       .css({ transform: "scale(1)" });
  //   })
  //   .on("mousemove", function(e) {
  //     $(this)
  //       .children(".img_producto")
  //       .css({
  //         "transform-origin":
  //           ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
  //           "% " +
  //           ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
  //           "%"
  //       });

  var setUseImageThumbnail = _react["default"].useCallback(function (e) {
    if (e !== null && e !== void 0 && e.target) {
      var _e$target$getAttribut, _props$product, _props$cdn;
      var selector = (_e$target$getAttribut = e.target.getAttribute('selector')) !== null && _e$target$getAttribut !== void 0 ? _e$target$getAttribut : e.target.parentElement.getAttribute('selector');
      if (selector && props !== null && props !== void 0 && (_props$product = props.product) !== null && _props$product !== void 0 && _props$product.images && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"]) {
        var image = props.product.images.find(function (m) {
          return m.name === selector;
        });
        if (image) {
          setUseImage(props.cdn["static"] + '/' + image.name);
        }
      }
    }
  });

  /**
   * Sets a property on an image of a product to true. 
   * @param {*} property // Name of property
   * @param {*} value // Value to set property to
   * @param {*} single // Ensure that set image is only with property value
   */
  var setImgProp = function setImgProp(property, value, single) {
    if (useImage) {
      var _props$product2;
      console.log(useImage);
      var imgName = useImage.match(/\.[^\/]+\/(.+)$/) && useImage.match(/\.[^\/]+\/(.+)$/)[1] ? useImage.match(/\.[^\/]+\/(.+)$/)[1] : null;
      if (imgName && props !== null && props !== void 0 && (_props$product2 = props.product) !== null && _props$product2 !== void 0 && _props$product2.images && Array.isArray(props.product.images) && props !== null && props !== void 0 && props.setEditing) {
        var images = (0, _toConsumableArray2["default"])(props.product.images);
        var index = images.findIndex(function (m) {
          return m.name === imgName;
        });
        if (single) {
          images.map(function (m) {
            delete m[property];
          });
        }
        if (index > -1) {
          images[index][property] = value;
          var product = Object.assign(props.product, {
            images: images
          });
          props.setEditing(product);
        }
      }
    }
  };
  var setCurrentImageAsBackground = _react["default"].useCallback(function (e) {
    setImgProp('bgImg', true, true);
  });
  var setCurrentImageAsLead = _react["default"].useCallback(function (e) {
    setImgProp('leadImg', true, true);
  });
  var bgImg = props !== null && props !== void 0 && (_props$product3 = props.product) !== null && _props$product3 !== void 0 && _props$product3.images ? props.product.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.bgImg;
  }) : null;
  var leadImg = props !== null && props !== void 0 && (_props$product4 = props.product) !== null && _props$product4 !== void 0 && _props$product4.images ? props.product.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.leadImg;
  }) : null;
  var currentIsBgImage = (useImage === null || useImage === void 0 ? void 0 : useImage.match) && useImage.match(/\.[^\/]+\/(.+)$/) && (bgImg === null || bgImg === void 0 ? void 0 : bgImg.name) && useImage.match(/\.[^\/]+\/(.+)$/)[1] === bgImg.name;
  var currentIsLeadImage = (useImage === null || useImage === void 0 ? void 0 : useImage.match) && useImage.match(/\.[^\/]+\/(.+)$/) && (leadImg === null || leadImg === void 0 ? void 0 : leadImg.name) && useImage.match(/\.[^\/]+\/(.+)$/)[1] === leadImg.name;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(_ProductImageManagerModule["default"].productImageManagerContainer, " ProductImageManager_container"),
    style: {
      position: 'relative'
    }
  }, props.editing && !(0, _util.isObjectEmpty)(props.editing) ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleNewFile
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Click here to upload an image for your product",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].changeImageButton, " image material-icons"),
    onClick: handleUploadImage
  }, "image")), warning && warning.message ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warning)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItemContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItem)
  }, warning.message))) : null) : null, props !== null && props !== void 0 && props.editing && !(0, _util.isObjectEmpty)(props.editing) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].buttonSetAsBackground)
  }, currentIsLeadImage ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "gradient_style_bg_1 gradient_style_bg_drop",
    style: {
      fontWeight: 600,
      border: '1px solid #b8ff00',
      borderRadius: '1rem',
      fontSize: '.7rem',
      textAlign: 'center',
      padding: '0.125rem 1.5rem',
      color: 'white'
    }
  }, "Current Lead Image") : /*#__PURE__*/_react["default"].createElement("button", {
    onClick: setCurrentImageAsLead
  }, "Tag As Lead Image"), currentIsBgImage ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "gradient_style_bg_2 gradient_style_bg_2_drop",
    style: {
      fontWeight: 600,
      border: '1px solid #fe4c4c',
      borderRadius: '1rem',
      fontSize: '.7rem',
      textAlign: 'center',
      padding: '0.125rem 1.5rem',
      color: 'white'
    }
  }, "Current Feature Image") : /*#__PURE__*/_react["default"].createElement("button", {
    onClick: setCurrentImageAsBackground
  }, "Tag As Feature Image")) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImageListContainer)
  }, imageThumbnailFeed && imageThumbnailFeed.map && props.cdn && props.cdn["static"] ? imageThumbnailFeed.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ProductImageManagerModule["default"].productImageListThumbnailContainer),
      style: {
        backgroundImage: "url(".concat(props.cdn["static"], "/").concat(m.name, ")")
      },
      onClick: setUseImageThumbnail,
      selector: m.name
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    }));
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImageContainer),
    ref: productImageRef,
    style: {
      backgroundImage: useImage ? "url(".concat(useImage, ")") : ''
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
    style: {
      opacity: useImage ? 0 : 1
    },
    className: "Product_img"
  })));
};
var _default = exports["default"] = Module;