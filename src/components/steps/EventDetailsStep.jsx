import React from 'react'
import {cn} from '../../lib/utils'

const EventCreationStep = (props) => {
  console.log("step", props)
  const [step, setStep] = React.useState('draft');

  return (
    <div className='mt-6'>
      <div>
        <h1></h1>
      </div>
      <div className='flex gap-4 my-2 justify-between md:justify-start'>
        <div
          className={cn('p-2 rounded-t-[8px]  font-sans ',  step === 'draft' ? 'bg-dashFg text-black font-bold' : 'text-white')}
          onClick={() => setStep('draft')}
        >
          Event details
        </div>
        <div
          className={cn('p-2 rounded-t-[8px]  font-sans ',  step === 'pending' ? 'bg-dashFg text-black font-bold' : 'text-white')}
          onClick={() => setStep('pending')}
        >
          Media
        </div>
        <div
          className={cn('p-2 rounded-t-[8px]  font-sans ',  step === 'approved' ? 'bg-dashFg text-black font-bold' : 'text-white')}
          onClick={() => setStep('approved')}
        >
          Ticket
        </div>
        <div
          className={cn('p-2 rounded-t-[8px]  font-sans ',  step === 'past' ? 'bg-dashFg text-black font-bold' : 'text-white')}
          onClick={() => setStep('past')}
        >
          Merch
        </div>
      </div>
    </div>
  )
}

export default EventCreationStep