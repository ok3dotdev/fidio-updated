"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectThisText = exports.fireGlobalEvent = void 0;
var fireGlobalEvent = exports.fireGlobalEvent = function fireGlobalEvent(e, emitter) {
  if (e && emitter) {
    var _e$currentTarget;
    var action = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.getAttribute('action');
    if (action) {
      if (action === 'buy') {
        var _e$currentTarget2, _e$currentTarget3, _e$currentTarget4;
        var item = e === null || e === void 0 || (_e$currentTarget2 = e.currentTarget) === null || _e$currentTarget2 === void 0 ? void 0 : _e$currentTarget2.getAttribute('item');
        var style = e === null || e === void 0 || (_e$currentTarget3 = e.currentTarget) === null || _e$currentTarget3 === void 0 ? void 0 : _e$currentTarget3.getAttribute('selectedstyle');
        var option = e === null || e === void 0 || (_e$currentTarget4 = e.currentTarget) === null || _e$currentTarget4 === void 0 ? void 0 : _e$currentTarget4.getAttribute('currentoption');
        emitter.dispatch('global_event', {
          action: action,
          e: e,
          item: item,
          style: style,
          option: option
        });
      } else if (action === 'add_to_cart') {
        var _e$currentTarget5, _e$currentTarget6, _e$currentTarget7;
        var _item = e === null || e === void 0 || (_e$currentTarget5 = e.currentTarget) === null || _e$currentTarget5 === void 0 ? void 0 : _e$currentTarget5.getAttribute('item');
        var _style = e === null || e === void 0 || (_e$currentTarget6 = e.currentTarget) === null || _e$currentTarget6 === void 0 ? void 0 : _e$currentTarget6.getAttribute('selectedstyle');
        var _option = e === null || e === void 0 || (_e$currentTarget7 = e.currentTarget) === null || _e$currentTarget7 === void 0 ? void 0 : _e$currentTarget7.getAttribute('currentoption');
        emitter.dispatch('global_event', {
          action: action,
          e: e,
          item: _item,
          style: _style,
          option: _option
        });
      } else {
        emitter.dispatch('global_event', {
          custom: true,
          action: action,
          e: e
        });
      }
    }
  }
};
var selectThisText = exports.selectThisText = function selectThisText(e) {
  var _e$currentTarget8;
  if (e !== null && e !== void 0 && (_e$currentTarget8 = e.currentTarget) !== null && _e$currentTarget8 !== void 0 && _e$currentTarget8.getAttribute) {
    var _navigator;
    var select = e.currentTarget.getAttribute('selectValue');
    if (select && (_navigator = navigator) !== null && _navigator !== void 0 && (_navigator = _navigator.clipboard) !== null && _navigator !== void 0 && _navigator.writeText) {
      var _window;
      navigator.clipboard.writeText(select);
      if ((_window = window) !== null && _window !== void 0 && _window.getSelection) {
        window.getSelection().selectAllChildren(e.currentTarget);
      }
    }
  }
};