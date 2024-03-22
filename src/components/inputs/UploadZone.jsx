import React, { useState } from 'react';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useDropzone } from 'react-dropzone';

const UploadZone = ({ setbannerImage, bannerImage, handleNewFile }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      console.log('Dropped files:', acceptedFiles);
      acceptedFiles.forEach((file) => {
        if (file.type && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setbannerImage(event.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          console.warn('Invalid file:', file);
        }
      });
      handleNewFile(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      className='w-full h-24 flex flex-col items-center justify-center border-dashed border-2 border-gray-400 rounded-lg cursor-pointer '
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <input {...getInputProps()} />
      <AddPhotoAlternateOutlinedIcon className='text-white mb-4' />
      <div className='flex items-center space-x-1 text-sm xl:text-md'>
        <p className='text-gray-600'>Drag an image here</p>
        <p className='text-gray-600'>or</p>
        <p className='text-white rounded-lg dark:bg-none underline cursor-pointer'>
          Upload from Device
        </p>
      </div>
    </div>
  );
};

export default UploadZone;
