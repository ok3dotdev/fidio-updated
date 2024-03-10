import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LabeledInputs from '@/components/inputs/LabeledInputs';

const CreateForm = () => {
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h1 className='text-xl mt-8'>What is the name of your event?</h1>
            <div className='space-y-4 mt-8 w-full'>
              <LabeledInputs
                label='Event name'
                placeholder={'Friday Night Live'}
                name='eventName'
                register={register}
              />
              <LabeledInputs
                label={'Event description'}
                placeholder={'Join Sinmidele for her FINAL show live from Club X in Toronto.'}
                name='eventDescription'
                register={register}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className='text-xl mt-8'>Where is the event happening?</h1>
            <div className='space-y-4 mt-8 w-full'>
              <LabeledInputs
                label='Venue name'
                placeholder={'Club X'}
                name='venueName'
                register={register}
              />
              <LabeledInputs
                label={'Address'}
                placeholder={'123 Dundas Street'}
                name='address'
                register={register}
              />
              <LabeledInputs
                label={'City'}
                placeholder={'Toronto'}
                name='city'
                register={register}
              />
              <LabeledInputs
                label={'State/Province'}
                placeholder={'ON'}
                name='state'
                register={register}
              />
              <LabeledInputs
                label={'Country'}
                placeholder={'Canada'}
                name='country'
                register={register}
              />
            </div>
          </div>
        )
      // Add more cases for additional steps
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='w-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col align-center'>
          {renderStep()}
          {step !== 12 && <button type='button' onClick={nextStep} className='bg-dashFg mt-4 font-sans px-8 py-2 rounded-[2rem] text-black w-[350px] mt-8'>Continue</button>}
          {step === 12 && <button type='submit' className='bg-dashFg mt-4 font-sans px-8 py-2 rounded-[2rem] text-black w-[350px] mt-8'>Submit</button>}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
