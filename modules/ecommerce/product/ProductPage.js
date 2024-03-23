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
  return <React.Fragment>
            {ReactCarouselCss}
            <div className={`${PIMStyles.container} ${props.className}`}>
                <div className={`${PIMStyles.innerContainer}`}>
                    <div className={`${PIMStyles.leadProductContainer}`}>
                        <div className={`${PIMStyles.singleProductCarouselProvider}`}>
                            <div className={`${PIMStyles.productSliderThumbnailListContainer}`}>
                                {product?.images ? product.images.map((image, i) => <div slide={i} key={i} className={`${PIMStyles.productSliderThumbSelectMin}`} onClick={handleSetSlide} i={i}>
                                            <Image className={`${PIMStyles.sliderThumbSelectMinImg}`} loader={() => {
                  return props?.cdn?.static ? `${props.cdn.static}/${image.name}` : null;
                }} src={props?.cdn?.static ? `${props.cdn.static}/${image.name}` : null} alt='Title' width={35} height={45} layout="responsive" />
                                        </div>) : null}
                            </div>
                            <Slider {...useSettings} className={`${PIMStyles.productSliderProductContainer}`} ref={sliderTrackRef}>
                                {product?.images ? product.images.map((image, i) => <div index={i} key={i}>
                                                <div className={`${PIMStyles.productSliderProductImg}`} style={{
                  backgroundImage: `url(${props.cdn.static}/${image.name})`
                }}></div>
                                            </div>) : null}
                            </Slider>
                        </div>
                        <div>
                            <h1 className={`${PIMStyles.productPageTitle}`}>{product?.name ?? null}</h1>
                            <div>
                                <div>{product?.detailmeta?.description ?? null}</div>
                            </div>
                            <div>
                                <div className='flex gap-p2' style={{
                margin: '.125rem 0'
              }}>
                                    <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}><span>{currentPrice?.symbol ?? null}</span><span>{currentPrice?.price ?? null}</span></div>
                                    <div className='Product_CurrencyLabel' style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  background: 'rgba(150, 150, 150, .5)',
                  padding: '.075rem',
                  borderRadius: '.25rem'
                }}>{currentPrice?.currency ?? 'USD'}</div>
                                </div>
                            </div>
                            <div>
                                <div className={`flex gap-p2 wrap`} style={{
                marginTop: '.5rem'
              }}>
                                    {/* <button onClick={handleFireGlobalEvent} item={product?.id} selectedstyle={selectedStyle} currentoption={currentOption} action='buy'>Buy Now</button> */}
                                    <button onClick={handleFireGlobalEvent} item={product?.id} selectedstyle={selectedStyle} currentoption={currentOption} action='add_to_cart'>Add To Cart</button>
                                    {product?.detailmeta?.subscription ? <button onClick={handleFireGlobalEvent} item={product?.id} selectedstyle={selectedStyle} currentoption={currentOption} action='add_to_cart_subscribe'>Subscribe</button> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>;
};
export default Module;