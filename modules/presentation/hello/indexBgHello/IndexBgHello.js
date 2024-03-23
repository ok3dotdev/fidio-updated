var _div, _div2, _span, _div3, _div4;
import React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Styles from '../../Presentation.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { fireGlobalEvent, getTimeRemaining } from '../../../utility/utility';
import Image from 'next/image';
import Link from 'next/link';
import { FetchHandler } from '../../../utility/fetch';
import { normalizeData, resolveMainLink, datePassed, resolveGoodDate, handleSliderLinkClick, handleSliderLinkClickDown, handleSliderLinkClickUp } from '../../utility';
import { resolveOption, resolveRegionBasedPrice, resolveMoneyFormat } from '../../../utility/ecommerce';
const moduleName = 'IndexBgHello';
const RESET_CTA_TIMER = 180000;
const Module = props => {
  const router = useRouter();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [useCountdown, setUseCountdown] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ctaClickedOnce, setCtaClickedOnce] = React.useState(false);
  const [displayTime, setDisplayTime] = React.useState(false);
  const [useHandler, setUseHandler] = React.useState(false);
  const [resolvedUseItems, setResolvedUseItems] = React.useState(null);
  const ctaRef = React.useRef();
  const currentGlide = React.useRef();
  const useItems = React.useMemo(() => {
    if (resolvedUseItems && useHandler) {
      const useData = normalizeData(resolvedUseItems);
      return useData;
    }
    if (props?.items?.map) {
      return normalizeData(props.items);
    }
    return [{}, {}, {}, {}];
  }, [resolvedUseItems, useHandler, props?.items]);
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, d => {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        const useCurrentTime = useItems[currentSlide] ? useItems[currentSlide].date : null;
        if (useCurrentTime !== null && useCurrentTime !== undefined) {
          const useTime = typeof useCurrentTime === 'string' ? new Date(Number(useCurrentTime)) : typeof useCurrentTime === 'object' ? new Date(useCurrentTime) : new Date(useCurrentTime);
          if (datePassed(useTime)) {
            setUseCountdown('nodate');
          } else if (!isNaN(useTime)) {
            const timeRemaining = getTimeRemaining(useTime, new Date());
            if (timeRemaining) {
              setUseCountdown(timeRemaining);
              setDisplayTime(true);
            }
          }
        } else {
          setUseCountdown('nodate');
          setDisplayTime(false);
        }
      }
    }
  });
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      if (props.request) {
        setUseHandler(true);
      }
      setInterval(() => {
        // Update time every second
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const handleFireGlobalEvent = React.useCallback(async e => {
    setCtaClickedOnce(true);
    if (e?.currentTarget?.getAttribute('ctaAfter')) {
      e.currentTarget.innerHTML = e.currentTarget.getAttribute('ctaAfter');
      const cta = e.currentTarget.getAttribute('cta');
      const tempRef = e.currentTarget;
      setTimeout(() => {
        try {
          tempRef.innerHTML = cta;
        } catch (err) {
          // fail silently
        }
      }, RESET_CTA_TIMER);
    }
    fireGlobalEvent(e, props._LocalEventEmitter);
  });
  const resolveImage = (item, img, type) => {
    if (item?.rawBg && type === 'bg') {
      return img;
    } else if (item?.raw && type === 'icon') {
      return img;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0 && img) {
      return `${props.cdn.static}/${img}`;
    }
    return 'img/default/greythumb.jpg';
  };
  const receiveData = res => {
    console.log(res);
    if (res?.data?.fetchedData) {
      const items = [];
      const validGroups = res.data.fetchedData.map(m => {
        return Object.entries(m).map(n => {
          return n[1].map(o => {
            if (Array.isArray(o)) {
              return o.map(p => {
                if (p.id) {
                  items.push(p);
                  return p;
                }
                return null;
              });
            } else {
              if (o.id) {
                items.push(o);
                return o;
              }
            }
            return null;
          });
        });
      });
      const flattened = validGroups.flat(3);
      if (flattened) {
        const useItems = flattened.filter(Boolean);
        setResolvedUseItems(useItems);
      }
    }
    // Use Received data instead props.items. Can set to useItems. Use useItems as state
    // Must set image based on if feature image present. if no feature image present use 1st image (if tall view, look for tall image first)
    // Use Name for title. Use author username for author
  };
  const useSettings = {
    infinite: useItems.length > 1,
    speed: 500,
    swipeToSlide: true,
    touchThreshold: 60,
    arrows: false,
    beforeChange: (current, next) => {
      if (next !== currentSlide) {
        setCurrentSlide(next);
        setTimeout(() => {
          props._LocalEventEmitter.dispatch(componentId, {
            dispatch: 'updateCountdown'
          });
        }, 1);
      }
    }
  };
  const handleSliderLinkClickUpProxy = React.useCallback(e => {
    handleSliderLinkClickUp(e, router);
  });
  console.log(useItems, resolvedUseItems);
  return <div className={`${Styles.IndexBgContainer} glide_${componentId} ${props.className} ${props.medium ? `${Styles.IndexBgContainerMedium}` : null}`}>
            <div className={`${Styles.SliderBulletsContainer} ${moduleName}_SliderBulletsContainer ${props.sliderBulletsContainerClassName}`}>
                <div className={`${Styles.SliderBullets} glide__bullets`} data-glide-el="controls[nav]">
                    {props.items && props.items.map && props.items.length > 1 ? props.items.map((m, i) => <button className={`${Styles.SliderBullet} glide__bullet`} data-glide-dir={`=${i}`} key={i}></button>) : null}
                </div>
            </div>
            {useHandler && props?.request?.handlerArgs ? <FetchHandler handlerArgs={props.request.handlerArgs} receiveData={receiveData} {...props} /> : null}
            <div className={`swipe slick-full slider_${componentId}`}>
                <Slider {...useSettings} className={`${Styles.sliderContainer} swiper-wrapper slider_slides`} style={{
        height: 'inherit'
      }}>
                    {useItems?.map ? useItems.map((m, i) => <div className={`${Styles.BgUpperContainer} ${moduleName}_Container`} key={i}>
                                        <div className={`${Styles.BgContainer} ${moduleName}_BgContainer ${props.bgClassName}`} style={{
            backgroundImage: `url(${resolveImage(m, m?.leadBg ?? null, 'bg')})`
          }}>
                                            {props.children}
                                            <div className={`${Styles.FillPageContainer} ${moduleName}_FillPageContainer`}>
                                                <div className={`${Styles.TimeContainer} ${moduleName}_TimeContainer ${props.timeContainerClassName}`}>
                                                    <div className={`${Styles.TimeCountdown} ${moduleName}_TimeCountdown ${props.timeCountdownClassName} ${useCountdown ? `${Styles.TimeCountdownVisible}` : null}`}>
                                                        {useCountdown && setDisplayTime ? useCountdown === 'nodate' ? _div || (_div = <div></div>) : <React.Fragment>
                                                                        {useCountdown.days > 0 ? <div className={`${Styles.TimeSection} ${moduleName}_TimeSection ${Styles.TimeSectionDay} ${props.timeSectionClassName}`}><div className={`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`}>{useCountdown.days}</div><div className={`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`}>Days</div></div> : null}
                                                                        {useCountdown.days > 0 ? <div className={`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon ${props.timeSectionColonClassName}`}>:</div> : null}
                                                                        {useCountdown.hours === 0 && useCountdown.minutes === 0 && useCountdown.seconds === 0 ? _div2 || (_div2 = <div></div>) : <React.Fragment>
                                                                                <div className={`${Styles.TimeSection} ${moduleName}_TimeSection ${props.timeSectionClassName}`}>
                                                                                    <div className={`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`}>{useCountdown.hours}</div>
                                                                                    <div className={`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`}>Hours</div>
                                                                                </div>
                                                                                <div className={`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon ${props.timeSectionColonClassName}`}>:</div>
                                                                                <div className={`${Styles.TimeSection} ${moduleName}_TimeSection ${props.timeSectionClassName}`}>
                                                                                    <div className={`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`}>{useCountdown.minutes}</div>
                                                                                    <div className={`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`}>Minutes</div>
                                                                                </div>
                                                                                <div className={`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon ${props.timeSectionColonClassName}`}>:</div>
                                                                                <div className={`${Styles.TimeSection} ${moduleName}_TimeSection ${props.timeSectionClassName}`}>
                                                                                    <div className={`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`}>{useCountdown.seconds}</div>
                                                                                    <div className={`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`}>Seconds</div>
                                                                                </div>
                                                                            </React.Fragment>}
                                                                    </React.Fragment> : null}
                                                    </div>
                                                    {m.showSimpleDate && useCountdown ? <div className={`${Styles.TimeSimple} ${moduleName}_TimeSimple ${props.timeSimpleClassName}`}>
                                                                <div>{m?.date ? resolveGoodDate(m.date) : ''}</div>
                                                            </div> : null}
                                                </div>
                                                <div className={`${Styles.DataContainer} ${moduleName}_DataContainer ${props.DataContainerClassName}`}>
                                                    <div className={`${Styles.AuthorContainer} ${moduleName}_AuthorContainer ${props.authorContainerClassName}`}>
                                                        {m?.icon !== '' ? <div className={`${Styles.IconContainer} ${moduleName}_IconContainer ${props.iconContainerClassName}`}>
                                                                    <Link href={`/p?u=${m?.author ?? ''}`} onClick={handleSliderLinkClick} onMouseDown={handleSliderLinkClickDown} onMouseUp={handleSliderLinkClickUpProxy} draggable={false} style={{
                      alignSelf: 'center'
                    }}>
                                                                        <Image loader={() => {
                        return resolveImage(m, m?.icon ?? null, 'icon');
                      }} src={resolveImage(m, m?.icon ?? null, 'icon')} style={{
                        maxWidth: '50px',
                        borderRadius: '4rem'
                      }} alt={m?.author ?? ''} width={m.iconWidth ?? '50'} height={m.iconHeight ?? '50'} layout="responsive" />
                                                                    </Link>
                                                                </div> : null}
                                                        <Link href={`/p?u=${m?.author ?? ''}`} onClick={handleSliderLinkClick} onMouseDown={handleSliderLinkClickDown} onMouseUp={handleSliderLinkClickUpProxy} draggable={false} style={{
                    alignSelf: 'center'
                  }}>
                                                            <div className={`${Styles.Author} ${moduleName}_Author ${props.authorClassName}`}>{m?.author ?? ''}</div>
                                                        </Link>
                                                    </div>
                                                    <Link href={resolveMainLink(m)} onClick={handleSliderLinkClick} onMouseDown={handleSliderLinkClickDown} onMouseUp={handleSliderLinkClickUpProxy} draggable={false} style={{
                  alignSelf: 'center',
                  position: 'relative'
                }}>
                                                        <div className={`${Styles.Lead} ${moduleName}_Lead ${props.leadClassName}`}>{m?.title ?? ''}</div>
                                                        {m.created && !isNaN(new Date(m.created)) && new Date(m.created).getTime() > new Date().getTime() - 1296000000 ? <div className='newItem' style={{
                    position: 'absolute',
                    top: '-25px',
                    right: '100px',
                    fontSize: '.7rem'
                  }}>
                                                                    {_span || (_span = <span>New</span>)}
                                                                    <span style={{
                      fontSize: '.7rem'
                    }} className={`star material-icons`}>star</span>
                                                                </div> : null}
                                                    </Link>
                                                    {m.description && m.description !== '' ? <div className={`${Styles.Description} ${moduleName}_Description ${props.descriptionClassName}`}>{m?.description ?? ''}</div> : null}
                                                    {m?.item?.id && m?.item?.style && m?.item?.option ? <div style={{
                  display: 'flex',
                  columnGap: '1rem',
                  rowGap: '.25rem',
                  flexWrap: 'wrap'
                }}>
                                                                <button className={`${Styles.CtaButton} ${moduleName}_Cta ${props.ctaClassName}`} onClick={handleFireGlobalEvent} action={['add_to_cart', 'buy'].indexOf(m?.action) > -1 ? m.action : 'add_to_cart'} item={m?.item?.id} selectedstyle={m?.item?.style} currentoption={m?.item?.option} ref={ctaRef} ctaAfter={m.ctaAfter} cta={m.cta}>{m.cta}</button>
                                                                {(() => {
                    const style = m?.styles?.find ? m.styles.find(n => n.sid === m.item.style) : null;
                    const price = resolveRegionBasedPrice(props, style, m?.item?.useCustom ?? null);
                    if (price?.price == 0) {
                      return <div className='flex' style={{
                        fontSize: '1.5rem',
                        fontWeight: '600'
                      }}>
                                                                                    {_div3 || (_div3 = <div>Free</div>)}
                                                                                </div>;
                    } else if (price?.currency && price?.symbol && Object.prototype.hasOwnProperty.call(price, 'price')) {
                      return <div className='flex' style={{
                        fontSize: '1.25rem',
                        fontWeight: '600'
                      }}>
                                                                                    <div>{price.symbol}</div>
                                                                                    <div style={{
                          marginRight: '.25rem'
                        }}>{resolveMoneyFormat(price.price)}</div>
                                                                                    <div>{price.currency}</div>
                                                                                </div>;
                    }
                    return _div4 || (_div4 = <div></div>);
                  })()}
                                                                {(() => {
                    const option = resolveOption(m, m.item.style, m.item.option, true);
                    const paint = option?.quantity && option.quantity > 300 ? '' : option?.quantity && option.quantity <= 300 ? `Not much left in stock` : '';
                    return paint !== '' ? <div style={{
                      alignItems: 'center',
                      display: 'flex',
                      fontSize: '.75rem',
                      fontWeight: '700',
                      gap: '.25rem',
                      color: '#ff8686'
                    }}>
                                                                                <span>{paint}</span>
                                                                                <span style={{
                        fontSize: '1.15rem'
                      }} className={`inventory material-icons`}>inventory</span>
                                                                            </div> : null;
                  })()}
                                                            </div> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>) : null}
                </Slider>
            </div>
        </div>;
};
export default Module;