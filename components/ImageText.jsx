import Image from 'next/image';
const ImageText = ({ img, heading, description, direction }) => {
  return (
    <div className='mt-12 font-lexend px-4 max-w-6xl mx-auto'>
      <div className='flex flex-col items-center md:flex-row'>
        <Image src={img} width={350} height={'350'} />
        <div className='text-center mt-8'>
          <h3 className='text-2xl font-semibold mb-4 px-20'>{heading}</h3>
          <p className='text-lg text-dashtext px-5'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
