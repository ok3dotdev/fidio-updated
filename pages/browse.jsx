import React, { useState, useEffect } from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { fetchTickets, groupByDate, getDisplayDate } from '@/lib/utils';
import BrowseLayout from '../components/Layouts/browse/BrowseLayout';
import apiReq from '/modules/utility/api/apiReq';
import Ticket from '@/components/cards/PurchaseTicketCard';
import { Loader2 } from 'lucide-react';
import LiveEventCard from '@/components/cards/LiveEventCard';
import PastEventCard from '@/components/cards/PastEventCards';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Half1Icon } from '@radix-ui/react-icons';

const pageName = 'browse';

const Page = (props) => {
  const [tickets, setTickets] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [liveEvents, setLiveEvents] = useState([]);
  const [sortedDates, setSortedDates] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const loadLiveEvents = async () => {
      const res = await apiReq('/p/getfeaturedstreams', {
        identifier: props._loggedIn.identifier,
        hash: props._loggedIn.hash,
        search: '',
        limit: 20,
      });
      if (res && res.status === 'success') {
        setLiveEvents(res?.data?.currentLive?.data);
      }
    };
    loadLiveEvents();
  }, []);

  useEffect(() => {
    const loadTickets = async (pageNumber) => {
      setLoading(true);
      const tix = await fetchTickets(props?.apiUrl, null, pageNumber);
      if (tix.length === 0) {
        setHasMore(false);
      } else {
        const groupedTicketsByDate = groupByDate(tix);
        setTickets((prevTickets) => ({
          ...prevTickets,
          ...groupedTicketsByDate,
        }));
      }
      setLoading(false);
    };

    loadTickets(page);
  }, [props?.apiUrl, page]);

  useEffect(() => {
    const loadVideos = async () => {
      const today = new Date();
      const res = await apiReq('/p/getrecordsandrelationshipchildren', {
        record: 'video',
        rel: { btype: 'product', verb: 'authorize' },
        offset: 0,
        limit: 20,
        orderBy: 'creation',
        orderDir: 'desc',
        lt: {
          creation: today.toISOString(), // Use today's date in ISO format
        },
        // where: { author: 'id '} // optional
      });
      if (res && res.data) {
        console.log('setting videos', res.data);
        setPastEvents(res.data);
        // setLoading(false);
      }
    };

    loadVideos();
  }, []);

  useEffect(() => {
    const dates = Object.keys(tickets).filter(
      (date) => tickets[date]?.length > 0
    );
    setSortedDates(dates);
    console.log('sorted', sortedDates);
  }, [tickets]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  console.log('Tickets', tickets);

  return (
    <div className='w-full h-screen'>
      <BrowseLayout {...props}>
        {liveEvents && liveEvents?.length > 0 && (
          <div className='mb-12'>
            <h3 className='text-2xl font-semibold mb-8'>Live Events</h3>
            <Carousel
              opts={{
                align: 'start',
              }}
              arrows='top'
              className='w-full'
            >
              <CarouselContent className='z-2 cursor-pointer'>
                {liveEvents.map((live, id) => (
                  <CarouselItem
                    key={id}
                    className='2xl:basis-1/4 md:basis-2/3 rounded-lg lg:basis-1/3 aspect-square '
                  >
                    <div className='p-1 cursor-pointer'>
                      <LiveEventCard live={live} cdn={props?.cdn} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
        <div>
          {loading && (
            <div className='h-[500px] w-full flex items-center justify-center'>
              <Loader2 className='h-6 w-6 text-slate-300 animate-spin' />
            </div>
          )}
          {!loading && tickets.length > 0 && (
            <h3 className='text-2xl font-semibold mb-12'>Upcoming</h3>
          )}
          {!loading &&
            tickets &&
            sortedDates.map((date, i) => (
              <div
                key={i}
                className='flex w-full gap-4 md:gap-12 overflow-hidden mb-12 min-h-[250px] flex-col md:flex-row items-start '
              >
                <div className='hidden md:block'>
                  <DateComponent date={date} />
                </div>
                <Carousel
                  opts={{
                    align: 'start',
                  }}
                  arrows='top'
                  className='w-full'
                >
                  <div className='w-full flex justify-between'>
                    <div className='md:invisible'>
                      <DateComponent date={date} />
                    </div>
                    <div className='z-50 relative flex justify-end gap-2 mb-4'>
                      <CarouselPrevious arrows='top' className='z-24' />
                      <CarouselNext arrows='top' className='z-24' />
                    </div>
                  </div>
                  <CarouselContent className='z-2 cursor-pointer'>
                    {tickets[date]?.map((ticket, id) => (
                      <CarouselItem
                        key={id}
                        className='2xl:basis-1/4 md:basis-2/3 rounded-lg lg:basis-1/3 aspect-square '
                      >
                        <div className='p-1 cursor-pointer'>
                          <Ticket key={id} ticket={ticket} cdn={props.cdn} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            ))}
          {!loading && hasMore && (
            <div className='flex justify-center'>
              <button
                onClick={handleLoadMore}
                className='px-4 py-2 bg-black text-white rounded'
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {pastEvents &&
          pastEvents.filter((video) => video?.relationships[0]).length > 0 && (
            <div className='mb-12 mt-8'>
              <div className='flex justify-between mb-4'>
                <h3 className='text-2xl font-semibold'>Past Events</h3>
              </div>
              <Carousel
                opts={{
                  align: 'start',
                }}
                arrows='top'
                className='w-full'
              >
                <CarouselContent className='z-2 cursor-pointer'>
                  {pastEvents
                    .filter((video) => video?.relationships[0])
                    .map((video, id) => (
                      <CarouselItem
                        key={id}
                        className='2xl:basis-1/5 md:basis-1/3 rounded-lg lg:basis-1/4 aspect-square '
                      >
                        <div className='p-1 cursor-pointer'>
                          <PastEventCard
                            video={video}
                            product={video.relationships[0]}
                            cdn={props?.cdn}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          )}
      </BrowseLayout>
    </div>
  );
};

const DateComponent = ({ date }) => {
  const { month, weekday, day } = getDisplayDate(date);

  return (
    <div className='flex flex-row md:flex-col justify-center items-center gap-y-0 gap-x-2'>
      <p className='text-xs text-dashtext'>{weekday}</p>
      <p className='text-2xl font-bold'>{day}</p>
      <p className='text-xs text-dashtext'>{month}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default Page;
