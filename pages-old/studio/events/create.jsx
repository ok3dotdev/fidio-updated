import React, { useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { pageDefaults } from '/app.config';

import { useForm } from 'react-hook-form';
import useSurveyStore from '../../../hooks/store';

import EventDetailsForm from '@/components/forms/EventDetailsForm';
import ArtistDetailsForm from '@/components/forms/ArtistDetailsForm';
import EventPreviewStep from '@/components/steps/EventPreviewStep';

import { getServerSidePropsDefault } from '/modules/utility.js';
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import StudioLayout from '@/components/Layouts/studio/StudioLayout';

const pageName = 'create';

const Create = (props) => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors },
  } = useForm();

  const { eventDetails, setPipelineDbItem, step } = useSurveyStore();

  useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(true);
      setSurveyStateDefault();
    }
  }, [componentDidMount]);

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

  return (
    <StudioLayout {...props} showNav>
      {step === 1 && (
        <EventDetailsForm
          control={control}
          register={register}
          errors={errors}
          trigger={trigger}
          handleSubmit={handleSubmit}
        />
      )}
      {step === 2 && (
        <ArtistDetailsForm
          control={control}
          register={register}
          reset={reset}
          handleSubmit={handleSubmit}
        />
      )}
      {step === 3 && eventDetails && (
        <EventPreviewStep reset={reset} info={props} />
      )}
    </StudioLayout>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default Create;
