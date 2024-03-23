function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import { addToCart, resolveDefaultStyle, resolveImg, resolveStyles, resolveRegionBasedPrice, updateCart, doUploadImageForLineupParticipant } from '../../utility/ecommerce';
import { fireGlobalEvent } from '../../utility/utility';
import { getFormattedDate, getFormattedTime, isObjectEmpty } from '../../util';
import AllInclusive from '@mui/icons-material/AllInclusive';
import ConfirmationNumber from '@mui/icons-material/ConfirmationNumber';
import Inventory from '@mui/icons-material/Inventory';
import Stadium from '@mui/icons-material/Stadium';
import { ProductImageManager } from '.';
import Slider from 'react-slick';
import PIMStyles from './ProductImageManager.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { ReactCarouselCss } from '../../internal/localImports';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [selectedStyle, setSelectedStyle] = React.useState({});
  const [currentOption, setCurrentOption] = React.useState(null);
  const sliderTrackRef = React.useRef();
  const currency = '$';
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  const setSelectedStyleHandler = React.useCallback(e => {
    if (e && e.currentTarget) {
      if (e.currentTarget.value) {
        setSelectedStyle(e.currentTarget.value);
        const currentStyleObject = props.product.styles.find(m => m.sid === e.currentTarget.value);
        console.log(currentStyleObject);
        if (currentStyleObject && currentStyleObject.option && currentStyleObject.option[0] && currentStyleObject.option[0].sid) {
          setCurrentOption(currentStyleObject.option[0].sid);
        }
      }
    }
  });
  const changeCurrentOption = React.useCallback(e => {
    setCurrentOption(e.currentTarget.value);
  });
  const handleFireGlobalEvent = React.useCallback(async e => {
    fireGlobalEvent(e, props._LocalEventEmitter);
  });
  const product = props?.productData?.product ?? null;
  resolveDefaultStyle(product, selectedStyle, setSelectedStyle, currentOption, setCurrentOption);
  const validStyleObject = selectedStyle && product?.styles && product.styles.find(m => m.sid === selectedStyle) ? product.styles.find(m => m.sid === selectedStyle) : null;
  const validOptionObject = validStyleObject && validStyleObject.option ? currentOption ? validStyleObject.option.find(m => m.sid === currentOption) : validStyleObject.option[0] ? validStyleObject.option[0] : null : null;
  console.log(validStyleObject, product, selectedStyle);

  // console.log(props.product, props._loggedIn, currentOption, selectedStyle, props)
  const isAdmin = props.product && props.product.owner && props._loggedIn && props._loggedIn.identifier && props._loggedIn.identifier === props.product.owner;
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency, props.currentDefinePriceCurrency, props.priceInput, validStyleObject, props.editing, props);
  const currentPrice = React.useMemo(() => {
    return resolveRegionBasedPrice(props, validStyleObject);
  }, [props.product, validStyleObject, currency]);
  const useSettings = {
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    touchThreshold: 60,
    arrows: false,
    beforeChange: (current, next) => {
      if (next !== currentSlide) {
        setCurrentSlide(next);
      }
    }
  };
  const handleSetSlide = React.useCallback(e => {
    if (e?.currentTarget?.getAttribute) {
      const i = e.currentTarget.getAttribute('i');
      sliderTrackRef.current.slickGoTo(i);
    }
  });
  console.log(product, currentPrice);
  return /*#__PURE__*/React.createElement(React.Fragment, null, ReactCarouselCss, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.container} ${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.innerContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.leadProductContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.singleProductCarouselProvider}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productSliderThumbnailListContainer}`
  }, product?.images ? product.images.map((image, i) => /*#__PURE__*/React.createElement("div", {
    slide: i,
    key: i,
    className: `${PIMStyles.productSliderThumbSelectMin}`,
    onClick: handleSetSlide,
    i: i
  }, /*#__PURE__*/React.createElement(Image, {
    className: `${PIMStyles.sliderThumbSelectMinImg}`,
    loader: () => {
      return props?.cdn?.static ? `${props.cdn.static}/${image.name}` : null;
    },
    src: props?.cdn?.static ? `${props.cdn.static}/${image.name}` : null,
    alt: "Title",
    width: 35,
    height: 45,
    layout: "responsive"
  }))) : null), /*#__PURE__*/React.createElement(Slider, _extends({}, useSettings, {
    className: `${PIMStyles.productSliderProductContainer}`,
    ref: sliderTrackRef
  }), product?.images ? product.images.map((image, i) => /*#__PURE__*/React.createElement("div", {
    index: i,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productSliderProductImg}`,
    style: {
      backgroundImage: `url(${props.cdn.static}/${image.name})`
    }
  }))) : null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: `${PIMStyles.productPageTitle}`
  }, product?.name ?? null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, product?.detailmeta?.description ?? null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      margin: '.125rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, currentPrice?.symbol ?? null), /*#__PURE__*/React.createElement("span", null, currentPrice?.price ?? null)), /*#__PURE__*/React.createElement("div", {
    className: "Product_CurrencyLabel",
    style: {
      fontSize: '1.3rem',
      fontWeight: 600,
      background: 'rgba(150, 150, 150, .5)',
      padding: '.075rem',
      borderRadius: '.25rem'
    }
  }, currentPrice?.currency ?? 'USD'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `flex gap-p2 wrap`,
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleFireGlobalEvent,
    item: product?.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart"
  }, "Add To Cart"), product?.detailmeta?.subscription ? /*#__PURE__*/React.createElement("button", {
    onClick: handleFireGlobalEvent,
    item: product?.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart_subscribe"
  }, "Subscribe") : null)))))));
};
export default Module;