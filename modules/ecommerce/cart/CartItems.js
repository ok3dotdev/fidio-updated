"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _div, _span;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$cart, _props$cart2, _props$useCartOfCurre;
  return <_react.default.Fragment>
            {!(props !== null && props !== void 0 && props.cart) || props !== null && props !== void 0 && props.cart && !(props !== null && props !== void 0 && (_props$cart = props.cart) !== null && _props$cart !== void 0 && _props$cart.items) || props !== null && props !== void 0 && (_props$cart2 = props.cart) !== null && _props$cart2 !== void 0 && _props$cart2.items && props.cart.items.length === 0 ? _div || (_div = <div className='Ecommerce_Prompt'>Your cart is empty.</div>) : <div>
                        <div className='flex gap-p3' style={{
        flexDirection: 'column',
        marginTop: '.3rem',
        marginBottom: '.3rem'
      }}>
                            {props !== null && props !== void 0 && (_props$useCartOfCurre = props.useCartOfCurrency) !== null && _props$useCartOfCurre !== void 0 && (_props$useCartOfCurre = _props$useCartOfCurre.items) !== null && _props$useCartOfCurre !== void 0 && _props$useCartOfCurre.map ? props.useCartOfCurrency.items.map(function (item, i) {
          var _item$product, _props$cdn;
          var current = (0, _ecommerce.resolveCurrentStyle)(item.product, item.style);
          var currentOption = (0, _ecommerce.resolveCurrentOption)(current, item.option);
          var priceObject = (0, _ecommerce.resolveRegionBasedPrice)(props, current);
          var price = priceObject.price;
          var symbol = priceObject.symbol;
          var useImage = item !== null && item !== void 0 && (_item$product = item.product) !== null && _item$product !== void 0 && _item$product.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
          return <div className='gap-p2 Ecommerce_Item_Container' key={i}>
                                                <div style={{
              display: 'flex',
              gap: '.5rem'
            }}>
                                                    <div className={"Ecommerce_Item_Image_Container"} style={{
                backgroundImage: useImage && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"] ? "url(".concat(props.cdn["static"], "/").concat(useImage, ")") : null
              }}>
                                                        <img src={(0, _ecommerce.resolveImg)(props.editing, props.cdn)} className='Product_img' style={{
                  width: '45px',
                  opacity: useImage ? 0 : 1
                }} />
                                                    </div>
                                                    <div style={{
                width: '100%'
              }}>
                                                        <div className='flex gap-p2 Ecommerce_Cart_Title_Main_Container'>
                                                            <div className='Ecommerce_Title'>{item.product.name}</div>
                                                            <div className='Ecommerce_Cart_Price_Container'>
                                                                <div className='Ecommerce_Price'>{symbol}{(0, _ecommerce.resolveMoneyFormat)(price)}</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex' style={{
                  justifyContent: 'space-between'
                }}>
                                                            <div>
                                                                <span className='flex' style={{
                      fontSize: '.7rem',
                      color: 'grey'
                    }}>
                                                                    <div>{current && current.style ? current.style : ''}</div>
                                                                    {_span || (_span = <span>&nbsp;~&nbsp;</span>)}
                                                                    <div>{currentOption && currentOption.option ? "".concat(currentOption.option) : ''}</div>
                                                                </span>
                                                                <div className='Ecommerce_Cart_Quantity_Container'>
                                                                    <div style={{
                        display: 'flex',
                        alignSelf: 'center'
                      }}>
                                                                        <_Inventory.default sx={{
                          width: '.85rem',
                          height: '.9rem',
                          marginRight: '.25rem'
                        }}></_Inventory.default>
                                                                    </div>
                                                                    <input type='number' value={item.quantity} style={{
                        height: '1.125rem',
                        maxWidth: '3rem'
                      }} onChange={props === null || props === void 0 ? void 0 : props.handleUpdateQuantity} styleId={item.style} optionId={item.option} productId={item.product.id} quantity={item.quantity}></input>
                                                                </div>
                                                            </div>
                                                            <div className='Ecommerce_Cart_Side_Meta_Container'>
                                                                <div style={{
                      color: 'grey',
                      fontSize: '.7rem',
                      height: '17px',
                      textAlign: 'right'
                    }}>Subtotal:</div>
                                                                <div className='Ecommerce_Price'>{symbol}{(0, _ecommerce.resolveMoneyFormat)(item.quantity * price)}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>;
        }) : null}
                        </div>
                    </div>}
        </_react.default.Fragment>;
};
var _default = exports["default"] = Module;