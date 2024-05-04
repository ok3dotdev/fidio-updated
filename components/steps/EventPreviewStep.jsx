import React from 'react';
import { Button } from '@/components/ui/button';
import useSurveyStore from '../../hooks/store';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { format } from 'date-fns';

const EventPreviewStep = ({
  setSent,
  sent,
  bannerImage,
  lineUpInfo,
  handleButtonClick,
  selectedImage,
}) => {
  const { setStep, eventDetails } = useSurveyStore();

  return (
    <div className='relative mt-[20px] mb-[12rem]'>
      <div
        className='flex flex-col rounded-[8px] py-4 px-8 shadow-Txl gap-2 h-40 items-center justify-center'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0)) , url(${bannerImage})`,
          backgroundSize: 'cover',
        }}
      >
        <h3 className='font-bold text-4xl text-white'>{eventDetails.name}</h3>
        <div className='text-dashtext flex gap-4 text-sm'>
          <div className='flex items-center gap-1'>
            <CalendarTodayOutlinedIcon className='w-3' />
            <p className='  text-white font-medium'>
              {eventDetails.date && format(eventDetails.date, 'PPP')}
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <AccessTimeOutlinedIcon className='w-3' />
            <p className='  text-white font-medium'>{eventDetails.startTime}</p>
          </div>
          <div className='flex items-center gap-1'>
            <FmdGoodOutlinedIcon className='w-3' />
            <p className='  text-white font-medium'>{eventDetails.venue}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col pt-4'>
        <div className='relative max-w-[500px] mx-auto'>
          <h3 className='max-w-[500px] mx-auto mb-2 font-semibold mt-6'>
            {!sent ? `Preview your event` : 'Event created successfuly'}
          </h3>
          <div className='bg-dashSides p-6 rounded-[8px] max-w-[500px] min-w-[500px] mx-auto'>
            {eventDetails.detailmeta.lineup.length > 0 && (
              <div className='space-y-4'>
                <p>Performers</p>
                <p className='text-dashtext'>HEADLINER</p>
                <div className='flex items-center gap-x-2'>
                  <div className='flex flex-col items-center'>
                    <img
                      src={selectedImage}
                      alt=''
                      className='w-14 h-14 object-cover rounded-full'
                    />
                    <p>{eventDetails.detailmeta.lineup[0].title}</p>
                  </div>
                  <p>{eventDetails.detailmeta.lineup[0].bio}</p>
                </div>
              </div>
            )}
            <div className='mt-5'>
              <p className='text-dashtext'>OTHER PERFORMERS</p>
              <div className='flex flex-wrap gap-x-4 mt-4'>
                {eventDetails.detailmeta.lineup
                  .slice(1)
                  .map((performer, index) => (
                    <div key={index} className='flex flex-col'>
                      <div className='flex items-center gap-x-2'>
                        <img
                          src={lineUpInfo[index + 1]?.file}
                          alt=''
                          className='w-14 h-14 rounded-full object-cover'
                        />
                        <p>{performer.title}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <p className='text-dashtext mt-5'>ABOUT THE HOST</p>
              <div className='bg-black rounded-[8px] p-4 mt-2'>
                <p className='font-semibold text-lg'>
                  {eventDetails?.host?.title}
                </p>
                <p className='text-dashtext'>{eventDetails?.host?.bio}</p>
              </div>
            </div>
          </div>
          {!sent && (
            <div className='flex gap-x-2 mt-4'>
              <input type='checkbox' />
              <p className='text-sm'>
                Checking this button confirms your acceptance of our
                <span className='underline'>event creation guidelines</span>,
                which detail the process and expectations for creating events.
              </p>
            </div>
          )}
          {!sent ? (
            <div className='mt-4 space-x-2 absolute right-0'>
              <Button
                role=''
                className='dark:bg-transparent dark:text-white border-1 border-dashBorder dark:hover:bg-transparent'
                onClick={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
              >
                Go back safely
              </Button>
              <Button
                onClick={handleButtonClick}
                className='dark:bg-accentY dark:text-white dark:hover:bg-accentY hover:bg-opacity-[0.8] hover:border-accentY focus:border-accentY outline-none shadow-none'
              >
                Confirm event
              </Button>
            </div>
          ) : (
            <div className='mt-8 space-x-2 absolute right-0'>
              <Button
                onClick={(e) => {
                  setSent(false);
                }}
                className='dark:bg-transparent dark:text-white dark:border-[1px] dark:border-dashBorder dark:hover:bg-transparent p-3 rounded-[6px] text-sm'
              >
                Create another event
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPreviewStep;
