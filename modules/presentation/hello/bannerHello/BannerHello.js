var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
    return <div className={`${Styles.TypeContainer}`} ref={typeContainerRef}>
                /*#__PURE__*/_jsx("div", {
        className: `${props?.tall ? `${Styles.TypeContainerEnforceSpace}` : null}`
      }, void 0, props.lead ? /*#__PURE__*/_jsx("h2", {
        className: `${Styles.Lead} ${moduleName}_Lead ${props?.classes?.Lead}`
      }, void 0, props.lead) : null, props.leadImg ? /*#__PURE__*/_jsx("div", {
        className: `${Styles.leadImgContainer} ${moduleName}_LeadImg`
      }, void 0, /*#__PURE__*/_jsx("img", {
        className: `${Styles.leadImg} ${moduleName}_LeadImg_img ${props?.classes?.Lead}`,
        src: `${props.leadImg}`
      })) : null, props.text ? /*#__PURE__*/_jsx("div", {
        className: `${Styles.Text} ${moduleName}_Text ${props?.classes?.Text}`
      }, void 0, props.text) : null, props?.childrenBefore?.map ? React.Children.map(props.childrenBefore, function (child) {
        if (child !== null) {
          if (typeof child.type === 'function') {
            const cpProps = {
              bgContainerRef: bgContainerRef,
              typeContainerRef: typeContainerRef
            };
            return React.cloneElement(child, cpProps);
          }
          return child;
        }
        return React.createElement('div');
      }) : null)
                /*#__PURE__*/_jsx("div", {}, void 0, props?.children?.map ? React.Children.map(props.children, function (child) {
        if (child !== null) {
          if (typeof child.type === 'function') {
            const cpProps = {
              bgContainerRef: bgContainerRef,
              typeContainerRef: typeContainerRef
            };
            return React.cloneElement(child, cpProps);
          }
          return child;
        }
        return React.createElement('div');
      }) : null)
            </div>;
  };
  return /*#__PURE__*/_jsx("div", {
    className: `${Styles.BannerHello} ${moduleName}_Container ${props.className}`
  }, void 0, <div className={`${Styles.IndexBgContainerAd} ${moduleName}_IndexBgContainerAd ${props?.classes?.IndexBgContainerAd} ${props?.tall ? `${Styles.IndexBgContainerAdTall}` : ''} ${props?.center ? `${Styles.IndexBgContainerCenter}` : ''}`} ref={bgContainerRef}>
                {props.href ? /*#__PURE__*/_jsx(Link, {
      href: `${props.href}`,
      draggable: false
    }, void 0, /*#__PURE__*/_jsx("div", {
      style: {
        backgroundImage: `url(${resolveImage(props?.img ?? null, 'img')})`,
        height: '100%',
        backgroundSize: 'cover',
        borderRadius: '1rem',
        position: 'relative'
      }
    }, void 0, resolveType())) : /*#__PURE__*/_jsx("div", {
      style: {
        backgroundImage: `url(${resolveImage(props?.img ?? null, 'img')})`,
        height: '100%',
        backgroundSize: 'cover',
        borderRadius: '1rem',
        position: 'relative'
      }
    }, void 0, resolveType())}
            </div>);
};
export default Module;