import Link from 'next/link';

const Hero = (props) => {
  return (
    <div className='h-screen w-full relative'>
      <video
        playsInline={true}
        autoPlay={true}
        loop={true}
        muted={true}
        preload='auto'
        src='https://fidiohero.s3.ca-central-1.amazonaws.com/hero-video.mp4'
        className=' w-full h-full object-cover'
      ></video>
      <div className='absolute top-0 w-full bg-black opacity-50 h-screen'></div>
      <div className='absolute top-0 w-full first-line:max-w-6xl mx-auto p-4 px-4 text-center lg:text-left lg:flex  flex flex-col lg:justify-center lg:flex-row gap-1 h-full lg:h-auto z-20'>
        <div className='flex flex-col lg:items-start lg:justify-start lg:pt-[200px] pt-[140px]'>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            Find joy though Afro
          </h1>
          <p>Ready to stream? </p>
          {props._loggedIn ? (
            <Link
              href={'/home'}
              className='hidden mt-8 px-8 py-4 bg-[#FDB000] text-black rounded-md lg:block'
            >
              Get Started
            </Link>
          ) : (
            <Link
              href={'/signin'}
              className='hidden mt-8 px-8 py-4 bg-[#FDB000] text-black rounded-md lg:block'
            >
              Get Started
            </Link>
          )}
        </div>
        <div>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            comedy
          </h1>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            comedy
          </h1>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            comedy
          </h1>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            comedy
          </h1>
          <h1 className='font-black text-4xl md:text-6xl lg:text-7xl mb-1 text-white text-center lg:text-left max-w-[800px] main-heading'>
            comedy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
