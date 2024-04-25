import React from 'react';
import { Survey } from '/modules/survey';
import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq'; // Import API for making DB Requests

const TicketDetailsForm = ({
  info,
  pipelineDbItem,
  pipelineObject,
  setPipelineDbItem,
  setPipelineObject,
  imgFor,
  imgCache,
}) => {
  const router = useRouter();
  //console.log('pipeline', pipelineDbItem, info);

  const nextStep = async () => {
    const temp = pipelineObject;
    temp.status = 'pending';
    //console.log('dbitem', pipelineObject, pipelineDbItem);
    // const res = await apiReq('/product/createProduct', {
    //   apiUrl: info?.apiUrl,
    //   pipelineDbItem: pipelineDbItem,
    //   pipelineObject: temp,
    //   imgCache: imgCache,
    //   imgFor: imgFor,
    //   _loggedIn: info?._loggedIn, // Requires Authentication
    // });
    // //console.log('resp', res);
    // router.push('/studio');
  };
  const useSurvey = {
    name: 'Ticket',
    stages: {
      index: {
        className: 'myClass',
        pipeline: [
          {
            label: 'Price',
            input: {
              type: 'price',
              var: 'price',
              rows: 2,
              method: 'singleStyle',
            },
          },
          {
            label: 'Quantity',
            input: {
              type: 'quantity',
              var: 'quantity',
              rows: 2,
              method: 'singleStyle',
            },
          },
        ],
        confirm: { goto: 'end' },
      },
      end: {
        func: nextStep,
      },
    },
  };

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

export default TicketDetailsForm;
