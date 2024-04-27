import React from 'react';
import { Survey } from '/modules/survey';
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import { allowedTypes } from '/modules/ecommerce/product/defaults';
import { v4 as uuidv4 } from 'uuid';
import apiReq from '/modules/utility/api/apiReq'; // Import API for making DB Requests

const MediaDetailsForm = ({
  info,
  setStep,
  step,
  pipelineDbItem,
  pipelineObject,
  setPipelineDbItem,
  setPipelineObject,
  imgFor,
  imgCache,
}) => {
  // const [step, setStep] = React.useState('1');
  // const [currentStage, setCurrentStage] = React.useState(null);
  // const [imgCache, setImgCache] = React.useState(null); //local images banner
  // const [pipelineDbItem, setPipelineDbItem] = React.useState({}); // skeleton on object
  // const [pipelineObject, setPipelineObject] = React.useState({}); // added variables ---- add values here
  // const [imgFor, setImgFor] = React.useState([]); // form mateched for images

  // //console.log('media', pipeObj);
  const nextStep = () => {
    setStep(step);
  };

  const handleNewFile = React.useCallback((e) => {
    const modif = e?.currentTarget?.getAttribute('selectmodif');
    const files = e?.target?.files;
    const filesRenamed = Array.from(files)
      .slice(0, files.length > 1 ? 1 : files.length)
      .filter((m) => m.type && allowedTypes.indexOf(m.type) > -1)
      .map((m) => {
        var blob = m.slice(0, m.size, m.type);
        const ext =
          allowedTypes[allowedTypes.indexOf(m.type)].match(
            /\/([a-zA-Z0-9].*)/
          )[1];
        return new File([blob], `${uuidv4()}.${ext}`, { type: m.type });
      });
    const useForm = imgCache;
    const imgForTemp = imgFor;
    if (filesRenamed) {
      filesRenamed.forEach((img) => {
        useForm.append('image', img);
        fileToDataUrl(img, modif);
        const f = imgForTemp.findIndex((m) => m.name === img.name);
        if (f > -1) {
          imgForTemp.splice(f, 1);
        }
        imgForTemp.push({ name: img.name, modif: modif });
      });
    }
    setImgFor(imgForTemp);
    setImgCache(useForm);
    if (props?.setImgCache) {
      props.setImgCache(useForm);
    }
    if (props?.setImgFor) {
      props.setImgFor(imgForTemp);
    }
  });

  const useSurvey = {
    name: 'Media',
    stages: {
      index: {
        className: 'myClass',
        pipeline: [
          {
            label: 'Banner',
            note: 'Add a Banner for your Event',
            input: {
              type: 'image',
              var: 'featureImg', //imageFor
            },
            height: '125px',
            width: '250px',
          },
          {
            className: 'myClass',
            note: 'Add a Poster for your Event',
            label: 'Poster',
            input: {
              type: 'image',
              var: 'leadImg',
            },
            height: '125px',
            width: '125px',
          },
        ],
        confirm: { goto: 'end' },
      },
      end: {
        func: nextStep,
      },
    },
  };

  // const style = defaultStyle();

  // useSurvey.pipelineDbItemDefault = {
  //   id: 'uuidv4()',
  //   shop: info?.shop?.id ?? null,
  //   name: '',
  //   detailmeta: {
  //     productType: 'virtual',
  //     livestream: true,
  //     lineup: [],
  //     ticket: true, // Add this to ensure Item is interpreted as ticket w date
  //   },
  //   styles: [style],
  //   shipping: [],
  //   published: false,
  //   images: [],
  //   protype: {
  //     type: 'virtual',
  //     subscription: false,
  //   },
  //   infinite: false,
  //   meta: {
  //     status: 'draft',
  //   },
  //   files: {},
  //   new: true,
  // };
  return (
    <div>
      <Survey
        {...info}
        survey={useSurvey}
        setPipelineDbItem={setPipelineDbItem}
        setPipelineObject={setPipelineObject}
        imgCache={imgCache}
        imgFor={imgFor}
        pipelineDbItem={pipelineDbItem}
        pipelineObject={pipelineObject}
      />
    </div>
  );
};

export default MediaDetailsForm;

// remaining: {
//             pipeline: [
//                 {
//                     label: 'Price',
//                     input: {
//                         type: 'price',
//                         var: 'price',
//                         rows: 2,
//                         method: 'singleStyle'
//                     }
//                 },
//                 {
//                     label: 'Quantity',
//                     input: {
//                         type: 'quantity',
//                         var: 'quantity',
//                         rows: 2,
//                         method: 'singleStyle'
//                     }
//                 },
//                 {
//                     label: 'Banner',
//                     note: 'Add a Banner for your Event',
//                     input: {
//                         type: 'image',
//                         var: 'featureImg'
//                     },
//                     height: '125px',
//                     width: '250px'
//                 },
//                 {
//                     className: 'myClass',
//                     note: 'Add a Poster for your Event',
//                     label: 'Poster',
//                     input: {
//                         type: 'image',
//                         var: 'leadImg'
//                     },
//                     height: '125px',
//                     width: '125px'
//                 }
//             ],
//             confirm: { label: 'Submit', goto: 'end' }
//         },
