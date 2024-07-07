import Image from 'next/image';
const ImageText = ({ img, heading, description, direction }) => {
  return (
    <div>
      <div className='flex'>
        <Image src={img} width={350} height={'350'} />
        <div>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
