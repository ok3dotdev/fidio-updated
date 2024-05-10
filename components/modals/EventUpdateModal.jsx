import React from 'react';
import Close from '@mui/icons-material/Close';
import { Card, CardContent } from '@/components/ui/card';
import { DatePickerDemo } from '@/components/inputs/DatePicker';
import { Input } from '@/components/ui/input';
import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import apiReq from '/modules/utility/api/apiReq'; // Import API for making DB Requests
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import { v4 as uuidv4 } from 'uuid';

const EventUpdateModal = ({ setModalOpen, ticket }) => {
  console.log('iddddd', ticket?.id);
  const { register, handleSubmit, reset, control, setValue } = useForm();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [surveyState, setSurveyState] = React.useState({
    answers: {},
    currentStage: null,
    pipelineDbItem: {},
    pipelineObject: {},
    imgFor: [],
  });

  React.useEffect(() => {
    if (!componentDidMount) {
      const f = async () => {
        const res2 = await apiReq('/fetch/fetchhandler', {
          handlerArgs: [
            {
              productReq: [ticket?.id],
            },
          ],
        });
        console.log('res', res2);
        if (res2?.data?.fetchedData[1]?.productReq[0]) {
          const temp = surveyState;
          temp.pipelineDbItem = res2?.data?.fetchedData[1]?.productReq[0];
          setSurveyStateDefault(data);
        }
      };
      f();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);

  const setSurveyStateDefault = (data) => {
    const temp = surveyState;
    temp.pipelineDbItem = data;
    setSurveyState(temp);
  };

  console.log('item', surveyState.pipelineDbItem);

  const allowedTypes = ['image/jpeg', 'image/png'];

  // This will add the file to the FormData instance and append it to the appropriate array during API call
  const handleNewFile = React.useCallback((e) => {
    const useForm = imgCache;
    const useImgName = uuidv4();
    const modif = 'featureImg'; // Valid names are 'featureImg', 'leadImg', 'productImg', 'lineup'
    const temp = surveyState;
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
    const useTempImgFor = temp.imgFor;
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
    temp.imgFor = useTempImgFor;

    //// Option 2: If you want to merge the temporary file cache "imgCache" and image info "surveyState.imgFor" into surveyState.pipelineObject keys for simpler transformation during input you can do the following
    // const ext = allowedTypes.indexOf(e.target.files[0].type) > -1 ? e.target.files[0].type : null
    // temp.pipelineObject.lineup = [ { name: useImgName, modif: modif, id: uuidv4(), image: new File([e.target.files[0]], `${useImgName}.${ext}`, { type: e.target.files[0].type })) } ]
    //// The same works with product images
    // temp.pipelineObject.images = [ { name: useImgName, modif: modif, id: uuidv4(), image: new File([e.target.files[0]], `${useImgName}.${ext}`, { type: e.target.files[0].type })) } ]
    setSurveyState(temp);
    setImgCache(useForm);
  });

  const publishProduct = async () => {
    console.log('Run', surveyState);
    const res = await apiReq('/product/createProduct', {
      apiUrl: props?.apiUrl,
      pipelineDbItem: surveyState.pipelineDbItem,
      pipelineObject: surveyState.pipelineObject,
      imgCache: imgCache,
      imgFor: surveyState.imgFor,
      _loggedIn: props?._loggedIn, // Requires Authentication
    });
    console.log('Published!', res);
  };

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
          <form className='relative mb-12' action='' onSubmit={() => trigger()}>
            <Card className=' dark:bg-transparent mt-8'>
              <CardContent className='space-y-4 mt-4'>
                <div className='space-y-2 mt-8'>
                  <label htmlFor='title'>
                    {' '}
                    What is the title of your event?
                  </label>
                  <Input
                    name='name'
                    id='title'
                    placeholder='Event title'
                    defaultValue={ticket?.name}
                    className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Event must have a title',
                      },
                      min: 5,
                    })}
                  />
                </div>
                {/* <p>{errors.name?.message}</p> */}
                <div className='space-y-2'>
                  <label htmlFor='description'>Description</label>
                  <Input
                    name='description'
                    placeholder='A time to party!'
                    defaultValue={ticket?.detailmeta?.description}
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
                        defaultValue={ticket?.created?.split(' ')[0]}
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
                        defaultValue={ticket?.meta?.startTime}
                        className='bg-dashSides border-[1px] dark:border-dashBorder text-white font-medium'
                        {...register('startTime')}
                      />
                    </div>
                    <div className='relative'>
                      <Input
                        placeholder='End time'
                        type='time'
                        defaultValue={ticket?.meta?.endTime}
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
                    defaultValue={ticket?.meta?.venue}
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
                        ticket?.styles &&
                        ticket?.styles[0] &&
                        ticket?.styles[0]?.price
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
                        ticket?.styles &&
                        ticket?.styles[0] &&
                        ticket?.styles[0]?.quantity
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
                    {/* {selectedImage && (
                      <div>
                        <img
                          src={selectedImage}
                          alt='Selected Image'
                          className='mt-4 w-20 h-20 rounded-full object-cover'
                        />
                      </div>
                    )} */}
                  </div>
                </div>
                <hr className='w-full mt-6' />
                <h3 className=''>OTHER PERFORMERS</h3>
                <div className='space-y-4'>
                  {/* {lineUpInfo.slice(1).map((performer, index) => (
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
                  ))} */}
                  <div>
                    <Button
                      type='button'
                      onClick={{}}
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
