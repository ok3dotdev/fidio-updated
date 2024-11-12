import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveUpRight, Medal, ArrowRight } from 'lucide-react';
import MarketingHeader from '../components/Layouts/marketing/MarketingHeader';
import MarketingFooter from '../components/Layouts/marketing/MarketingFooter';

const pageName = 'marketing';

export default function Page() {
  return (
    <div className='font-lexend scroll-smooth w-full overflow-x-hidden'>
      <MarketingHeader />
      <div className='bg-[url("/img/internal/marketing/marketing-header-bg.png")] min-h-screen md:bg-cover bg-[#0C0C0C] bg-no-repeat bg-fixed dark:border-[#D0D5DD] border-[0.5px] dark:border-opacity-[20%] pt-12 relative'>
        <div className='text-center z-40 flex  max-w-3xl md:max-w-7xl mx-auto items-center flex-col'>
          <div className='flex gap-2 items-center p-1 rounded-[20px] dark:border-dashtext border-[1px] bg-gradient-to-r from-[#191919] to-[#323130] w-fit px-2 relative'>
            <div className='absolute inset-0 rounded-[20px] border-[1px] border-transparent animate-glow'></div>
            <div className='p-1 h-4 w-4 rounded-full bg-[#373737] text-[9px] flex items-center justify-center'>
              🔥
            </div>
            <p className='text-[10px]'>
              Crafted Visual Narratives That Captivate and Convert
            </p>
          </div>
          <h1 className='font-bold font-sora text-4xl mt-8 lg:text-[64px] lg:leading-[78px] '>
            {'Elevate Your Brand'}
            <br />
            {'with Professional Video Production.'}
          </h1>
          <p className='mt-4 mx-4 md:text-2xl'>
            Fidio offers comprehensive video production services designed to
            elevate your <br className='hidden md:block' /> brand and engage
            your audience.{' '}
          </p>
          <Link
            href='https://cal.com/fidio-admin-vuj8dq/30min'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='rounded-[36px] bg-white flex p-2 px-[6px] items-center gap-2 mt-8'>
              <p className='text-black md:text-[20px] font-medium ml-2'>
                Schedule a call
              </p>
              <div className='inline-flex w-fit p-5 py-5 bg-gradient-to-br from-[#C13315] to-[#F7731B] rounded-[52px] dark:text-white gap-2 text-lg'>
                <MoveUpRight size={12} />
              </div>
            </div>
          </Link>
          <img
            src='/img/internal/marketing/hero-camera-bg.png'
            alt='camera-image'
            className='mb-0 absolute bottom-0  hidden md:block mx-8 h-[500px] xl:max-w-[1130px]'
          />
        </div>
      </div>
      <div className='p-4 md:p-8 pt-12 bg-[#FFFF] font-sora'>
        <div className='grid gap-4 md:grid-cols-3 grid-rows-2 grid-cols-1 max-w-[1300px] mx-auto '>
          <div className='p-8 relative bg-[#0C0C0C] h-[350px] rounded-xl flex flex-col justify-center gap-8 md:col-span-2 col-span-1 shadow-[0_13px_100px_0_rgba(199,199,199,0.25)]'>
            <img
              src='/img/internal/marketing/orange-pattern-white.png'
              alt=''
              className='absolute top-0 left-0 w-full object-cover z-40 bottom-0 h-full'
            />
            <p className='text-4xl md:text-6xl font-bold font-sora md:leading-[5rem] pattern-text relative'>
              Why Choose Fidio
            </p>
            <Link
              href='https://cal.com/fidio-admin-vuj8dq/30min'
              target='_blank'
              rel=''
              className='inline-flex w-fit p-5 py-4 bg-gradient-to-br from-[#C13315] to-[#F7731B] rounded-[52px] dark:text-white gap-2 text-lg -center'
            >
              <span className='text-white'>Contact us</span>
              <MoveUpRight size={12} />
            </Link>
          </div>

          <div className='p-8 relative bg-white h-[350px] rounded-xl flex flex-col justify-center text-black shadow-[0_13px_100px_0_rgba(199,199,199,0.25)]'>
            <div className='rounded-[52px] w-fit p-2'>
              <img src='/img/internal/marketing/icon-10.png' className='w-12' />
            </div>
            <p className='text-2xl font-semibold mt-4 mb-8'>Proven Expertise</p>
            <p className='text-lg font-normal'>
              Our team has a proven track record of delivering exceptional video
              productions.
            </p>
          </div>

          <div className='p-8 relative bg-white h-[350px] rounded-xl flex flex-col justify-center text-black shadow-[0_13px_100px_0_rgba(199,199,199,0.25)]'>
            <div className='rounded-[52px] w-fit p-2'>
              <img src='/img/internal/marketing/icon-11.png' className='w-12' />
            </div>
            <p className='text-2xl font-semibold mt-4 mb-8'>
              Tailored Solutions
            </p>
            <p className='text-lg font-normal'>
              We work closely with you to understand your unique needs and
              develop customized solutions.
            </p>
          </div>

          <div className='p-8 relative bg-white h-[350px] rounded-xl flex flex-col justify-center text-black shadow-[0_13px_100px_0_rgba(199,199,199,0.25)]'>
            <div className='rounded-[52px] w-fit p-2'>
              <img src='/img/internal/marketing/icon-9.png' className='w-12' />
            </div>
            <p className='text-2xl font-semibold mt-4 mb-8'>
              High-Quality Standards
            </p>
            <p className='text-lg font-normal'>
              We adhere to the highest industry standards to ensure that your
              videos exceed expectations.
            </p>
          </div>

          <div className='p-8 relative bg-white h-[350px] rounded-xl flex flex-col justify-center text-black shadow-[0_13px_100px_0_rgba(199,199,199,0.25)]'>
            <div className='rounded-[52px] w-fit p-2'>
              <img src='/img/internal/marketing/icon-12.png' className='w-12' />
            </div>
            <p className='text-2xl font-semibold mt-4 mb-8'>
              Efficient Workflow
            </p>
            <p className='text-lg font-normal'>
              Our streamlined processes and dedicated team guarantee timely
              delivery.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-white pt-20 relative overflow-x-hidden'>
        <div className='bg-gradient-to-b from-[#C13315] to-[#DD681A] h-[180px] -z-1 absolute -right-4 -top-0 w-[800px] blur-3xl opacity-40 border-top-4 border-[#DD681A]'></div>
        <div className='mx-4'>
          <h3 className='text-black text-center text-4xl font-bold'>
            Our Professional Services
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-lg font-normal text-left max-w-[1300px] mx-auto text-black'>
            <div className='col-span-1 space-y-4 my-8 px-6 rounded-full'>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/mdi_file-document-edit-outline.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-semibold mt-4 mb-8 '>
                Concept Development and Scriptwriting
              </h3>
              <p className='text-lg font-normal'>
                Our creative experts will collaborate with you to develop a
                compelling storyline that aligns with your brand's messaging and
                objectives.
              </p>
            </div>
            <div className='col-span-1 space-y-4 my-8 px-6'>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/fluent-emoji-high-contrast_film-projector.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-semibold mt-4 mb-8 '>
                Filming and Editing
              </h3>
              <p className='text-lg font-normal'>
                Our experienced filmmakers and editors utilize state-of-the-art
                equipment to capture stunning footage and create visually
                engaging videos.
              </p>
            </div>
            <div className='col-span-1 space-y-4 my-8 px-6'>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/fluent_live-20-filled.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-semibold mt-4 mb-8 '>
                Livestreaming
              </h3>
              <p className='text-lg font-normal'>
                We specialize in high-quality live streaming for concerts,
                religious events, conferences, product launches, and lectures.
                Our team ensures a flawless experience, from planning to
                post-production.
              </p>
            </div>
            <div className='col-span-1 space-y-4 my-8 px-6'>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/f7_music-mic.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-semibold mt-4 mb-8 '>
                Audio Production
              </h3>
              <p className='text-lg font-normal'>
                Our audio professionals select the perfect music and sound
                effects to complement your video’s content and create a
                memorable experience for you.
              </p>
            </div>
          </div>
        </div>
        <div className='py-24 px-4'>
          <h3 className='text-black text-center text-4xl font-bold'>
            Use Cases
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 text-lg font-normal text-left max-w-[1000px] mx-auto text-black'>
            <div className='col-span-1 space-y-4  px-6 border-[#EEEEEE] border-[1px] rounded-md py-10 border-opacity-70 '>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/icon-8.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-bold mt-4 mb-8'>Livestreaming</h3>
              <ul className='text-lg font-normal list-disc ml-6'>
                <li>Concerts and music festivals</li>
                <li>Religious services and weddings</li>
                <li>Conferences and webinars</li>
                <li>Product launches</li>
                <li>Lectures and speeches</li>
              </ul>
            </div>
            <div className='col-span-1 space-y-4  px-6 border-[#EEEEEE] border-[1px] rounded-md py-10 border-opacity-70'>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/icon-6.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-bold mt-4 mb-8'>Videos</h3>
              <ul className='text-lg font-normal list-disc ml-6'>
                <li>Music videos</li>
                <li>Short and feature films</li>
                <li>Visualizers</li>
                <li>Exclusive BTS footage and programming</li>
              </ul>
            </div>
            <div className='col-span-1 space-y-4  px-6 border-[#EEEEEE] border-[1px] rounded-md py-10 border-opacity-70'>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/icon-7.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-bold mt-4 mb-8'>Social media</h3>
              <ul className='text-lg font-normal list-disc ml-6'>
                <li>Short clips</li>
                <li>Reels</li>
                <li>Viral videos</li>
              </ul>
            </div>
            <div className='col-span-1 space-y-4  px-6 border-[#EEEEEE] border-[1px] rounded-md py-10 border-opacity-70'>
              <div className='rounded-[52px] w-fit p-2 '>
                <img
                  src='/img/internal/marketing/icon-5.png'
                  className='w-20'
                />
              </div>
              <h3 className='text-2xl font-bold mt-4 mb-8'>Corporate events</h3>
              <ul className='text-lg font-normal list-disc ml-6'>
                <li>Product launches</li>
                <li>Workshops and tutorials</li>
                <li>Conferences and seminars</li>
                <li>Lectures and speeches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='p-8 md:p-24 bg-[url("/img/internal/marketing/bottom-section.png")] bg-cover'>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className=' px-0 md:px-6 font-sora'>
            <div className='grid gap-6 lg:grid-cols-[1fr_300px] items-center'>
              <div className='space-y-4'>
                <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
                  Ready to Bring Your Vision to Life?
                </h2>
                <p className=' text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white mb-8'>
                  Contact us today for a free consultation. We&apos;ll discuss
                  your project goals and provide you with a personalized quote.
                </p>
                <Link
                  href='https://cal.com/fidio-admin-vuj8dq/30min'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button
                    className='bg-gradient-to-br from-[#C13315] to-[#F7731B] dark:text-white px-8 py-4  rounded-full mt-8'
                    asChild
                  >
                    <div className='inline-flex items-center gap-2'>
                      SCHEDULE A FREE CONSULTATION
                      <MoveUpRight className='w-4 h-4' />
                    </div>
                  </Button>
                </Link>
              </div>
              <div className='hidden lg:block' aria-hidden='true'></div>
            </div>
          </div>
        </section>
      </div>
      <MarketingFooter />
    </div>
  );
}
