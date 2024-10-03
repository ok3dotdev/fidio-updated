import React from 'react';

const ImageText = ({ img, heading, description, direction, glow }) => {
  const isReverse = direction === 'reverse';

  return (
    <div className='my-20 px-8 max-w-6xl mx-auto'>
      <div
        className={`flex flex-col items-center md:flex-row justify-center gap-12 ${
          isReverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className='relative'>
          {glow && (
            <div className='absolute inset-0 blur-lg bg-white opacity-20 rounded-full'></div>
          )}
          <img
            src={img}
            width={350}
            height={350}
            alt='Image'
            className='relative z-10'
          />
        </div>
        <div
          className={`mt-8 md:max-w-[500px] ${
            isReverse ? 'md:text-right' : 'md:text-left'
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-4 md:max-w-[400px] ${
              isReverse ? 'md:text-right ml-auto' : 'md:text-left'
            }`}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p
            className={`md:text-sm lg:text-lg text-dashtext md:max-w-[500px] text-sm ${
              isReverse ? 'md:text-right' : 'md:text-left'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
