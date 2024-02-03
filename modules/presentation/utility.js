"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveMainLink = exports.resolveGoodDate = exports.normalizeData = exports.handleSliderLinkClickUp = exports.handleSliderLinkClickDown = exports.handleSliderLinkClick = exports.datePassed = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var normalizeData = exports.normalizeData = function normalizeData(data) {
  return data.map(function (m) {
    if (m.name) {
      m.title = m.name;
    }
    if (!m.leadBg) {
      if (m.images && m.images.length > 0) {
        var bg = m.images.find(function (n) {
          return n.bgImg;
        });
        if (bg) {
          m.leadBg = bg.name;
        } else if (m.images[0]) {
          m.leadBg = m.images[0].name;
        }
      }
    }
    if (!m.icon) {
      var _m$authorData;
      if (m !== null && m !== void 0 && (_m$authorData = m.authorData) !== null && _m$authorData !== void 0 && _m$authorData.icon) {
        m.icon = m.authorData.icon;
        if (!m.authorData.cdnIcon || !m.authorData.meta || m.authorData.meta && !m.authorData.meta.cdnIcon) {
          // Handles if icon is from cdn or not. If present do not assign raw (signify raw icon url)
          m.raw = true;
        }
      }
    }
    if (!m.author) {
      var _m$authorData2;
      if (m !== null && m !== void 0 && (_m$authorData2 = m.authorData) !== null && _m$authorData2 !== void 0 && _m$authorData2.username) {
        m.author = m.authorData.username;
      }
    }
    if (!(m !== null && m !== void 0 && m.item)) {
      var _m$styles$, _validStyleObject$opt, _m$detailmeta, _m$detailmeta2, _m$detailmeta3;
      // Must resolve default Purchase
      var validStyleObject = m !== null && m !== void 0 && m.styles && (_m$styles$ = m.styles[0]) !== null && _m$styles$ !== void 0 && _m$styles$.sid ? m.styles[0] : null;
      var validOptionObject = validStyleObject !== null && validStyleObject !== void 0 && validStyleObject.option && (_validStyleObject$opt = validStyleObject.option[0]) !== null && _validStyleObject$opt !== void 0 && _validStyleObject$opt.sid ? validStyleObject.option[0] : null;
      m.item = {
        type: m !== null && m !== void 0 && (_m$detailmeta = m.detailmeta) !== null && _m$detailmeta !== void 0 && _m$detailmeta.ticket ? 'ticket' : null,
        id: m.id,
        style: validStyleObject.sid,
        option: validOptionObject.sid
      };
      m.cta = m !== null && m !== void 0 && (_m$detailmeta2 = m.detailmeta) !== null && _m$detailmeta2 !== void 0 && _m$detailmeta2.ticket ? 'Get Tickets' : 'Add To Cart';
      m.ctaAfter = m !== null && m !== void 0 && (_m$detailmeta3 = m.detailmeta) !== null && _m$detailmeta3 !== void 0 && _m$detailmeta3.ticket ? 'Tickets Secured' : 'Added';
    }
    if (!(m !== null && m !== void 0 && m.date)) {
      var _m$detailmeta4;
      if (m !== null && m !== void 0 && (_m$detailmeta4 = m.detailmeta) !== null && _m$detailmeta4 !== void 0 && (_m$detailmeta4 = _m$detailmeta4.eventDateDef) !== null && _m$detailmeta4 !== void 0 && _m$detailmeta4.dates && m.detailmeta.eventDateDef.dates.length > 0) {
        m.showSimpleDate = true;
        m.date = new Date(m.detailmeta.eventDateDef.dates[0]).getTime();
      }
    }
    if (!(m !== null && m !== void 0 && m.description)) {
      var _m$detailmeta5;
      if (m !== null && m !== void 0 && (_m$detailmeta5 = m.detailmeta) !== null && _m$detailmeta5 !== void 0 && _m$detailmeta5.description) {
        m.description = m.detailmeta.description;
      }
    }
    return m;
  });
};
var resolveMainLink = exports.resolveMainLink = function resolveMainLink(m) {
  var _m$item;
  // m?.date && !datePassed(m.date) && m?.item?.id ? `/e?p=${m.item.id}` : m?.streamId ? `/w?v=${m?.streamId ?? ''}` : `/w?u=${m?.author ?? ''}
  if ((m === null || m === void 0 || (_m$item = m.item) === null || _m$item === void 0 ? void 0 : _m$item.type) === 'ticket') {
    var _m$item2;
    if (m !== null && m !== void 0 && m.streamid) {
      return "w?v=".concat(m === null || m === void 0 ? void 0 : m.streamId);
    } else if (m !== null && m !== void 0 && (_m$item2 = m.item) !== null && _m$item2 !== void 0 && _m$item2.id) {
      return "/e?p=".concat(m.item.id);
    }
  } else if (m !== null && m !== void 0 && m.item) {
    return "/i?p=".concat(m.item.id);
  }
  if (m !== null && m !== void 0 && m.author) {
    return "w?u=".concat(m.author);
  }
  return '';
};
var datePassed = exports.datePassed = function datePassed(date) {
  try {
    var useValue = Number(date);
    return new Date(useValue).getTime() < new Date().getTime();
  } catch (err) {
    return false;
  }
};
var resolveGoodDate = exports.resolveGoodDate = function resolveGoodDate(date) {
  try {
    var useValue = Number(date);
    return new Date(useValue).toLocaleDateString() + ' ' + new Date(useValue).toLocaleTimeString();
  } catch (err) {
    return '';
  }
};
var handleSliderLinkClick = exports.handleSliderLinkClick = function handleSliderLinkClick(e) {
  e.preventDefault();
};
var handleSliderLinkClickDown = exports.handleSliderLinkClickDown = function handleSliderLinkClickDown(e) {
  var _e$currentTarget;
  if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute && e.currentTarget.getAttribute('href') && Object.prototype.hasOwnProperty.call(e, 'screenX') && Object.prototype.hasOwnProperty.call(e, 'screenY')) {
    localStorage.setItem('last_click_location', JSON.stringify({
      x: e.screenX,
      y: e.screenY
    }));
  }
};
var handleSliderLinkClickUp = exports.handleSliderLinkClickUp = function handleSliderLinkClickUp(e, router) {
  var isRightMB = "which" in e ? e.which == 3 : 'button' in e ? e.button == 2 : false; // e.which 3 = Gecko (Firefox), WebKit (Safari/Chrome) & Opera e.button 2 = IE, Opera 
  if (isRightMB) {
    e.preventDefault();
    return;
  }
  if (Object.prototype.hasOwnProperty.call(e, 'screenX') && Object.prototype.hasOwnProperty.call(e, 'screenY')) {
    var x = e.screenX;
    var y = e.screenY;
    var lastClick = localStorage.getItem('last_click_location');
    if (lastClick) {
      var _e$currentTarget2;
      var lastClickParsed = JSON.parse(lastClick);
      if (lastClickParsed && e !== null && e !== void 0 && (_e$currentTarget2 = e.currentTarget) !== null && _e$currentTarget2 !== void 0 && _e$currentTarget2.getAttribute) {
        var useHref = e.currentTarget.getAttribute('href');
        if (useHref) {
          var xDif = x - lastClickParsed.x;
          var yDif = y - lastClickParsed.y;
          var distance = Math.sqrt(xDif * xDif + yDif * yDif);
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