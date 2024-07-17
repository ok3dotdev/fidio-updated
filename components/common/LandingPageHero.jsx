import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArtistCardDetails, hostCardDetails } from '@/lib/constants';
import HeroCard from '@/components/cards/HeroCards';
import { User, Mic } from 'lucide-react';
import Link from 'next/link';

export default function LandingPageHero() {
  const [viewer, setViewer] = useState('artist');
  return (
    <div className='font-lexend'>
      <div className='pt-[200px] max-w-screen-xl mx-auto px-4 text-center '>
        <div className='max-w-screen-sm mx-auto'>
          <div>
            <h1 className='text-4xl font-semibold mb-8 px-4'>
              <span className='text-accentY'>Fidio: </span>Where African Music
              Takes Center Stage
            </h1>
            <span></span>
          </div>
          <p className='text-dashtext text-center mb-8 leading-6 px-4'>
            Fidio is revolutionizing the global African music scene with a
            dynamic platform for live music. More than virtual concerts, we’re a
            vibrant community energized by Afrobeats, Highlife, Soukous, and
            more. Experience live concerts, captivating documentaries, and
            exclusive artist content in one seamless digital space.
          </p>
        </div>
        <Link
          href='/browse'
          className='w-[163px] dark:bg-red-600 dark:text-white py-[12.6px] h-auto space-x-1 dark:hover:bg-red-600 dark:hover:text-white dark:hover:outline-none dark:hover:bg-opacity-85 flex mx-auto justify-center rounded-sm items-center'
        >
          <span>Browse Now</span>
          <CirclePlay />
        </Link>
        <div>
          <Tabs defaultValue='artist' className='w-full mt-12'>
            <TabsList className='grid grid-cols-2 dark:bg-dashSides border-2  h-auto mb-12 p-0 w-[210px] max-w-[400px] mx-auto '>
              <TabsTrigger
                onClick={() => setViewer('artist')}
                className='dark:data-[state=active]:bg-white dark:data-[state=active]:text-black dark:hover:bg-transparent  dark:hover:outline-none dark:text-white'
                value='artist'
              >
                {/* <MicVocal size='21' className='mr-1' /> */}
                <Mic size='21' className='mr-1' />
                Artist
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setViewer('host')}
                className='dark:data-[state=active]:bg-white dark:data-[state=active]:text-black dark:hover:bg-transparent  dark:hover:outline-none dark:text-white'
                value='host'
              >
                <User size='21' className='mr-1' />
                Host
              </TabsTrigger>
            </TabsList>
            <TabsContent value='artist' className='max-w-[700px] mx-auto'>
              <Image
                src='https://d2ib7gxb0luc1i.cloudfront.net/img/videoplayer.png'
                alt='artist'
                width={500}
                height={500}
                className='md:hidden'
              />
              <Image
                src='https://d2ib7gxb0luc1i.cloudfront.net/img/videoplayer.png'
                alt='artist'
                width={700}
                height={500}
                className='hidden md:block'
              />
            </TabsContent>
            <TabsContent value='host'>
              <Image
                src='https://d2ib7gxb0luc1i.cloudfront.net/img/videoplayer(1).png'
                alt='artist'
                width={500}
                height={500}
                className='md:hidden'
              />
              <Image
                src='https://d2ib7gxb0luc1i.cloudfront.net/img/videoplayer(1).png'
                alt='artist'
                width={700}
                height={500}
                className='hidden md:block mx-auto'
              />
            </TabsContent>
          </Tabs>
        </div>
        {viewer === 'artist' && (
          <div className='mt-12 flex flex-col items-center'>
            <div>
              <h3 className='text-dashtext text-lg'>
                Amplify your voice as an{' '}
                <span className='text-white font-semibold'>Artist</span> 🎤{' '}
              </h3>
            </div>
            <div className='space-y-4 mt-12 flex flex-col max-w-[800px] mx-auto'>
              {ArtistCardDetails.map((details, id) => (
                <HeroCard {...details} key={id} />
              ))}
            </div>
          </div>
        )}
        {viewer === 'host' && (
          <div className='mt-12 flex flex-col items-center'>
            <div>
              <p className='text-dashtext'>Empower your business as a host</p>
              <h3 className='text-white text-lg'>
                Show Promoter, Record Label, Event Venue
              </h3>
            </div>
            <div className='space-y-4 mt-12 max-w-[800px] mx-auto'>
              {hostCardDetails.map((details, id) => (
                <HeroCard {...details} key={id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CirclePlay = () => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.5 38.375C30.5102 38.375 38.625 30.2602 38.625 20.25C38.625 10.2398 30.5102 2.125 20.5 2.125C10.4898 2.125 2.375 10.2398 2.375 20.25C2.375 30.2602 10.4898 38.375 20.5 38.375Z'
        stroke='white'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.875 13L27.75 20.25L16.875 27.5V13Z'
        stroke='white'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
