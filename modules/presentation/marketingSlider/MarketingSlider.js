var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Styles from './MarketingSlider.module.scss';
import Slider from 'react-slick';
import presentationStyles from "../Presentation.module.scss";
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
const moduleName = 'MarketingSlider';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const useItems = props?.data?.items?.map ? props.data : [];
  const resolveSettingsConfig = length => {
    return {
      infinite: false,
      speed: 500,
      swipeToSlide: true,
      arrows: false,
      // variableWidth: true,
      responsive: props?.responsive ?? [{
        breakpoint: 4000,
        settings: {
          slidesToShow: length < 6 ? length : 6,
          touchThreshold: 120
        }
      }, {
        breakpoint: 1920,
        settings: {
          slidesToShow: length < 5 ? length : 5,
          touchThreshold: 100
        }
      }, {
        breakpoint: 1680,
        settings: {
          slidesToShow: length < 4 ? length : 4,
          touchThreshold: 80
        }
      }, {
        breakpoint: 1280,
        settings: {
          slidesToShow: length < 3 ? length : 3,
          touchThreshold: 60
        }
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: length < 2 ? length : 2,
          touchThreshold: 40
        }
      }, {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          touchThreshold: 20
        }
      }]
    };
  };
  return /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${presentationStyles.IndexHelloContainer} glide_${componentId} ${moduleName}_IndexHelloContainer ${props.className}`,
    style: props?.style
  }, void 0, props.groupLabel ? /*#__PURE__*/_jsx("div", {
    className: `${presentationStyles.GroupLabelContainer} ${Styles.GroupLabelContainer} ${moduleName}_groupLabelContainer ${props.groupLabelContainerClassName}`,
    style: {
      maxWidth: props?.sliderMaxWidth ?? '1800px'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${presentationStyles.GroupLabel} ${Styles.GroupLabel} ${moduleName}_groupLabel ${props.groupLabelClassName}`
  }, void 0, props.groupLabel)) : null, /*#__PURE__*/_jsx("div", {
    style: {
      marginTop: "2rem",
      maxWidth: props?.sliderMaxWidth ?? '1800px'
    },
    "data-glide-el": "track",
    className: `${presentationStyles.GlideTrack} glide__track`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${moduleName}_IndexItemsContainer ${props.IndexItemsContainerClassName}`
  }, void 0, useItems?.items?.map((content, i) => {
    const useSettings = resolveSettingsConfig(content.length);
    return <Slider {...useSettings}>
											{content?.map ? content.map((row, k) => /*#__PURE__*/_jsx("div", {
        style: {
          margin: '1rem'
        }
      }, void 0, /*#__PURE__*/_jsx("div", {
        className: `${props.tall ? `${presentationStyles.IndexItemsUpperContainerTall}` : null} ${moduleName}_Container ${row?.className}`,
        style: {
          margin: '1rem'
        }
      }, k, /*#__PURE__*/_jsx("div", {
        className: `${Styles.bgContainer} ${props.tall ? `${Styles.BgContainerTall}` : null} ${moduleName}_BgContainer ${props.bgClassName}`,
        style: {
          background: row?.img ? `url(${row?.img})` : row?.bg ?? null,
          backgroundSize: 'cover !important',
          backgroundPosition: 'center',
          height: props?.itemHeight ?? '22rem'
        }
      }, void 0, row?.upperText ? /*#__PURE__*/_jsx("div", {
        className: `${Styles.upperText} MarketingSlider_UpperText`
      }, void 0, row.upperText) : null, row?.lead ? /*#__PURE__*/_jsx("div", {
        className: `${Styles.lead} MarketingSlider_Lead`
      }, void 0, row.lead) : null, row?.text ? /*#__PURE__*/_jsx("div", {
        className: `${Styles.text} MarketingSlider_Text`
      }, void 0, row.text) : null, row.linkText ? /*#__PURE__*/_jsx(Link, {
        href: row.link
      }, void 0, row.linkText) : null, row?.children?.map ? React.Children.map(row.children, function (child) {
        if (child !== null) {
          if (typeof child.type === 'function') {
            return React.cloneElement(child, props);
          }
          return child;
        }
        return React.createElement('div');
      }) : null), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
        className: `${presentationStyles.MetaContainer} ${moduleName}_MetaContainer ${props.metaContainerClassName}`
      }))))) : null}
										</Slider>;
  })))));
};
export default Module;