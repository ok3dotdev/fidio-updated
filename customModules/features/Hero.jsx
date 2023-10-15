import Link from 'next/link';

const Hero = (props) => {
  // console.log({ props });
  return (
    <div className='min-h-screen h-full absolute top-0 w-full'>
      <video
        autoPlay
        muted
        loop
        className='absolute inset-0 object-cover w-full h-full'
        src='/img/internal/landing-page-video.mp4' // Update with the path to your video file
        type='video/mp4'
      ></video>
      <div className='absolute inset-0 bg-black opacity-70 min-h-screen'></div>
      <div className='max-w-6xl mx-auto p-4 px-4 text-center lg:text-left lg:flex lg:pt-[200px] pt-[140px] flex flex-col lg:flex-row gap-1 h-full lg:h-auto relative z-20'>
        <div className='flex flex-col items-center lg:items-start basis-2/3 justify-center lg:justify-start'>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            Your Premiere Home for Live Afrobeats
          </h1>
          {/* <p className='mb-8 text-white text-lg'>
            Your Gateway to Live <span className='text '>Afrobeats</span>{' '}
            Concerts
          </p> */}
        </div>
        <div className='w-full flex flex-col lg:flex-row lg:justify-center items-center lg:basis-1/3 pb-32 lg:pt-0 mt-[180px] lg:mt-[0]'>
          <div className='bg-black p-4 inline-flex flex-col rounded-lg lg:w-[590px] w-[280px] lg:max-w-[400px] max-w-[500px] max-h-[600px] shadow-xl'>
            <div className='h-[100px] lg:h-[400px] relative bg-gray-400 rounded-lg'>
              <img
                src='/img/internal/sewa.png'
                alt=''
                className='w-full h-auto absolute -top-[190px] lg:-top-[40px] rounded-lg'
              />
            </div>
            <div className='flex flex-col lg:flex-row mt-4 justify-between shadow-xl '>
              <div className='text-center lg:text-left'>
                <p className='font-black text-xl text-white'>
                  A NIGHT WITH SEWA
                </p>
                <p className='text-sm text-white'>Oct 22 | 7:30PM ET</p>
              </div>
              <div className='basis-1/2 flex flex-col text-center text-white'>
                <Link
                  href='/signin'
                  className='rounded-md inline-flex justify-center items-center px-4 py-3 bg-orange-800 mt-2 font-bold'
                >
                  CLAIM FREE TICKET
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from 'react';
// import { SignIn } from '../../modules/onboarding/signin';

// const Hero = (props) => {
//   console.log({ props });
//   return (
//     <div className='min-h-screen hero'>
//       <div className='absolute inset-0 bg-black opacity-70 min-h-screen'></div>
//       <div className='max-w-6xl mx-auto p-4 px-4 text-center lg:text-left lg:flex lg:pt-[200px] pt-[150px] flex flex-col lg:flex-row gap-4 h-full lg:h-auto relative z-20'>
//         <div className='flex flex-col items-center lg:items-start basis-2/3 justify-center lg:justify-start'>
//           <h1 className='font-black text-3xl lg:text-6xl mb-1 text-white text-center lg:text-left max-w-[600px]'>
//             Your Premiere Home for Live Afrobeats
//           </h1>
//         </div>
//         <div className='w-full flex justify-center lg:basis-1/3 pb-32 pt-16 lg:pt-0 '>
//           <div className='bg-black p-4 inline-flex flex-col rounded-lg lg:w-[590px] lg:max-w-[400px] max-w-[300px] max-h-[600px] shadow-xl'>
//             <div className='h-[300px] lg:h-[400px] overflow-hidden bg-gray-400'>
//               <img
//                 src='/img/internal/sewa.png'
//                 alt=''
//                 className='w-full h-auto'
//               />
//             </div>
//             <div className='flex flex-col mt-4 justify-between shadow-xl'>
//               <div className='text-center flex flex-col'>
//                 <p className='font-black text-xl text-white'>
//                   A NIGHT WITH SEWA
//                 </p>
//                 <p className='text-sm text-white'>BORN THIS WAY TOUR</p>
//                 <p className='text-sm text-white'>0ct 22 | 7:30 PM EST</p>
//               </div>
//               <div className='basis-1/3 flex flex-col text-center text-white'>
//                 <button className='rounded-md inline-flex justify-center items-center px-4 py-1 bg-red-500 mt-2'>
//                   Claim Free Ticket
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
