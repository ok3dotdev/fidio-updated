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
  return <div>
			<div className={`${presentationStyles.IndexHelloContainer} glide_${componentId} ${moduleName}_IndexHelloContainer ${props.className}`} style={props?.style}>
				{props.groupLabel ? <div className={`${presentationStyles.GroupLabelContainer} ${Styles.GroupLabelContainer} ${moduleName}_groupLabelContainer ${props.groupLabelContainerClassName}`} style={{
        maxWidth: props?.sliderMaxWidth ?? '1800px'
      }}>
							<div className={`${presentationStyles.GroupLabel} ${Styles.GroupLabel} ${moduleName}_groupLabel ${props.groupLabelClassName}`}>{props.groupLabel}</div>
						</div> : null}
				<div style={{
        marginTop: "2rem",
        maxWidth: props?.sliderMaxWidth ?? '1800px'
      }} data-glide-el="track" className={`${presentationStyles.GlideTrack} glide__track`}>
					<div className={`${moduleName}_IndexItemsContainer ${props.IndexItemsContainerClassName}`}>
						{useItems?.items?.map((content, i) => {
            const useSettings = resolveSettingsConfig(content.length);
            return <Slider {...useSettings}>
											{content?.map ? content.map((row, k) => <div style={{
                margin: '1rem'
              }}>
																<div className={`${props.tall ? `${presentationStyles.IndexItemsUpperContainerTall}` : null} ${moduleName}_Container ${row?.className}`} key={k} style={{
                  margin: '1rem'
                }}>
																	<div className={`${Styles.bgContainer} ${props.tall ? `${Styles.BgContainerTall}` : null} ${moduleName}_BgContainer ${props.bgClassName}`} style={{
                    background: row?.img ? `url(${row?.img})` : row?.bg ?? null,
                    backgroundSize: 'cover !important',
                    backgroundPosition: 'center',
                    height: props?.itemHeight ?? '22rem'
                  }}>
																		
																		{row?.upperText ? <div className={`${Styles.upperText} MarketingSlider_UpperText`}>
																					{row.upperText}
																				</div> : null}
																		{row?.lead ? <div className={`${Styles.lead} MarketingSlider_Lead`}>
																					{row.lead}
																				</div> : null}
																		{row?.text ? <div className={`${Styles.text} MarketingSlider_Text`}>
																					{row.text}
																				</div> : null}
																		{row.linkText ? <Link href={row.link}>
																					{row.linkText}
																				</Link> : null}
																		{row?.children?.map ? React.Children.map(row.children, function (child) {
                      if (child !== null) {
                        if (typeof child.type === 'function') {
                          return React.cloneElement(child, props);
                        }
                        return child;
                      }
                      return React.createElement('div');
                    }) : null}
																	</div>
																	<div>
																		<div className={`${presentationStyles.MetaContainer} ${moduleName}_MetaContainer ${props.metaContainerClassName}`}>
																			
																		</div>
																	</div>
																</div>
															</div>) : null}
										</Slider>;
          })}
					</div>
				</div>
			</div>
		</div>;
};
export default Module;