import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useSurveyStore from '../../hooks/store';

const ArtistDetailsForm = ({
  handleImageUpload,
  onSubmit,
  handleLineupUpload,
  handleLineupImage,
  selectedImage,
  lineUpInfo,
  addPerformer,
  register,
  control,
  Controller,
}) => {
  const { step, setStep } = useSurveyStore();

  return (
    <form onSubmit={onSubmit} className='relative'>
      <Card className=' dark:bg-transparent mt-8'>
        <CardTitle className='p-4'>Enter performers</CardTitle>
        <CardContent className='space-y-4 mt-4'>
          <div className='space-y-2'>
            <p className='mb-8'>HEADLINER</p>
            <label htmlFor='title'>Performer name and photo</label>
            <div className='flex items-center gap-x-2'>
              <Input
                name='detailmeta.lineup[0].title'
                placeholder='Asake'
                className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                ref={register}
                {...register('detailmeta.lineup[0].title')}
              />
              <Controller
                control={control}
                name={'detailmeta.lineup[0].image'}
                render={({ field: { value, onChange, ...field } }) => {
                  return (
                    <Input
                      {...field}
                      name='headliner'
                      value={value?.fileName}
                      placeholder='Upload image'
                      className='w-36'
                      onChange={(event) => {
                        onChange(event.target.files[0]);
                        handleImageUpload(event);
                        handleLineupUpload(event, 0);
                        handleLineupImage(event.target.files);
                      }}
                      type='file'
                      id='picture'
                    />
                  );
                }}
              />
            </div>
            <div className='space-y-2 mt-4'>
              <label htmlFor='title'>Bio</label>
              <div className='flex items-center gap-x-2'>
                <Input
                  name='detailmeta.lineup[0].bio'
                  placeholder='Enter bio'
                  className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                  ref={register}
                  {...register('detailmeta.lineup[0].bio')}
                />
              </div>
            </div>
            {selectedImage && (
              <div>
                <img
                  src={selectedImage}
                  alt='Selected Image'
                  className='mt-4 w-20 h-20 rounded-full object-cover'
                />
              </div>
            )}
          </div>
          <hr className='w-full' />
          <h3 className=''>OTHER PERFORMERS</h3>
          <div className='space-y-4'>
            {lineUpInfo.slice(1).map((performer, index) => (
              <div key={index} className='space-y-2'>
                <label htmlFor='title'>Performer name and photo</label>
                <div className='flex gap-2 mb-2'>
                  <Input
                    name={`detailmeta.lineup[${index + 1}].title`}
                    placeholder='Enter artist, performer or band name'
                    className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                    {...register(`detailmeta.lineup[${index + 1}].title`)}
                  />
                  <Controller
                    control={control}
                    name={`detailmeta.lineup[${index + 1}].image`}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Input
                        {...field}
                        value={value?.fileName}
                        name={`detailmeta.lineup[${index + 1}].image`}
                        placeholder='Upload image'
                        accept='image/*'
                        className='w-36'
                        onChange={(e) => {
                          onChange(e.target.files[0]);
                          handleLineupUpload(e, index + 1);
                          handleLineupImage(e.target.files);
                        }}
                        type='file'
                        id={`picture-${index}`}
                      />
                    )}
                  />
                </div>
                {performer.file && (
                  <div className='flex gap-x-2'>
                    <img
                      src={performer.file}
                      alt='Performer'
                      className='w-10 h-10 rounded-full object-cover'
                    />
                    <Button
                      className='text-red-500 ml-2'
                      onClick={() => deletePerformer(index + 1)}
                      type='button'
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            ))}
            <div>
              <Button
                type='button'
                onClick={addPerformer}
                className='w-full dark:bg-dashBorder rounded-[6px] py-1 mt-4 dark:text-white'
              >
                Add another performer{' '}
              </Button>
            </div>
          </div>
          <hr className='w-full' />
          <div className=''>
            <p className='mb-8'>HOST</p>
            <label htmlFor='host.title'>Name</label>
            <div className='flex flex-col items-center gap-y-2 mb-2 mt-2'>
              <Input
                name='host.title'
                placeholder='Mc Big Timer'
                className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                ref={register}
                {...register('host.title')}
              />
            </div>
            <label className='mt-2' htmlFor='title'>
              Bio
            </label>
            <div className='flex items-center gap-x-2 mt-2'>
              <Input
                name='detailmeta.lineup[0].bio'
                placeholder='Host with the most'
                className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                ref={register}
                {...register('host.bio')}
              />
            </div>
          </div>
          <hr className='w-full' />
          <div className='space-y-2'>
            <label htmlFor='merch'>
              Sell your merch by sharing a link to your store
            </label>
            <Input
              name='merch'
              placeholder='https://'
              className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
              {...register('merch')}
            />
          </div>
        </CardContent>
      </Card>
      <div className='mt-4 space-x-2 absolute right-0'>
        <Button
          role=''
          className='dark:bg-transparent dark:text-white border-1 border-dashBorder dark:hover:bg-transparent'
          onClick={(e) => {
            e.preventDefault();
            setStep(1);
          }}
        >
          Go back safely
        </Button>
        <Button
          type='submit'
          className='dark:bg-accentY dark:text-white dark:hover:bg-accentY hover:bg-opacity-[0.8] hover:border-accentY focus:border-accentY outline-none shadow-none'
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default ArtistDetailsForm;
