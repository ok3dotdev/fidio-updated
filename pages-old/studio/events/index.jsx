import React, { useEffect, useState, useRef } from 'react';
import Ticket from '@/components/Ticket';
import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';
import StudioLayout from '@/components/Layouts/studio/StudioLayout';

import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Input } from '@/components/ui/input';
import { FiGrid } from 'react-icons/fi';
import { IoIosList } from 'react-icons/io';

const pageName = 'studioEvents';

const Events = (props) => {
  const router = useRouter();
  const { page, term, sort } = router.query;

  const initialPage = parseInt(page) || 0;
  const initialTerm = term || '';
  const initialSort = sort || '';

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialTerm);
  const [sortValue, setSortValue] = useState(initialSort);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [viewMode, setViewMode] = useState('list');
  const [pageSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchTickets(currentPage, searchTerm, sortValue);
  }, [currentPage, sortValue, props?._loggedIn?.identifier]);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const queryParams = {};
    if (currentPage !== initialPage) {
      queryParams.page = currentPage;
    }
    if (searchTerm !== initialTerm) {
      queryParams.term = searchTerm;
    }
    if (sortValue !== initialSort) {
      queryParams.sort = sortValue;
    }

    if (
      queryParams.page !== page ||
      queryParams.term !== term ||
      queryParams.sort !== sort
    ) {
      router.replace(
        { pathname: router.pathname, query: queryParams },
        undefined,
        { shallow: false }
      );
    }
  }, [currentPage, sortValue]);

  const handleSearch = async () => {
    setLoading(true);
    setCurrentPage(0);
    await fetchTickets(0, searchTerm, sortValue);
    setLoading(false);
  };

  const handleSort = async (value) => {
    if (value && value.length) {
      setLoading(true);
      setCurrentPage(0);
      setSortValue(value);
      await fetchTickets(0, searchTerm, value);
      setLoading(false);
    }
  };

  const fetchTickets = async (page = 0, searchTerm = '', sortValue = '') => {
    setLoading(true);

    if (props && props?._loggedIn?.identifier) {
      let meta = {};
      let extraObject = {
        owner: props?._loggedIn?.identifier,
      };

      if (searchTerm) {
        extraObject.name = searchTerm;
      }

      if (sortValue) {
        meta.status = sortValue;
      }

      const res = await apiReq('/m/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: currentPage,
        extra: extraObject,
        meta,
        limit: 10,
        sortField: 'created',
        sort: 'desc',
      });

      if (res && res.products) {
        const sortedTickets = res.products;

        if (searchTerm || sortValue) {
          // console.log('sorted', sortedTickets);
          setTickets(sortedTickets);
        } else {
          setTickets((prevTickets) => [...prevTickets, ...sortedTickets]);
          setHasMore(sortedTickets.length >= pageSize);
        }
      } else {
        setHasMore(false); // No more items available
      }
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <StudioLayout {...props} showNav>
      <div className='font-lexend mt-[2rem]' key={props?.key}>
        <div>
          <h1 className='font-bold text-lg'>Manage your events</h1>
          <p className='text-dashtext text-sm'>
            This is your central hub for all your event creations! Track the
            progress of your workshops, talks, and appearances with ease.
          </p>
        </div>
        <div className='mt-8 flex justify-between p-1 items-center'>
          <div className='  cursor-pointer flex space-x-2'>
            <div
              role='button'
              className={`px-3 py-2 ${
                viewMode === 'list'
                  ? 'bg-black/30 text-white'
                  : 'bg-transparent text-gray-600'
              } rounded-l`}
              onClick={() => setViewMode('list')}
            >
              <IoIosList className='h-7 w-7' />
            </div>
            <div
              role='button'
              className={`px-3 py-2 ${
                viewMode === 'grid'
                  ? 'bg-black/30 text-white'
                  : 'bg-transparent text-gray-600'
              } rounded-r`}
              onClick={() => setViewMode('grid')}
            >
              <FiGrid className='h-7 w-7' />
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <p className='font-lexend'>Sort by:</p>
            <div className='flex gap-2'>
              <Select
                className='font-lexend'
                onValueChange={(e) => {
                  setSort(e);
                  handleSort(e);
                }}
              >
                <SelectTrigger className='w-[180px] dark:bg-dashSides'>
                  <SelectValue
                    className='dark:bg:dashSides'
                    placeholder='Please choose'
                  />
                </SelectTrigger>
                <SelectContent className='bg-dashBg'>
                  <SelectGroup onChange={handleSearch}>
                    <SelectItem value='pending'>Pending</SelectItem>
                    <SelectItem value='approved'>Approved</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className='relative hidden md:block'>
                <form
                  action=''
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  <Input
                    placeholder='Search'
                    className='text-muted-foreground font-lexend'
                    onChange={(e) => setSearchTerm(e?.target?.value)}
                    value={term}
                    onSubmit={handleSearch}
                  />
                </form>
                <SearchOutlinedIcon className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative block md:hidden mt-2'>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <Input
              placeholder='Search'
              className='text-muted-foreground font-lexend'
              onChange={(e) => setTerm(e?.target?.value)}
              value={term}
              onSubmit={handleSearch}
            />
          </form>
          <SearchOutlinedIcon
            className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer'
            onClick={handleSearch}
          />
        </div>

        <div className='my-8 space-y-4'>
          {!loading && tickets.length > 0 && (
            <div
              id='itemContainer'
              className={`my-8 mb-12 ${
                viewMode === 'list'
                  ? 'list-view'
                  : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-4'
              }`}
            >
              {tickets.map((m, index) => (
                <Ticket
                  key={index}
                  info={props}
                  ticketData={m}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
          {loading && (
            <div className='mt-12 space-y-4'>
              <TicketLoadingSkeleton />
              <TicketLoadingSkeleton />
              <TicketLoadingSkeleton />
            </div>
          )}
        </div>
        {/* Pagination Controls */}
        <div className='flex justify-between items-center mt-8'>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className='px-4 py-2 bg-black rounded-md disabled:opacity-50'
          >
            Previous/studio/events/0332b030-105b-4591-8c9a-7aa5f1bf49e9
          </button>
          {!currentPage ? '' : <span>Page {currentPage + 1}</span>}
          <button
            onClick={handleNextPage}
            disabled={!hasMore}
            className='px-4 py-2 bg-black rounded-md disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </StudioLayout>
  );
};

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default Events;
