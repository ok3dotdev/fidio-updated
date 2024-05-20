import React, { useState, useEffect } from 'react';
import StudioLayout from '@/components/Layouts/studio/StudioLayout';
import apiReq from '/modules/utility/api/apiReq';
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useRouter } from 'next/router';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import useSurveyStore from '../../../hooks/store';

import { useForm, Controller } from 'react-hook-form';
import EventDetailsForm from '@/components/forms/EventDetailsForm';
import ArtistDetailsForm from '@/components/forms/ArtistDetailsForm';
import EventPreviewStep from '@/components/steps/EventPreviewStep';

const pageName = 'create';

const Create = (props) => {
  const { register, handleSubmit, reset, control, formState, trigger } =
    useForm({
      reValidateMode: 'onChange',
      mode: 'onchange',
    });
  const [selectedImage, setSelectedImage] = useState(null);
  const [bannerImage, setbannerImage] = useState(null);
  const [lineUpInfo, setLineUpInfo] = useState([]);
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [sent, setSent] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { errors } = formState;

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

  useEffect(() => {
    if (imgFor) {
      // //console.log('imgForqq', imgFor);
    }
  }, [imgFor]);

  const onSubmit = (data) => {
    //console.log('DATA', data);
    //console.log('info', lineUpInfo);
    setSurveyStateDefault();
    const updatedLineup = lineUpInfo.map((performer, index) => ({
      id: performer.id || uuidv4(),
      title: data.detailmeta?.lineup[index]?.title || '',
      image: performer.image || eventDetails?.detailmeta?.lineup[index]?.image,
      bio: data?.detailmeta?.lineup[index]?.bio,
    }));
    //console.log('updated event', updatedLineup);

    const updatedEventDetails = {
      ...eventDetails,
      ...data,
      detailmeta: {
        ...eventDetails.detailmeta,
        lineup: updatedLineup,
      },
    };
    //console.log('updated event dets', updatedEventDetails);

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
    //   //console.log('helooooo', lineUpInfo);
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

  //Handles headliner image set
  const handleImageUpload = (e) => {
    //console.log('EEE', e);
    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
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
    //console.log('index', index);
    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        //console.log('fillee', e?.target?.result);
        const updatedLineUp =
          index === 0 ? [{ title: '', image: null, bio: '' }] : [...lineUpInfo];
        updatedLineUp[index].image = file;
        updatedLineUp[index].file = event?.target?.result;
        setLineUpInfo(updatedLineUp);
      };
      reader.readAsDataURL(file);
    }
  };

  const doFunc = async () => {
    // //console.log('Run', pipelineDbItem, eventDetails);
    // imgCache.getAll('image').map((m) => //console.log(m));
    eventDetails.lineup = eventDetails.detailmeta.lineup;
    for (let i = 0; i < imgFor.length; i++) {
      //console.log(imgFor[i], pipelineObject.lineup);
    }
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
    setLineUpInfo([...lineUpInfo, { title: '', image: null, bio: '' }]);
  };

  const handleButtonClick = async (e) => {
    // console.log(
    //   'CREATEBUTTON',
    //   imgCache,
    //   imgFor,
    //   pipelineDbItem,
    //   pipelineObject
    // );
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
    setImgCache(new FormData());
    setImgFor([]);
    setPipelineObject({});
    setPipelineDbItem({});
    router.push('/studio');
  };

  return (
    <StudioLayout {...props} showNav>
      {step === 1 && (
        <div className='max-w-[500px] mx-auto font-lexend mt-[2rem] mb-[12rem]'>
          <div>
            <div className='flex justify-between items-center'>
              <h1 className='font-bold text-lg'>Create event</h1>
              <p>
                Step {step} <span className='text-dashtext'>of 3</span>
              </p>
            </div>
            <p className='text-dashtext text-sm mt-2'>
              Don&apos;t worry if you need a break! Your event details are saved
              as a draft. Come back and complete it anytime.
            </p>
          </div>
          <EventDetailsForm
            handleNewFile={handleNewFile}
            setbannerImage={setbannerImage}
            bannerImage={bannerImage}
            register={register}
            control={control}
            Controller={Controller}
            errors={errors}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
      {step === 2 && (
        <div className='max-w-[500px] mx-auto font-lexend mt-[2rem] mb-[12rem]'>
          <div>
            <div className='flex justify-between items-center'>
              <h1 className='font-bold text-lg'>Create event</h1>
              <p>
                Step {step} <span className='text-dashtext'>of 3</span>
              </p>
            </div>
            <p className='text-dashtext text-sm mt-2'>
              Don&apos;t worry if you need a break! Your event details are saved
              as a draft. Come back and complete it anytime.
            </p>
          </div>
          <ArtistDetailsForm
            handleImageUpload={handleImageUpload}
            onSubmit={handleSubmit(onSubmit)}
            handleLineupUpload={handleLineupUpload}
            selectedImage={selectedImage}
            handleLineupImage={handleLineupImage}
            lineUpInfo={lineUpInfo}
            addPerformer={addPerformer}
            register={register}
            control={control}
            Controller={Controller}
            trigger={trigger}
          />
        </div>
      )}
      {step === 3 && eventDetails && (
        <div className='relative mt-[20px] mb-[12rem]'>
          <EventPreviewStep
            sent={sent}
            setSent={setSent}
            bannerImage={bannerImage}
            lineUpInfo={lineUpInfo}
            handleButtonClick={handleButtonClick}
            selectedImage={selectedImage}
          />
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
