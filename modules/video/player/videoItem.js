var _div, _div2;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VideoItemStyles from './videoItem.module.scss';
const VideoItem = props => {
  let {
    item,
    index,
    setActive,
    unsetActiveItem,
    activeItem,
    previousActiveItemData,
    allowEditingFlag,
    ...rest
  } = props;
  let videoItemImageRef = React.useRef();
  const myLoader = ({
    src
  }) => {
    if (src.match(/greythumb/)) {
      return `${src}`;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
      return `${props.cdn.static}/${src}`;
    }
  };
  React.useEffect(() => {
    const setActiveCall = e => {
      setActive(e, index, item, previousActiveItemData);
    };
    const unsetActiveItemCall = () => {
      unsetActiveItem(index);
    };
    if (typeof index == "number" && videoItemImageRef && videoItemImageRef.current && item) {
      videoItemImageRef.current.addEventListener('mouseenter', setActiveCall);
      videoItemImageRef.current.addEventListener('mouseleave', unsetActiveItemCall);
    }
    return () => {
      if (videoItemImageRef && videoItemImageRef.current && item) {
        videoItemImageRef.current.removeEventListener('mouseenter', setActiveCall);
        videoItemImageRef.current.removeEventListener('mouseleave', unsetActiveItemCall);
      }
    };
  }, [index, videoItemImageRef, item, activeItem, previousActiveItemData]);
  console.log(item, props);
  return <div className={`${VideoItemStyles.leadContainer} Item_GhostMetaItemContainer`} key={index}>
            <div className={activeItem == index ? `${VideoItemStyles.container} activeVideoItemContainer` : `${VideoItemStyles.container}`} ref={videoItemImageRef}>
                <Link href={`w?v=${item.id}`} style={{
        display: 'grid'
      }}>
                    <div className={activeItem == index ? `${VideoItemStyles.ghostVideoContainer} ${VideoItemStyles.ghostVideoContainerActive} ghostVideoContainerItem ghostVideoContainerItemActive` : `${VideoItemStyles.ghostVideoContainer} ghostVideoContainerItem`}>
                        {_div || (_div = <div className={`ghostVideoItem`}></div>)}
                        <div className={`ghostVideoMeta`}>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={`w?v=${item.id}`} style={{
        display: 'grid'
      }}>
                    {item && item.__typename == 'Live' && item.status == 'live' ? <div className='LiveTag' style={{
          borderRadius: '.25rem'
        }}>LIVE{_div2 || (_div2 = <div className='RecordingCircle RecordingCircle_Small'></div>)}</div> : null}
                    <div className='Item_GhostMetaContainer'>
                        {item && item.__typename == 'Live' ? <div className='Item_GhostMeta'>
                                    {item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? <div className='Item_TinyMetaText' style={{
              marginBottom: '.25rem',
              textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
            }}>Stream started {new Date(Number(item.creation)).toTimeString()}</div> : null}
                                    <div className='Item_GhostMetaContainerInternal'>
                                        <div>{item.description ? item.description : `Watch Livestream Now`}</div>
                                    </div>
                                </div> : null}
                    </div>
                    <Image loader={myLoader} src={item.gif && props.cdn && props.cdn.static ? item.gif : item.thumbnail && props.cdn && props.cdn.static ? item.thumbnail : 'img/default/greythumb.jpg'} alt={item.title ? item.title : ""} width={320} height={180} layout="responsive" />
                </Link>
            </div>
            <div className={`${VideoItemStyles.metaContainer}`}>
                <div>{item && item.title ? item.title : null}</div>
                
            </div>
        </div>;
};
export default VideoItem;