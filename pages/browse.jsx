import React, { useState, useEffect } from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { fetchTickets, groupByDate, getDisplayDate } from '@/lib/utils';
import BrowseLayout from '../components/Layouts/browse/BrowseLayout';
import Ticket from '@/components/cards/PurchaseTicketCard';
import { Loader2 } from 'lucide-react';
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
  const [sortedDates, setSortedDates] = useState([]);

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
    const dates = Object.keys(tickets).filter(
      (date) => tickets[date]?.length > 0
    );
    setSortedDates(dates);
    console.log('sorted', sortedDates);
  }, [tickets]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='w-full h-screen'>
      <BrowseLayout {...props}>
        <div>
          <h3 className='text-2xl font-semibold mb-12'>Upcoming</h3>
          {loading && (
            <div className='h-[500px] w-full flex items-center justify-center'>
              <Loader2 className='h-6 w-6 text-slate-300 animate-spin' />
            </div>
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
