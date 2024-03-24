import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DatePickerDemo } from '@/components/inputs/DatePicker';
import UploadZone from '@/components/inputs/UploadZone';
import useSurveyStore from '../../hooks/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';

const EventDetailsForm = ({
  handleNewFile,
  setbannerImage,
  bannerImage,
  register,
  control,
}) => {
  // const { register, control } = useForm();

  const { step, setStep } = useSurveyStore();

  return (
    <div>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-lg'>Create event</h1>
          <p>
            Step {step} <span className='text-dashtext'>of 3</span>
          </p>
        </div>
        <p className='text-dashtext text-sm mt-2'>
          Don&apos;t worry if you need a break! Your event details are saved as
          a draft. Come back and complete it anytime.
        </p>
      </div>
      <Card className=' dark:bg-transparent mt-8'>
        <CardContent className='space-y-4 mt-4'>
          <div className='flex flex-col justify-center space-y-2'>
            <label htmlFor=''>Banner image</label>
            <Controller
              control={control}
              name='banner.image'
              render={({ field: { onChange } }) => (
                <UploadZone
                  handleNewFile={handleNewFile}
                  setbannerImage={setbannerImage}
                  bannerImage={bannerImage}
                />
              )}
            />
          </div>
          <div className='space-y-2 mt-8'>
            <label htmlFor='title'> What is the title of your event?</label>
            <Input
              name='name'
              placeholder='Event title'
              className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
              {...register('name')}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='description'>Description</label>
            <Input
              name='description'
              placeholder='A time to party!'
              className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
              {...register('description')}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='stream start'>
              When does your stream start and end?
            </label>
            <div className='grid xl:grid-cols-3 grid-cols-1 gap-x-2 gap-y-2 '>
              <div className='relative w-full'>
                <Controller
                  control={control}
                  name={'date'}
                  render={({ field: { value, onChange, ...field } }) => {
                    return (
                      <DatePickerDemo
                        value={value} // Pass value from the form control to the DatePickerDemo
                        onChange={onChange}
                      />
                    );
                  }}
                />
              </div>
              <div className='relative'>
                <Input
                  placeholder='Start time'
                  type='time'
                  className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                  {...register('startTime')}
                />
              </div>
              <div className='relative'>
                <Input
                  placeholder='End time'
                  type='time'
                  className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                  {...register('endTime')}
                />
                {/* <SearchOutlinedIcon className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground' /> */}
              </div>
            </div>
          </div>
          <div className='space-y-2'>
            <label htmlFor='venue'>Where is it happening ?</label>
            <Input
              name='venue'
              placeholder='Type the venue address'
              className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
              {...register('venue')}
            />
          </div>
          <div className='space-y-2 '>
            <label htmlFor='price'>What is the ticket price?</label>
            <div className='relative'>
              <Input
                name='price'
                placeholder='15.99'
                className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                {...register('price')}
              />
              <p className='absolute right-2 top-2 text-dashtext text-sm'>
                $CAD
              </p>
            </div>
          </div>
          <div className='space-y-2 '>
            <label htmlFor='quantity'>Quantity</label>
            <div className='relative'>
              <Input
                name='quantity'
                placeholder='10'
                className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                {...register('quantity')}
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label htmlFor='description'>Discount (Leave empty if none)</label>
            <div className='grid xl:grid-cols-3 grid-cols-1 gap-x-2 gap-y-2'>
              <div className=''>
                <Input
                  placeholder='Amount'
                  className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                  {...register('discount.amount')}
                />
              </div>
              <div className='relative'>
                <Input
                  placeholder='Start date'
                  type='date'
                  className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                  {...register('discount.startDate')}
                />
              </div>
              <div className='relative'>
                <Input
                  placeholder='End time'
                  type='date'
                  className='bg-dashSides border-[1px] dark:border-dashBorder text-dashtext'
                  {...register('discount.endDate')}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='mt-4 space-x-2 absolute right-0 flex items-center'>
        <Link
          href='/studio/events'
          className='dark:bg-transparent dark:text-white border-[1px] border-dashBorder dark:hover:bg-transparent p-[8px] px-[12px] rounded-[8px]'
        >
          Cancel
        </Link>
        <Button
          type='button'
          onClick={() => setStep(2)}
          className='dark:bg-accentY dark:text-white dark:hover:bg-accentY hover:bg-opacity-[0.8] hover:border-accentY focus:border-accentY outline-none shadow-none'
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default EventDetailsForm;

// <EventDetailsForm
//   handleNewFile={handleLineupUpload}
//   setbannerImage={setbannerImage}
//   bannerImage={bannerImage}
//   register={register}
//   control={control}
// />
