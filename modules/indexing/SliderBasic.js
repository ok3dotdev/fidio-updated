var _div;
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

  return /*#__PURE__*/React.createElement("div", {
    className: `glide_${componentId} ${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    "data-glide-el": "track",
    className: "glide__track",
    style: {
      height: props.height ?? '240px'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "glide__slides",
    style: {
      height: 'inherit'
    }
  }, props.items && props.items.map ? props.items.map((m, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "glide_slide"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${SliderStyles.textContainer} glider_text_container`,
    style: {
      position: 'absolute'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `${SliderStyles.textOffsetContainer} glider_text_offset_container`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${SliderStyles.container1} glider_container1`
  }, m.cta ? /*#__PURE__*/React.createElement("h2", {
    className: `${SliderStyles.cta} glider_cta`
  }, m.cta) : null, m.heading ? /*#__PURE__*/React.createElement("h5", {
    className: `${SliderStyles.heading} glider_heading`
  }, m.heading) : null, m.description ? /*#__PURE__*/React.createElement("h6", {
    className: `${SliderStyles.description} glider_description`
  }, m.description) : null), /*#__PURE__*/React.createElement("div", {
    className: `${SliderStyles.container2} glider_container2`
  }, m.button ? /*#__PURE__*/React.createElement("a", {
    className: `${SliderStyles.button} glider_button`,
    href: m.buttonLink ?? ''
  }, /*#__PURE__*/React.createElement("button", null, m.button)) : null, m.status ? /*#__PURE__*/React.createElement("div", {
    className: `${SliderStyles.status} glider_status`,
    style: {
      background: 'red'
    }
  }, m.status) : null))), /*#__PURE__*/React.createElement("img", {
    src: m.img,
    style: {
      width: m.width ?? 'auto',
      borderRadius: m.borderRadius ?? '1rem'
    }
  }))) : _div || (_div = /*#__PURE__*/React.createElement("div", null)))));
};
export default Module;