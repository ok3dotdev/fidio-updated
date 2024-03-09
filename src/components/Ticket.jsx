import React from 'react'

const Ticket = (props) => {
  return (
    <div className='bg-dashFg rounded-[12px] py-4 px-4 shadow-Txl'>
      <h3 className='text-black'>{props.title}</h3>
      <p className='text-black font-sans'>{props.date}</p>
    </div>
  )
}

export default Ticket