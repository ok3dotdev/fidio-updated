import React from 'react'
import { SignIn } from '../../modules/onboarding/signin'


const Hero = props => {
    console.log({props})
    return(
        <div className='h-screen'>
            <div className='max-w-6xl mx-auto p-4 px-8 text-center lg:text-left lg:flex lg:pt-[200px] pt-[80px] mb-24 flex flex-col lg:flex-row gap-4 h-full lg:h-auto'>
                <div className='flex flex-col items-center lg:items-start basis-2/3 justify-center lg:justify-start'>
                    <h1 className='font-bold text-2xl lg:text-4xl mb-1  text-center lg:text-left'>ENJOY YOUR BEST AFRICAN BEATS CONCERTS</h1>
                    <p className='mb-8'>At The Comfort Of Your Own Home</p>
                    <SignIn {...props}/>
                </div>
                <div className='w-full flex justify-center lg:basis-2/3'>
                    <div className='bg-black p-4 inline-flex flex-col rounded-lg lg:w-[290px] lg:max-w-[400px] max-w-[250px] max-h-[400px]'>
                        <div className='h-[200px] bg-gray-400'>
                        {/* <img src="/img/features/hero-live.png" alt="" className='w-full'/> */}
                        </div>
                        <div className='flex mt-4'>
                            <div className='text-left'>
                                <p className='font-black text-xl'>BURLIN B</p>
                                <p className='text-sm text-gray-600'>BORN THIS WAY TOUR</p>
                                <p className='text-sm text-gray-600'>7:30 - 9:30 BUDWEISER STADIUM</p>
                            </div>
                            <div className='basis-1/3 flex flex-col items-center'>
                                <div>200K</div>
                                <button className='rounded-md flex justify-center items-center px-4 py-1 bg-red-500'>Live</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;