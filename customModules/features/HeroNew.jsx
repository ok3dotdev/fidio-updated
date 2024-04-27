import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = (props) => {
  const el = useRef(null);

  useEffect(() => {
    const container = document.getElementById('scrollingContainer');
    const children = container.children;

    const computedStyles = window.getComputedStyle(children[0]);
    const singleElementHeight =
      children[0].offsetHeight +
      parseInt(computedStyles.marginTop) +
      parseInt(computedStyles.marginBottom);

    let currentScroll = 0;

    function scrollContent() {
      currentScroll -= singleElementHeight;

      if (currentScroll <= -singleElementHeight) {
        const firstChild = container.firstElementChild;

        firstChild.remove();
        container.appendChild(firstChild.cloneNode(true));
        currentScroll = 0;
      }

      container.style.transform = `translateY(${currentScroll}px)`;

      // Ensure that the heading is underlined based on screen size
      const isMobile = window.innerWidth < 768; // Adjust the breakpoint as per your design
      const visibleHeadingIndex = isMobile ? 0 : 2; // Index of the heading to underline

      const allHeadings = Array.from(container.querySelectorAll('h2'));
      allHeadings.forEach((heading, index) => {
        if (index === visibleHeadingIndex) {
          heading.classList.add('underline');
        } else {
          heading.classList.remove('underline');
        }
      });
    }

    // Call scrollContent function once when the component mounts
    scrollContent();

    const scrollInterval = setInterval(scrollContent, 2000); // Adjust the interval as needed

    return () => clearInterval(scrollInterval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    const middlePosition =
      document.getElementById('scrollingContainer').children[0].offsetHeight +
      parseInt(
        window.getComputedStyle(
          document.getElementById('scrollingContainer').children[0]
        ).marginTop
      ) +
      parseInt(
        window.getComputedStyle(
          document.getElementById('scrollingContainer').children[0]
        ).marginBottom
      ) +
      document.getElementById('scrollingContainer').children[1].offsetHeight +
      parseInt(
        window.getComputedStyle(
          document.getElementById('scrollingContainer').children[1]
        ).marginTop
      ) +
      parseInt(
        window.getComputedStyle(
          document.getElementById('scrollingContainer').children[1]
        ).marginBottom
      );
    document.querySelector('.left-container').style.paddingTop = `${
      middlePosition // 84px is half of the default height (2em) of the left h2 element
    }px`;
  }, []);
  // useEffect(() => {
  //   const leftHeadings = document.querySelectorAll('#scrollingContainer h2');
  //   const totalLeftHeadingsHeight = Array.from(leftHeadings).reduce(
  //     (acc, heading) => acc + heading.offsetHeight,
  //     0
  //   );

  //   const rightContainer = document.querySelector('.left-container');
  //   const rightContainerHeight = rightContainer.offsetHeight;

  //   const paddingTop = (rightContainerHeight - totalLeftHeadingsHeight) / 2;
  //   const paddingLeft = window.innerWidth >= 768 ? 0 : 20; // Adjust as needed

  //   rightContainer.style.paddingTop = `${paddingTop}px`;
  //   // rightContainer.style.paddingLeft = `${paddingLeft}px`;
  // }, []);

  return (
    <div className='h-screen w-full relative font-Archivo'>
      <img
        className='w-full h-screen'
        src='/img/internal/hero-bg-wallpaper.png'
        alt=''
      />
      <div className='absolute top-0 w-full bg-black opacity-50 h-screen'></div>
      <div class='absolute top-0 right-0 left-0 w-full max-w-[108rem] mx-auto p-4 px-4 text-center lg:text-left lg:flex 2xl:pt-[157px] pt-[40px] lg:pt-[140px] flex flex-col lg:flex-row gap-1 h-full z-20 overflow-hidden justify-center'>
        <div class='flex flex-col lg:flex-row'>
          <div class='flex flex-col items-start gap-4 justify-start lg:justify-start flex-wrap left-container'>
            <h2 class='font-black font-Archivo text-[26px] md:text-6xl lg:text-[67px] 2xl:text-[84px]  mb-1 text-white text-left leading-[44px] flex-col mr-4'>
              Find joy through live Afro{' '}
            </h2>
            <div className='hidden lg:flex items-center gap-4'>
              <p class='font-sans'>Ready to stream? </p>
              {props._loggedIn ? (
                <Link
                  href='/home'
                  className='py-3 px-6 rounded-[20px] bg-[#FDB000] font-sans  text-black z-20 text-sm'
                >
                  Sign up for free with Google
                </Link>
              ) : (
                <Link
                  href='/signin'
                  className='py-3 px-6 rounded-[20px] bg-[#FDB000] font-sans  text-black z-20 text-sm'
                >
                  Sign up for free with Google
                </Link>
              )}
            </div>
          </div>
          <span
            id='scrollingContainer'
            className='flex flex-col scrollrdiv h-full justify-start'
          >
            <h2 className='font-black md:text-6xl text-[26px] lg:text-[67px] 2xl:text-[84px]  lg:mb-12 2xl:mb-16 text-white text-left lg:text-left main-heading'>
              beats
            </h2>
            <h2 className='font-black md:text-6xl text-[26px] lg:text-[67px] 2xl:text-[84px] lg:mb-12 2xl:mb-16 text-white text-left lg:text-left main-heading'>
              gospel
            </h2>
            <h2 className='font-black md:text-6xl text-[26px] lg:text-[67px] 2xl:text-[84px] lg:mb-12 2xl:mb-16 text-white text-left lg:text-left main-heading'>
              concerts
            </h2>
            <h2 className='font-black md:text-6xl text-[26px] lg:text-[67px] 2xl:text-[84px] lg:mb-12 2xl:mb-16 text-white text-left lg:text-left main-heading'>
              play
            </h2>
            <h2 className='font-black md:text-6xl text-[26px] lg:text-[67px] 2xl:text-[84px] lg:mb-12 2xl:mb-16 text-white text-left lg:text-left main-heading'>
              comedy
            </h2>
          </span>
          <div class='flex items-center gap-4 mt-4 justify-start lg:justify-start flex-wrap lg:mt-8 lg:hidden'>
            <p class='font-sans'>Ready to stream? </p>
            {props._loggedIn ? (
              <Link
                href='/home'
                className='py-3 px-6 rounded-[20px] bg-[#FDB000] font-sans  text-black z-20 text-sm'
              >
                Sign up for free with Google
              </Link>
            ) : (
              <Link
                href='/signin'
                className='py-3 px-6 rounded-[20px] bg-[#FDB000] font-sans  text-black z-20 text-sm'
              >
                Sign up for free with Google
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
