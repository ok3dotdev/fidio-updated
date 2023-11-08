import Link from 'next/link';

const Hero = (props) => {
  return (
    <div className='min-h-screen h-screen absolute top-0 w-full hero'>
      <div className='absolute inset-0 bg-black opacity-70 min-h-screen'></div>
      <div className='max-w-6xl mx-auto p-4 px-4 text-center lg:text-left lg:flex lg:pt-[200px] pt-[140px] flex flex-col lg:flex-row gap-1 h-full lg:h-auto relative z-20'>
        <div className='flex flex-col items-center lg:items-start basis-2/3 justify-center lg:justify-start'>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            Your Premiere Home for Live Afrobeats
          </h1>
          {props._loggedIn ? (
            <Link
              href={'/home'}
              className='hidden mt-8 px-8 py-4 bg-orange-800 text-white rounded-md lg:block'
            >
              Get Started
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className='w-full flex flex-col lg:flex-row lg:justify-center items-center lg:basis-1/3 pb-32 lg:pt-0 mt-[40px] lg:mt-[0]'>
          <div className='bg-black p-4 inline-flex flex-col rounded-lg lg:w-[590px] w-[280px] lg:max-w-[400px] max-w-[500px] max-h-[600px] shadow-xl'>
            <div className=' relative bg-gray-400 rounded-lg'>
              <img
                src='/img/internal/althero.png'
                alt=''
                className='w-full  rounded-lg'
              />
            </div>
            <div className='flex flex-col lg:flex-row mt-4 justify-between shadow-xl '>
              <div className='text-center lg:text-left'>
                <p className='font-black text-xl text-white'>
                  Alternate Sound Live 6.0
                </p>
                <p className='text-sm text-white'>Nov 04 | 6:00PM GMT +1</p>
              </div>
              <div className='basis-1/2 flex flex-col text-center text-white'>
                <Link
                  href='/signin'
                  className='rounded-md inline-flex justify-center items-center px-4 py-3 bg-orange-800 mt-2 font-bold'
                >
                  Claim Free Ticket
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
