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
  return /*#__PURE__*/React.createElement("div", {
    className: `WideFeatureContainer ${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "WideFeatureInnerContainer"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: '200px'
    }
  }, /*#__PURE__*/React.createElement(Image, {
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