import React from 'react';
import { cn } from '@/lib/utils';
import EventDetailsForm from '@/components/forms/EventDetailsForm';
import MediaDetailsForm from '@/components/forms/MediaDetailsForm';
import TicketDetailsForm from '@/components/forms/TicketDetailsForm';

const EventCreationStep = (props) => {
  const {
    pipelineObject,
    setPipelineDbItem,
    setPipelineObject,
    pipelineDbItem,
    useSurvey,
    imgFor,
    ImgCache,
  } = props;
  const [step, setStep] = React.useState('details');
  // console.log('step', step, props);

  return (
    <div className='mt-6'>
      <div className='flex gap-4 my-2 justify-between md:justify-start'>
        <div
          className={cn(
            'p-2 rounded-t-[8px]  font-sans ',
            step === 'details' ? 'bg-dashFg text-black font-bold' : 'text-white'
          )}
          onClick={() => setStep('details')}
        >
          Event details
        </div>
        <div
          className={cn(
            'p-2 rounded-t-[8px]  font-sans ',
            step === 'media' ? 'bg-dashFg text-black font-bold' : 'text-white'
          )}
          onClick={() => setStep('media')}
        >
          Media
        </div>
        <div
          className={cn(
            'p-2 rounded-t-[8px]  font-sans ',
            step === 'ticket' ? 'bg-dashFg text-black font-bold' : 'text-white'
          )}
          onClick={() => setStep('ticket')}
        >
          Ticket
        </div>
        <div
          className={cn(
            'p-2 rounded-t-[8px]  font-sans ',
            step === 'merch' ? 'bg-dashFg text-black font-bold' : 'text-white'
          )}
          onClick={() => setStep('merch')}
        >
          Merch
        </div>
      </div>
      <div>
        <div className='bg-black px-4 py-2 pt-12 pr-12 inline-flex flex-col rounded-[8px]'>
          <h3>{pipelineObject.name}</h3>
          <p className='font-sans'>{pipelineObject.description}</p>
        </div>
      </div>
      {step === 'details' && (
        <EventDetailsForm
          pipelineObject={pipelineObject}
          nextStep={setStep}
          step={'media'}
          setPipelineDbItem={setPipelineDbItem}
          pipelineDbItem={pipelineDbItem}
          setPipelineObject={setPipelineObject}
        />
      )}
      {step === 'media' && (
        <MediaDetailsForm
          info={props.props}
          setStep={setStep}
          step={'ticket'}
          pipelineObject={pipelineObject}
          setPipelineDbItem={setPipelineDbItem}
          pipelineDbItem={pipelineDbItem}
          setPipelineObject={setPipelineObject}
        />
      )}
      {step === 'ticket' && (
        <TicketDetailsForm
          info={props.props}
          setPipelineDbItem={setPipelineDbItem}
          pipelineDbItem={pipelineDbItem}
          setPipelineObject={setPipelineObject}
          pipelineObject={pipelineObject}
          useSurvey={useSurvey}
          imgFor={imgFor}
          ImgCache={ImgCache}
        />
      )}
      {step === 'merch' && <h1> coming soon...</h1>}
    </div>
  );
};

export default EventCreationStep;
