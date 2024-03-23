import React from 'react';
const normalizeData = data => {
  return data.map(m => {
    if (m.name) {
      m.title = m.name;
    }
    if (!m.leadBg) {
      if (m.images && m.images.length > 0) {
        const bg = m.images.find(n => n.bgImg);
        if (bg) {
          m.leadBg = bg.name;
        } else if (m.images[0]) {
          m.leadBg = m.images[0].name;
        }
      }
    }
    if (!m.icon) {
      if (m?.authorData?.icon) {
        m.icon = m.authorData.icon;
        if (!m.authorData.cdnIcon || !m.authorData.meta || m.authorData.meta && !m.authorData.meta.cdnIcon) {
          // Handles if icon is from cdn or not. If present do not assign raw (signify raw icon url)
          m.raw = true;
        }
      }
    }
    if (!m.author) {
      if (m?.authorData?.username) {
        m.author = m.authorData.username;
      }
    }
    if (!m?.item) {
      // Must resolve default Purchase
      const validStyleObject = m?.styles && m.styles[0]?.sid ? m.styles[0] : null;
      const validOptionObject = validStyleObject?.option && validStyleObject.option[0]?.sid ? validStyleObject.option[0] : null;
      m.item = {
        type: m?.detailmeta?.ticket ? 'ticket' : null,
        id: m.id,
        style: validStyleObject.sid,
        option: validOptionObject.sid
      };
      m.cta = m?.detailmeta?.ticket ? 'Get Tickets' : 'Add To Cart';
      m.ctaAfter = m?.detailmeta?.ticket ? 'Tickets Secured' : 'Added';
    }
    if (!m?.date) {
      if (m?.detailmeta?.eventDateDef?.dates && m.detailmeta.eventDateDef.dates.length > 0) {
        m.showSimpleDate = true;
        m.date = new Date(m.detailmeta.eventDateDef.dates[0]).getTime();
      }
    }
    if (!m?.description) {
      if (m?.detailmeta?.description) {
        m.description = m.detailmeta.description;
      }
    }
    return m;
  });
};
const resolveMainLink = m => {
  // m?.date && !datePassed(m.date) && m?.item?.id ? `/e?p=${m.item.id}` : m?.streamId ? `/w?v=${m?.streamId ?? ''}` : `/w?u=${m?.author ?? ''}
  if (m?.item?.type === 'ticket') {
    if (m?.streamid) {
      return `w?v=${m?.streamId}`;
    } else if (m?.item?.id) {
      return `/e?p=${m.item.id}`;
    }
  } else if (m?.item) {
    return `/i?p=${m.item.id}`;
  }
  if (m?.author) {
    return `w?u=${m.author}`;
  } else if (m?.detailmeta?.ticket) {
    if (m?.id) {
      return `/e?p=${m.id}`;
    }
  }
  return '';
};
const datePassed = date => {
  try {
    const useValue = Number(date);
    return new Date(useValue).getTime() < new Date().getTime();
  } catch (err) {
    return false;
  }
};
const resolveGoodDate = date => {
  try {
    const useValue = Number(date);
    return new Date(useValue).toLocaleDateString() + ' ' + new Date(useValue).toLocaleTimeString();
  } catch (err) {
    return '';
  }
};
const handleSliderLinkClick = e => {
  e.preventDefault();
};
const handleSliderLinkClickDown = e => {
  if (e?.currentTarget?.getAttribute && e.currentTarget.getAttribute('href') && Object.prototype.hasOwnProperty.call(e, 'screenX') && Object.prototype.hasOwnProperty.call(e, 'screenY')) {
    localStorage.setItem('last_click_location', JSON.stringify({
      x: e.screenX,
      y: e.screenY
    }));
  }
};
const handleSliderLinkClickUp = (e, router) => {
  const isRightMB = "which" in e ? e.which == 3 : 'button' in e ? e.button == 2 : false; // e.which 3 = Gecko (Firefox), WebKit (Safari/Chrome) & Opera e.button 2 = IE, Opera 
  if (isRightMB) {
    e.preventDefault();
    return;
  }
  if (Object.prototype.hasOwnProperty.call(e, 'screenX') && Object.prototype.hasOwnProperty.call(e, 'screenY')) {
    const x = e.screenX;
    const y = e.screenY;
    const lastClick = localStorage.getItem('last_click_location');
    if (lastClick) {
      const lastClickParsed = JSON.parse(lastClick);
      if (lastClickParsed && e?.currentTarget?.getAttribute) {
        const useHref = e.currentTarget.getAttribute('href');
        if (useHref) {
          let xDif = x - lastClickParsed.x;
          let yDif = y - lastClickParsed.y;
          const distance = Math.sqrt(xDif * xDif + yDif * yDif);
          if (distance < 12.5) {
            router.push(useHref);
            return;
          }
          console.log(distance);
        }
      }
    }
  }
};
export { datePassed, normalizeData, resolveMainLink, resolveGoodDate, handleSliderLinkClick, handleSliderLinkClickDown, handleSliderLinkClickUp };