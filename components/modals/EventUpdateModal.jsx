import React, { useState, useEffect, useCallback } from 'react';
import Close from '@mui/icons-material/Close';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { DatePickerDemo } from '@/components/inputs/DatePicker';
import { Input } from '@/components/ui/input';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import apiReq from '/modules/utility/api/apiReq';
import { v4 as uuidv4 } from 'uuid';
import useSurveyStore from '../../hooks/store';
import UploadZone from '@/components/inputs/UploadZone';

const EventUpdateModal = (props) => {
  const { setModalOpen, ticket } = props;
  const {
    register,
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors },
  } = useForm();

  const {
    imgCache,
    setImgCache,
    lineUpInfo,
    setLineUpInfo,
    imgFor,
    setImgFor,
    selectedImage,
    setSelectedImage,
    pipelineDbItem,
    setPipelineDbItem,
    eventDetails,
    bannerImage,
    setbannerImage,
    setEventDetails,
  } = useSurveyStore();

  const [componentDidMount, setComponentDidMount] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!componentDidMount) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res2 = await apiReq('/fetch/fetchhandler', {
            handlerArgs: [
              {
                productReq: [ticket?.id],
              },
            ],
          });
          if (res2?.data?.fetchedData[0]?.productReq[0]) {
            const data = res2?.data?.fetchedData[0]?.productReq[0];
            setSurveyStateDefault(data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
      setComponentDidMount(true);
    }
  }, [componentDidMount, ticket?.id]);

  const setSurveyStateDefault = (data) => {
    setPipelineDbItem(data);
    setLineUpInfo(data?.detailmeta?.lineup);
  };

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

  const handleLineupUpload = useCallback(
    (e, index) => {
      const tempId = lineUpInfo[index]?.id;
      const file = e?.target?.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const updatedLineUp = [...lineUpInfo];
          updatedLineUp[index] = {
            ...updatedLineUp[index],
            // image: file,
            file: event?.target?.result,
          };
          setLineUpInfo(updatedLineUp);
        };
        reader.readAsDataURL(file);
      }

      const useForm = imgCache;
      const useImgName = uuidv4();
      const modif = 'lineup';
      let ext;

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

      const imageObject = {
        name: `${useImgName}.${ext}`,
        modif: modif,
        id: tempId,
      };

      const useTempImgFor = imgFor;
      useTempImgFor.push(imageObject);
      setImgFor(useTempImgFor);
      setImgCache(useForm);
    },
    [
      imgCache,
      imgFor,
      lineUpInfo,
      setImgCache,
      setImgFor,
      setLineUpInfo,
      allowedTypes,
    ]
  );
  // Add this useEffect to log changes to lineUpInfo
  useEffect(() => {
    console.log('lineUpInfo changed:', lineUpInfo);
  }, [lineUpInfo]);

  // this is not working yet. Just addPerformer
  const deletePerformer = useCallback(
    (index) => {
      const updatedLineUpInfo = lineUpInfo;
      updatedLineUpInfo.splice(index, 1);

      const updatedPipelineDbItem = {
        ...pipelineDbItem,
        detailmeta: {
          ...pipelineDbItem.detailmeta,
          lineup: updatedLineUpInfo,
        },
      };
      setPipelineDbItem(updatedPipelineDbItem);

      setLineUpInfo(updatedLineUpInfo);
    },
    [lineUpInfo]
  );

  const addPerformer = useCallback(() => {
    const updatedLineUpInfo = lineUpInfo;
    updatedLineUpInfo.push({ id: uuidv4(), title: '', image: null, bio: '' });
    setLineUpInfo(updatedLineUpInfo);
  }, [lineUpInfo]);

  const onSubmit = async (data) => {
    setLoading(true);
    await trigger();
    let usePipelineDbItem = { ...pipelineDbItem };

    // Update lineUpInfo with new titles from data.detailmeta.lineup
    const updatedLineUpInfo = lineUpInfo.map((item, index) => ({
      ...item,
      title: data.detailmeta.lineup[index]?.title || item.title,
      bio: data.detailmeta.lineup[index]?.bio || item.bio,
    }));

    // Update data.detailmeta.lineup with the updatedLineUpInfo
    pipelineDbItem.detailmeta.lineup = updatedLineUpInfo;

    // Update the lineUpInfo state
    setLineUpInfo(updatedLineUpInfo);

    console.log(
      'lineupInfor',
      lineUpInfo,
      updatedLineUpInfo,
      data,
      imgFor,
      imgCache,
      pipelineDbItem
    );
    imgCache?.getAll
      ? imgCache.getAll('image').map((m) => console.log(m))
      : null;

    const totalProductImages = imgFor.filter(
      (m) => ['featureImg', 'leadImg', 'productImg'].indexOf(m?.modif) > -1
    );
    if (usePipelineDbItem?.images?.[0] && totalProductImages?.length > 0) {
      // We only want 1 single image so remove existing if present
      usePipelineDbItem.images.splice(0, 1);
    }

    const res = await apiReq('/product/createProduct', {
      apiUrl: props?.apiUrl,
      pipelineDbItem: usePipelineDbItem,
      pipelineObject: data,
      imgCache: imgCache,
      imgFor: imgFor,
      _loggedIn: props?._loggedIn,
    });
    // setComponentDidMount(false);

    if (res && res.product) {
      setModalOpen(false);
      setLoading(false);
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className='absolute w-full left-0 z-40 flex justify-center px-4 '>
        <div className=' p-8 md:max-w-[500px] w-full mt-14 mb-4 overflow-y-hidden '>
          <div className='max-w-screen-2xl mx-auto w-full pb-10 '>
            <div className='h-[500px] w-full flex items-center justify-center'>
              <Loader2 className='h-6 w-6 text-slate-300 animate-spin' />
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log(imgCache, imgFor, lineUpInfo);

  return (
    <div className='absolute w-full left-0 z-40 bg-black/80 flex justify-center overflow-y-scroll px-4'>
      <div className='bg-dashBg p-8 md:max-w-[500px] w-full mt-14 mb-4 overflow-y-scroll'>
        <div className='flex w-full justify-between items-center'>
          <h3>Modify Event</h3>
          <div className='cursor-pointer rounded-full bg-dashSides flex items-center justify-center w-8 h-8'>
            <Close
              className='mx-auto my-auto'
              onClick={() => setModalOpen(false)}
            ></Close>
          </div>
        </div>
        <div>
          <form
            className='relative mb-12'
            action=''
            onSubmit={handleSubmit(onSubmit)}
          >
            <Card className=' dark:bg-transparent mt-8'>
              <CardContent className='space-y-4 mt-4'>
                <div className='flex flex-col justify-center space-y-2'>
                  <label htmlFor=''>Banner image</label>
                  <Controller
                    control={control}
                    name='banner.image'
                    render={({
                      field: { onChange },
                      fieldState: { error },
                    }) => (
                      <>
                        <UploadZone
                          handleImageUpload={(file) => {
                            onChange(file);
                          }}
                          handleNewFile={(e) => handleNewFile(e)}
                          setbannerImage={setbannerImage}
                          bannerImage={bannerImage}
                          defaultImage={`${props?.cdn?.static}/${pipelineDbItem?.images?.[0]?.name}`} // Added defaultImage prop
                        />
                        {error && (
                          <p className='text-red-500 text-xs'>
                            {error.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className='space-y-2 mt-8'>
                  <label htmlFor='title'>
                    {' '}
                    What is the title of your event?
                  </label>
                  <div>
                    <Input
                      name='name'
                      id='title'
                      placeholder='Event title'
                      defaultValue={pipelineDbItem.name}
                      className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'event must have a title',
                        },
                        min: 5,
                      })}
                    />
                    <p className='text-red-600 text-sm mt-1'>
                      {errors.name?.message}
                    </p>
                  </div>
                </div>
                <div className='space-y-2'>
                  <label htmlFor='description'>Description</label>
                  <Input
                    name='description'
                    placeholder='A time to party!'
                    defaultValue={pipelineDbItem?.detailmeta?.description}
                    className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                    {...register('description')}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor='stream start'>
                    When does your stream start and end?
                  </label>
                  <div className='flex flex-col gap-x-2 gap-y-2 '>
                    <div className='relative w-full'>
                      <Controller
                        control={control}
                        name={'date'}
                        defaultValue={pipelineDbItem?.meta?.date}
                        render={({ field: { value, onChange, ...field } }) => {
                          return (
                            <DatePickerDemo
                              className='dark:text-white'
                              value={value} // Pass value from the form control to the DatePickerDemo
                              onChange={onChange}
                            />
                          );
                        }}
                      />
                    </div>
                    <div className='flex'>
                      <div className='relative'>
                        <Input
                          placeholder='Start time'
                          type='time'
                          defaultValue={pipelineDbItem?.meta?.startTime}
                          className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium w-full'
                          {...register('startTime')}
                        />
                      </div>
                      <div className='relative'>
                        <Input
                          placeholder='End time'
                          type='time'
                          defaultValue={pipelineDbItem?.meta?.endTime}
                          className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium w-full'
                          {...register('endTime')}
                        />
                        {/* <SearchOutlinedIcon className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground' /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-2'>
                  <label htmlFor='venue'>Where is it happening ?</label>
                  <Input
                    name='venue'
                    placeholder='Type the venue address'
                    defaultValue={pipelineDbItem?.meta?.venue}
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
                      defaultValue={
                        pipelineDbItem?.styles &&
                        pipelineDbItem?.styles[0] &&
                        pipelineDbItem?.styles[0]?.price
                      }
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
                      defaultValue={
                        pipelineDbItem?.styles &&
                        pipelineDbItem?.styles[0] &&
                        pipelineDbItem?.styles[0]?.quantity
                      }
                      className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                      {...register('quantity')}
                    />
                  </div>
                  <div className=''>
                    <div>
                      <h2 className='mt-4'>Enter performers</h2>
                    </div>
                    <p className='my-4  text-dashtext text-sm'>HEADLINER</p>
                    <label className='mb-4' htmlFor='title'>
                      Performer name and photo
                    </label>
                    <div className='flex items-center gap-x-2 mt-4'>
                      <Input
                        name='detailmeta.lineup[0].title'
                        placeholder='Asake'
                        defaultValue={
                          pipelineDbItem.detailmeta.lineup[0]?.title
                        }
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
                          defaultValue={
                            pipelineDbItem.detailmeta.lineup[0]?.bio
                          }
                          placeholder='Enter bio'
                          className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                          ref={register}
                          {...register('detailmeta.lineup[0].bio')}
                        />
                      </div>
                    </div>
                    {(selectedImage && (
                      <div>
                        <img
                          src={selectedImage}
                          alt='Selected Image'
                          className='mt-4 w-20 h-20 rounded-full object-cover'
                        />
                      </div>
                    )) ||
                      (pipelineDbItem.detailmeta.lineup[0]?.image && (
                        <div>
                          <img
                            src={`${props?.cdn?.static}/${pipelineDbItem.detailmeta.lineup[0].image}`}
                            alt='Selected Image'
                            className='mt-4 w-10 h-10 rounded-full object-cover'
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <hr className='w-full mt-6' />
                <h3 className=''>OTHER PERFORMERS</h3>
                <div className='space-y-4'>
                  {Array.isArray(lineUpInfo) &&
                    lineUpInfo.slice(1).map((performer, index) => (
                      <div key={performer.id} className='space-y-2'>
                        <label htmlFor='title'>Performer name and photo</label>
                        <div className='flex gap-2 mb-2'>
                          <Input
                            name={`detailmeta.lineup[${index + 1}].title`}
                            defaultValue={performer.title}
                            placeholder='Enter artist, performer or band name'
                            className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                            {...register(
                              `detailmeta.lineup[${index + 1}].title`
                            )}
                          />
                          <Controller
                            control={control}
                            name={`detailmeta.lineup[${index + 1}].image`}
                            render={({
                              field: { onChange, value, ...field },
                            }) => (
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
                                }}
                                type='file'
                                id={`picture-${index}`}
                              />
                            )}
                          />
                        </div>
                        {(performer.file || performer.image) && (
                          <div className='flex gap-x-2'>
                            <img
                              src={
                                performer.file ||
                                `${props?.cdn?.static}/${performer.image}`
                              }
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
                      defaultValue={pipelineDbItem.meta.host.title}
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
                      defaultValue={pipelineDbItem.meta.host.bio}
                      className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                      ref={register}
                      {...register('host.bio')}
                    />
                  </div>
                </div>
                <button className='w-full bg-accentY rounded-[8px]'>
                  Modify
                </button>
                <div className='mt-4 space-x-2 w-full'>
                  <hr />
                  <p className='text-sm mt-4'>Cancel this event</p>
                  <div className='flex gap-4 w-full justify-between my-4 align-top'>
                    <Input type='checkbox' className='w-6 h-6' />
                    <p className='text-[10px] text-dashtext'>
                      Cancelling an event can disappoint your audience and
                      affect your reputation. Check this box to confirm that you
                      understand the implications.
                    </p>
                  </div>
                  <button
                    disabled
                    className='dark:bg-[#E62222] dark:bg-opacity-[5%] dark:text-[#E62222] border-[1px] dark:hover:bg-opacity-[8%] p-[8px] px-[12px] rounded-[8px] w-full  hover:shadow-none hover:outline-none hover:text-red-800 hover:border-none'
                  >
                    Cancel event
                  </button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventUpdateModal;
