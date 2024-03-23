var _div, _div2, _div3, _Tooltip, _label, _label2, _div4, _div5, _div6, _div7, _div8, _div9, _div10;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useRouter } from 'next/router';
import GridList from '../../video/player/gridList';
import shopStyles from './Shop.module.scss';
import PIMStyles from '../product/ProductImageManager.module.scss';
import { compareObjects, isObjectEmpty, getFormattedDate, getFormattedTime } from '../../util';
import { v4 as uuidv4 } from 'uuid';
import AllInclusive from '@mui/icons-material/AllInclusive';
import ConfirmationNumber from '@mui/icons-material/ConfirmationNumber';
import Inventory from '@mui/icons-material/Inventory';
import Stadium from '@mui/icons-material/Stadium';
import Tooltip from '@mui/material/Tooltip';
import TextareaAutosize from 'react-textarea-autosize';
import { doPublishProduct, resolveImg, resolveStyles } from '../../utility/ecommerce';
import { Lineup, Product, ProductImageManager } from '../product';
import { SignIn, Username } from '../../onboarding/signin';
import { doSetOptionsMetaData } from './Functions';
const defaultEditingOptionsMeta = {
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
const defaultDefinePriceCurrency = {
  code: 'US',
  name: 'United States',
  payment: 'stripe',
  region: 'NORTH AMERICA',
  currency: 'USD',
  symbol: '$'
};
const Module = props => {
  const router = useRouter();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [currentSelected, setCurrentSelected] = React.useState({});
  const [feed, setFeed] = React.useState([]);
  const [combinedFeed, setCombinedFeed] = React.useState([]);
  const [editing, setEditing] = React.useState({});
  const [editingSelectedStyle, setEditingSelectedStyle] = React.useState(null);
  const [editingSelectedOption, setEditingSelectedOption] = React.useState(null);
  const [editingOptionsMeta, setEditingOptionsMeta] = React.useState(Object.assign({}, defaultEditingOptionsMeta));
  const [shop, setShop] = React.useState(null);
  const [pageError, setPageError] = React.useState({});
  const [tempImagesForCurrentlyEditing, setTempImagesForCurrentlyEditing] = React.useState(null);
  const [currentLineupEditing, setCurrentLineupEditing] = React.useState(0);
  const [isSettingCurrency, setIsSettingCurrency] = React.useState(false);
  const [currentDefinePriceCurrency, setCurrentDefinePriceCurrency] = React.useState(defaultDefinePriceCurrency);
  const [useFormData, setUseFormData] = React.useState(new FormData());
  const [useImageNames, setUseImageNames] = React.useState([]);
  const descriptionInputRef = React.useRef();
  const styleInput = React.useRef();
  const optionInput = React.useRef();
  const quantityInput = React.useRef();
  const priceInput = React.useRef();
  const optionSelect = React.useRef();
  const nameRef = React.useRef();
  const setCurrencySelect = React.useRef();
  const currentCurrencyRef = React.useRef();
  const lineupNameRef = React.useRef();
  const lineupDescriptionRef = React.useRef();
  const lineupTimeRef = React.useRef();
  React.useEffect(() => {
    const selector = props.profile ? 'shopProfileData' : 'shop';
    if (props && props[selector]) {
      const f = props[selector].products && Array.isArray(props[selector].products) ? props[selector].products.concat(feed) : [];
      const s = props[selector].shop;
      let update = false;
      for (let i = 0; i < combinedFeed.length; i++) {
        if (!compareObjects(combinedFeed, f)) {
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
  const defaultOption = (addOption = true) => {
    const o = {
      sid: uuidv4(),
      quantity: 100
    };
    if (addOption) {
      o.option = '';
    }
    return o;
  };
  const defaultStyle = () => {
    return {
      price: 10,
      currency: 'USD',
      priceTable: {},
      sid: uuidv4(),
      style: '',
      option: [defaultOption(false)]
    };
  };
  const defaultLineup = () => {
    return {
      id: uuidv4(),
      title: '',
      description: '',
      time: null,
      image: ''
    };
  };
  const adminAuth = props._loggedIn && props._loggedIn.identifier && props.profileData && props.profileData.user && props.profileData.user.id && props._loggedIn.identifier === props.profileData.user.id;
  const handleEdit = product => {
    console.log(product);
    if (shop?.id || !shop && props?.forceOpenRedirectOnDone) {
      setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
      setEditing(product);
      setTimeout(() => {
        const temp = {
          ...product
        };
        temp.name = product.name;
        setEditing(temp);
      }, 200);
    }
  };
  const createNewProduct = React.useCallback(e => {
    try {
      console.log('Start');
      if (isObjectEmpty(editing)) {
        if (shop?.id || props?.forceOpenRedirectOnDone) {
          const style = defaultStyle();
          let product = {
            id: uuidv4(),
            shop: shop?.id ?? null,
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
            new: true
          };
          setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
          setEditing(product);
          setEditingSelectedStyle(style.sid);
          setCurrentLineupEditing(null);
          setTempImagesForCurrentlyEditing(null);
          const tempMeta = Object.assign({}, defaultEditingOptionsMeta);
          tempMeta.productType = 'virtual';
          setEditingOptionsMeta(tempMeta);
          setTimeout(() => {
            styleInput.current.value = style.style;
            if (style.option[0] && Object.hasOwnProperty.call(style.option[0], 'option')) {
              optionInput.current.value = style.option[0].option;
            }
            const currentProduct = document.getElementById(product.id);
            if (currentProduct?.offsetTop && window?.scrollTo && props._isMobile) {
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
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      if (props?.forceOpenRedirectOnDone) {
        createNewProduct();
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props?.forceOpenRedirectOnDone]);
  const handleCancelProduct = React.useCallback(e => {
    setCurrentDefinePriceCurrency(defaultDefinePriceCurrency);
    setEditing({});
  });
  const resolveOptions = product => {
    if (product && product.styles) {
      const f = product.styles.findIndex(m => m.sid === editingSelectedStyle);
      if (f > -1) {
        return product.styles[f].option;
      }
    }
    return [];
  };
  const resolveOption = (option, prop) => {
    console.log(option);
    const o = option.find(m => m.sid === editingSelectedOption);
    if (o) {
      return o[prop];
    }
    return null;
  };
  const setCurrentStyleName = React.useCallback(e => {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      const temp = {
        ...editing
      };
      const f = editing.styles.findIndex(m => m.sid === editingSelectedStyle);
      if (f > -1) {
        temp.styles[f].style = e.currentTarget.value;
      }
      setEditing(temp);
    }
  });
  const setCurrentOptionName = React.useCallback(e => {
    console.log(e.currentTarget.value, editingSelectedOption);
    if (e.currentTarget) {
      const temp = {
        ...editing
      };
      const f = temp.styles.findIndex(m => m.sid === editingSelectedStyle);
      if (f > -1) {
        if (editingSelectedOption == null) {
          setEditingSelectedOption(editing.styles[f].option && editing.styles[f].option[0] ? editing.styles[f].option[0].sid : '');
        }
        console.log(f, temp.styles[f].option, editingSelectedOption);
        const f2 = temp.styles[f].option.findIndex(m => m.sid === editingSelectedOption);
        console.log(f2);
        if (f2 > -1) {
          temp.styles[f].option[f2].option = e.currentTarget.value;
        }
        setEditing(temp);
      }
    }
  });
  const setCurrentQuantity = React.useCallback(e => {
    if (e.currentTarget) {
      const temp = {
        ...editing
      };
      const f = temp.styles.findIndex(m => m.sid === editingSelectedStyle);
      if (f > -1) {
        console.log(f, editingSelectedStyle, temp);
        const f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(m => m.sid === editingSelectedOption);
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
  const setInfinity = React.useCallback(e => {
    if (e.currentTarget) {
      const temp = {
        ...editing
      };
      const f = temp.styles.findIndex(m => m.sid === editingSelectedStyle);
      if (f > -1) {
        const f2 = temp.styles[f].option.length === 1 ? 0 : temp.styles[f].option.findIndex(m => m.sid === editingSelectedOption);
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
  const setCurrentPrice = React.useCallback(e => {
    if (e.currentTarget) {
      const temp = {
        ...editing
      };
      const f = temp.styles.findIndex(m => m.sid === editingSelectedStyle);
      if (f > -1) {
        if (!isNaN(Number(e.currentTarget.value))) {
          if (currentDefinePriceCurrency?.currency === 'USD') {
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
  const changeCurrentStyle = React.useCallback(e => {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      setEditingSelectedStyle(e.currentTarget.value);
      const f = editing.styles.findIndex(m => m.sid === e.currentTarget.value);
      styleInput.current.value = editing.styles[f].style;
      console.log(editing.styles);
      setTimeout(() => {
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
  const changeCurrentOption = React.useCallback(e => {
    console.log(e.currentTarget.value);
    if (e.currentTarget) {
      const f = editing.styles.findIndex(m => m.sid === editingSelectedStyle);
      if (f > -1) {
        const temp = editing.styles[f].option.find(m => m.sid === e.currentTarget.value);
        console.log(temp);
        if (temp) {
          optionInput.current.value = temp.option;
          setEditingSelectedOption(temp.sid);
          quantityInput.current.value = temp.quantity;
        }
      }
    }
  });
  const addStyle = React.useCallback(e => {
    const temp = {
      ...editing
    };
    temp.styles.push(defaultStyle());
    setEditing(temp);
  });
  const addOption = React.useCallback(e => {
    console.log(editing, editingSelectedStyle);
    const temp = {
      ...editing
    };
    const f = editing.styles.findIndex(m => m.sid === editingSelectedStyle);
    console.log(f);
    if (f > -1) {
      const o = defaultOption();
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
  const onProductTypeChange = React.useCallback(e => {
    if (e.currentTarget) {
      const value = e.currentTarget.value;
      const temp = {
        ...editingOptionsMeta
      };
      temp.productType = value;
      const tempPro = {
        ...editing
      };
      tempPro.protype.type = value;
      setEditing(tempPro);
      setEditingOptionsMeta(temp);
    }
  });
  const setOptionsMetaData = React.useCallback(e => {
    console.log(e.currentTarget.checked, e.currentTarget.getAttribute('option'));
    doSetOptionsMetaData(e, editingOptionsMeta, editing, setEditing, setEditingOptionsMeta, currentLineupEditing, setCurrentLineupEditing);
  });
  const updateLineup = React.useCallback(e => {
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        const temp = {
          ...editingOptionsMeta
        };
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
          const index = e.currentTarget.getAttribute('index');
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
  const setCurrentName = React.useCallback(e => {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif') && e.currentTarget.getAttribute('modif') === 'product_name') {
        const temp = {
          ...editing
        };
        temp.name = e.currentTarget.value;
        setEditing(temp);
      }
    }
  });
  const publishProduct = (modif, existing, dontSetProducts = false) => {
    try {
      const fn = async () => {
        if (!fetchBusy) {
          setPageError({});
          const product = {
            ...editing
          };
          console.log(product);
          product.detailmeta = {
            ...editingOptionsMeta
          };
          console.log('Publish Product', product);
          if (product.name === '') {
            setPageError({
              message: 'Please enter a name for your product',
              location: 'product_name'
            });
            setFetchBusy(false);
            return 1;
          }
          const formData = useFormData;
          const imgNames = useImageNames;
          if (tempImagesForCurrentlyEditing && tempImagesForCurrentlyEditing.editing === product.id) {
            // Retrieve files for upload if matching upload image edit
            tempImagesForCurrentlyEditing.images.forEach(img => {
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
          formData.append('shop', shop?.id ?? null);
          formData.append('status', modif);
          formData.append('existing', existing);
          setFetchBusy(true);
          setTimeout(() => {
            setFetchBusy(false);
          }, 10000);
          const data = await doPublishProduct(props.apiUrl, props.domainKey, shop?.id ?? null, props._loggedIn, product, formData);
          console.log(data);
          if (data) {
            setUseFormData(new FormData()); // Reset form data due to created product
            setUseImageNames([]);
            if (data.product) {
              if (props?.forceOpenRedirectOnDone) {
                if (props.redirect) {
                  router.push(props.redirect);
                } else if (props.redirectToProduct && data?.product?.product?.id) {
                  router.push(`/pr?p=${data.product.product.id}`);
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
          return data;
        } else {
          return null;
        }
      };
      return fn();
    } catch (err) {
      // fail silently
      return null;
    }
  };
  const handlePublishProduct = React.useCallback(e => {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      if (e.currentTarget.getAttribute('modif')) {
        const modif = e.currentTarget.getAttribute('modif');
        const existing = e.currentTarget.getAttribute('existing');
        publishProduct(modif, existing);
      }
    }
  });
  const passTempImages = images => {
    setTempImagesForCurrentlyEditing({
      editing: editing.id,
      images: images
    });
  };
  const handleSetIsSettingCurrency = React.useCallback(e => {
    if (isSettingCurrency) {
      setIsSettingCurrency(false);
      return false;
    }
    setIsSettingCurrency(true);
    return true;
  });
  const changeCurrentCurrency = (product, value) => {
    console.log('Product Value', product, value);
    if (product.new) {
      const temp = editing;
      editing.meta.currency = value;
      setEditing(temp);
      return value;
    } else {
      const temp = [...combinedFeed];
      const f = temp.findIndex(m => m.id === product.id);
      if (f > -1) {
        temp[f].meta.currency = value;
        setCombinedFeed(temp);
        return value;
      }
    }
    return null;
  };
  const handleChangeCurrentCurrency = React.useCallback(e => {
    const v = changeCurrentCurrency(editing, e.currentTarget.value);
    if (v) {
      currentCurrencyRef.current.innerHTML = v;
      const f = Object.entries(props.regionsData).find(m => m[1].currency === v);
      if (f && f[1]) {
        setCurrentDefinePriceCurrency(f[1]);
        setDefaultPriceHtml(f[1]);
      }
    }
  });
  const handleUpdateProductDescription = React.useCallback(e => {
    const value = e.currentTarget.value;
    console.log(value);
    if (editing) {
      const temp = {
        ...editingOptionsMeta
      };
      console.log(temp, editingOptionsMeta, editing);
      if (temp) {
        temp.description = value;
        const newEditing = {
          ...editing
        };
        newEditing.detailmeta = temp;
        setEditing(newEditing);
        if (temp) {
          setEditingOptionsMeta(temp);
        }
      }
    }
  });
  const appendFormData = (filesRenamed, modif = 'lineup', useId) => {
    const formData = useFormData;
    const imgNames = useImageNames;
    if (filesRenamed) {
      filesRenamed.forEach(img => {
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

  const selectedStyle = editing && editing.styles ? editing.styles.find(m => m.sid === editingSelectedStyle) : null;
  const selectedOption = editing && selectedStyle && selectedStyle.option ? selectedStyle.option.find(m => m.sid === editingSelectedOption) ?? selectedStyle.option.length === 1 ? selectedStyle.option[0] : null : null;
  const setDefaultPriceHtml = useDefinePriceCurrency => {
    if (!useDefinePriceCurrency) {
      useDefinePriceCurrency = currentDefinePriceCurrency;
    }
    if (useDefinePriceCurrency?.currency !== 'USD' && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, useDefinePriceCurrency.currency)) {
      priceInput.current.value = selectedStyle.priceTable[useDefinePriceCurrency.currency];
    } else if (selectedStyle?.price) {
      priceInput.current.value = selectedStyle.price;
    }
  };
  console.log(adminAuth, shop);
  const noShop = shop && shop.status && shop.status === 'nonexistent';
  console.log(noShop, editing, tempImagesForCurrentlyEditing, currentDefinePriceCurrency);
  console.log(editingOptionsMeta, currentLineupEditing, selectedStyle, combinedFeed);
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`
  }), /*#__PURE__*/React.createElement("div", {
    className: `${shopStyles.container} ${props.smaller ? `${PIMStyles.smallContainer}` : null}`
  }, adminAuth && !noShop ? /*#__PURE__*/React.createElement("div", {
    className: `${shopStyles.adminContainer}`
  }, _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: 'heading'
  }, "Shop")), /*#__PURE__*/React.createElement("div", {
    className: 'flex options',
    style: {
      gap: '.25rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    disabled: !isObjectEmpty(editing),
    onClick: createNewProduct
  }, "Create Product"), editing && !isObjectEmpty(editing) ? /*#__PURE__*/React.createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing.new ? 'Abandon' : 'Cancel') : null)) : null, /*#__PURE__*/React.createElement("div", {
    className: `Product_flex_container`
  }, editing?.new ? /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.currentlyEditingProductContainer} ${props?.noFixedPosition ? PIMStyles.currentlyEditingNoFixed : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.currentEditingProductInnerContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.currentlyEditingProductContent}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productImgContainer} Product_img_container Product_img_container_large`
  }, /*#__PURE__*/React.createElement(ProductImageManager, _extends({}, props, {
    editing: editing,
    passTempImages: passTempImages
  }))), /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productMetaContainer} Product_meta_container`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `calc(100% - ${props._loggedIn ? !props?._loggedIn?.username ? '100' : '25' : '40'}px)`,
      maxHeight: '75vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Name of Product",
    placement: "right"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontWeight: '600'
    }
  }, "Title: ")), /*#__PURE__*/React.createElement("input", {
    name: "name",
    placeholder: "Product Title",
    style: {
      fontWeight: '600',
      width: '100%'
    },
    onChange: setCurrentName,
    ref: nameRef,
    modif: "product_name"
  })), pageError.location && pageError.location === 'product_name' ? /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, pageError.message) : null), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Product Description",
    placement: "left"
  }, /*#__PURE__*/React.createElement(TextareaAutosize, {
    className: `${PIMStyles.textArea}`,
    name: "description",
    placeholder: "Description",
    defaultValue: editing?.detailmeta?.description,
    onChange: handleUpdateProductDescription,
    ref: descriptionInputRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Set the price for the currently selected Style",
    placement: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, currentDefinePriceCurrency?.symbol ?? '$')), /*#__PURE__*/React.createElement("input", {
    type: "currency",
    style: {
      width: '100%'
    },
    defaultValue: "10.00",
    ref: priceInput,
    onChange: setCurrentPrice
  }), selectedStyle && currentDefinePriceCurrency?.currency === 'USD' && selectedStyle.price != priceInput?.current?.value || currentDefinePriceCurrency?.currency !== 'USD' && (!selectedStyle.priceTable || selectedStyle.priceTable && !selectedStyle.priceTable[currentDefinePriceCurrency.currency] || currentDefinePriceCurrency?.currency && selectedStyle.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, currentDefinePriceCurrency.currency) && selectedStyle.priceTable[currentDefinePriceCurrency.currency] != priceInput.current.value) ? /*#__PURE__*/React.createElement(Tooltip, {
    title: "The price displayed is currently not set for this product style. Click here to set it"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: setCurrentPrice,
    value: priceInput?.current?.value,
    style: {
      whiteSpace: 'nowrap',
      lineHeight: '.5rem',
      fontSize: '.75rem'
    }
  }, "Set Price")) : null, /*#__PURE__*/React.createElement(Tooltip, {
    title: "You can set pricing in multiple currencies. Although the value you keep selected here will be the primary currency. Use the currency selector to choose a currency to begin setting prices in the respective currency. Countries that users reside in for which you have not set a currency will be presented the closest relevant currency you have defined a pricepoint in"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.currencyLabel} ${isSettingCurrency ? `${PIMStyles.currencyLabelActive}` : null}`,
    style: {
      lineHeight: '.5rem'
    },
    onClick: handleSetIsSettingCurrency,
    ref: currentCurrencyRef
  }, currentDefinePriceCurrency?.currency ?? editing?.meta?.currency ?? 'USD')), isSettingCurrency ? /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.setCurrencyExternalContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.setCurrencyContainer}`
  }, /*#__PURE__*/React.createElement("select", {
    id: editing.id + '_setCurrency',
    name: editing.id + '_setCurrency',
    style: {
      width: '100%'
    },
    onChange: handleChangeCurrentCurrency,
    ref: setCurrencySelect,
    defaultValue: currentDefinePriceCurrency?.currency ?? 'USD'
  }, props?.regionsData ? Object.entries(props.regionsData).map(m => /*#__PURE__*/React.createElement("option", {
    className: `${PIMStyles.setCurrencyOption} ${m[1].currency !== 'USD' ? selectedStyle?.priceTable && Object.prototype.hasOwnProperty.call(selectedStyle.priceTable, m[1].currency) ? PIMStyles.currencyOptionUsed : m[1].currency === 'USD' ? PIMStyles.currencyOptionUsed : null : null}`,
    value: m[1].currency,
    symbol: m[1].symbol
  }, /*#__PURE__*/React.createElement("div", null, m[1].currency), _div2 || (_div2 = /*#__PURE__*/React.createElement("div", null, "\xA0")), /*#__PURE__*/React.createElement("div", null, m[1].name), _div3 || (_div3 = /*#__PURE__*/React.createElement("div", null, "\xA0")), /*#__PURE__*/React.createElement("div", null, m[1].symbol))) : null))) : null, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Set the quantity for the currently selected Style & Option combo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600,
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    }
  }, "Qty")), /*#__PURE__*/React.createElement("input", {
    type: "number",
    style: {
      width: '100%',
      display: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block'
    },
    defaultValue: "100",
    ref: quantityInput,
    onChange: setCurrentQuantity
  }), _Tooltip || (_Tooltip = /*#__PURE__*/React.createElement(Tooltip, {
    title: "Infinite stock"
  }, /*#__PURE__*/React.createElement(AllInclusive, null))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    onChange: setInfinity,
    checked: selectedOption && selectedOption.quantity && selectedOption.quantity === 10000000
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #484848',
      marginTop: '.125rem',
      marginBottom: '.25rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex",
    style: {
      flexWrap: 'wrap',
      gap: '.05rem 0.2rem',
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "If your product has multiple styles, set them here. A style should be an alternate design or color for a single product that you want to track as single product. For example you might have white, black, grey for t-shirts as individual styles.",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Style"), /*#__PURE__*/React.createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: styleInput,
    onChange: setCurrentStyleName
  }), /*#__PURE__*/React.createElement("select", {
    id: editing.id + '_styles',
    name: editing.id + '_styles',
    style: {
      width: '100%'
    },
    onChange: changeCurrentStyle
  }, resolveStyles(editing).map((style, i) => {
    return /*#__PURE__*/React.createElement("option", {
      value: style.sid,
      className: "style_option",
      key: i
    }, style.style);
  }))))), selectedStyle && selectedStyle.option.length > 0 && selectedStyle.option[0] && Object.hasOwnProperty.call(selectedStyle.option[0], 'option') ? /*#__PURE__*/React.createElement(Tooltip, {
    title: "If your product has options, set them here. An option should be a sizing or format choice that exists for all or most styles. For example you might have sizes XS, S, M, L, XL or OS as individual options per style.",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: 600
    }
  }, "Option"), /*#__PURE__*/React.createElement("div", {
    className: "dropdown_input"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: optionInput,
    onChange: setCurrentOptionName
  }), /*#__PURE__*/React.createElement("select", {
    id: editing.id + '_options',
    name: editing.id + '_options',
    style: {
      width: '100%'
    },
    onChange: changeCurrentOption,
    ref: optionSelect
  }, editing.styles.find(m => m.sid === editingSelectedStyle).option.map((option, i) => {
    return /*#__PURE__*/React.createElement("option", {
      value: option.sid,
      className: "option_option",
      key: i
    }, option.option);
  }))))) : null), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: addStyle
  }, "Add Style"), /*#__PURE__*/React.createElement("button", {
    onClick: addOption
  }, "Add Option"), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Set the product type",
    placement: "right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      fontSize: '.8rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: "virtual",
    name: "fav_language",
    value: "virtual",
    defaultChecked: true,
    onChange: onProductTypeChange
  }), _label || (_label = /*#__PURE__*/React.createElement("label", {
    for: "virtual"
  }, "Virtual"))), /*#__PURE__*/React.createElement("span", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: "physical",
    name: "fav_language",
    value: "physical",
    onChange: onProductTypeChange
  }), _label2 || (_label2 = /*#__PURE__*/React.createElement("label", {
    for: "physical"
  }, "Physical")))))), /*#__PURE__*/React.createElement("div", {
    className: "promptContainer",
    style: {
      alignItems: 'center',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Ticketed Products offer universally unique ids that are unique across the product being sold and can be stamped onto Ticket Images. Virtual Tickets are for Virtual Events. Physical Tickets serve Virtual Tickets for your own In Person Events.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a ticket?"), /*#__PURE__*/React.createElement(ConfirmationNumber, {
    style: {
      width: '15px',
      height: '15px'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: editingOptionsMeta.ticket,
    defaultChecked: editingOptionsMeta.ticket,
    onChange: setOptionsMetaData,
    option: "ticket"
  })), editingOptionsMeta.ticket ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Please add dates your event is happening. Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600',
      whiteSpace: 'nowrap'
    }
  }, "Date for Event"), /*#__PURE__*/React.createElement("input", {
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
  })), editingOptionsMeta.eventDateDef.dates.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem',
      marginBottom: '.25rem'
    }
  }, editingOptionsMeta.eventDateDef.dates.map((d, i) => {
    return d !== '' ? /*#__PURE__*/React.createElement("div", {
      className: "tagItem",
      key: i
    }, d ? getFormattedDate(d, {
      pretty: true
    }) : '') : _div4 || (_div4 = /*#__PURE__*/React.createElement("div", null));
  })) : _div5 || (_div5 = /*#__PURE__*/React.createElement("div", null))) : null), editingOptionsMeta && editingOptionsMeta.productType === 'virtual' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "promptContainer",
    style: {
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      height: '20px'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "You can use a date to authorize all users that purchase this ticket for access to your livestreams on that day. Or you can use a tag that you must include in the livestream tags field when you create it. Please use this if you want to put your livestream behind this paywalled purchase",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left",
    paddin: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this for a livestream?"), /*#__PURE__*/React.createElement(Stadium, {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: editingOptionsMeta.livestream,
    defaultChecked: editingOptionsMeta.livestream,
    onChange: setOptionsMetaData,
    option: "livestream"
  })), editingOptionsMeta.livestream ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Enter dates or words for matching authorization. Enter dates in the following format MON-DD-YYYY-HH:MM. Time must be input in 24 H military time. Values that do not match dates will be parsed as Tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "right"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600',
      whiteSpace: 'nowrap'
    }
  }, "Auth Keys | Tags"), /*#__PURE__*/React.createElement("input", {
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
  })), /*#__PURE__*/React.createElement("span", {
    className: "flex gap-p2",
    style: {
      marginBottom: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.dates.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.dates.map((d, i) => {
    return d !== '' ? /*#__PURE__*/React.createElement("div", {
      className: "tagItem",
      key: i
    }, d ? getFormattedDate(d, {
      pretty: true
    }) : '') : _div6 || (_div6 = /*#__PURE__*/React.createElement("div", null));
  })) : _div7 || (_div7 = /*#__PURE__*/React.createElement("div", null)), editingOptionsMeta.livestreamDef.tags.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, editingOptionsMeta.livestreamDef.tags.map((d, i) => {
    return d !== '' ? /*#__PURE__*/React.createElement("div", {
      className: "tagItem",
      key: i
    }, d) : _div8 || (_div8 = /*#__PURE__*/React.createElement("div", null));
  })) : _div9 || (_div9 = /*#__PURE__*/React.createElement("div", null)))) : null, /*#__PURE__*/React.createElement(Lineup, _extends({}, props, {
    product: editing,
    editing: editing,
    editingOptionsMeta: editingOptionsMeta,
    setOptionsMetaData: setOptionsMetaData,
    currentLineupEditing: currentLineupEditing,
    setCurrentLineupEditing: setCurrentLineupEditing,
    appendFormData: appendFormData
  })))) : _div10 || (_div10 = /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2 promptContainer",
    style: {
      alignItems: 'center',
      height: '20px',
      borderRadius: '.5rem',
      margin: '.25rem 0'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Allow for your customers to subscribe to your product. This is a guarantee by your company that you will continue to deliver your Product to any subscribed customers. Subscriptions will charge monthly by default.",
    className: "flex gap-p2",
    style: {
      alignItems: 'center'
    },
    placement: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem'
    }
  }, "Is this a subscription?"), /*#__PURE__*/React.createElement(Inventory, {
    style: {
      width: '15px'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      margin: 0
    },
    value: editingOptionsMeta.subscription,
    defaultChecked: editingOptionsMeta.subscription,
    onChange: setOptionsMetaData,
    option: "subscription"
  }))), !props?._loggedIn || !props?._loggedIn?.username ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SignIn, props), /*#__PURE__*/React.createElement(Username, props)) : /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2 Product_admin_choice_container",
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handlePublishProduct,
    modif: "publish"
  }, "Publish"), !props?.forceOpenRedirectOnDone ? /*#__PURE__*/React.createElement("button", {
    onClick: handlePublishProduct,
    modif: "save"
  }, "Save") : null, editing && !props?.forceOpenRedirectOnDone ? /*#__PURE__*/React.createElement("button", {
    onClick: handleCancelProduct,
    modif: "save"
  }, editing.new ? 'Abandon' : 'Cancel') : null))))) : null, combinedFeed && combinedFeed.map && !props.hideFeed ? combinedFeed.map((item, i) => /*#__PURE__*/React.createElement(Product, _extends({}, props, {
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
    resolveStyles: resolveStyles,
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
  }))) : null)));
};
export default Module;