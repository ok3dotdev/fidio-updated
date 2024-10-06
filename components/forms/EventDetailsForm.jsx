import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import UploadZone from '@/components/inputs/UploadZone';
import { DatePickerDemo } from '@/components/inputs/DatePicker';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import useSurveyStore from '../../hooks/store';

const EventDetailsForm = ({
  control,
  register,
  errors,
  handleSubmit,
  trigger,
}) => {
  const {
    imgCache,
    imgFor,
    setImgFor,
    setImgCache,
    setStep,
    bannerImage,
    setbannerImage,
    setEventDetails,
  } = useSurveyStore();

  useEffect(() => {
    setImgCache(new FormData());
  }, []);

  const allowedTypes = ['image/jpeg', 'image/png'];

  const handleNewFile = useCallback(
    (files) => {
      const useForm = imgCache;
      const useImgName = uuidv4();
      const modif = 'featureImg';
      let ext;

      useForm.append(
        'image',
        Array.from(files)
          .filter((m) => allowedTypes.indexOf(m.type) > -1)
          .map((m) => {
            var blob = m.slice(0, m.size, m.type);
            ext =
              allowedTypes[allowedTypes.indexOf(m.type)].match(
                /\/([a-zA-Z0-9].*)/
              )[1];
            return new File([blob], `${useImgName}.${ext}`, { type: m.type });
          })[0]
      );

      const useTempImgFor = imgFor;
      const imageObject = { name: `${useImgName}.${ext}`, modif, id: uuidv4() };
      useTempImgFor.push(imageObject);
      setImgFor(useTempImgFor);
      setImgCache(useForm);
    },
    [imgCache, imgFor, setImgCache, setImgFor]
  );

  const isOnSubmit = async (data) => {
    // await trigger();
    // console.log('Form submitted:', data);
    setEventDetails(data);
    setStep(2);
  };

  return (
    <div className='max-w-[500px] mx-auto font-lexend mt-[2rem] mb-[12rem]'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-lg'>Create event</h1>
          <p>
            Step 1 <span className='text-dashtext'>of 3</span>
          </p>
        </div>
        <p className='text-dashtext text-sm mt-2'>
          Don&apos;t worry if you need a break! Your event details are saved as
          a draft. Come back and complete it anytime.
        </p>
      </div>

      <form className='relative' onSubmit={handleSubmit(isOnSubmit)}>
        <Card className='dark:bg-transparent mt-8'>
          <CardContent className='space-y-4 mt-4'>
            <div className='flex flex-col justify-center space-y-2'>
              <label htmlFor=''>Banner image</label>
              <Controller
                control={control}
                name='banner.image'
                // rules={{
                //   required: 'Banner image is required',
                //   validate: (value) =>
                //     (value && value.length > 0) || 'Banner image is required',
                // }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <>
                    <UploadZone
                      handleImageUpload={(file) => {
                        onChange(file);
                      }}
                      handleNewFile={handleNewFile}
                      setbannerImage={setbannerImage}
                      bannerImage={bannerImage}
                    />
                    {error && (
                      <p className='text-red-500 text-xs'>{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className='space-y-2 mt-8'>
              <label htmlFor='title'>What is the title of your event?</label>
              <Input
                id='title'
                name='name'
                placeholder='Event title'
                className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                {...register('name', {
                  required: 'Event title is required',
                  minLength: { value: 1, message: 'Enter title of event' },
                })}
              />
              {errors?.name && (
                <p className='text-red-500 text-xs'>{`${errors?.name.message}`}</p>
              )}
            </div>
            <div className='space-y-2'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                name='description'
                placeholder='A time to party!'
                className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium w-full p-2 rounded-md text-sm'
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
                    name='date'
                    rules={{ required: 'Stream date is required' }}
                    render={({ field: { value, onChange, ...field } }) => (
                      <DatePickerDemo value={value} onChange={onChange} />
                    )}
                  />
                  {errors?.date && (
                    <p className='text-red-500 mt-1 text-xs'>{`${errors?.date.message}`}</p>
                  )}
                </div>
                <div className='relative'>
                  <Input
                    id='stream start'
                    placeholder='Start time'
                    type='time'
                    className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                    {...register('startTime', {
                      required: 'Start time is required',
                    })}
                  />
                  {errors?.startTime && (
                    <p className='text-red-500 mt-1 text-xs'>{`${errors?.startTime.message}`}</p>
                  )}
                </div>
                <div className='relative'>
                  <Input
                    placeholder='End time'
                    type='time'
                    className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                    {...register('endTime', {
                      required: 'End time is required',
                    })}
                  />
                  {errors?.endTime && (
                    <p className='text-red-500 mt-1 text-xs'>{`${errors?.endTime.message}`}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <label htmlFor='venue'>Where is it happening ?</label>
              <Input
                id='venue'
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
                  id='price'
                  name='price'
                  type='number'
                  placeholder=''
                  className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                  {...register('price', {
                    required: 'Price is required',
                    minLength: { value: 0, message: 'Enter price in USD' },
                  })}
                />
                <p className='absolute right-2 top-2 text-dashtext text-sm'>
                  $USD
                </p>
                {errors?.price && (
                  <p className='text-red-500 mt-1 text-xs'>{`${errors?.price.message}`}</p>
                )}
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
            type='submit'
            className='dark:bg-accentY dark:text-white dark:hover:bg-accentY hover:bg-opacity-[0.8] hover:border-accentY focus:border-accentY outline-none shadow-none'
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventDetailsForm;
