var _div, _div2, _div3, _span, _span2, _span3, _span4;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureStyles from './Feature.module.scss';
import { useRouter } from 'next/router';
import { compareObjects, isObjectEmpty } from '../../util';
import { fetchSearchData } from '../../utility/search';
import { v4 as uuidv4 } from 'uuid';
const isOverflown = (clientWidth, clientHeight, scrollWidth, scrollHeight) => {
  console.log(clientWidth, clientHeight, scrollWidth, scrollHeight);
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
const Module = props => {
  let [pageError, setPageError] = React.useState(null);
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [feed, setFeed] = React.useState([]);
  const [combinedFeed, setCombinedFeed] = React.useState([]);
  const [featureData, setFeatureData] = React.useState({});
  const [featureState, setFeatureState] = React.useState({
    size: 'thin'
  });
  const [stagger, setStagger] = React.useState(false);
  const [checkContainerOverflownTime, setCheckContainerOverflownTime] = React.useState(null);
  const [containerOverflownInterval, setContainerOverflownInterval] = React.useState(null);
  const [useOverflown, setUseOverflown] = React.useState(false);
  const [lastFeatureCheck, setLastFeatureCheck] = React.useState(-1);
  const router = useRouter();
  const staggerRef = React.useRef();
  const featureContainerRef = React.useRef();
  if (componentId) {
    props._LocalEventEmitter.unsubscribe(componentId);
    props._LocalEventEmitter.subscribe(componentId, d => {
      if (d && d.dispatch) {
        if (d.dispatch === 'checkContainerOverflown') {
          checkFeatureContainerOverflown();
        }
      }
    });
  }
  React.useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(new Date().getTime());
      if (props.stagger) {
        staggerRef.current = setTimeout(() => {
          setStagger(true);
        }, props.stagger);
      } else {
        setStagger(true);
      }
      const id = uuidv4();
      setComponentId(id);
    }
  }, [componentDidMount, props.stagger]);
  React.useEffect(() => {
    if (componentId && props._LocalEventEmitter && !containerOverflownInterval) {
      const r = setInterval(() => {
        props._LocalEventEmitter.dispatch(componentId, {
          dispatch: 'checkContainerOverflown'
        });
      }, 5000);
      setContainerOverflownInterval(r);
    }
  }, [props._LocalEventEmitter, componentId, containerOverflownInterval]);
  React.useEffect(() => {
    if (stagger) {
      if (props.defaultSize) {
        const temp = {
          ...featureState
        };
        temp.size = props.defaultSize;
        setFeatureState(temp);
      }
    }
  }, [stagger]);
  const cycleFeatureSize = React.useCallback(e => {
    if (featureState) {
      const temp = {
        ...featureState
      };
      if (temp.size === 'thin') {
        temp.size = props.defaultSize !== 'thin' ? props.defaultSize : 'medium';
      } else if (temp.size === 'medium') {
        temp.size = props.defaultSize !== 'medium' ? props.defaultSize : 'thin';
      } else if (temp.size === 'large') {
        temp.size = props.defaultSize !== 'large' ? props.defaultSize : 'thin';
      }
      setFeatureState(temp);
    }
  });
  React.useEffect(() => {
    const f = async () => {
      const selector = props.featureData ? 'featureData' : 'noSelection';
      let useData = isObjectEmpty(featureData) ? props[selector] : featureData;
      console.log(useData);
      if (useData && !fetchBusy) {
        console.log('Use Data!', useData);
        if (lastFeatureCheck < new Date().getTime() - 10000) {
          setLastFeatureCheck(new Date().getTime());
          setFetchBusy(true);
          if (!useData.user && props._loggedIn && props._loggedIn.identifier) {
            const args = {
              identifier: props._loggedIn.identifier,
              hash: props._loggedIn.hash,
              domainKey: props.domainKey,
              params: {
                u: props._loggedIn.identifier,
                s: props.s ?? ''
              }
            };
            const res = await fetchSearchData(props.apiUrl, ['featureData'], args);
            setFetchBusy(false);
            if (res) {
              if (res && res.data && res.data[selector]) {
                setFeatureData(res.data[selector]);
              }
            }
          } else {
            setFetchBusy(false);
            setFeatureData(props[selector]);
          }
        }
      }
    };
    f();
  }, [props.featureData, featureData, feed, fetchBusy, combinedFeed, props._loggedIn, props.domainKey]);
  React.useEffect(() => {
    const f = featureData.data && Array.isArray(featureData.data) ? featureData.data.concat(feed) : [];
    let update = false;
    for (let i = 0; i < combinedFeed.length; i++) {
      if (!compareObjects(combinedFeed, f)) {
        update = true;
        break;
      }
    }
    if (combinedFeed.length === 0 && f.length !== 0) {
      setCombinedFeed(f);
    }
  }, [featureData]);
  const myLoader = ({
    src
  }) => {
    if (src.match(/greythumb/)) {
      return `${src}`;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
      return `${props.cdn.static}/${src}`;
    }
  };
  const checkFeatureContainerOverflown = () => {
    if (!checkContainerOverflownTime || checkContainerOverflownTime && checkContainerOverflownTime < new Date().getTime() - 5000) {
      if (featureContainerRef.current) {
        setCheckContainerOverflownTime(new Date().getTime());
        const clientWidth = featureContainerRef.current.clientWidth;
        const clientHeight = featureContainerRef.current.clientHeight;
        const scrollWidth = featureContainerRef.current.scrollWidth;
        const scrollHeight = featureContainerRef.current.scrollHeight;
        const overflown = isOverflown(clientWidth, clientHeight, scrollWidth, scrollHeight);
        if (overflown) {
          setUseOverflown(overflown);
          return overflown;
        }
      }
      return false;
    }
  };
  return <div className={`${FeatureStyles.featureExternalContainer} ${combinedFeed.length > 0 ? featureState.size === 'thin' ? `FeatureContainerOpen` : featureState.size === 'medium' ? `FeatureContainerOpen ${FeatureStyles.featureContainerOpen} FeatureContainerOpenMedium` : featureState.size === 'large' ? `FeatureContainerOpen ${FeatureStyles.featureContainerOpen} FeatureContainerOpenLarge` : '' : ''} ${props.className}`}>
            {!props.hideToggle && combinedFeed.length > 0 ? <div className={`${FeatureStyles.sizeExpandContainer}`}>
                        <div className={`${FeatureStyles.sizeExpand}`} onClick={cycleFeatureSize}></div>
                    </div> : _div || (_div = <div></div>)}
            {combinedFeed.length > 0 ? <div className={`${FeatureStyles.featureContainer} ${featureState && featureState.size ? featureState.size === 'medium' ? FeatureStyles.featureContainerMedium : featureState.size === 'large' ? FeatureStyles.featureContainerLarge : '' : ''} ${useOverflown ? featureState.size === 'medium' ? 'featureContainerOverflown featureContainerOverflown_medium' : featureState.size === 'large' ? 'featureContainerOverflown featureContainerOverflown_large' : '' : ''}`} ref={featureContainerRef}>
                        <div className={`${FeatureStyles.itemContainer} ${featureState.size === 'thin' ? FeatureStyles.itemContainerThin : ''}`}>
                            {combinedFeed.map((item, i) => <div className={`${FeatureStyles.item} ${featureState.size === 'thin' ? FeatureStyles.itemThin : `Item_ContainerMetaController Item_ContainerMetaControllerFeature`} Item_ContainerMetaControllerFeature_${featureState?.size ?? ''} Feature_Item`} key={i}>
                                        <Link href={`w?v=${item.id}`}>
                                            {item.status === 'live' && featureState.size !== 'thin' ? <div className={`LiveTag ${FeatureStyles.statusContainer}`}>LIVE{_div2 || (_div2 = <div className='RecordingCircle RecordingCircle_Small'></div>)}</div> : ''}
                                            {featureState.size !== 'thin' ? <React.Fragment>
                                                        <Image loader={myLoader} src={item.thumbnail && props.cdn && props.cdn.static ? item.thumbnail : 'img/default/greythumb.jpg'} alt={item.title ? item.title : ""} width={60} height={30} layout="responsive" className='Feature_Img Feature_Img_Border' />
                                                        <div className='Item_GhostMeta Item_GhostMetaFeature'>
                                                            {item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? <div className='Item_TinyMetaText Item_TinyMetaTextFeature' style={{
                  marginBottom: '.25rem',
                  textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
                }}>Stream started {new Date(Number(item.creation)).toTimeString()}</div> : null}
                                                            <div className='Item_GhostMetaContainerInternal'>
                                                                <div>{item.description ? item.description : `Watch Livestream Now`}</div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment> : null}
                                            <div className={`${FeatureStyles.itemMetaContainer} ${featureState.size === 'thin' ? FeatureStyles.thinMetaContainerSize : ''}`}>
                                                <div className={`${FeatureStyles.itemMetaContainerPadding}`}>
                                                    <div className={`${FeatureStyles.itemMetaText}`}>
                                                        {item.status === 'live' && featureState.size === 'thin' ? <div className={`LiveTag ${FeatureStyles.statusContainerInline} LiveTag_Thin }`}>{_div3 || (_div3 = <div className='RecordingCircle RecordingCircle_Small'></div>)}</div> : ''}
                                                        <div className={`flex gap-p2 ${(item.title.length ? item.title.length : `${item.author_username} is Streaming Now`.length) + item.author_username.length > 20 ? 'marquee' : ''} ${featureState.size === 'thin' ? FeatureStyles.thinMeta : ''} ${FeatureStyles.itemMarqueeContainer}`}>
                                                            {(item.title.length ? item.title.length : `${item.author_username} is Streaming Now`.length) + item.author_username.length > 20 ? <div className={`marqueeContainer ${featureState?.size === 'thin' ? `${FeatureStyles.marqueeContainerThin}` : ''}`}>
                                                                    <div className='marquee1'>
                                                                        <div className={`${FeatureStyles.titleText}`}>{item.title ? item.title : `${item.author_username} is Streaming Now`}</div>
                                                                        {_span || (_span = <span> - </span>)}
                                                                        <div className={`${FeatureStyles.authorUser}`}>{item.author_username}</div>
                                                                    </div>
                                                                    <div className='marquee2'>
                                                                        <div className={`${FeatureStyles.titleText}`}>{item.title ? item.title : `${item.author_username} is Streaming Now`}</div>
                                                                        {_span2 || (_span2 = <span> - </span>)}
                                                                        <div className={`${FeatureStyles.authorUser}`}>{item.author_username}</div>
                                                                    </div>
                                                                    <div className='marquee3'>
                                                                        <div className={`${FeatureStyles.titleText}`}>{item.title ? item.title : `${item.author_username} is Streaming Now`}</div>
                                                                        {_span3 || (_span3 = <span> - </span>)}
                                                                        <div className={`${FeatureStyles.authorUser}`}>{item.author_username}</div>
                                                                    </div>
                                                                </div> : <React.Fragment>
                                                                    <div className={`${FeatureStyles.titleText}`}>{item.title ? item.title : `${item.author_username} is Streaming Now`}</div>
                                                                    {_span4 || (_span4 = <span> - </span>)}
                                                                    <div className={`${FeatureStyles.authorUser}`}>{item.author_username}</div>
                                                                </React.Fragment>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>)}
                        </div>
                    </div> : null}
        </div>;
};
export default Module;