import React, { useState, useEffect } from 'react';
import { Player, Prompt } from '/modules/streaming/watch';
import { Chat } from '/modules/streaming/chat';
import { CommentInternal } from '/modules/comment';
import { LoadComments } from '/modules/comment/parts';
import { Loader2 } from 'lucide-react';
import Ticket from '@/components/cards/PurchaseTicketCard';
import { fetchTickets } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Module = (props) => {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { WatchPageStyles = {}, watchMeta = {}, watchData = {} } = props;
  useEffect(() => {
    const loadTickets = async () => {
      setLoading(true);
      const tix = await fetchTickets(props?.apiUrl, null);
      if (tix?.length) {
        setTickets(tix);
      }
      setLoading(false);
    };

    loadTickets();
  }, []);

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

  React.useEffect(() => {
    let isFree = false;
    if (props?.watchMeta?.relevantTicket?.products?.map) {
      isFree = props.watchMeta.relevantTicket.products.find((m) =>
        m.styles.find((n) => n.price === 0)
      );
    }
    if (isFree && !props.isAuthorized) {
      props.setEnforceAuth(true);
    }
  }, [props?.watchMeta?.relevantTicket?.products, props?.isAuthorized]);

  const hideButton = props?.watchData?.__typename === 'Video';

  return (
    <div id='watch-quad' className={`${videoQuadrant} WatchPage_VideoQuadrant`}>
      <Prompt {...props} />
      <div className={`${videoExternalContainer}`}>
        <div className={`${videoInternalContainer} `}>
          {props && hasDetails && (
            <div className={hideButton ? 'hideChatBtn' : null}>
              <Player {...props} />
            </div>
          )}
          <div>
            {watchData?.__typename === 'Video' ? (
              <div className='md:pl-4 px-4 mt-8'>
                <div className='flex gap-8 flex-col md:flex-row'>
                  <div className='min-w-[70%]'>
                    <h3 className='text-3xl lg:text-4xl font-bold my-4'>
                      {name ?? ''}
                    </h3>
                    {hasDetails && (
                      <div className=' '>
                        <div className='md:min-w-[60%]'>
                          {description && (
                            <p className='mb-8 text-dashtext xl:max-w-[70%]'>
                              {description}
                            </p>
                          )}
                        </div>
                        <div className=''>
                          <p className='mb-8'>Performers</p>
                          {headliner?.title && (
                            <div>
                              <p className='text-dashtext text-sm'>HEADLINER</p>
                              <div className='flex flex-wrap mt-2 gap-4 items-center'>
                                <img
                                  className='w-[130px] h-[130px] rounded-full object-cover'
                                  alt='Headliner'
                                  src={`${props?.cdn?.static}/${headliner.image}`}
                                />
                                <div className='text-sm max-w-[70%]'>
                                  <p>{headliner.title}</p>
                                  <p className='text-dashtext text-xs'>
                                    Known for his infectious energy and ability
                                    to hype up any crowd.
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                          {lineup.length > 1 && (
                            <div className='mt-12'>
                              <p className='my-4 text-dashtext text-sm'>
                                OTHER PERFORMERS
                              </p>
                              <div className='flex gap-8 flex-wrap'>
                                {lineup.slice(1).map((artist, index) => (
                                  <div
                                    key={artist?.id ?? index}
                                    className='flex flex-col items-center'
                                  >
                                    <img
                                      className='w-[130px] h-[130px] rounded-full object-cover'
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
                        {host?.title && (
                          <div className='mt-8'>
                            <p className='mb-2 font-semibold'>About the host</p>
                            <div className='flex gap-4 flex-wrap bg-dashSides p-[15px] xl:max-w-[70%] rounded-sm'>
                              <div className='text-sm max-w-[70%]'>
                                <p className='font-bold'>{host.title}</p>
                                <p className='text-dashtext text-xs text mt-2'>
                                  {host.bio}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {hasDetails && (
                    <div className='w-full comments-section'>
                      <p className='mb-4'>Comments</p>
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
                  )}
                </div>
                <div className='mt-8'>
                  {loading && (
                    <div className='h-[500px] w-full flex items-center justify-center'>
                      <Loader2 className='h-6 w-6 text-slate-300 animate-spin' />
                    </div>
                  )}
                  {!loading && tickets.length > 0 && (
                    <div className='w-full gap-4 md:gap-12 overflow-hidden mb-12 min-h-[250px] flex-col md:flex-row items-start '>
                      <h3 className='text-2xl font-semibold mb-12 mt-8'>
                        Upcoming Events
                      </h3>
                      <Carousel
                        opts={{
                          align: 'start',
                        }}
                        arrows='top'
                        className='w-full'
                      >
                        <div className='w-full flex justify-between'>
                          <div className='md:invisible'>
                            <h3> Upcoming Events</h3>
                          </div>
                          <div className='z-50 relative flex justify-end gap-2 mb-4'>
                            <CarouselPrevious arrows='top' className='z-24' />
                            <CarouselNext arrows='top' className='z-24' />
                          </div>
                        </div>
                        <CarouselContent className='z-2 cursor-pointer'>
                          {tickets.map((ticket, id) => (
                            <CarouselItem
                              key={id}
                              className='2xl:basis-1/4 md:basis-1/3 rounded-lg lg:basis-1/3 aspect-square '
                            >
                              <div className='p-1 cursor-pointer'>
                                <Ticket
                                  key={id}
                                  ticket={ticket}
                                  cdn={props.cdn}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              watchData?.__typename === 'Live' && (
                <div className='md:pl-4 px-4 mt-8'>
                  <div className='flex gap-8'>
                    <div className='w-full'>
                      <h3 className='text-3xl lg:text-4xl font-bold my-4'>
                        {name ?? ''}
                      </h3>
                      {hasDetails && (
                        <div className='bg-dashSides p-4 md:px-8 rounded-sm flex flex-col md:flex-row gap-8'>
                          <div className='md:min-w-[60%]'>
                            {description && (
                              <p className='mb-8'>{description}</p>
                            )}
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
                                      Known for his infectious energy and
                                      ability to hype up any crowd.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                            {lineup.length > 1 && (
                              <div>
                                <p className='my-4 text-dashtext'>
                                  OTHER PERFORMERS
                                </p>
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
              )
            )}
          </div>
        </div>
        <div className='hidden md:block px-4 md:px-0'>
          <Chat {...props} />
        </div>
      </div>
    </div>
  );
};

export default Module;
