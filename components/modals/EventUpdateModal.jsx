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
    <div className='absolute w-full inset-0 z-40 bg-black/80 flex justify-center overflow-y-scroll px-4'>
      <div className='bg-dashBg p-8 md:max-w-[500px] w-full mt-14 mb-4 overflow-y-auto'>
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
                // type='submit'
                onClick={() => {
                  trigger();
                }}
                className='dark:bg-accentY dark:text-white dark:hover:bg-accentY hover:bg-opacity-[0.8] hover:border-accentY focus:border-accentY outline-none shadow-none'
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventUpdateModal;
