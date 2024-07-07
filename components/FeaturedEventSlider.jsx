import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

const FeaturedEventSlider = () => {
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
        {carouselItems.map((item, id) => (
          <CarouselItem
            className='relative border-none pl-0 pr-0 z-30'
            key={id}
          >
            <img
              src={item.backgroundImageDesktop}
              alt=''
              className='w-full h-full border-none absolute inset-0 object-cover'
            />
            <div className='absolute bottom-12 left-0 w-full px-8 md:px-4 space-y-8 right-0 max-w-screen-xl mx-auto z-30 p-12'>
              <h1 className='text-2xl md:text-6xl font-bold'>
                Asake in toronto
              </h1>
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
