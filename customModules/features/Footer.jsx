import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full'>
        <div className="flex flex-col lg:flex-row gap-12 justify-between max-w-6xl mx-auto px-4 py-12">
            <div className='text-center'><img src="/img/features/logo.png" alt="" className='h-auto'/></div>
            <div className='flex gap-24 w-full justify-between basis-1/2'>
                <div >
                    <p className='mb-4'>FOLLOW US</p>
                    <ul>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">Twitter</a>
                        </li>
                        <li>
                            <a href="">LinedIn</a>
                        </li>
                        <li>
                            <a href="">Facebook</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='mb-4'>RESOURCES</p>
                    <ul>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">Twitter</a>
                        </li>
                        <li>
                            <a href="">LinedIn</a>
                        </li>
                        <li>
                            <a href="">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer