var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Module = props => {
  let [pageError, setPageError] = React.useState(null);
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const myLoader = ({
    src
  }) => {
    if (src.match(/greythumb/)) {
      return `${src}`;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
      return `${props.cdn.static}/${src}`;
    }
  };
  console.log(props, props.image1);
  return /*#__PURE__*/_jsx("div", {
    className: `WideFeatureContainer ${props.className}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "WideFeatureInnerContainer"
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      maxHeight: '200px'
    }
  }, void 0, /*#__PURE__*/_jsx(Image, {
    loader: myLoader,
    src: props.image1 && props.cdn && props.cdn.static ? props.image1 : 'img/default/greythumb.jpg',
    width: 320,
    height: 180,
    layout: "responsive",
    style: {
      borderRadius: '1rem'
    }
  }))));
};
export default Module;