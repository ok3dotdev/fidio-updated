import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import apiReq from '/modules/utility/api/apiReq';

const FeaturedEventSlider = (props) => {
  const [loading, setLoading] = useState(false);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const loadFeaturedEvets = async () => {
      setLoading(true);
      const today = new Date();
      const res = await apiReq('/m/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0, // Paginate by page with 150 record limits
        limit: 3, // Set custom limit, default 35, max 150
        sortField: 'meta.date', // Use field to sort by
        sort: 'asc',
        // gt: {
        //   'meta.date': today.toISOString(), // Use today's date in ISO format
        // }, // Greater than date (optional)
        extra: {},
        meta: {
          isFeatured: 'true',
        },
      });
      if (res && res.products && res.products.length) {
        setFeatured(res.products);
        setLoading(false);
      }
    };
    loadFeaturedEvets();
  }, []);
  console.log('feat', featured);

  const carouselItems = [
    {
      backgroundImageDesktop: '/img/internal/home-banner.png',
      backgroundImageMobile: 'url(/img/internal/home-banner-mobile1.png)',
      artist: 'TINY’S CONDO SESSION',
      event: 'Live from Lagos',
      date: ' January 14, 2024 4:00PM WAT',
      id: 'tinys-condo-session',
    },
    {
      backgroundImageDesktop: '/img/internal/home-banner.png',
      backgroundImageMobile: 'url(/img/internal/home-banner-mobile1.png)',
      artist: 'TINY’S CONDO SESSION',
      event: 'Live from Lagos',
      date: ' January 14, 2024 4:00PM WAT',
      id: 'tinys-condo-session',
    },
  ];

  return (
    <Carousel
      className='h-full z-20'
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className='h-[600px]'>
        {featured.map((item, id) => (
          <CarouselItem
            className='relative border-none pl-0 pr-0 z-30'
            key={id}
          >
            <img
              src={`${props?.cdn?.static}/${item?.images[0]?.name}`}
              alt=''
              className='w-full h-full border-none absolute inset-0 object-cover bg-gradient-to-r from-gray-400 to-slate-600'
            />
            <div className='absolute bottom-12 left-0 w-full px-8 md:px-4 space-y-8 right-0 max-w-screen-xl mx-auto z-30 p-12'>
              <h1 className='text-2xl md:text-6xl font-bold'>{item.name}</h1>
              <Button className='dark:hover:text-black'>Buy tickets</Button>
            </div>
            <div className='absolute bg-gradient-to-t from-gradientLight to-25% to-gradientDark right-0 top-0  w-full h-full'></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='max-w-screen-xl mx-auto px-12 bottom-4 w-full space-x-4 left-0 right-0 h-full'>
        <CarouselPrevious
          arrows='top'
          className='dark:bg-white dark:bg-opacity-[8%] dark:border-none'
        />
        <CarouselNext
          className='dark:bg-white dark:bg-opacity-[8%] dark:border-none'
          arrows='top'
        />
      </div>
    </Carousel>
  );
};

export default FeaturedEventSlider;
