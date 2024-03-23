var _div;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SliderStyles from './Slider.module.scss';
const Module = props => {
  const [componentId, setComponentId] = React.useState(null);
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [stagger, setStagger] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);
  const staggerRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      if (props.stagger) {
        staggerRef.current = setTimeout(() => {
          setStagger(true);
        }, props.stagger);
      }
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.stagger]);
  React.useEffect(() => {
    if (componentId && window && window.Glide) {
      new window.Glide(`.glide_${componentId}`, {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        breakpoints: {
          1200: {
            perView: 2
          },
          480: {
            perView: 1
          }
        }
      }).mount();
    }
  }, [componentId]);

  // console.log(window.Glide)

  return /*#__PURE__*/_jsx("div", {
    className: `glide_${componentId} ${props.className}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    "data-glide-el": "track",
    className: "glide__track",
    style: {
      height: props.height ?? '240px'
    }
  }, void 0, /*#__PURE__*/_jsx("ul", {
    className: "glide__slides",
    style: {
      height: 'inherit'
    }
  }, void 0, props.items && props.items.map ? props.items.map((m, i) => /*#__PURE__*/_jsx("li", {
    className: "glide_slide"
  }, i, /*#__PURE__*/_jsx("div", {
    className: `${SliderStyles.textContainer} glider_text_container`,
    style: {
      position: 'absolute'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${SliderStyles.textOffsetContainer} glider_text_offset_container`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${SliderStyles.container1} glider_container1`
  }, void 0, m.cta ? /*#__PURE__*/_jsx("h2", {
    className: `${SliderStyles.cta} glider_cta`
  }, void 0, m.cta) : null, m.heading ? /*#__PURE__*/_jsx("h5", {
    className: `${SliderStyles.heading} glider_heading`
  }, void 0, m.heading) : null, m.description ? /*#__PURE__*/_jsx("h6", {
    className: `${SliderStyles.description} glider_description`
  }, void 0, m.description) : null), /*#__PURE__*/_jsx("div", {
    className: `${SliderStyles.container2} glider_container2`
  }, void 0, m.button ? /*#__PURE__*/_jsx("a", {
    className: `${SliderStyles.button} glider_button`,
    href: m.buttonLink ?? ''
  }, void 0, /*#__PURE__*/_jsx("button", {}, void 0, m.button)) : null, m.status ? /*#__PURE__*/_jsx("div", {
    className: `${SliderStyles.status} glider_status`,
    style: {
      background: 'red'
    }
  }, void 0, m.status) : null))), /*#__PURE__*/_jsx("img", {
    src: m.img,
    style: {
      width: m.width ?? 'auto',
      borderRadius: m.borderRadius ?? '1rem'
    }
  }))) : _div || (_div = /*#__PURE__*/_jsx("div", {})))));
};
export default Module;