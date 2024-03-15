import React from 'react';
import StudioLayout from '@/components/Layouts/StudioLayout';

import { Survey } from '/modules/survey';
import apiReq from '/modules/utility/api/apiReq';
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import { v4 as uuidv4 } from 'uuid';

import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import EventDetailsStep from '@/components/steps/EventDetailsStep';
import { validationCheck } from '../../../lib/utils';

const pageName = 'create';

const style = defaultStyle();

const defaultObj = {
  id: uuidv4(),
  shop: null,
  name: '',
  detailmeta: {
    productType: 'virtual',
    livestream: true,
    lineup: [],
    ticket: true, // Add this to ensure Item is interpreted as ticket w date
  },
  styles: [style],
  shipping: [],
  published: false,
  images: [],
  protype: {
    type: 'virtual',
    subscription: false,
  },
  infinite: false,
  meta: {
    status: 'draft',
  },
  files: {},
  new: true,
};

const Create = (props) => {
  const [step, setStep] = React.useState('1');
  const [currentStage, setCurrentStage] = React.useState(null);
  const [imgCache, setImgCache] = React.useState(null); //local images banner
  const [pipelineDbItem, setPipelineDbItem] = React.useState(defaultObj); // skeleton on object
  const [pipelineObject, setPipelineObject] = React.useState({}); // added variables ---- add values here
  const [imgFor, setImgFor] = React.useState([]); // form mateched for images

  const doFunc = async () => {
    const res = await apiReq('/product/createProduct', {
      apiUrl: props?.apiUrl,
      pipelineDbItem: pipelineDbItem,
      pipelineObject: pipelineObject,
      imgCache: imgCache,
      imgFor: imgFor,
      _loggedIn: props?._loggedIn, // Requires Authentication
    });
  };

  const nextStep = () => setStep('2');

  const useSurvey = {
    name: 'Feedback Menu',
    stages: {
      index: {
        className: 'myClass',
        label: 'What is the name of your Event?',
        pipeline: [
          {
            className: 'myClass',
            label: 'Event Name',
            input: {
              type: 'text',
              placeholder: 'Asake in Toronto',
              var: 'name',
              rows: 1,
              validation: validationCheck,
            },
          },
          {
            label: 'Event Description',
            input: {
              type: 'text',
              var: 'description',
              rows: 1,
              validation: validationCheck,
            },
          },
        ],
        validation: validationCheck,
        confirm: { goto: 'eventLoc' },
      },
      eventLoc: {
        label: 'Where is the Event happening?',
        pipeline: [
          {
            label: 'Venue Name',
            input: {
              type: 'text',
              rows: 1,
              var: 'venue',
            },
          },
          {
            label: 'Address',
            input: {
              type: 'text',
              rows: 1,
              var: 'address',
            },
          },
          {
            label: 'City',
            input: {
              type: 'text',
              rows: 1,
              var: 'city',
            },
          },
          {
            label: 'State / Province',
            input: {
              type: 'text',
              rows: 1,
              var: 'state',
            },
          },
          {
            label: 'Country',
            input: {
              type: 'text',
              rows: 1,
              var: 'country',
            },
          },
        ],
        confirm: { goto: 'eventTime' },
      },
      eventTime: {
        label: 'What Date and Time is the Event?',
        pipeline: [
          {
            label: 'Date',
            input: {
              type: 'datetime-local',
              rows: 1,
              var: 'eventDate',
            },
          },
          {
            label: 'Stream Start',
            input: {
              type: 'datetime-local',
              rows: 1,
              var: 'streamStart',
            },
          },
        ],
        confirm: { goto: 'lineup' },
      },
      lineup: {
        label: 'Who are the Artists',
        pipeline: [
          {
            label: 'Artists or Band Name',
            input: {
              type: 'text',
              rows: 1,
              var: 'bandName',
            },
          },
          {
            input: {
              type: 'lineup',
              rows: 2,
              var: 'lineup',
            },
          },
        ],
        confirm: { goto: 'end', label: 'Submit' },
      },
      end: {
        func: nextStep,
      },
    },
  };

  return (
    <StudioLayout {...props}>
      <div className='xl:mx-[20rem] md:mx-[3rem]'>
        {step === '1' && (
          <Survey
            {...props}
            survey={useSurvey}
            setCurrentStage={setCurrentStage}
            setImgCache={setImgCache}
            setPipelineDbItem={setPipelineDbItem}
            setPipelineObject={setPipelineObject}
            setImgFor={setImgFor}
          />
        )}
        {step === '2' && (
          <div>
            <h1>{pipelineObject.name}</h1>
            <EventDetailsStep
              props={props}
              submit={doFunc}
              survey={useSurvey}
              pipelineObject={pipelineObject}
              setPipelineObject={setPipelineObject}
              pipelineDbItem={pipelineDbItem}
              setPipelineDbItem={setPipelineDbItem}
              imgFor={imgFor}
              imgCache={imgCache}
            />
          </div>
        )}
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
