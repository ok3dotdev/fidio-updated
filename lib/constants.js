import { v4 as uuidv4 } from 'uuid';
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import useGlobalState from '../hooks/store';

const { setStep } = useGlobalState;

export const useSurvey = {
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
      func: setStep('2'),
    },
  },
};

const style = defaultStyle();

useSurvey.pipelineDbItemDefault = {
  id: uuidv4(),
  shop: props?.shop?.id ?? null,
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
