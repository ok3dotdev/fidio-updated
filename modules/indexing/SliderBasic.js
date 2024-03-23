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

  return <div className={`glide_${componentId} ${props.className}`}>
            <div data-glide-el="track" className="glide__track" style={{
      height: props.height ?? '240px'
    }}>
                <ul className="glide__slides" style={{
        height: 'inherit'
      }}>
                    {props.items && props.items.map ? props.items.map((m, i) => <li key={i} className='glide_slide'>
                                    <div className={`${SliderStyles.textContainer} glider_text_container`} style={{
            position: 'absolute'
          }}>
                                        <div className={`${SliderStyles.textOffsetContainer} glider_text_offset_container`}>
                                            <div className={`${SliderStyles.container1} glider_container1`}>
                                                {m.cta ? <h2 className={`${SliderStyles.cta} glider_cta`}>{m.cta}</h2> : null}
                                                {m.heading ? <h5 className={`${SliderStyles.heading} glider_heading`}>{m.heading}</h5> : null}
                                                {m.description ? <h6 className={`${SliderStyles.description} glider_description`}>{m.description}</h6> : null}
                                            </div>
                                            <div className={`${SliderStyles.container2} glider_container2`}>
                                                {m.button ? <a className={`${SliderStyles.button} glider_button`} href={m.buttonLink ?? ''}><button>{m.button}</button></a> : null}
                                                {m.status ? <div className={`${SliderStyles.status} glider_status`} style={{
                  background: 'red'
                }}>{m.status}</div> : null}
                                            </div>
                                        </div>
                                    </div>
                                    <img src={m.img} style={{
            width: m.width ?? 'auto',
            borderRadius: m.borderRadius ?? '1rem'
          }} />
                                </li>) : _div || (_div = <div></div>)}
                </ul>
            </div>
        </div>;
};
export default Module;