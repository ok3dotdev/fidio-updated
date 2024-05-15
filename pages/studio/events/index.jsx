import React, { useEffect, useState } from 'react';
import Ticket from '@/components/Ticket';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Link from 'next/link';
import { cn, statusColors, getButtonsForStep } from '@/lib/utils';
import SearchBar from '@/components/inputs/SearchBar';
import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';
import StudioLayout from '@/components/Layouts/StudioLayout';

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
import { FiGrid } from "react-icons/fi"
import { IoIosList } from "react-icons/io";

const pageName = 'Events';

const Events = (props) => {
  const [step, setStep] = useState('draft');
  // const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState('');
  const [sort, setSort] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const router = useRouter();
  const tickets = [
    {
      __typename: 'Product',
      id: '9559cbd8-067e-4e17-a2a9-3129261984b3',
      shop: 'c47b5f17-a255-4af9-8661-b737d6cae06b',
      name: '',
      owner: '6a2c98e3-d708-40d5-92b4-3b47404dd2f2',
      detailmeta: {
        productType: 'virtual',
        livestream: true,
        lineup: [],
        ticket: true,
        description: 'a time to party',
      },
      styles: [
        {
          price: '20',
          currency: 'USD',
          priceTable: {},
          sid: '2feb91e8-44a1-46d4-9f77-3fb1e82f568d',
          style: '',
          option: [
            {
              sid: 'ac433b5c-baf0-4792-8255-4f30b106dabe',
              quantity: 100,
            },
          ],
          quantity: '200',
        },
      ],
      shipping: [],
      published: true,
      created: '2024-03-18 00:43:50.403 +00:00',
      publish: '2024-03-18 00:43:50.305 +00:00',
      images: [],
      protype: {
        type: 'virtual',
        subscription: false,
      },
      infinite: false,
      meta: {
        title: 'A test product',
        startTime: '20:42',
        endTime: '22:42',
        venue: 'scotia',
        discount: {
          amount: '50',
          startDate: '',
          endDate: '',
        },
        banner: {},
        date: '2024-03-17T04:00:00.000Z',
        headliner: {
          name: 'asake ',
          bio: 'a dope artist',
          image: {},
        },
        detailmeta: {
          lineup: [
            {
              name: 'wizzy',
              image: {},
              id: '188503b0-c697-40dd-a646-eaef36a040ee',
            },
            {
              name: 'ade',
              image: {},
              id: 'd0fc374a-67f8-4058-a4ca-e73f03bfde8c',
            },
          ],
        },
        merch: 'https://shopifysite.com',
      },
      files: {},
    },
    {
      __typename: 'Product',
      id: '9559cbd8-067e-4e17-a2a9-3129261984b3',
      shop: 'c47b5f17-a255-4af9-8661-b737d6cae06b',
      name: '',
      owner: '6a2c98e3-d708-40d5-92b4-3b47404dd2f2',
      detailmeta: {
        productType: 'virtual',
        livestream: true,
        lineup: [],
        ticket: true,
        description: 'a time to party',
      },
      styles: [
        {
          price: '20',
          currency: 'USD',
          priceTable: {},
          sid: '2feb91e8-44a1-46d4-9f77-3fb1e82f568d',
          style: '',
          option: [
            {
              sid: 'ac433b5c-baf0-4792-8255-4f30b106dabe',
              quantity: 100,
            },
          ],
          quantity: '200',
        },
      ],
      shipping: [],
      published: true,
      created: '2024-03-18 00:43:50.403 +00:00',
      publish: '2024-03-18 00:43:50.305 +00:00',
      images: [],
      protype: {
        type: 'virtual',
        subscription: false,
      },
      infinite: false,
      meta: {
        title: 'A test product',
        startTime: '20:42',
        endTime: '22:42',
        venue: 'scotia',
        discount: {
          amount: '50',
          startDate: '',
          endDate: '',
        },
        banner: {},
        date: '2024-03-17T04:00:00.000Z',
        headliner: {
          name: 'asake ',
          bio: 'a dope artist',
          image: {},
        },
        detailmeta: {
          lineup: [
            {
              name: 'wizzy',
              image: {},
              id: '188503b0-c697-40dd-a646-eaef36a040ee',
            },
            {
              name: 'ade',
              image: {},
              id: 'd0fc374a-67f8-4058-a4ca-e73f03bfde8c',
            },
          ],
        },
        merch: 'https://shopifysite.com',
      },
      files: {},
    },
    {
      __typename: 'Product',
      id: '9559cbd8-067e-4e17-a2a9-3129261984b3',
      shop: 'c47b5f17-a255-4af9-8661-b737d6cae06b',
      name: '',
      owner: '6a2c98e3-d708-40d5-92b4-3b47404dd2f2',
      detailmeta: {
        productType: 'virtual',
        livestream: true,
        lineup: [],
        ticket: true,
        description: 'a time to party',
      },
      styles: [
        {
          price: '20',
          currency: 'USD',
          priceTable: {},
          sid: '2feb91e8-44a1-46d4-9f77-3fb1e82f568d',
          style: '',
          option: [
            {
              sid: 'ac433b5c-baf0-4792-8255-4f30b106dabe',
              quantity: 100,
            },
          ],
          quantity: '200',
        },
      ],
      shipping: [],
      published: true,
      created: '2024-03-18 00:43:50.403 +00:00',
      publish: '2024-03-18 00:43:50.305 +00:00',
      images: [],
      protype: {
        type: 'virtual',
        subscription: false,
      },
      infinite: false,
      meta: {
        title: 'A test product',
        startTime: '20:42',
        endTime: '22:42',
        venue: 'scotia',
        discount: {
          amount: '50',
          startDate: '',
          endDate: '',
        },
        banner: {},
        date: '2024-03-17T04:00:00.000Z',
        headliner: {
          name: 'asake ',
          bio: 'a dope artist',
          image: {},
        },
        detailmeta: {
          lineup: [
            {
              name: 'wizzy',
              image: {},
              id: '188503b0-c697-40dd-a646-eaef36a040ee',
            },
            {
              name: 'ade',
              image: {},
              id: 'd0fc374a-67f8-4058-a4ca-e73f03bfde8c',
            },
          ],
        },
        merch: 'https://shopifysite.com',
      },
      files: {},
    },
  ];
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
  // useEffect(() => {
  //   fetchTickets();
  // }, [props?._loggedIn?.identifier]);

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
      <div className="font-lexend mt-[2rem]" key={props?.key}>
        <div>
          <h1 className="font-bold text-lg">Manage your events</h1>
          <p className="text-dashtext text-sm">
            This is your central hub for all your event creations! Track the
            progress of your workshops, talks, and appearances with ease.
          </p>
        </div>
        <div className="mt-8 flex justify-between p-1 items-center">
          <h3 className="font-lexend font-medium">YOUR EVENTS</h3>
          <div className="flex items-center gap-2">
            <p className="font-lexend">Sort by:</p>
            <div className="flex gap-2">
              <Select
                className="font-lexend"
                onValueChange={(e) => {
                  setSort(e);
                  handleSort(e);
                }}
              >
                <SelectTrigger className="w-[180px] dark:bg-dashSides">
                  <SelectValue
                    className="dark:bg:dashSides"
                    placeholder="Please choose"
                  />
                </SelectTrigger>
                <SelectContent className="bg-dashBg">
                  <SelectGroup onChange={handleSearch}>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="relative hidden md:block">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  <Input
                    placeholder="Search"
                    className="text-muted-foreground font-lexend"
                    onChange={(e) => setTerm(e?.target?.value)}
                    value={term}
                    onSubmit={handleSearch}
                  />
                </form>
                <SearchOutlinedIcon className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative block md:hidden mt-2">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <Input
              placeholder="Search"
              className="text-muted-foreground font-lexend"
              onChange={(e) => setTerm(e?.target?.value)}
              value={term}
              onSubmit={handleSearch}
            />
          </form>
          <SearchOutlinedIcon
            className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
            onClick={handleSearch}
          />
        </div>

        <div className="mb-4 cursor-pointer flex mr-3 space-x-2">
          <div
          role="button"
            className={`px-3 py-2 ${
              viewMode === 'list'
                ? 'bg-black/30 text-white'
                : 'bg-transparent text-gray-600'
            } rounded-l`}
            onClick={() => setViewMode('list')}
          >
            <IoIosList  className="h-7 w-7" />
          </div>
          <div
          role="button"
            className={`px-3 py-2 ${
              viewMode === 'grid'
                ? 'bg-black/30 text-white'
                : 'bg-transparent text-gray-600'
            } rounded-r`}
            onClick={() => setViewMode('grid')}
          >
            <FiGrid  className="h-7 w-7" />
          </div>
        </div>

        <div className="my-8 space-y-4">
          {!loading && tickets.length > 0 && (
            <div
              id="itemContainer"
              className={`my-8 mb-12 ${
                viewMode === 'list' ? 'list-view' : 'grid-view'
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
            <div className="mt-12 space-y-4">
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
