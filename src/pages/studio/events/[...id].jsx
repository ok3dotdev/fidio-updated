import React, { useState, useEffect } from 'react';
import StudioLayout from '@/components/Layouts/StudioLayout';

import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';

import { useRouter } from 'next/router';
import LabeledInputs from '@/components/inputs/LabeledInputs';
import EventDetailsForm from '../../../components/forms/EventDetailsForm';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';

const pageName = 'create';

const EventView = (props) => {
  const [step, setStep] = useState('1');
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchTickets();
  }, [step, props?._loggedIn?.identifier]);

  const fetchTickets = async () => {
    setLoading(true);
    if (props && props?._loggedIn?.identifier) {
      const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0,
        extra: {
          owner: props?._loggedIn?.identifier,
        },
        id: router.query.id,
      });
      setTicket(res.products || []);
      setLoading(false);
    }
  };

  // if (!loading && ticket) {
  //   console.log(ticket);
  // }
  return (
    <StudioLayout {...props}>
      <div className='xl:mx-[20rem] md:mx-[3rem]'>
        {loading && (
          <div className='mt-12 space-y-4'>
            <TicketLoadingSkeleton />
            <TicketLoadingSkeleton />
            <TicketLoadingSkeleton />
          </div>
        )}
        {!loading && step === '1' && ticket && (
          <div>
            <LabeledInputs label='Event name' value={ticket[0]?.name} />
            <LabeledInputs
              label='Event Description'
              value={ticket[0]?.detailmeta?.description}
            />
            <LabeledInputs label='Venue name' value={ticket[0]?.meta?.venue} />
            <LabeledInputs label='Address' value={ticket[0]?.meta?.address} />
            <LabeledInputs label='City' value={ticket[0]?.meta?.city} />
            <LabeledInputs label='Address' value={ticket[0]?.meta?.state} />
            <LabeledInputs
              label='State/Province'
              value={ticket[0]?.meta?.state}
            />
            <LabeledInputs label='Country' value={ticket[0]?.meta?.country} />
            <LabeledInputs label='Date' value={ticket[0]?.created} />
            <LabeledInputs
              label='Stream starts'
              value={ticket[0]?.detailmeta?.livestreamDef?.dates[0]}
            />
          </div>
        )}
        {/* {step === '1' && <EventDetailsForm />} */}
        {/* {step === '2' && (
          <div>
            <h1>{pipelineObject.name}</h1>
            <EventDetailsStep
              props={props}
              submit={doFunc}
              survey={useSurvey}
              pipelineObject={pipelineObject}
              setPipelineObject={setPipelineObject}
              pipelineDbItem={pipelineDbItem}
              setPipelineDbItem={setPipelineDbItem}
              imgFor={imgFor}
              imgCache={imgCache}
            />
          </div>
        )} */}
      </div>
    </StudioLayout>
  );
};

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default EventView;
