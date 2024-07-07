import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArtistCardDetails, hostCardDetails } from '@/lib/constants';
import HeroCard from '@/components/cards/HeroCards';

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
        <Button className='w-[163px] dark:bg-red-600 dark:text-white py-[12.6px] h-auto'>
          <span>Browse Now</span>
        </Button>
        <div>
          <Tabs defaultValue='artist' className='w-full mt-12'>
            <TabsList className='grid w-full grid-cols-2 dark:bg-transparent border-2 border-dashBorder h-auto mb-4 p-0'>
              <TabsTrigger
                onClick={() => setViewer('artist')}
                className='dark:data-[state=active]:bg-white dark:data-[state=active]:text-black dark:hover:bg-transparent  dark:hover:outline-none dark:text-white'
                value='artist'
              >
                Artist
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setViewer('host')}
                className='dark:data-[state=active]:bg-white dark:data-[state=active]:text-black dark:hover:bg-transparent  dark:hover:outline-none dark:text-white'
                value='host'
              >
                Host
              </TabsTrigger>
            </TabsList>
            <TabsContent value='artist'>
              <Image
                src='https://d2ib7gxb0luc1i.cloudfront.net/img/videoplayer.png'
                alt='artist'
                width={500}
                height={500}
              />
            </TabsContent>
            <TabsContent value='host'>
              <Image
                src='https://d2ib7gxb0luc1i.cloudfront.net/img/videoplayer(1).png'
                alt='artist'
                width={500}
                height={500}
              />
            </TabsContent>
          </Tabs>
        </div>
        {viewer === 'artist' && (
          <div className='mt-12'>
            <div>
              <h3 className='text-dashtext text-lg'>
                Amplify your voice as an{' '}
                <span className='text-white font-semibold'>Artist</span> 🎤{' '}
              </h3>
            </div>
            <div className='space-y-4 mt-12'>
              {ArtistCardDetails.map((details, id) => (
                <HeroCard {...details} key={id} />
              ))}
            </div>
          </div>
        )}
        {viewer === 'host' && (
          <div className='mt-12'>
            <div>
              <p className='text-dashtext'>Empower your business as a host</p>
              <h3 className='text-white text-lg'>
                Show Promoter, Record Label, Event Venue
              </h3>
            </div>
            <div className='space-y-4 mt-12'>
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
