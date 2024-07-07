import React, { useState, useEffect } from 'react';
import StudioLayout from '@/components/Layouts/studio/StudioLayout';
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
import ArtistDetailsForm from '../../../components/forms/ArtistDetailsForm';

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
    //console.log('DATA', data);
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

  // useEffect(() => {
  //   if (eventDetails) {
  //     console.log(
  //       'dataaaaaa3',
  //       eventDetails,
  //       pipelineDbItem,
  //       pipelineObject,
  //       imgCache,
  //       imgFor
  //     );
  //   }
  // }, [eventDetails]);

  useEffect(() => {
    if (pipelineDbItem) {
      //console.log('dataaaaaa3', pipelineDbItem);
    }
  }, [pipelineDbItem]);

  const allowedTypes = ['image/jpeg', 'image/png'];

  const handleNewFile = React.useCallback((files) => {
    //console.log('files', files);
    const useForm = imgCache;
    const useImgName = uuidv4();
    useForm.append(
      'image',
      Array.from(files)
        .filter((m) => allowedTypes.indexOf(m.type) > -1)
        .map((m) => {
          var blob = m.slice(0, m.size, m.type);
          const ext =
            allowedTypes[allowedTypes.indexOf(m.type)].match(
              /\/([a-zA-Z0-9].*)/
            )[1];
          return new File([blob], `${useImgName}.${ext}`, { type: m.type });
        })[0]
    );
    const modif = 'featureImg'; // Valid in 'featureImg', 'leadImg'
    const useTempImgFor = imgFor;
    useTempImgFor.push({ name: useImgName, modif: modif });
    setImgFor(useTempImgFor);
    setImgCache(useForm);
  });

  const handleImageUpload = (e) => {
    //console.log('EEE', e);
    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        //console.log('lll', event);
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
        //console.log('fillee', e?.target?.result);
        const updatedLineUp = [...lineUpInfo];
        updatedLineUp[index].image = file;
        updatedLineUp[index].file = event?.target?.result;
        setLineUpInfo(updatedLineUp);
      };
      reader.readAsDataURL(file);
    }
  };

  const doFunc = async () => {
    //console.log('fdhggdgrh');
    setSurveyStateDefault();
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
        //console.log(res);
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
    e.preventDefault();
    await doFunc();
    setSent(true);
    toast({
      title: 'Success!',
      description:
        'Congrats! Your event has been created successfully. You can share a link to the events page, or add it to your marketing.',
      action: <ToastAction altText='Goto schedule to undo'>Undo</ToastAction>,
    });
    router.push('/studio');
  };

  return (
    <StudioLayout {...props}>
      <div className='max-w-[500px] mx-auto font-lexend mt-[2rem] mb-[12rem]'>
        <form className='relative' action='' onSubmit={() => setStep(2)}>
          {step === 1 && (
            <EventDetailsForm
              handleNewFile={handleLineupUpload}
              setbannerImage={setbannerImage}
              bannerImage={bannerImage}
              register={register}
              control={control}
            />
          )}
          {step === 2 && (
            <ArtistDetailsForm
              handleLineupUpload={handleLineupUpload}
              setbannerImage={setbannerImage}
              bannerImage={bannerImage}
              register={register}
              control={control}
              lineUpInfo={lineUpInfo}
              onSubmit={onSubmit}
            />
          )}
        </form>
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

export default Create;
