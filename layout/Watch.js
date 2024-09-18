import React from 'react';
import { Player, Prompt } from '/modules/streaming/watch';
import { Chat } from '/modules/streaming/chat';
import { CommentInternal } from '/modules/comment';
import { LoadComments } from '/modules/comment/parts';

const Module = (props) => {
  const { WatchPageStyles = {}, watchMeta = {} } = props;

  const {
    videoQuadrant,
    videoExternalContainer,
    videoInternalContainer,
    socialContainer,
  } = WatchPageStyles;

  const { relevantTicket = {} } = watchMeta;

  const { products = [] } = relevantTicket;

  const product = products[0] || {};

  const { name = '', detailmeta = {}, meta = {} } = product;
  const { description = '', lineup = [] } = detailmeta;
  const { host = {} } = meta;
  const headliner = lineup[0] || {};
  const hasDetails = name || description || host?.title || lineup.length > 0;

  return (
    <div id='watch-quad' className={`${videoQuadrant} WatchPage_VideoQuadrant`}>
      <Prompt {...props} />
      <div className={`${videoExternalContainer}`}>
        <div className={`${videoInternalContainer} `}>
          <div className=''>
            <Player {...props} />
          </div>
          <div className='md:pl-4 px-4'>
            <div>
              <div>
                <h3 className='text-3xl lg:text-4xl font-bold my-4'>
                  {name ?? ''}
                </h3>
                {hasDetails && (
                  <div className='bg-dashSides p-4 md:px-8 rounded-sm flex flex-col md:flex-row gap-8'>
                    <div className='md:min-w-[60%]'>
                      {/* <div className='flex text-sm gap-4 mb-4'>
                        <p>
                          <span>2.5k Viewers</span>
                        </p>
                        <p className='text-dashtext text-sm font-normal'>
                          Streaming live 46 mins ago
                        </p>
                      </div> */}
                      {description && <p className='mb-8'>{description}</p>}
                      {host?.title && (
                        <div>
                          <p className='mb-2'>About the host</p>
                          <div className='flex gap-4 flex-wrap'>
                            <div className='text-sm max-w-[70%]'>
                              <p className='font-bold'>{host.title}</p>
                              <p className='text-dashtext'>{host.bio}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className=''>
                      {headliner?.title && (
                        <div>
                          <p className='text-dashtext'>HEADLINER</p>
                          <div className='flex flex-wrap mt-2 gap-4'>
                            <img
                              className='w-16 h-16 rounded-full object-cover'
                              alt='Headliner'
                              src={`${props?.cdn?.static}/${headliner.image}`}
                            />
                            <div className='text-sm max-w-[70%]'>
                              <p>{headliner.title}</p>
                              <p className='text-dashtext text-xs'>
                                Known for his infectious energy and ability to
                                hype up any crowd.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {lineup.length > 1 && (
                        <div>
                          <p className='my-4 text-dashtext'>OTHER PERFORMERS</p>
                          <div className='flex gap-8 flex-wrap'>
                            {lineup.slice(1).map((artist, index) => (
                              <div
                                key={artist?.id ?? index}
                                className='flex flex-col items-center'
                              >
                                <img
                                  className='w-16 h-16 rounded-full object-cover'
                                  alt='Performer'
                                  src={`${props?.cdn?.static}/${artist.image}`}
                                />
                                <p>{artist?.title ?? 'Unknown Artist'}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* {hasDetails && (
            <div className='mt-8'>
              {props?.watchData?.id ? (
                <div
                  className={`${props?.WatchPageStyles?.commentExternalContainer}`}
                >
                  <CommentInternal
                    {...props}
                    addComment={true}
                    commentUseParent={props.watchData.id}
                    commentUseParentType={props?.watchData?.__typename}
                    pipe={'watch_comment'}
                  />
                  <LoadComments
                    {...props}
                    pipe={'watch_comment'}
                    commentUseParent={props.watchData.id}
                    commentUseParentType={props?.watchData?.__typename}
                  />
                </div>
              ) : null}
            </div>
          )} */}
        </div>
        <div className='hidden md:block px-4 md:px-0'>
          <Chat {...props} />
        </div>
      </div>
    </div>
  );
};

export default Module;
