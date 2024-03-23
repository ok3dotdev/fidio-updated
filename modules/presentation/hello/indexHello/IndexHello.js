var _span;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
import { retrieveDay, retrieveMonth } from '../../../utility/utility/date';
import { ConfirmationNumber } from '@mui/icons-material';
const moduleName = 'IndexHello';
const RESET_CTA_TIMER = 180000;
const Module = props => {
  const router = useRouter();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [useCountdown, setUseCountdown] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ctaClickedOnce, setCtaClickedOnce] = React.useState(false);
  const [useHandler, setUseHandler] = React.useState(false);
  const [resolvedUseItems, setResolvedUseItems] = React.useState(null);
  const ctaRef = React.useRef();
  const currentSlider = React.useRef();
  const sliderTrackRef = React.useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, d => {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        const useCurrentTime = props.items && props.items[currentSlide] ? props.items[currentSlide].date : null;
        if (useCurrentTime !== null) {
          const useTime = typeof useCurrentTime === 'string' ? new Date(Number(useCurrentTime)) : typeof useCurrentTime === 'object' ? new Date(useCurrentTime) : new Date(useCurrentTime);
          if (!isNaN(useTime)) {
            const timeRemaining = getTimeRemaining(useTime, new Date());
            if (timeRemaining) {
              setUseCountdown(timeRemaining);
            }
          }
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
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setTimeout(() => {
        const slickTracks = document.getElementsByClassName(`slider_slides_${id}`);
        if (slickTracks && slickTracks[0] && slickTracks[0].childNodes && slickTracks[0].childNodes[0] && slickTracks[0].childNodes[0].childNodes && slickTracks[0].childNodes[0].childNodes[0]) {
          const useContainer = slickTracks[0].childNodes[0].childNodes[0];
          useContainer.style.transition = '500ms';
          useContainer.style.left = '-25px';
          setTimeout(() => {
            useContainer ? useContainer.style.left = '0' : null;
          }, 2000);
        }
      }, 2000);
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.request]);
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
  const useItems = React.useMemo(() => {
    if (resolvedUseItems && useHandler) {
      const useData = normalizeData(resolvedUseItems);
      return useData;
    }
    if (props?.items?.map) {
      return normalizeData(props.items);
    }
    return [{}, {}, {}, {}, {}, {}];
  }, [resolvedUseItems, useHandler, props?.items]);
  const useSettings = {
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false,
    // variableWidth: true,
    responsive: [{
      breakpoint: 4000,
      settings: {
        slidesToShow: 6,
        touchThreshold: 120
      }
    }, {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        touchThreshold: 100
      }
    }, {
      breakpoint: 1680,
      settings: {
        slidesToShow: 4,
        touchThreshold: 80
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        touchThreshold: 60
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        touchThreshold: 40
      }
    }, {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        touchThreshold: 20
      }
    }]
  };
  const handleSliderLinkClickUpProxy = React.useCallback(e => {
    handleSliderLinkClickUp(e, router);
  });
  return <div className={`${Styles.IndexHelloContainer} sliderContainer_${componentId} ${moduleName}_IndexHelloContainer ${props.className}`} ref={sliderTrackRef}>
            {props.groupLabel ? /*#__PURE__*/_jsx("div", {
      className: `${Styles.GroupLabelContainer} ${moduleName}_groupLabelContainer ${props.groupLabelContainerClassName}`
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: `${Styles.GroupLabel} ${moduleName}_groupLabel ${props.groupLabelClassName}`
    }, void 0, props.groupLabel)) : null}
            {useHandler && props?.request?.handlerArgs ? <FetchHandler handlerArgs={props.request.handlerArgs} receiveData={receiveData} {...props} /> : null}
            /*#__PURE__*/_jsx("div", {
      className: `swipe slider_${componentId}`
    }, void 0, <Slider {...useSettings} className={`${Styles.IndexItemsContainer} swiper-wrapper slider_slides ${moduleName}_IndexItemsContainer slider_slides_${componentId} ${props.IndexItemsContainerClassName}`}>
                    {useItems?.map ? useItems.map((m, i) => {
        const useDate = m?.date && !isNaN(new Date(m.date)) ? new Date(m.date) : '';
        console.log(useDate, useDate.getMonth, m);
        return /*#__PURE__*/_jsx("div", {
          className: `swiper-slide ${Styles.IndexItemUpperContainer} ${props.tall ? `${Styles.IndexItemsUpperContainerTall}` : null} ${moduleName}_Container ${componentId}_IndexItemUpperContainer ${m.important ? `slider_item_important` : ''}`
        }, i, /*#__PURE__*/_jsx(Link, {
          href: resolveMainLink(m),
          onClick: handleSliderLinkClick,
          onMouseDown: handleSliderLinkClickDown,
          onMouseUp: handleSliderLinkClickUpProxy,
          draggable: false,
          style: {
            alignSelf: 'center'
          }
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.BgContainer} ${props.tall ? `${Styles.BgContainerTall}` : null} ${moduleName}_BgContainer ${props.bgClassName}`,
          style: {
            backgroundImage: `url(${resolveImage(m, m?.leadBg ?? null, 'bg')})`,
            position: 'relative'
          }
        }, void 0, props.children, /*#__PURE__*/_jsx("div", {
          className: `${Styles.FillPageContainer} ${moduleName}_FillPageContainer`
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.TimeContainer} ${moduleName}_TimeContainer ${props.timeContainerClassName}`
        }, void 0, m?.showSimpleDate && useDate?.getMonth && useDate?.getDate ? /*#__PURE__*/_jsx("div", {
          className: `${Styles.TimeSimple} ${moduleName}_TimeSimple ${props.timeSimpleClassName} ${datePassed(m.date) ? `${Styles.DatePassed}` : ''}`
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.TimeShowContainer} flex gap-p5`
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.dateIconContainer}`
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.dateIconMonth}`
        }, void 0, retrieveMonth(useDate.getMonth())), /*#__PURE__*/_jsx("div", {
          className: `${Styles.dateIconDate}`
        }, void 0, useDate.getDate())), /*#__PURE__*/_jsx("div", {
          className: `${Styles.dateMetaContainer}`
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.dateText}`
        }, void 0, retrieveDay(useDate.getDay()), ", ", useDate.toLocaleString('en-US', {
          month: 'long'
        }), " ", useDate.toLocaleDateString('en-US', {
          day: '2-digit'
        })), /*#__PURE__*/_jsx("div", {
          className: `${Styles.timeMeta} flex gap-p2`,
          style: {
            alignContent: 'center'
          }
        }, void 0, m.created && !isNaN(new Date(m.created)) && new Date(m.created).getTime() > new Date().getTime() - 1296000000 ? /*#__PURE__*/_jsx("div", {
          className: "newItem",
          style: {
            fontSize: '.7rem'
          }
        }, void 0, _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, "New")), /*#__PURE__*/_jsx("span", {
          style: {
            fontSize: '.7rem'
          },
          className: `star material-icons`
        }, void 0, "star")) : null, /*#__PURE__*/_jsx("div", {
          className: `${Styles.timeText}`
        }, void 0, useDate.toLocaleString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit'
        })), m?.item?.type === 'ticket' ? /*#__PURE__*/_jsx("div", {
          className: `${Styles.ticketIcon}`,
          style: {
            height: '1rem'
          }
        }, void 0, /*#__PURE__*/_jsx(ConfirmationNumber, {
          style: {
            fontSize: '1rem',
            height: '1rem'
          }
        })) : null)))) : null)))), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.MetaContainer} ${moduleName}_MetaContainer ${props.metaContainerClassName}`
        }, void 0, m?.icon !== '' ? /*#__PURE__*/_jsx("div", {
          className: `${Styles.IconContainer} ${moduleName}_IconContainer ${props.iconContainerClassName}`
        }, void 0, /*#__PURE__*/_jsx(Link, {
          href: `/p?u=${m?.author ?? ''}`,
          onClick: handleSliderLinkClick,
          onMouseDown: handleSliderLinkClickDown,
          onMouseUp: handleSliderLinkClickUpProxy,
          draggable: false,
          style: {
            alignSelf: 'center'
          }
        }, void 0, /*#__PURE__*/_jsx(Image, {
          loader: () => {
            return resolveImage(m, m?.icon ?? null, 'icon');
          },
          src: resolveImage(m, m?.icon ?? null, 'icon'),
          style: {
            maxWidth: '60px',
            borderRadius: '4rem',
            minHeight: '50px'
          },
          alt: m?.author ?? '',
          width: m?.iconWidth ?? '50',
          height: m?.iconHeight ?? '50',
          layout: "responsive"
        }))) : null, /*#__PURE__*/_jsx("div", {
          className: `${Styles.DataContainer} ${moduleName}_DataContainer ${props.DataContainerClassName}`
        }, void 0, /*#__PURE__*/_jsx(Link, {
          href: resolveMainLink(m),
          onClick: handleSliderLinkClick,
          onMouseDown: handleSliderLinkClickDown,
          onMouseUp: handleSliderLinkClickUpProxy,
          draggable: false,
          style: {
            alignSelf: 'center'
          }
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.Lead} ${moduleName}_Lead ${props.leadClassName}`
        }, void 0, m?.title ?? '')), /*#__PURE__*/_jsx("div", {
          className: `${Styles.CtaHolder} ${moduleName}_CtaHolder ${props.CtaHolderClassName}`
        }, void 0, /*#__PURE__*/_jsx(Link, {
          href: `/p?u=${m?.author}`,
          onClick: handleSliderLinkClick,
          onMouseDown: handleSliderLinkClickDown,
          onMouseUp: handleSliderLinkClickUpProxy,
          draggable: false,
          style: {
            alignSelf: 'center'
          }
        }, void 0, /*#__PURE__*/_jsx("div", {
          className: `${Styles.Author} ${moduleName}_Author ${props.authorClassName}`
        }, void 0, m?.author ?? '')), m?.item?.id && m?.item?.style && m?.item?.option ? <button className={`${Styles.CtaButton} ${moduleName}_Cta ${props.ctaClassName}`} onClick={handleFireGlobalEvent} action={['add_to_cart', 'buy'].indexOf(m?.action) > -1 ? m.action : 'add_to_cart'} item={m?.item?.id} selectedstyle={m?.item?.style} currentoption={m?.item?.option} ref={ctaRef} ctaAfter={m.ctaAfter} cta={m.cta}>{m.cta}</button> : null)))));
      }) : null}
                </Slider>)
        </div>;
};
export default Module;