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
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className} ${PIMStyles.productImageManagerContainer} ProductImageManager_container`,
    style: {
      position: 'relative'
    }
  }, props.editing && !isObjectEmpty(props.editing) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleNewFile
  }), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Click here to upload an image for your product",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.changeImageButton} image material-icons`,
    onClick: handleUploadImage
  }, "image")), warning && warning.message ? /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.warning}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.warningItemContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.warningItem}`
  }, warning.message))) : null) : null, props?.editing && !isObjectEmpty(props.editing) ? /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.buttonSetAsBackground}`
  }, currentIsLeadImage ? /*#__PURE__*/React.createElement("button", {
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
  }, "Current Lead Image") : /*#__PURE__*/React.createElement("button", {
    onClick: setCurrentImageAsLead
  }, "Tag As Lead Image"), currentIsBgImage ? /*#__PURE__*/React.createElement("button", {
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
  }, "Current Feature Image") : /*#__PURE__*/React.createElement("button", {
    onClick: setCurrentImageAsBackground
  }, "Tag As Feature Image")) : null, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productImageListContainer}`
  }, imageThumbnailFeed && imageThumbnailFeed.map && props.cdn && props.cdn.static ? imageThumbnailFeed.map(m => /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productImageListThumbnailContainer}`,
    style: {
      backgroundImage: `url(${props.cdn.static}/${m.name})`
    },
    onClick: setUseImageThumbnail,
    selector: m.name
  }, /*#__PURE__*/React.createElement("img", {
    src: resolveImg(props.editing, props.cdn),
    className: "Product_img",
    style: {
      width: '45px',
      opacity: useImage ? 0 : 1
    }
  }))) : null), /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productImageContainer}`,
    ref: productImageRef,
    style: {
      backgroundImage: useImage ? `url(${useImage})` : ''
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: resolveImg(props.editing, props.cdn),
    style: {
      opacity: useImage ? 0 : 1
    },
    className: "Product_img"
  })));
};
export default Module;