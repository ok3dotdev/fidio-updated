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
      <div className=' pt-[150px] md:pt-[200px] max-w-screen-xl mx-auto px-4 text-center '>
        <div className='max-w-screen-sm mx-auto'>
          <div className='flex items-center'>
            <h1 className='text-4xl font-semibold mb-8 md:px-2 '>
              <span className='text-accentY'>Fidio</span>
              <p>Where African Music Takes Center Stage</p>
            </h1>
            <span>
              <svg
                className='hidden md:block'
                width='48'
                height='48'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='31.9971' cy='32' r='32' fill='#DD681A' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M24.1897 28.4703C27.6127 28.4703 30.3819 25.6819 30.3819 22.2351C30.3819 25.6819 33.1511 28.4703 36.5742 28.4703C39.9972 28.4703 42.7664 25.6819 42.7664 22.2351C42.7664 18.7884 39.9972 16 36.5742 16C33.1511 16 30.3819 18.7884 30.3819 22.2351C30.3819 18.7884 27.6127 16 24.1897 16C20.7667 16 17.9975 18.7884 17.9975 22.2351C17.959 25.6819 20.7667 28.4703 24.1897 28.4703ZM24.1898 19.6797C25.6128 19.6797 26.7282 20.8415 26.7282 22.2357C26.7282 23.6686 25.5744 24.7917 24.1898 24.7917C22.8052 24.7917 21.6513 23.6299 21.6513 22.2357C21.6129 20.8028 22.7667 19.6797 24.1898 19.6797ZM47.997 29.9804C48.6508 29.5931 49.4585 29.8254 49.8047 30.4451C49.9585 30.6387 49.997 30.8711 49.997 31.1034L49.9585 36.2155V41.405C49.9585 42.1408 49.3816 42.7217 48.6508 42.7217C48.3816 42.7217 48.1124 42.6443 47.9201 42.4893L43.6124 39.9721C43.5932 39.9721 43.5836 39.9624 43.574 39.9527C43.5644 39.943 43.5547 39.9333 43.5355 39.9333L42.4971 39.3137V33.1947L43.6124 32.5364L47.997 29.9804ZM39.8818 28.8188C38.8818 29.3223 37.7665 29.6321 36.5742 29.6321C35.1126 29.6321 33.728 29.2061 32.5742 28.4315H28.1896C27.0358 29.2061 25.6512 29.6321 24.1897 29.6321C22.9974 29.6321 21.882 29.361 20.882 28.8188C19.9974 29.3223 19.3821 30.3292 19.3821 31.4136V40.8631C19.3821 42.6058 20.8051 44 22.4974 44H38.3049C40.0357 44 41.4203 42.5671 41.4203 40.8631V31.4136C41.3818 30.3292 40.7664 29.3223 39.8818 28.8188ZM36.5737 19.6797C37.9967 19.6797 39.1121 20.8415 39.1121 22.2357C39.1121 23.6686 37.9583 24.7917 36.5737 24.7917C35.1891 24.7917 34.0352 23.6299 34.0352 22.2357C34.0352 20.8028 35.1506 19.6797 36.5737 19.6797Z'
                  fill='#061931'
                />
              </svg>
            </span>
            {/* <svg
              className='absolute  top-[250px] right-[170px] w-[1119px] h-[519px]'
              width='1121'
              height='1194'
              viewBox='0 0 1121 1194'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M921.526 12.1656C1028 -55.8438 1242.95 197.5 1028 482.289C841.978 728.754 419.57 570.259 210.706 647.215C23.4742 716.2 -187.893 1022.29 305.182 1193'
                stroke='white'
                stroke-width='1.46955'
              />
            </svg> */}
          </div>
          <p className='text-dashtext text-center mb-8 leading-7 px-4'>
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
          <span>Find Events</span>
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
              <img
                src='https://fidiohero.s3.ca-central-1.amazonaws.com/video+player+(2).png'
                alt='artist'
                width={500}
                height={500}
                className='md:hidden'
              />
              <img
                src='https://fidiohero.s3.ca-central-1.amazonaws.com/video+player+(2).png'
                alt='artist'
                width={700}
                height={500}
                className='hidden md:block'
              />
            </TabsContent>
            <TabsContent value='host'>
              <img
                src='https://fidiohero.s3.ca-central-1.amazonaws.com/video+player+(3).png'
                alt='host'
                width={500}
                height={500}
                className='md:hidden'
              />
              <img
                src='https://fidiohero.s3.ca-central-1.amazonaws.com/video+player+(3).png'
                alt='host'
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
