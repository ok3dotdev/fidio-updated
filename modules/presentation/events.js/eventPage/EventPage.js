var _div, _div2, _span, _div3, _div4, _div5;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Styles from '../../Presentation.module.scss';
import PIMStyles from '../../../ecommerce/product/ProductImageManager.module.scss';
import { resolveImg, resolveOption, resolveMoneyFormat, resolveRegionBasedPrice } from '../../../utility/ecommerce';
import { fireGlobalEvent, getTimeRemaining } from '../../../utility/utility';
import { normalizeData, resolveMainLink, datePassed, resolveGoodDate } from '../../utility';
import { getFormattedTime } from '../../../util';
import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
const moduleName = 'IndexHello';
const RESET_CTA_TIMER = 180000;
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [reqData, setReqData] = React.useState(null);
  const [lastSetReqData, setLastSetReqData] = React.useState(-1);
  const [useCountdown, setUseCountdown] = React.useState(null);
  const [ctaClickedOnce, setCtaClickedOnce] = React.useState(false);
  const [displayTime, setDisplayTime] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const ctaRef = React.useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, d => {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        const useCurrentTime = reqData?.date ?? null;
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
      setComponentDidMount(new Date().getTime());
      const id = uuidv4();
      setDisplayTime(false);
      setInterval(() => {
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setComponentId(id);
    }
  }, [componentDidMount, props?.eventData]);
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
  React.useEffect(() => {
    if (props?.eventData?.id) {
      if (props.eventData.id !== reqData && (lastSetReqData === -1 || lastSetReqData < new Date().getTime() - 5000)) {
        const useData = normalizeData([props.eventData]);
        setReqData(useData[0]);
      }
    }
  }, [props?.eventData, reqData]);
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
  const m = reqData?.id ? reqData : null;
  console.log(m);
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} ${Styles.IndexBgContainer} EventPage_Container`
  }, void 0, props.children, !props.hideDefault ? m ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.Container} EventPage_EventContainer `
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.BgUpperContainer} ${moduleName}_Container`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.BgContainer} ${moduleName}_BgContainer ${props.bgClassName}`,
    style: {
      backgroundImage: `url(${resolveImage(m, m?.leadBg ?? null, 'bg')})`
    }
  }, void 0, props.children, /*#__PURE__*/_jsx("div", {
    className: `${Styles.FillPageContainer} ${Styles.FillPageContainerEvent} ${moduleName}_FillPageContainer`,
    style: {
      height: `calc(100vh - ${props?.menuConfig?.height ?? 45}px)`
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeContainer} ${moduleName}_TimeContainer ${props.timeContainerClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeCountdown} ${moduleName}_TimeCountdown ${props.timeCountdownClassName} ${useCountdown ? `${Styles.TimeCountdownVisible}` : null}`
  }, void 0, useCountdown && setDisplayTime ? useCountdown === 'nodate' ? _div || (_div = /*#__PURE__*/_jsx("div", {})) : /*#__PURE__*/_jsx(React.Fragment, {}, void 0, useCountdown.days > 0 ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSection} ${moduleName}_TimeSection ${Styles.TimeSectionDay} ${props.timeSectionClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`
  }, void 0, useCountdown.days), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`
  }, void 0, "Days")) : null, useCountdown.days > 0 ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon ${props.timeSectionColonClassName}`
  }, void 0, ":") : null, useCountdown.hours === 0 && useCountdown.minutes === 0 && useCountdown.seconds === 0 ? _div2 || (_div2 = /*#__PURE__*/_jsx("div", {})) : /*#__PURE__*/_jsx(React.Fragment, {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSection} ${moduleName}_TimeSection ${props.timeSectionClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`
  }, void 0, useCountdown.hours), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`
  }, void 0, "Hours")), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon ${props.timeSectionColonClassName}`
  }, void 0, ":"), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSection} ${moduleName}_TimeSection ${props.timeSectionClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`
  }, void 0, useCountdown.minutes), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`
  }, void 0, "Minutes")), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon ${props.timeSectionColonClassName}`
  }, void 0, ":"), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSection} ${moduleName}_TimeSection ${props.timeSectionClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue ${props.timeSectionValueClassName}`
  }, void 0, useCountdown.seconds), /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel ${props.TimeSectionLabelClassName}`
  }, void 0, "Seconds")))) : null), m.showSimpleDate && useCountdown ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSimple} ${moduleName}_TimeSimple ${props.timeSimpleClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, m?.date ? resolveGoodDate(m.date) : '')) : null), /*#__PURE__*/_jsx("div", {
    className: `${Styles.DataContainer} ${moduleName}_DataContainer ${props.DataContainerClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.AuthorContainer} ${moduleName}_AuthorContainer ${props.authorContainerClassName}`
  }, void 0, m?.icon !== '' ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.IconContainer} ${moduleName}_IconContainer ${props.iconContainerClassName}`
  }, void 0, /*#__PURE__*/_jsx(Link, {
    href: `/p?u=${m?.author ?? ''}`,
    style: {
      alignSelf: 'center'
    }
  }, void 0, /*#__PURE__*/_jsx(Image, {
    loader: () => {
      return resolveImage(m, m?.icon ?? null, 'icon');
    },
    src: resolveImage(m, m?.icon ?? null, 'icon'),
    style: {
      maxWidth: '50px',
      borderRadius: '4rem'
    },
    alt: m?.author ?? '',
    width: m.iconWidth ?? '50',
    height: m.iconHeight ?? '50',
    layout: "responsive"
  }))) : null, /*#__PURE__*/_jsx(Link, {
    href: `/p?u=${m?.author ?? ''}`,
    style: {
      alignSelf: 'center'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.Author} ${moduleName}_Author ${props.authorClassName}`
  }, void 0, m?.author ?? ''))), /*#__PURE__*/_jsx(Link, {
    href: resolveMainLink(m),
    style: {
      alignSelf: 'center',
      position: 'relative'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.Lead} ${moduleName}_Lead ${props.leadClassName}`
  }, void 0, m?.title ?? ''), m.created && !isNaN(new Date(m.created)) && new Date(m.created).getTime() > new Date().getTime() - 1296000000 ? /*#__PURE__*/_jsx("div", {
    className: "newItem",
    style: {
      position: 'absolute',
      top: '-18.5px',
      left: '75px'
    }
  }, void 0, _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, "New")), /*#__PURE__*/_jsx("span", {
    style: {
      fontSize: '.9rem'
    },
    className: `star material-icons`
  }, void 0, "star")) : null), m?.item?.id && m?.item?.style && m?.item?.option ? /*#__PURE__*/_jsx("div", {
    className: `flex`,
    style: {
      alignItems: 'center',
      columnGap: '.5rem'
    }
  }, void 0, <button className={`${Styles.CtaButton} ${moduleName}_Cta ${props.ctaClassName}`} onClick={handleFireGlobalEvent} action={['add_to_cart', 'buy'].indexOf(m?.action) > -1 ? m.action : 'add_to_cart'} item={m.item.id} selectedstyle={m.item.style} currentoption={m.item.option} ref={ctaRef} ctaAfter={m.ctaAfter} cta={m.cta}>{m.cta}</button>, (() => {
    const style = m?.styles?.find ? m.styles.find(n => n.sid === m.item.style) : null;
    const price = resolveRegionBasedPrice(props, style);
    if (price?.price == 0) {
      return /*#__PURE__*/_jsx("div", {
        className: "flex",
        style: {
          fontSize: '1.5rem',
          fontWeight: '600',
          marginTop: '.5rem'
        }
      }, void 0, _div3 || (_div3 = /*#__PURE__*/_jsx("div", {}, void 0, "Free")));
    } else if (price?.currency && price?.symbol && Object.prototype.hasOwnProperty.call(price, 'price')) {
      return /*#__PURE__*/_jsx("div", {
        className: "flex",
        style: {
          fontSize: '1.25rem',
          fontWeight: '600'
        }
      }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, price.symbol), /*#__PURE__*/_jsx("div", {
        style: {
          marginRight: '.25rem'
        }
      }, void 0, resolveMoneyFormat(price.price)), /*#__PURE__*/_jsx("div", {}, void 0, price.currency));
    }
    return _div4 || (_div4 = /*#__PURE__*/_jsx("div", {}));
  })(), (() => {
    const option = resolveOption(m, m.item.style, m.item.option, true);
    const paint = option?.quantity && option.quantity > 300 ? '' : option?.quantity && option.quantity <= 300 ? `Not much left in stock` : '';
    console.log(option, paint);
    return paint !== '' ? /*#__PURE__*/_jsx("div", {
      style: {
        alignItems: 'center',
        display: 'flex',
        fontSize: '.85rem',
        fontWeight: '700',
        gap: '.25rem',
        color: '#ff8686'
      }
    }, void 0, /*#__PURE__*/_jsx("span", {}, void 0, paint), /*#__PURE__*/_jsx("span", {
      style: {
        fontSize: '1.15rem'
      },
      className: `inventory material-icons`
    }, void 0, "inventory")) : null;
  })()) : null)))), /*#__PURE__*/_jsx("div", {
    className: `${Styles.SecondDataContainer}`
  }, void 0, m.description && m.description !== '' ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.Description} ${moduleName}_Description ${props.descriptionClassName}`
  }, void 0, m?.description ?? '') : null, m.showSimpleDate && useCountdown ? /*#__PURE__*/_jsx("div", {
    className: `${Styles.TimeSimpleInline} ${moduleName}_TimeSimple ${props.timeSimpleClassName}`
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, m?.date ? resolveGoodDate(m.date) : '')) : null, /*#__PURE__*/_jsx("div", {}, void 0, m?.detailmeta?.lineup && m.detailmeta.lineup.map && m.detailmeta.lineup.length > 0 ? /*#__PURE__*/_jsx("div", {
    style: {
      marginTop: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.LineupLabel} EventPage_Lineup_Label`
  }, void 0, "Lineup"), /*#__PURE__*/_jsx("div", {
    className: `${Styles.LineupContainer}`
  }, void 0, m.detailmeta.lineup.map((n, i) => /*#__PURE__*/_jsx("div", {
    className: `${Styles.LineupItem}`,
    index: i
  }, i, /*#__PURE__*/_jsx("div", {
    style: {
      marginTop: '.125rem',
      marginBottom: '1rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.LineupImageContainer}`,
    style: {
      position: 'relative'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${Styles.LineupImageInternalContainer}`,
    style: {
      backgroundImage: `url(${props.cdn.static}/${n.image})`
    }
  }, void 0, /*#__PURE__*/_jsx("img", {
    src: `${resolveImg(null)}`,
    className: `${Styles.LineupImage}`,
    style: {
      opacity: n.image ? 0 : 1
    }
  })))), /*#__PURE__*/_jsx("div", {
    className: `${Styles.ParticipantLabel}`
  }, void 0, n.title !== '' ? n.title : /*#__PURE__*/_jsx("div", {
    style: {
      opacity: '.7'
    }
  }, void 0, "Participant")), n.description ? /*#__PURE__*/_jsx("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, void 0, n.description) : null, n.time ? /*#__PURE__*/_jsx("div", {
    className: `lineupItem_time ${Styles.LineupItemTime}`
  }, void 0, getFormattedTime(n.time, {
    simple: true
  })) : null)))) : null))) : _div5 || (_div5 = /*#__PURE__*/_jsx("div", {
    className: "PagePadding"
  }, void 0, "No Event")) : null, props.childrenAfter);
};
export default Module;