"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doSetOptionsMetaData = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _defaults = require("../product/defaults");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var doSetOptionsMetaData = exports.doSetOptionsMetaData = function doSetOptionsMetaData(e, detailMeta, editing, setEditing, setEditingOptionsMeta, currentLineupEditing, setCurrentLineupEditing) {
  if (e.currentTarget) {
    if (e.currentTarget.getAttribute('option')) {
      if (Object.prototype.hasOwnProperty.call(e.currentTarget, 'checked')) {
        var temp = _objectSpread({}, detailMeta);
        temp[e.currentTarget.getAttribute('option')] = e.currentTarget.checked;
        console.log(temp);
        if (setEditingOptionsMeta) {
          setEditingOptionsMeta(temp);
        }
      } else if (e.currentTarget.getAttribute('option') === 'livestreamDef' || e.currentTarget.getAttribute('option') === 'eventDateDef') {
        var _temp = _objectSpread({}, detailMeta);
        if (e.currentTarget.getAttribute('option2')) {
          console.log(e.currentTarget);
          _temp[e.currentTarget.getAttribute('option')][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
          var values = e.currentTarget.value.split(' ');
          var dates = [];
          var tags = [];
          values.map(function (v) {
            if (!isNaN(new Date(v))) {
              dates.push(new Date(v));
            } else {
              tags.push(v);
            }
          });
          _temp[e.currentTarget.getAttribute('option')].dates = dates;
          _temp[e.currentTarget.getAttribute('option')].tags = tags;
          console.log(_temp);
          if (setEditingOptionsMeta) {
            setEditingOptionsMeta(_temp);
          }
        }
      } else if (e.currentTarget.getAttribute('option') === 'lineupTemp') {
        var _temp2 = _objectSpread({}, detailMeta);
        if (!_temp2.lineup) {
          _temp2.lineup = [];
        }
        var cur = currentLineupEditing;
        if (_temp2.lineup.length < 10) {
          var _temp2$detailmeta$lin;
          console.log(cur);
          if (cur === null) {
            cur = _temp2.lineup.length; // Set valid index for currently editing
            setCurrentLineupEditing(cur);
          }
          var temp2 = _objectSpread({}, editing);
          if (!_temp2.lineup[cur]) {
            _temp2.lineup[cur] = (0, _defaults.defaultLineup)();
            if (editing && !temp2.detailmeta.lineup) {
              temp2.detailmeta.lineup = [];
            }
          }
          console.log(temp2.detailmeta.lineup[cur], _temp2.lineup[cur]);
          var retainImage = _temp2.lineup[cur].image == '' && (_temp2$detailmeta$lin = temp2.detailmeta.lineup[cur]) !== null && _temp2$detailmeta$lin !== void 0 && _temp2$detailmeta$lin.image ? temp2.detailmeta.lineup[cur].image : _temp2.lineup[cur].image;
          temp2.detailmeta.lineup[cur] = _temp2.lineup[cur];
          temp2.detailmeta.lineup[cur].image = retainImage;
          if (setEditing) {
            setEditing(temp2);
          }
          _temp2.lineup[cur][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
          if (setEditingOptionsMeta) {
            setEditingOptionsMeta(_temp2);
          }
        }
      }
    }
  }
};