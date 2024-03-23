var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, ReactCarouselCss, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.container} ${props.className}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.innerContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.leadProductContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.singleProductCarouselProvider}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${PIMStyles.productSliderThumbnailListContainer}`
  }, void 0, product?.images ? product.images.map((image, i) => /*#__PURE__*/_jsx("div", {
    slide: i,
    className: `${PIMStyles.productSliderThumbSelectMin}`,
    onClick: handleSetSlide,
    i: i
  }, i, /*#__PURE__*/_jsx(Image, {
    className: `${PIMStyles.sliderThumbSelectMinImg}`,
    loader: () => {
      return props?.cdn?.static ? `${props.cdn.static}/${image.name}` : null;
    },
    src: props?.cdn?.static ? `${props.cdn.static}/${image.name}` : null,
    alt: "Title",
    width: 35,
    height: 45,
    layout: "responsive"
  }))) : null), <Slider {...useSettings} className={`${PIMStyles.productSliderProductContainer}`} ref={sliderTrackRef}>
                                {product?.images ? product.images.map((image, i) => /*#__PURE__*/_jsx("div", {
      index: i
    }, i, /*#__PURE__*/_jsx("div", {
      className: `${PIMStyles.productSliderProductImg}`,
      style: {
        backgroundImage: `url(${props.cdn.static}/${image.name})`
      }
    }))) : null}
                            </Slider>), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("h1", {
    className: `${PIMStyles.productPageTitle}`
  }, void 0, product?.name ?? null), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {}, void 0, product?.detailmeta?.description ?? null)), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2",
    style: {
      margin: '.125rem 0'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 600
    }
  }, void 0, /*#__PURE__*/_jsx("span", {}, void 0, currentPrice?.symbol ?? null), /*#__PURE__*/_jsx("span", {}, void 0, currentPrice?.price ?? null)), /*#__PURE__*/_jsx("div", {
    className: "Product_CurrencyLabel",
    style: {
      fontSize: '1.3rem',
      fontWeight: 600,
      background: 'rgba(150, 150, 150, .5)',
      padding: '.075rem',
      borderRadius: '.25rem'
    }
  }, void 0, currentPrice?.currency ?? 'USD'))), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `flex gap-p2 wrap`,
    style: {
      marginTop: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleFireGlobalEvent,
    item: product?.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart"
  }, void 0, "Add To Cart"), product?.detailmeta?.subscription ? /*#__PURE__*/_jsx("button", {
    onClick: handleFireGlobalEvent,
    item: product?.id,
    selectedstyle: selectedStyle,
    currentoption: currentOption,
    action: "add_to_cart_subscribe"
  }, void 0, "Subscribe") : null)))))));
};
export default Module;