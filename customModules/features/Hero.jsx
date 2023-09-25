import React from 'react'
import {SignIn} from '../../modules/onboarding/signin'


const Hero = props => {
    console.log({props})
    return(
        <div className='h-screen bg-gray-900'>
            <div className='max-w-6xl mx-auto p-4 text-center lg:text-left lg:flex lg:pt-[100px]'>
                <div className=''>
                    <h1 className='font-bold text-4xl mb-1 lg:max-w-xl'>ENJOY YOUR BST AFRICAN BEATS CONCERTS</h1>
                    <p className='mb-8'>At The Comfor Of Your Own Home</p>
                    <SignIn {...props}/>
                </div>
                <div>
                    <div className=''>
                        <h1>image</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;