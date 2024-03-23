var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { resolveImg, doUploadImageForProduct } from '../../utility/ecommerce';
import { isObjectEmpty } from '../../util';
import Tooltip from '@mui/material/Tooltip';
import PIMStyles from './ProductImageManager.module.scss';
import { v4 as uuidv4 } from 'uuid';
const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [warning, setWarning] = React.useState(null);
  const [useImage, setUseImage] = React.useState(null);
  const [itemId, setItemId] = React.useState(null);
  const [currentlySelectedImage, setCurrentlySelectedImage] = React.useState(0);
  const [imageThumbnailFeed, setImageThumbnailFeed] = React.useState([]);
  const fileInput = React.useRef();
  const productImageRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  React.useEffect(() => {
    if (props.product && props.product.id !== itemId) {
      setItemId(props.product.id);
      setUseImage(null);
      setCurrentlySelectedImage(0);
    }
  }, [props.product]);
  const handleUploadImage = React.useCallback(e => {
    setWarning(null);
    if (fileInput.current) {
      fileInput.current.click(); // Prompt file upload
    }
  });
  const handleNewFile = React.useCallback(e => {
    try {
      if (e && e.target && e.target.files) {
        const files = e.target.files;
        if (files && files.length > 0) {
          const filesRenamed = Array.from(files).slice(0, files.length > 4 ? 4 : files.length).filter(m => m.type && allowedTypes.indexOf(m.type) > -1).map(m => {
            var blob = m.slice(0, m.size, m.type);
            const ext = allowedTypes[allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
            return new File([blob], `${uuidv4()}.${ext}`, {
              type: m.type
            });
          });
          const n = props.editing && props.editing.new;
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
              const f = async () => {
                if (!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn && props.editing) {
                  const formData = new FormData();
                  const imgNames = [];
                  if (filesRenamed) {
                    filesRenamed.forEach(img => {
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
                    setTimeout(() => {
                      props.setFetchBusy(false);
                    }, 10000);
                  }
                  console.log(formData.get('image'), filesRenamed);
                  const data = await doUploadImageForProduct(props.apiUrl, props.domainKey, props.editing.id, props._loggedIn, formData);
                  if (data && data.product && data.product.products) {
                    if (props.setCombinedFeed) {
                      props.setCombinedFeed(data.product.products);
                      if (props.setEditing) {
                        const f = data.product.products.find(m => m.id === props.editing.id);
                        if (f) {
                          props.setEditing(f);
                        }
                      }
                    }
                    if (props.setFetchBusy) {
                      props.setFetchBusy(false);
                    }
                  }
                }
              };
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
  React.useEffect(() => {
    if (props.editing && !props.editing.new) {
      if (!useImage) {
        if (props.editing.images && props.editing.images[0] && props.editing.images[0].name && props.cdn && props.cdn.static) {
          setUseImage(props.cdn.static + '/' + props.editing.images[0].name);
        }
      }
    }
    if (props.product) {
      if (!useImage) {
        if (props.product.images && props.product.images[0] && props.product.images[0].name && props.cdn && props.cdn.static) {
          setUseImage(props.cdn.static + '/' + props.product.images[0].name);
        }
      }
    }
  }, [props.editing, useImage, props.product]);
  React.useEffect(() => {
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

  const setUseImageThumbnail = React.useCallback(e => {
    if (e?.target) {
      const selector = e.target.getAttribute('selector') ?? e.target.parentElement.getAttribute('selector');
      if (selector && props?.product?.images && props?.cdn?.static) {
        const image = props.product.images.find(m => m.name === selector);
        if (image) {
          setUseImage(props.cdn.static + '/' + image.name);
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
  const setImgProp = (property, value, single) => {
    if (useImage) {
      console.log(useImage);
      const imgName = useImage.match(/\.[^\/]+\/(.+)$/) && useImage.match(/\.[^\/]+\/(.+)$/)[1] ? useImage.match(/\.[^\/]+\/(.+)$/)[1] : null;
      if (imgName && props?.product?.images && Array.isArray(props.product.images) && props?.setEditing) {
        const images = [...props.product.images];
        const index = images.findIndex(m => m.name === imgName);
        if (single) {
          images.map(m => {
            delete m[property];
          });
        }
        if (index > -1) {
          images[index][property] = value;
          const product = Object.assign(props.product, {
            images: images
          });
          props.setEditing(product);
        }
      }
    }
  };
  const setCurrentImageAsBackground = React.useCallback(e => {
    setImgProp('bgImg', true, true);
  });
  const setCurrentImageAsLead = React.useCallback(e => {
    setImgProp('leadImg', true, true);
  });
  const bgImg = props?.product?.images ? props.product.images.find(m => m?.bgImg) : null;
  const leadImg = props?.product?.images ? props.product.images.find(m => m?.leadImg) : null;
  const currentIsBgImage = useImage?.match && useImage.match(/\.[^\/]+\/(.+)$/) && bgImg?.name && useImage.match(/\.[^\/]+\/(.+)$/)[1] === bgImg.name;
  const currentIsLeadImage = useImage?.match && useImage.match(/\.[^\/]+\/(.+)$/) && leadImg?.name && useImage.match(/\.[^\/]+\/(.+)$/)[1] === leadImg.name;
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} ${PIMStyles.productImageManagerContainer} ProductImageManager_container`,
    style: {
      position: 'relative'
    }
  }, void 0, props.editing && !isObjectEmpty(props.editing) ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, <input type='file' style={{
    display: 'none'
  }} ref={fileInput} onChange={handleNewFile} />, /*#__PURE__*/_jsx(Tooltip, {
    title: "Click here to upload an image for your product",
    placement: "bottom"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.changeImageButton} image material-icons`,
    onClick: handleUploadImage
  }, void 0, "image")), warning && warning.message ? /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.warning}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.warningItemContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.warningItem}`
  }, void 0, warning.message))) : null) : null, props?.editing && !isObjectEmpty(props.editing) ? /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.buttonSetAsBackground}`
  }, void 0, currentIsLeadImage ? /*#__PURE__*/_jsx("button", {
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
  }, void 0, "Current Lead Image") : /*#__PURE__*/_jsx("button", {
    onClick: setCurrentImageAsLead
  }, void 0, "Tag As Lead Image"), currentIsBgImage ? /*#__PURE__*/_jsx("button", {
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
  }, void 0, "Current Feature Image") : /*#__PURE__*/_jsx("button", {
    onClick: setCurrentImageAsBackground
  }, void 0, "Tag As Feature Image")) : null, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.productImageListContainer}`
  }, void 0, imageThumbnailFeed && imageThumbnailFeed.map && props.cdn && props.cdn.static ? imageThumbnailFeed.map(m => /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.productImageListThumbnailContainer}`,
    style: {
      backgroundImage: `url(${props.cdn.static}/${m.name})`
    },
    onClick: setUseImageThumbnail,
    selector: m.name
  }, void 0, /*#__PURE__*/_jsx("img", {
    src: resolveImg(props.editing, props.cdn),
    className: "Product_img",
    style: {
      width: '45px',
      opacity: useImage ? 0 : 1
    }
  }))) : null), <div className={`${PIMStyles.productImageContainer}`} ref={productImageRef} style={{
    backgroundImage: useImage ? `url(${useImage})` : ''
  }}>
                /*#__PURE__*/_jsx("img", {
      src: resolveImg(props.editing, props.cdn),
      style: {
        opacity: useImage ? 0 : 1
      },
      className: "Product_img"
    })
            </div>);
};
export default Module;