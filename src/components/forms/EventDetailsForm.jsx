import React from 'react';
import LabeledInputs from '@/components/inputs/LabeledInputs';

const EventDetailsForm = ({
  pipelineObject,
  nextStep,
  step,
  setPipelineObject,
}) => {
  // on change
  // const handleChange = (e) => {
  //   const v = e?.currentTarget.getAttribute('useVar');
  //   const temp = pipelineObject;
  //   temp[v] = e.currentTarget.value;
  //   setPipelineObject(temp);
  // };
  return (
    <div className='mt-8'>
      <div>
        <div className='flex flex-col gap-y-4 mb-12'>
          <LabeledInputs
            label={'Event name'}
            value={pipelineObject.name}
            useVar={'description'}
            defaultValue={pipelineObject.name}
          />
          <LabeledInputs
            label={'Event description'}
            value={pipelineObject.description}
            useVar={'description'}
          />
          <LabeledInputs
            label={'Venue name'}
            value={pipelineObject.venue}
            useVar={'venue'}
          />
          <LabeledInputs label={'Address'} value={pipelineObject.Address} />
          <LabeledInputs label={'City'} value={pipelineObject.city} />
          <LabeledInputs
            label={'State / Province'}
            value={pipelineObject.state}
          />
          <LabeledInputs label={'Country'} value={pipelineObject.country} />
          <LabeledInputs label={'Date'} value={pipelineObject.eventDate} />
          <LabeledInputs
            label={'Stream start'}
            value={pipelineObject.streamStart}
          />
        </div>
      </div>
      {/* <div className='mt-5'>
        <button
          onClick={() => nextStep(step)}
          className='p-2 px-12 bg-dashFg text-black font-sans font-bold rounded-[4rem]'
        >
          Continue
        </button>
      </div> */}
    </div>
  );
};

export default EventDetailsForm;

// import React from 'react';
// import LabeledInputs from '@/components/inputs/LabeledInputs';

// const EventDetailsForm = ({
//   pipeObject,
//   nextStep,
//   step,
//   setPipelineObject,
// }) => {
//   // on change
//   // const handleChange = (e) => {
//   //   const v = e?.currentTarget.getAttribute('useVar');
//   //   const temp = pipelineObject;
//   //   temp[v] = e.currentTarget.value;
//   //   setPipelineObject(temp);
//   // };
//   const pipelineObject = pipeObject[0];
//   console.log('pipe obj', pipelineObject, pipelineObject?.venue);
//   return (
//     <div className='mt-8'>
//       <div>
//         <div className='flex flex-col gap-y-4 mb-12'>
//           <LabeledInputs
//             label={'Event name'}
//             value={pipelineObject?.name}
//             defaultValue={pipelineObject?.name}
//           />
//           <LabeledInputs
//             label={'Event description'}
//             value={pipelineObject?.description}
//             useVar={'description'}
//           />
//           <LabeledInputs
//             label={'Venue name'}
//             value={pipelineObject?.venue}
//             useVar={'venue'}
//           />
//           <LabeledInputs label={'Address'} value={pipelineObject?.Address} />
//           <LabeledInputs label={'City'} value={pipelineObject?.city} />
//           <LabeledInputs
//             label={'State / Province'}
//             value={pipelineObject?.state}
//           />
//           <LabeledInputs label={'Country'} value={pipelineObject?.country} />
//           <LabeledInputs label={'Date'} value={pipelineObject?.created} />
//           <LabeledInputs
//             label={'Stream start'}
//             value={pipelineObject?.streamStart}
//           />
//         </div>
//       </div>
//       {/* <div className='mt-5'>
//         <button
//           onClick={() => nextStep(step)}
//           className='p-2 px-12 bg-dashFg text-black font-sans font-bold rounded-[4rem]'
//         >
//           Continue
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default EventDetailsForm;
