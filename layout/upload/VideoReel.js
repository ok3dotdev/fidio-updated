import React, { useEffect } from 'react';
import apiReq from '/modules/utility/api/apiReq';
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Module = (props) => {
  const [productVideos, setProductVideos] = React.useState([]);
  const router = useRouter();

  useEffect(() => {
    const handleSetVideos = async () => {
      const res2 = await apiReq('/p/getrelationshipchildrenof', {
        // Get all related videos in column a of record b where verb is "related"
        b: router?.query?.id?.[0],
        atype: 'video',
        btype: 'product',
        verb: 'related',
        offset: 0,
        limit: 20,
      });
      if (res2 && res2.status === 'success') {
        console.log('resss', res2);
        setProductVideos(res2.data);
      }
    };
    handleSetVideos();
  }, []);

  const { fetchBusy, useVideos, videosContainerRef, loadVideo } = props;

  return (
    <div
      className={`${WatchPageStyles.externalThumbnailContainer} Thumbnails_ExternalContainer mt-8`}
      style={{ position: 'relative' }}
    >
      {productVideos && <h3 className='font-semibold text-lg'>Videos</h3>}
      {fetchBusy === 'videos' ? (
        <div
          className='fetchBusy'
          style={{ position: 'absolute', background: 'transparent' }}
        ></div>
      ) : null}
      <div
        className={`spinner spinnerBig ${
          fetchBusy === 'videos'
            ? 'opacity1 spinnerRelative'
            : 'opacity0 spinnerHide'
        }`}
        style={{ position: 'absolute', left: '49vw', top: '1rem' }}
      ></div>
      <div
        className={`mx-0 ${WatchPageStyles.thumbnailsContainer} ${
          fetchBusy === 'videos' ? WatchPageStyles.thumbnailsContainerBusy : ''
        } Thumbnails_Container tinyBar`}
        ref={videosContainerRef}
      >
        {productVideos?.map((m, i) => (
          <div
            key={i}
            className={`${WatchPageStyles.thumbnailContainer} flex gap-4 z-20 `}
            onClick={loadVideo}
            item={m?.id}
          >
            {console.log('idddddddd', m?.id)}
            <a
              href={`/w?v=${m.id}`}
              className={`${WatchPageStyles.thumbnail} ${
                ['processing', 'queued'].indexOf(m?.status) > -1
                  ? WatchPageStyles.thumbnailProcessing
                  : ''
              } Thumbnail_Thumbnail`}
              style={{
                background: `url(${
                  props?.cdn?.static && m?.thumbtrack[0]
                    ? `${props.cdn.static}/thumbtrack/${m.thumbtrack[0]}`
                    : 'img/default/greythumb.jpg'
                }) no-repeat center/cover`,
              }}
              onClick={(e) => e.stopPropagation()}
              item={m?.id}
            ></a>
            <div className='m-0 space-y-0 flex flex-col justify-center w-[50%]'>
              <h2 className={`text-dashtext text-sm font-normal`}>Title</h2>
              <h4
                className={`${WatchPageStyles.thumbnailTitle} font-semibold text-[22px]`}
              >
                {m?.title || props?.product?.name}
              </h4>
            </div>
            <div className='m-0 space-y-0 flex flex-col justify-center '>
              <h2 className={`text-dashtext text-xs font-normal`}>Price</h2>
              <h4
                className={`${WatchPageStyles.thumbnailTitle} font-semibold text-lg`}
              >
                {m?.price ?? 'Free'}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module;
