import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Styles from '../../Presentation.module.scss';
import { v4 as uuidv4 } from 'uuid';
const moduleName = 'BannerHello';
const Module = props => {
  const router = useRouter();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const bgContainerRef = React.useRef();
  const typeContainerRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const resolveImage = (img, type) => {
    if (props?.raw && type === 'img') {
      return img;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0 && img) {
      return `${props.cdn.static}/${img}`;
    }
    return 'img/default/greythumb.jpg';
  };
  const resolveType = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: `${Styles.TypeContainer}`,
      ref: typeContainerRef
    }, /*#__PURE__*/React.createElement("div", {
      className: `${props?.tall ? `${Styles.TypeContainerEnforceSpace}` : null}`
    }, props.lead ? /*#__PURE__*/React.createElement("h2", {
      className: `${Styles.Lead} ${moduleName}_Lead ${props?.classes?.Lead}`
    }, props.lead) : null, props.leadImg ? /*#__PURE__*/React.createElement("div", {
      className: `${Styles.leadImgContainer} ${moduleName}_LeadImg`
    }, /*#__PURE__*/React.createElement("img", {
      className: `${Styles.leadImg} ${moduleName}_LeadImg_img ${props?.classes?.Lead}`,
      src: `${props.leadImg}`
    })) : null, props.text ? /*#__PURE__*/React.createElement("div", {
      className: `${Styles.Text} ${moduleName}_Text ${props?.classes?.Text}`
    }, props.text) : null, props?.childrenBefore?.map ? React.Children.map(props.childrenBefore, function (child) {
      if (child !== null) {
        if (typeof child.type === 'function') {
          const cpProps = {
            bgContainerRef: bgContainerRef,
            typeContainerRef: typeContainerRef
          };
          return /*#__PURE__*/React.cloneElement(child, cpProps);
        }
        return child;
      }
      return /*#__PURE__*/React.createElement('div');
    }) : null), /*#__PURE__*/React.createElement("div", null, props?.children?.map ? React.Children.map(props.children, function (child) {
      if (child !== null) {
        if (typeof child.type === 'function') {
          const cpProps = {
            bgContainerRef: bgContainerRef,
            typeContainerRef: typeContainerRef
          };
          return /*#__PURE__*/React.cloneElement(child, cpProps);
        }
        return child;
      }
      return /*#__PURE__*/React.createElement('div');
    }) : null));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `${Styles.BannerHello} ${moduleName}_Container ${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.IndexBgContainerAd} ${moduleName}_IndexBgContainerAd ${props?.classes?.IndexBgContainerAd} ${props?.tall ? `${Styles.IndexBgContainerAdTall}` : ''} ${props?.center ? `${Styles.IndexBgContainerCenter}` : ''}`,
    ref: bgContainerRef
  }, props.href ? /*#__PURE__*/React.createElement(Link, {
    href: `${props.href}`,
    draggable: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url(${resolveImage(props?.img ?? null, 'img')})`,
      height: '100%',
      backgroundSize: 'cover',
      borderRadius: '1rem',
      position: 'relative'
    }
  }, resolveType())) : /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url(${resolveImage(props?.img ?? null, 'img')})`,
      height: '100%',
      backgroundSize: 'cover',
      borderRadius: '1rem',
      position: 'relative'
    }
  }, resolveType())));
};
export default Module;