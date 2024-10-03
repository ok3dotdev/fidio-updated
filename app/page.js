'use client';
import React from 'react';
import HomeLayout from '@/customModules/features/HomeLayout';
import ImageText from '@/components/ImageText';
import BulletCard from '@/components/cards/BulletCard';
import { featuresList } from '@/lib/constants';
import SubscribeForm from '../components/forms/SubscribeToNewsLetter';

import LandingPageHero from '@/components/common/LandingPageHero';

export default function Page(props) {
  return (
    <React.Fragment>
      <LandingPageHero />
      <ImageText
        img={
          'https://fidiohero.s3.ca-central-1.amazonaws.com/OBJECT+MOCKUP+3+(3).png'
        }
        heading={
          'The Future of <span class="text-accentY">African Music</span> is Here'
        }
        description={
          'Fidio goes beyond traditional streaming platforms. We offer cutting-edge features designed to elevate the virtual concert experience for artists, promoters, and fans alike.'
        }
      />
      <div className='gap-y-12 mt-12 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-2'>
        {featuresList.map((item, idx) => (
          <BulletCard
            {...item}
            key={idx}
            isLast={idx === featuresList.length - 1}
          />
        ))}
      </div>
      <ImageText
        img={
          'https://fidiohero.s3.ca-central-1.amazonaws.com/Image_1__1_-removebg.png'
        }
        heading={
          "Fidio is more than just a platform – <span class='text-accentY'> it's a movement</span>"
        }
        direction='reverse'
        glow='true'
      />
      <div className='max-w-4xl mx-auto px-2'>
        <p className='text-dashtext leading-6 text-center'>
          {`We're passionate about empowering African artists, connecting fans
            to their favorite music, and propelling the African music industry
            to new heights. Join us on this journey and become a part of the
            future of African entertainment.`}
        </p>
      </div>
      <SubscribeForm />
    </React.Fragment>
  );
}
