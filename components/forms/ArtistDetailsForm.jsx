import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import useSurveyStore from '../../hooks/store';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

const ArtistDetailsForm = ({ control, register, handleSubmit, reset }) => {
  const {
    lineUpInfo,
    setStep,
    setLineUpInfo,
    setEventDetails,
    eventDetails,
    selectedImage,
    setSelectedImage,
    imgCache,
    imgFor,
    setImgCache,
    setImgFor,
    setPipelineDbItem,
    pipelineObject,
    pipelineDbItem,
  } = useSurveyStore();

  const handleImageUpload = (e) => {
    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event?.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLineupUpload = (e, index) => {
    const tempId = uuidv4();

    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const updatedLineUp =
          index === 0
            ? [{ id: tempId, title: '', image: null, bio: '' }]
            : [...lineUpInfo];
        updatedLineUp[index].image = file;
        updatedLineUp[index].file = event?.target?.result;
        updatedLineUp[index].id = tempId;
        setLineUpInfo(updatedLineUp);
      };
      reader.readAsDataURL(file);
    }

    const useForm = imgCache;
    const useImgName = uuidv4();
    const modif = 'lineup'; // Valid names are 'featureImg', 'leadImg', 'productImg', 'lineup'
    let ext;
    // Option 1: Use the method below to apply to shared imgCache and imgFor
    useForm.append(
      'image',
      Array.from(e?.target?.files)
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
    console.log('index', tempId, lineUpInfo);
    const useTempImgFor = imgFor;
    const imageObject = {
      name: `${useImgName}.${ext}`,
      modif: modif,
      id: tempId,
    };

    useTempImgFor.push(imageObject);
    setImgFor(useTempImgFor);
    setImgCache(useForm);
  };

  const allowedTypes = ['image/jpeg', 'image/png'];

  const deletePerformer = (index) => {
    const updatedLineUpInfo = [...lineUpInfo];
    updatedLineUpInfo.splice(index, 1);

    const updatedLineup = eventDetails?.detailmeta?.lineup?.filter(
      (_, i) => i !== index
    );

    const updatedEventDetails = {
      ...eventDetails,
      detailmeta: {
        ...eventDetails.detailmeta,
        lineup: updatedLineup,
      },
    };

    // Remove the corresponding image entry from imgFor
    const performerId = lineUpInfo[index].id;
    const updatedImgFor = imgFor.filter((img) => img.id !== performerId);

    setEventDetails(updatedEventDetails);
    setLineUpInfo(updatedLineUpInfo);
    setImgFor(updatedImgFor);
    reset(updatedEventDetails);
  };

  const addPerformer = () => {
    setLineUpInfo([...lineUpInfo, { title: '', image: null, bio: '' }]);
  };

  const onSubmit = (data) => {
    const updatedLineup = lineUpInfo.map((performer, index) => ({
      id: performer.id || uuidv4(),
      title: data.detailmeta?.lineup[index]?.title || '',
      image: performer.image || eventDetails?.detailmeta?.lineup[index]?.image,
      bio: data?.detailmeta?.lineup[index]?.bio,
    }));

    const updatedEventDetails = {
      ...eventDetails,
      ...data,
      detailmeta: {
        ...eventDetails.detailmeta,
        lineup: updatedLineup,
      },
    };
    // console.log('updated event dets', updatedEventDetails);

    const temp = { ...pipelineDbItem };
    temp.detailmeta.lineup = updatedLineup;
    setPipelineDbItem(temp);

    setEventDetails(updatedEventDetails);
    setStep(3);
  };

  return (
    <div className='max-w-[500px] mx-auto font-lexend mt-[2rem] mb-[12rem]'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-lg'>Create event</h1>
          <p>
            Step 2 <span className='text-dashtext'>of 3</span>
          </p>
        </div>
        <p className='text-dashtext text-sm mt-2'>
          Don&apos;t worry if you need a break! Your event details are saved as
          a draft. Come back and complete it anytime.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='relative'>
        <Card className='dark:bg-transparent mt-8'>
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
                  render={({ field: { value, onChange, ...field } }) => (
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
                        // handleLineupImage(event.target.files, 0);
                      }}
                      type='file'
                      id='picture'
                    />
                  )}
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
                            // handleLineupImage(e.target.files, index);
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
                  className='w-full dark:bg-dashBorder rounded-[6px] py-1 mt-4 dark:text-white dark:hover:text-black'
                >
                  Add another performer
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
    </div>
  );
};

export default ArtistDetailsForm;
