import React from 'react'
import StudioLayout from '@/components/Layouts/StudioLayout'
import CreateForm from '../../components/steps/createEventForm';

const Create = () => {
  return (
    <StudioLayout>
      <div className='md:mx-[8rem]'>
        // Relace the form here 
        <CreateForm/>
      </div>
    </StudioLayout>
  );
};

export default Create;
