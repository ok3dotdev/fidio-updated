import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Input } from '@/components/ui/input';
import Ticket from '../../Ticket';

const StudioDash = (props) => {
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
  const [pageSize] = useState(10); // Define a fixed page size
  const [hasMore, setHasMore] = useState(true); // Flag to indicate if more items are available

  const { username } = props?._loggedIn;
  const capitalizedUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : '';

  useEffect(() => {
    fetchTickets(currentPage, searchTerm, sortValue);
  }, [currentPage, searchTerm, sortValue, props?._loggedIn?.identifier]);

  useEffect(() => {
    let queryParams = {};

    if (currentPage) {
      queryParams.page = currentPage;
    }
    if (searchTerm) {
      queryParams.term = searchTerm;
    }
    if (sortValue) {
      queryParams.sort = sortValue;
    }
    // const queryParams = {
    //   page: currentPage,
    //   term: searchTerm,
    //   sort: sortValue,
    // };
    router.replace(
      { pathname: router.pathname, query: queryParams },
      undefined,
      { shallow: true }
    );
  }, [currentPage, searchTerm, sortValue, router]);

  const handleSearch = async () => {
    setLoading(true);
    setCurrentPage(0); // Reset to first page on search
    await fetchTickets(0, searchTerm, sortValue);
    setLoading(false);
  };

  const handleSort = async (value) => {
    if (value && value.length) {
      setLoading(true);
      setCurrentPage(0); // Reset to first page on sort
      setSortValue(value);
      await fetchTickets(0, searchTerm, value);
      setLoading(false);
    }
  };

  const fetchTickets = async (page = 0, searchTerm = '', status = '') => {
    setLoading(true);

    if (props && props?._loggedIn?.identifier) {
      let extraObject = {
        owner: props?._loggedIn?.identifier,
      };

      if (searchTerm) {
        extraObject.name = searchTerm;
      }
      // if (!extraObject.meta) {
      //   extraObject.meta = {};
      // }

      if (status) {
        extraObject.meta.status = status;
      }

      const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: currentPage,
        extra: extraObject,
        limit: 10,
      });

      if (res && res.products) {
        const sortedTickets = res.products.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateB - dateA;
        });

        // Append new tickets to the existing list
        setTickets((prevTickets) => [...prevTickets, ...sortedTickets]);

        // Set hasMore flag to false if no more items are returned
        setHasMore(sortedTickets.length >= pageSize);
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
    <div className='mt-[2rem] mb-12'>
      <div className='mb-[2rem] md:mb-2 grid xl:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-2'>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>$2,500.00</p>
          </CardContent>
        </Card>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Events Hosted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>50</p>
          </CardContent>
        </Card>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Tickets sold
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>131</p>
          </CardContent>
        </Card>
        <Card className='rounded-[8px] font-lexend font-normal text-dashtext dark:bg-dashSides'>
          <CardHeader>
            <CardTitle className='font-lexend font-normal text-dashtext'>
              Total streamers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='font-lexend text-3xl font-bold'>300K</p>
          </CardContent>
        </Card>
      </div>
      <div className='grid xl:grid-cols-2 gap-2'>
        <div className='dark:bg-dashSides h-[200px] md:h-[300px] p-4 font-lexend rounded-[8px]'>
          Revenue growth
        </div>
        <div className='dark:bg-dashSides h-[200px] md:h-[300px] p-4 font-lexend rounded-[8px] '>
          Audience growth
        </div>
      </div>
      <div className='mt-8 flex justify-between p-1 items-center'>
        <h3 className='font-lexend font-medium'>YOUR EVENTS</h3>
        <div className='flex items-center gap-2'>
          <p className='font-lexend'>Sort by:</p>
          <div className='flex gap-2'>
            <Select
              className='font-lexend'
              onValueChange={(e) => {
                setSortValue(e);
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
                  value={searchTerm}
                  onSubmit={handleSearch}
                />
              </form>
              <SearchOutlinedIcon
                className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer'
                onClick={handleSearch}
              />
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
            onChange={(e) => setSearchTerm(e?.target?.value)}
            value={searchTerm}
            onSubmit={handleSearch}
          />
        </form>
        <SearchOutlinedIcon
          className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer'
          onClick={handleSearch}
        />
      </div>
      {!loading && tickets.length > 0 ? (
        <div className='my-8 space-y-2 mb-12'>
          {tickets.map((m, index) => (
            <Ticket info={props} ticketData={m} key={index} viewMode={'list'} />
          ))}
        </div>
      ) : (
        !loading && (
          <div className='my-8 space-y-2 mb-12'>
            <h3>Sorry, No results match...</h3>
          </div>
        )
      )}
      {loading && (
        <div className='mt-12 space-y-4'>
          <TicketLoadingSkeleton />
          <TicketLoadingSkeleton />
          <TicketLoadingSkeleton />
        </div>
      )}

      {/* Pagination Controls */}
      <div className='flex justify-between items-center mt-8'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className='px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50'
        >
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button
          onClick={handleNextPage}
          disabled={!hasMore}
          className='px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudioDash;
