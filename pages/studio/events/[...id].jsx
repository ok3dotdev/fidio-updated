import React, { useState, useEffect } from 'react';
import StudioLayout from '@/components/Layouts/studio/StudioLayout';
import Countdown from 'react-countdown';
import copy from 'copy-to-clipboard';

import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';

import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EventUpdateModal from '@/components/modals/EventUpdateModal';
import Preview from '/modules/streaming/watch/preview/Preview';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const pageName = 'create';

const EventView = (props) => {
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [startEnabled, setStartEnabled] = useState(false);
  const [streamStatusCheck, setStreamStatusCheck] = React.useState(null);
  const [showStreamDialog, setShowStreamDialog] = useState(false);
  const [currentlyStreaming, setCurrentlyStreaming] = useState(null);
  const [hasCopied, setHasCopied] = useState(false);
  const [showKeys, setShowKeys] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchTickets();
  }, [props._loggedIn.identifier]);

  useEffect(() => {
    checkStreamStatus();
  }, [ticket]);

  const fetchTickets = async () => {
    setLoading(true);
    if (props && props?._loggedIn?.identifier) {
      const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0,
        extra: {
          owner: props?._loggedIn?.identifier,
        },
        id: router.query.id[0],
        limit: 1,
      });
      if (res && res.products) {
        // console.log('product', res.products[0]);
        setTicket(res.products[0] || []);
      }
      setLoading(false);
    }
  };

  const checkStreamStatus = async () => {
    // console.log('checking');
    setStreamStatusCheck(true);
    const res = await apiReq('/stream/checkuserstreamingstatus', {
      user: props?._loggedIn,
    });
    // console.log('res', res);
    if (res?.data?.stream) {
      props._setCurrentlyStreaming(res.data.stream);
    }
    if (res && res.currentlyStreaming) {
      setCurrentlyStreaming(res.data);
      setHasCopied(true);
      // console.log('checking', res.currentlyStreaming);
    }
  };

  // console.log('clicked', router.query.id);
  const startStream = async (e) => {
    const res = await apiReq('/stream/startstream', {
      user: props?._loggedIn,
      streamSettings: {
        title: ticket?.name,
        private: true,
        description: ticket?.description,
      },
      streamingFor: router.query?.id[0],
    });

    if (res?.data?.stream) {
      setCurrentlyStreaming(res.data);
      setDialogChange(true);
      props._setCurrentlyStreaming(res.data.stream);
    }
  };

  const handleEventUpdate = () => {
    setModalOpen(!modalOpen);
  };

  const setStartTimeFunc = (value, time) => {
    if (!time) {
      console.error('Start time is not defined.');
      return null;
    }
    const date = new Date(value);
    const startTimeParts = time.split(':');
    date.setHours(parseInt(startTimeParts[0], 10));
    date.setMinutes(parseInt(startTimeParts[1], 10));
    const res = date - Date.now();
    return res;
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (hours < 45) {
      setStartEnabled(true);
    }
    if (completed) {
      setStartEnabled(!setStartEnabled);
    } else {
      return (
        <p className='text-3xl font-semibold text-center'>
          {days > 0 && `${days}days `}
          {hours > 0 && `${hours}hrs `}
          {minutes > 0 && `${minutes}mins `}
          {seconds > 0 && `${seconds}s`}
        </p>
      );
    }
  };

  const endStream = React.useCallback((e) => {
    e.preventDefault();

    const f = async () => {
      const res = await apiReq('/stream/endstream', {
        user: props?._loggedIn,
        stream: currentlyStreaming?.stream?.id,
      });
      if (res?.status === 'success') {
        setCurrentlyStreaming(false);
        setHasCopied(false);
        props._setCurrentlyStreaming(false);
      }
    };
    f();
  });

  const setDialogChange = (arg) => {
    setShowStreamDialog(arg);
    if (arg === false) {
      setHasCopied(true);
    }
  };

  return (
    <StudioLayout {...props}>
      <div className='px-2 md:px-8'>
        {!loading && ticket && (
          <div>
            {modalOpen && (
              <EventUpdateModal
                setModalOpen={setModalOpen}
                ticket={ticket}
                {...props}
              />
            )}
            <div className='relative  mb-[12rem]'>
              <div className='relative'>
                <div
                  className='flex flex-col rounded-[8px] py-4 px-8 shadow-Txl gap-2 h-[350px] items-center justify-center'
                  style={{
                    backgroundImage: `url(${props?.cdn?.static}/${
                      ticket?.images &&
                      ticket?.images[0] &&
                      ticket?.images[0]?.name
                    })`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <div className='absolute bg-gradient-to-t from-gradientLight to-gradientDark right-0 top-0  w-full h-full'></div>
              </div>

              <div className='grid grid-cols-1 xl:grid-cols-3 w-full  xl:gap-x-12 xl:space-y-8 mt-8 gap-y-4 md:items-start'>
                <div className='col-span-2'>
                  <div className='mb-4 flex justify-between xl:w-[80%]'>
                    <h1 className='text-3xl md:text-4xl font-bold '>
                      {ticket.name}
                    </h1>
                    <div>
                      <div className='bg-dashSides rounded-full p-1 flex justify-center items-center cursor-pointer'>
                        <DriveFileRenameOutlineIcon
                          className='w-8 h-8 p-1'
                          onClick={handleEventUpdate}
                        />
                      </div>
                    </div>
                  </div>
                  <p className='text-dashtext mb-8 md:w-[80%]'>
                    {ticket?.detailmeta?.description}
                  </p>
                  <div className='mb-8'>
                    <p className='mb-2 font-semibold'> Date, time and venue</p>
                    <div className='text-dashtext flex gap-4 text-sm'>
                      <div className='flex items-center gap-1'>
                        <CalendarTodayOutlinedIcon
                          className='w-3'
                          style={{ width: '0.75rem' }}
                        />
                        <p className='font-medium'>
                          {ticket?.meta?.date?.split('T')[0]}
                        </p>
                      </div>
                      <div className='flex items-center gap-1'>
                        <AccessTimeOutlinedIcon
                          className='w-3'
                          style={{ width: '0.75rem' }}
                        />
                        <p className='font-medium'>
                          {ticket?.meta?.startTime} - {ticket?.meta?.endTime}
                        </p>
                      </div>
                      <div className='flex items-center gap-1'>
                        <FmdGoodOutlinedIcon
                          className='w-3'
                          style={{ width: '0.75rem' }}
                        />
                        <p className='font-medium'>{ticket?.meta?.venue}</p>
                      </div>
                    </div>
                  </div>
                  <div className='mb-8'>
                    <p className='mb-4 font-semibold'>Performers</p>
                    <p className='text-dashtext mb-4'>HEADLINER</p>
                    {ticket?.detailmeta?.lineup?.length && (
                      <div className='flex gap-8 items-center  mb-4'>
                        <div className='w-full rounded-full max-w-[12rem]'>
                          <img
                            alt='headliner'
                            src={`${props?.cdn?.static}/${ticket?.detailmeta?.lineup[0].image}`}
                            className='w-full h-full rounded-[50%] object-cover aspect-square'
                          />
                        </div>
                        <div>
                          <p className='text-lg'>
                            {ticket?.detailmeta?.lineup[0].title || 'No name'}
                          </p>
                          <p className='text-dashtext text-sm'>
                            {ticket?.detailmeta?.lineup[0].bio || 'No bio'}
                          </p>
                        </div>
                      </div>
                    )}
                    <p className='text-dashtext mt-8  mb-4'>OTHER PERFORMERS</p>
                    <div className='text-white text-sm flex items-start flex-wrap gap-12'>
                      {ticket?.detailmeta?.lineup
                        ?.slice(1, ticket?.detailmeta?.lineup?.length)
                        .map((art, idx) => (
                          <div
                            key={idx}
                            className='inline-flex flex-col gap-2 items-center'
                          >
                            <img
                              alt=''
                              src={`${props?.cdn?.static}/${art?.image}`}
                              className='w-[150px] h-[150px] rounded-full  object-cover'
                            />
                            <p className='text-lg'>{art?.title || 'No name'}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  {ticket?.meta?.host && (
                    <div className='mt-8'>
                      <p className='mb-4 font-semibold'>About the host</p>
                      <div className='text-white space-y-2 text-sm bg-dashSides p-4 px-4 rounded-[6px] md:max-w-[70%]'>
                        <p className='font-semibold'>
                          {ticket?.meta?.host?.title}
                        </p>
                        <p className='text-dashtext'>
                          {ticket?.meta?.host?.bio}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className=''>
                  <div className='border-dashed border-[1px] border-dashBorder border-opacity-[0.3] rounded-lg p-4 md:mt-0 mt-8 md:h-[50%]'>
                    <p className='text-dashtext font-medium'>
                      TICKET INFORMATION
                    </p>
                    <div className='flex justify-between mt-8 items-center border-b-[1px] border-dashed py-4 mb-4 border-dashBorder'>
                      <p className='font-semibold'>Price</p>
                      <p className='font-bold text-xl'>
                        {ticket?.styles?.[0]?.price === '0'
                          ? 'FREE'
                          : `$${ticket?.styles?.[0]?.price ?? ''}`}
                      </p>
                    </div>
                  </div>
                  <div className='mt-8 mx-auto'>
                    {!loading && !hasCopied ? (
                      <div className='flex flex-col space-y-4 items-center bg-dashSides rounded-[8px] p-8'>
                        <p className='text-dashtext font-semibold'>
                          THIS EVENT BEGINS IN
                        </p>
                        {ticket &&
                          ticket?.meta &&
                          ticket.meta.date &&
                          ticket.meta.startTime &&
                          setStartTimeFunc(
                            ticket.meta.date,
                            ticket.meta.startTime
                          ) && (
                            <Countdown
                              className='text-3xl font-lexend font-bold text-center'
                              date={
                                Date.now() +
                                setStartTimeFunc(
                                  ticket.meta.date,
                                  ticket.meta.startTime
                                )
                              }
                              renderer={renderer}
                            />
                          )}
                        <Dialog
                          open={showStreamDialog}
                          onOpenChange={setDialogChange}
                          className='dark:bg-red-300'
                        >
                          <DialogTrigger asChild>
                            <button
                              disabled={startEnabled}
                              onClick={startStream}
                              className='bg-accentY py-2 rounded-[6px] w-full dark:hover:opacity-[0.9] dark:hover:bg-accentY dark:hover:outline-[0] dark:hover:shadow-none font-semibold disabled:bg-[#404040] dark:disabled:hover:bg-[#404040] dark:disabled:text-[#525252] disabled:cursor-default'
                            >
                              Start stream
                            </button>
                          </DialogTrigger>
                          <DialogContent className='sm:max-w-[425px] font-lexend dark:bg-dashBg'>
                            <DialogHeader>
                              <DialogTitle className='mb-8'>
                                Go Live Now
                              </DialogTitle>
                              <DialogDescription className='dark:text-white mt-4'>
                                Use our URL and key on any streaming software
                              </DialogDescription>
                            </DialogHeader>
                            <div className=''>
                              <div className='mb-4'>
                                <Label htmlFor='key'>Stream Key</Label>
                                <div className='flex gap-2 items-center mt-2'>
                                  <Input
                                    id='key'
                                    className='col-span-3 text-white font-bold bg-dashSides border-2 dark:border-dashBorder text-sm'
                                    value={currentlyStreaming?.key || ''}
                                    readOnly
                                  />
                                  <Button
                                    className='border-dashBorder border-[0.5px] rounded-md dark:bg-transparent dark:text-white'
                                    onClick={() =>
                                      copy(currentlyStreaming?.key || '')
                                    }
                                  >
                                    copy
                                  </Button>
                                </div>
                              </div>
                              <div className='mb-2'>
                                <Label htmlFor='url'>Server URL</Label>
                                <div className='flex gap-2 items-center mt-2'>
                                  <Input
                                    id='url'
                                    className='col-span-3 text-white font-bold bg-dashSides border-2 dark:border-dashBorder'
                                    value={currentlyStreaming?.streamTo || ''}
                                    readOnly
                                  />
                                  <Button
                                    className='border-dashBorder border-[0.5px] rounded-md dark:bg-transparent dark:text-white'
                                    onClick={() =>
                                      copy(currentlyStreaming?.streamTo || '')
                                    }
                                  >
                                    copy
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <p className='text-dashtext text-sm'>
                          You can go live on your event{' '}
                          <span className='text-white'>1 hour </span>before the
                          official start time. For more details, check out our
                          <span className='text-white '>Terms of Use.</span>
                        </p>
                      </div>
                    ) : (
                      !loading &&
                      currentlyStreaming && (
                        <Tabs defaultValue='summary' className='w-full mt-12'>
                          <TabsList className='grid w-full grid-cols-2 p-1 dark:bg-transparent border-2 border-dashBorder h-auto mb-4'>
                            <TabsTrigger
                              className='dark:data-[state=active]:bg-dashBorder  dark:hover:bg-transparent dark:hover:outline-none'
                              value='summary'
                            >
                              Summary
                            </TabsTrigger>
                            <TabsTrigger
                              className='dark:data-[state=active]:bg-dashBorder dark:hover:bg-transparent dark:hover:outline-none'
                              value='preview'
                            >
                              Preview
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value='summary'>
                            <Card className='dark:bg-dashSides min-h-[200px]'>
                              <CardHeader>
                                <CardTitle className='text-center text-dashtext'>
                                  <div className='flex justify-center gap-x-2 items-center'>
                                    LIVE
                                    <div className='w-2 h-2 bg-[#12CB12] rounded'></div>
                                  </div>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className='space-y-2'>
                                <div className='space-y-1'>
                                  <CardContent></CardContent>
                                  <CardFooter className='space-x-1 flex flex-wrap'>
                                    <Button
                                      className='w-full border-[0.5px] dark:bg-transparent border-neutral600 dark:text-white dark:hover:text-black ml-5'
                                      onClick={endStream}
                                    >
                                      End Stream
                                    </Button>
                                    <Dialog
                                      open={showKeys}
                                      onOpenChange={setShowKeys}
                                      className='dark:bg-red-300'
                                    >
                                      <DialogTrigger asChild>
                                        <Button
                                          disabled={startEnabled}
                                          onClick={startStream}
                                          className='dark:bg-accentY py-2 rounded-[6px] w-full dark:hover:bg-opacity-[0.7] dark:hover:bg-accentY dark:hover:outline-[0] dark:hover:shadow-none font-semibold disabled:bg-[#404040] dark:disabled:hover:bg-[#404040] dark:disabled:text-[#525252] disabled:cursor-default whitespace-nowrap'
                                        >
                                          Show Keys
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className='sm:max-w-[425px] font-lexend dark:bg-dashBg'>
                                        <DialogHeader>
                                          <DialogTitle className='mb-8'>
                                            Go Live Now
                                          </DialogTitle>
                                          <DialogDescription className='dark:text-white mt-4'>
                                            Use our URL and key on any streaming
                                            software
                                          </DialogDescription>
                                        </DialogHeader>
                                        <div className=''>
                                          <div className='mb-4'>
                                            <Label htmlFor='key'>
                                              Stream Key
                                            </Label>
                                            <div className='flex gap-2 items-center mt-2'>
                                              <Input
                                                id='key'
                                                className='col-span-3 text-white font-bold bg-dashSides border-2 dark:border-dashBorder text-sm'
                                                value={
                                                  currentlyStreaming?.key || ''
                                                }
                                                readOnly
                                              />
                                              <Button
                                                className='border-dashBorder border-[0.5px] rounded-md dark:bg-transparent dark:text-white'
                                                onClick={() =>
                                                  copy(
                                                    currentlyStreaming?.key ||
                                                      ''
                                                  )
                                                }
                                              >
                                                copy
                                              </Button>
                                            </div>
                                          </div>
                                          <div className='mb-2'>
                                            <Label htmlFor='url'>
                                              Server URL
                                            </Label>
                                            <div className='flex gap-2 items-center mt-2'>
                                              <Input
                                                id='url'
                                                className='col-span-3 text-white font-bold bg-dashSides border-2 dark:border-dashBorder'
                                                value={
                                                  currentlyStreaming?.streamTo ||
                                                  ''
                                                }
                                                readOnly
                                              />
                                              <Button
                                                className='border-dashBorder border-[0.5px] rounded-md dark:bg-transparent dark:text-white'
                                                onClick={() =>
                                                  copy(
                                                    currentlyStreaming?.streamTo ||
                                                      ''
                                                  )
                                                }
                                              >
                                                copy
                                              </Button>
                                            </div>
                                          </div>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                  </CardFooter>
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>
                          <TabsContent value='preview'>
                            <Card>
                              {!loading && currentlyStreaming && (
                                <Link
                                  href={`/w?v=${currentlyStreaming?.stream?.id}`}
                                  className=''
                                >
                                  <Preview
                                    {...props}
                                    useWatchDataPreview={
                                      props?._currentlyStreaming
                                    }
                                  />
                                </Link>
                              )}
                            </Card>
                          </TabsContent>
                        </Tabs>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default EventView;
