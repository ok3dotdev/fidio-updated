import React, { useEffect, useState } from 'react';
import Ticket from '@/components/Ticket';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Link from 'next/link';
import { cn, statusColors, getButtonsForStep } from '@/lib/utils';
import SearchBar from '@/components/inputs/SearchBar';
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

const pageName = 'Events';

const Events = (props) => {
  const [step, setStep] = useState('draft');
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState('');
  const [sort, setSort] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    setLoading(true);
    await fetchTickets(term);
    setTerm('');
  };

  const handleSort = async (value) => {
    //console.log('doing', value);
    if (value && value.length) {
      setLoading(true);
      await fetchTickets(null, value);
      setSort('');
    }
  };

  const fetchTickets = async (SearchTerm, status) => {
    setLoading(true);

    if (props && props?._loggedIn?.identifier) {
      let extraObject = {
        owner: props?._loggedIn?.identifier,
      };

      if (SearchTerm) {
        extraObject.name = SearchTerm;
      }
      if (!extraObject.meta) {
        extraObject.meta = {};
      }

      if (status) {
        extraObject.meta.status = status;
      }

      const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0,
        extra: extraObject,
      });
      if (res && res.products) {
        const tix = res.products.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateB - dateA;
        });
        setTickets(tix || []);
        if (tickets) {
          //console.log('tix', tickets);
          setLoading(false);
        }
      }
    }
  };
  useEffect(() => {
    fetchTickets();
  }, [props?._loggedIn?.identifier]);

  const handleStepChange = async (newStep) => {
    if (newStep !== step) {
      // setLoading(true);
      setStep(newStep);
    }
  };

  const handleView = (id) => {
    router.push(`/studio/events/${id}`);
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
          <h3 className='font-lexend font-medium'>YOUR EVENTS</h3>
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
                    onChange={(e) => setTerm(e?.target?.value)}
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
            <div className='my-8 space-y-4 mb-12'>
              {tickets.map((m, index) => (
                <Ticket key={index} info={props} ticketData={m} />
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
