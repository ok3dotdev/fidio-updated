import React, { useState, useEffect } from 'react';
import StudioLayout from '@/components/Layouts/StudioLayout';
import Link from 'next/link';
import { format } from 'date-fns';

import { Survey } from '/modules/survey';
import apiReq from '/modules/utility/api/apiReq';
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import { v4 as uuidv4 } from 'uuid';
import UploadZone from '@/components/inputs/UploadZone';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useRouter } from 'next/router';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import { validationCheck } from '../../../lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Button } from '@/components/ui/button';
import { DatePickerDemo } from '../../../components/inputs/DatePicker';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import useSurveyStore from '../../../hooks/store';

import { useForm, Controller } from 'react-hook-form';
import EventDetailsForm from '../../../components/forms/EventDetailsForm';

const pageName = 'create';

const Create = (props) => {
  const { register, handleSubmit, reset, control, setValue } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [bannerImage, setbannerImage] = useState(null);
  const [lineUpInfo, setLineUpInfo] = useState([{ title: '', image: null }]);
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [sent, setSent] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const {
    eventDetails,
    setEventDetails,
    pipelineDbItem,
    setPipelineDbItem,
    pipelineObject,
    step,
    setStep,
    imgCache,
    imgFor,
    setImgFor,
    setImgCache,
    setPipelineObject,
  } = useSurveyStore();

  useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(true);
      setSurveyStateDefault();
    }
  }, [componentDidMount]);

  const onSubmit = (data) => {
    console.log('DATA', data);
    setSurveyStateDefault();
    const updatedLineup = lineUpInfo.map((performer, index) => ({
      id: performer.id || uuidv4(),
      title: data.detailmeta?.lineup[index]?.title || '',
      image: performer.image || eventDetails?.detailmeta?.lineup[index]?.image,
    }));

    const updatedEventDetails = {
      ...eventDetails,
      ...data,
      detailmeta: {
        ...eventDetails.detailmeta,
        lineup: updatedLineup,
      },
    };
    const temp = { ...pipelineDbItem };
    temp.detailmeta.lineup = updatedLineup;
    setPipelineDbItem(temp);

    setEventDetails(updatedEventDetails);
    setStep(3);
  };

  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

  /* Handles banner image */
  const handleNewFile = React.useCallback((files) => {
    const useForm = imgCache;
    const useImgName = uuidv4();
    const modif = 'featureImg'; // Valid names are 'featureImg', 'leadImg', 'productImg', 'lineup'
    let ext;
    // Option 1: Use the method below to apply to shared imgCache and imgFor
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
    const imageObject = {
      name: `${useImgName}.${ext}`,
      modif: modif,
      id: uuidv4(),
    };
    if (modif === 'lineup') {
      imageObject.title = 'Lineup Artist Title';
      imageObject.description = 'Lineup Description';
      imageObject.time = '14:30';
    }
    useTempImgFor.push(imageObject);
    setImgFor(useTempImgFor);

    // // Option 2: If you want to merge the temporary file cache "imgCache" and image info "surveyState.imgFor" into surveyState.pipelineObject keys for simpler transformation during input you can do the following
    // const ext = allowedTypes.indexOf(e.target.files[0].type) > -1 ? e.target.files[0].type : null
    // temp.pipelineObject.lineup = [ { name: useImgName, modif: modif, id: uuidv4(), image: new File([e.target.files[0]], `${useImgName}.${ext}`, { type: e.target.files[0].type })) } ]
    // // The same works with product images
    // temp.pipelineObject.images = [ { name: useImgName, modif: modif, id: uuidv4(), image: new File([e.target.files[0]], `${useImgName}.${ext}`, { type: e.target.files[0].type })) } ]
    setImgCache(useForm);
  });

  /*This handles line up image */
  const handleLineupImage = React.useCallback((files, i) => {
    const useForm = imgCache;
    const useImgName = uuidv4();
    const modif = 'lineup'; // Valid names are 'featureImg', 'leadImg', 'productImg', 'lineup'
    let ext;
    // Option 1: Use the method below to apply to shared imgCache and imgFor
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
    const imageObject = {
      name: `${useImgName}.${ext}`,
      modif: modif,
      id: uuidv4(),
    };

    /* We might not need this */
    // if (modif === 'lineup') {
    //   console.log('helooooo', lineUpInfo);
    //   imageObject.title = lineUpInfo[i].title;
    //   // imageObject.description = 'Lineup Description';
    //   // imageObject.time = '14:30';
    // }
    useTempImgFor.push(imageObject);
    setImgFor(useTempImgFor);

    //// Option 2: If you want to merge the temporary file cache "imgCache" and image info "surveyState.imgFor" into surveyState.pipelineObject keys for simpler transformation during input you can do the following
    // const ext = allowedTypes.indexOf(e.target.files[0].type) > -1 ? e.target.files[0].type : null
    // temp.pipelineObject.lineup = [ { name: useImgName, modif: modif, id: uuidv4(), image: new File([e.target.files[0]], `${useImgName}.${ext}`, { type: e.target.files[0].type })) } ]
    //// The same works with product images
    // temp.pipelineObject.images = [ { name: useImgName, modif: modif, id: uuidv4(), image: new File([e.target.files[0]], `${useImgName}.${ext}`, { type: e.target.files[0].type })) } ]
    setImgCache(useForm);
  });

  const handleImageUpload = (e) => {
    console.log('EEE', e);
    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log('lll', event);
        setSelectedImage(event?.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const setSurveyStateDefault = () => {
    const pipelineDbItem = {
      id: uuidv4(),
      shop: props?.shop?.id ?? null,
      name: '',
      detailmeta: {
        productType: 'virtual',
        livestream: true,
        lineup: [],
        ticket: true,
      },
      styles: [defaultStyle()],
      shipping: [],
      published: false,
      images: [],
      protype: {
        type: 'virtual',
        subscription: false,
      },
      infinite: false,
      meta: {},
      files: {},
      new: true,
    };
    setPipelineDbItem(pipelineDbItem);
  };

  const deletePerformer = (index) => {
    const updatedLineUpInfo = [...lineUpInfo];
    updatedLineUpInfo.splice(index, 1);
    const updatedPipelineObject = {
      ...eventDetails,
      detailmeta: {
        ...pipelineObject.detailmeta,
        lineup: updatedLineUpInfo,
      },
    };
    setEventDetails(updatedPipelineObject);
    setLineUpInfo(updatedLineUpInfo);
  };

  const handleLineupUpload = (e, index) => {
    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log('fillee', e?.target?.result);
        const updatedLineUp = [...lineUpInfo];
        updatedLineUp[index].image = file;
        updatedLineUp[index].file = event?.target?.result;
        setLineUpInfo(updatedLineUp);
      };
      reader.readAsDataURL(file);
    }
  };

  const doFunc = async () => {
    console.log('Run', pipelineDbItem);
    imgCache.getAll('image').map((m) => console.log(m));
    try {
      const res = await apiReq('/product/createProduct', {
        apiUrl: props?.apiUrl,
        pipelineDbItem: pipelineDbItem,
        pipelineObject: eventDetails,
        imgCache: imgCache,
        imgFor,
        _loggedIn: props?._loggedIn,
      });
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      toast({
        title: 'Error!',
        description:
          'An error occurred while creating the product. Please try again later.',
        status: 'error',
      });
    }
  };

  const addPerformer = () => {
    setLineUpInfo([...lineUpInfo, { title: '', image: null }]);
  };

  const handleButtonClick = async (e) => {
    console.log(imgCache, imgFor, pipelineDbItem, pipelineObject);
    e.preventDefault();
    await doFunc();
    setSent(true);
    toast({
      title: 'Success!',
      description:
        'Congrats! Your event has been created successfully. You can share a link to the events page, or add it to your marketing.',
      action: <ToastAction altText='Goto schedule to undo'>Undo</ToastAction>,
    });
    reset();
    setEventDetails({});
    setStep(1);
    setSelectedImage(null);
    setLineUpInfo([]);
    setbannerImage('');
    setSent(false);
    router.push('/studio');
  };

  return (
    <StudioLayout {...props}>
      {step === 1 && (
        <div className='max-w-[500px] mx-auto font-lexend mt-[2rem] mb-[12rem]'>
          <form className='relative' action='' onSubmit={() => setStep(2)}>
            <div>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold text-lg'>Create event</h1>
                <p>
                  Step {step} <span className='text-dashtext'>of 3</span>
                </p>
              </div>
              <p className='text-dashtext text-sm mt-2'>
                Don&apos;t worry if you need a break! Your event details are
                saved as a draft. Come back and complete it anytime.
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
                        handleImageUpload={(file) => {
                          onChange(file);
                        }}
                        handleNewFile={handleNewFile}
                        setbannerImage={setbannerImage}
                        bannerImage={bannerImage}
                      />
                    )}
                  />
                </div>
                <div className='space-y-2 mt-8'>
                  <label htmlFor='title'>
                    {' '}
                    What is the title of your event?
                  </label>
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
                  <label htmlFor='description'>
                    Discount (Leave empty if none)
                  </label>
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
                type='submit'
                className='dark:bg-accentY dark:text-white dark:hover:bg-accentY hover:bg-opacity-[0.8] hover:border-accentY focus:border-accentY outline-none shadow-none'
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className='max-w-[500px] mx-auto font-lexend mt-[2rem] mb-[12rem]'>
          <form onSubmit={handleSubmit(onSubmit)} className='relative'>
            <div>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold text-lg'>Create event</h1>
                <p>
                  Step {step} <span className='text-dashtext'>of 3</span>
                </p>
              </div>
              <p className='text-dashtext text-sm mt-2'>
                Don&apos;t worry if you need a break! Your event details are
                saved as a draft. Come back and complete it anytime.
              </p>
            </div>
            <Card className=' dark:bg-transparent mt-8'>
              <CardTitle className='p-4'>Enter performers</CardTitle>
              <CardContent className='space-y-4 mt-4'>
                <div className='space-y-2'>
                  <p className='mb-8'>HEADLINER</p>
                  <label htmlFor='title'>Performer name and photo</label>
                  <div className='flex items-center gap-x-2'>
                    <Input
                      name='headliner.name'
                      placeholder='Asake'
                      className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                      ref={register}
                      {...register('headliner.name')}
                    />
                    <Controller
                      control={control}
                      name={'headliner.image'}
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
                        name='headliner.bio'
                        placeholder='Enter bio'
                        className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                        ref={register}
                        {...register('headliner.bio')}
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
                <h3 className='text-dashtext'>OTHER PERFORMERS</h3>
                <div className='space-y-4'>
                  {lineUpInfo.map((performer, index) => (
                    <div key={index} className='space-y-2'>
                      <label htmlFor='title'>Performer name and photo</label>
                      <div className='flex gap-2 mb-2'>
                        <Input
                          name={`detailmeta.lineup[${index}].title`}
                          placeholder='Enter artist, performer or band name'
                          className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                          {...register(`detailmeta.lineup[${index}].title`)}
                        />
                        <Controller
                          control={control}
                          name={`detailmeta.lineup[${index}].image`}
                          render={({
                            field: { onChange, value, ...field },
                          }) => (
                            <Input
                              {...field}
                              value={value?.fileName}
                              name={`detailmeta.lineup[${index}].image`}
                              placeholder='Upload image'
                              accept='image/*'
                              className='w-36'
                              onChange={(e) => {
                                onChange(e.target.files[0]);
                                handleLineupUpload(e, index);
                                handleLineupImage(e.target.files);
                              }}
                              type='file'
                              id={`picture-${index}`}
                            />
                          )}
                        />
                      </div>
                      {performer.image && (
                        <div className='flex gap-x-2'>
                          <img
                            src={performer.file}
                            alt='Performer'
                            className='w-10 h-10 rounded-full object-cover'
                          />
                          <Button
                            className='text-red-500 ml-2'
                            onClick={() => deletePerformer(index)}
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
      )}
      {step === 3 && eventDetails && (
        <div className='relative mt-[20px] mb-[12rem]'>
          <div
            className='flex flex-col rounded-[8px] py-4 px-8 shadow-Txl gap-2 h-40 items-center justify-center'
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0)) , url(${bannerImage})`,
              backgroundSize: 'cover',
            }}
          >
            <h3 className='font-bold text-4xl text-white'>
              {eventDetails.name}
            </h3>
            <div className='text-dashtext flex gap-4 text-sm'>
              <div className='flex items-center gap-1'>
                <CalendarTodayOutlinedIcon className='w-3' />
                <p className='  text-white font-medium'>
                  {eventDetails.date && format(eventDetails.date, 'PPP')}
                </p>
              </div>
              <div className='flex items-center gap-1'>
                <AccessTimeOutlinedIcon className='w-3' />
                <p className='  text-white font-medium'>
                  {eventDetails.startTime}
                </p>
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
                <div className='space-y-4'>
                  <p>Performers</p>
                  <p className='text-dashtext'>HEADLINER</p>
                  <div className='flex items-center gap-x-2'>
                    <img
                      src={selectedImage}
                      alt=''
                      className='w-14 h-14 object-cover rounded-full'
                    />
                    <p>{eventDetails.headliner.name}</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <p className='text-dashtext'>OTHER PERFORMERS</p>
                  <div className='flex flex-wrap gap-x-4 mt-4'>
                    {eventDetails.detailmeta.lineup.map((performer, index) => (
                      <div key={index} className='flex'>
                        <div className='flex items-center gap-x-2'>
                          <img
                            src={lineUpInfo[index]?.file}
                            alt=''
                            className='w-14 h-14 rounded-full object-cover'
                          />
                          <p>{performer.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {!sent && (
                <div className='flex gap-x-2 mt-4'>
                  <input type='checkbox' />
                  <p className='text-sm'>
                    Checking this button confirms your acceptance of our
                    <span className='underline'>event creation guidelines</span>
                    , which detail the process and expectations for creating
                    events.
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
      )}
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

export default Create;
