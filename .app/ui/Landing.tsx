import Link from 'next/link';
import ShowGrid from './ShowsGrid';

export const Landing = () => {
  return (
    <div className='dark:bg-black bg-black text-white'>
      <div className='max-w-7xl mx-auto py-24'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex items-start flex-col px-4 lg:px-6 justify-center w-full'>
            <h2 className='text-[24px] lg:text-[48px] font-bold'>
              Concert-to-go
            </h2>
            <p className='leading-8 font-sans text-[16px] lg:text-[20px] pt-6'>
              Never miss a live performance. <br /> Buy tickets and watch your
              show, wherever you are, however you like.
            </p>
          </div>
          <img
            className='lg:max-w-[50%]'
            src='/img/internal/concert-to-go.png'
            alt='concert to go image'
          />
        </div>
        <div className='flex flex-col-reverse lg:flex-row mt-6 lg:mt-0'>
          <img
            className='lg:max-w-[50%] max-w-[90%] mx-auto'
            src='/img/internal/engage.png'
            alt='concert to go image'
          />
          <div className='flex items-start flex-col px-4 lg:px-6 justify-center w-full'>
            <h2 className='text-[24px] lg:text-[48px] font-bold'>
              Engage with fellow fans
            </h2>
            <p className='leading-8 font-sans text-[16px] lg:text-[20px] pt-6'>
              Chat with other concert-goers with our live chat feature.
              <br /> You can finally say, “Where my people at?”
            </p>
          </div>
        </div>
      </div>
      <ShowGrid />
      <div className='max-w-7xl mx-auto py-24'>
        <div className='flex gap-1 px-4 lg:px-6 items-center'>
          <h3 className='text-sm font-sans'>Ready to stream?</h3>
          <div className='relative'>
            <img
              className='absolute -top-[32px] z-0 w-[90%] h-[100px]'
              src='/img/internal/swirls.png'
              alt='swirls'
            />
            <Link
              href='/signin'
              className='relative py-3 px-6 rounded-[20px] bg-[#FDB000] font-sans text-black z-10 text-sm'
            >
              Sign up for free with Google
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};