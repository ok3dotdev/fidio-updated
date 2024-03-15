import React, { useEffect, useState } from 'react';
import Ticket from '@/components/Ticket';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Link from 'next/link';
import { cn, statusColors, getButtonsForStep } from '@/lib/utils';
import SearchBar from '@/components/inputs/SearchBar';
import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';
import StudioLayout from '@/components/Layouts/StudioLayout';

import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';

const pageName = 'create';

const events = (props) => {
  const [step, setStep] = useState('draft');
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchTickets(step);
  }, [step, props?._loggedIn?.identifier]);

  const fetchTickets = async (status) => {
    setLoading(true);
    if (props && props?._loggedIn?.identifier) {
      const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0,
        extra: {
          owner: props?._loggedIn?.identifier,
        },
        meta: {
          status,
        },
      });
      setTickets(res.products || []);
      // console.log('tix', tickets);
      setLoading(false);
    }
  };

  const handleStepChange = async (newStep) => {
    if (newStep !== step) {
      setLoading(true);
      setStep(newStep);
    }
  };

  const handleView = (id) => {
    router.push(`/studio/events/${id}`);
  };

  return (
    <StudioLayout {...props}>
      <div className='md:mx-[8rem]'>
        <div className='mt-6'>
          <div className='flex gap-4 my-2'>
            {statusColors.map(({ status, color }) => (
              <div
                key={status}
                className={cn(
                  'p-2 rounded-[1.5rem] font-sans',
                  step === status ? `bg-${color} text-black` : 'text-white'
                )}
                onClick={() => handleStepChange(status)}
                style={{ pointerEvents: loading ? 'none' : 'auto' }}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </div>
            ))}
          </div>
          <SearchBar />
          {loading && (
            <div className='mt-12 space-y-4'>
              <TicketLoadingSkeleton />
              <TicketLoadingSkeleton />
              <TicketLoadingSkeleton />
            </div>
          )}
          {!loading && (
            <>
              <div className='flex flex-col gap-4 mt-12'>
                {tickets.length > 0 ? (
                  tickets.map((ticket, index) => (
                    <Ticket
                      key={index}
                      title={ticket.name}
                      date={ticket.created}
                      showButtons={getButtonsForStep(step)}
                      handleView={handleView}
                      id={ticket.id}
                    />
                  ))
                ) : (
                  <h3 className='font-sans'>
                    {step === 'draft'
                      ? 'No Draft Tickets'
                      : `No ${
                          step.charAt(0).toUpperCase() + step.slice(1)
                        } Tickets at this time.`}
                  </h3>
                )}
              </div>
              {step === 'draft' && (
                <div className='mt-4'>
                  <Link
                    href='/studio/events/create'
                    className='bg-dashFg rounded-[4rem] mt-4 px-3 py-2 text-black font-sans inline-flex justify-center gap-1'
                    onClick={() => console.log('Creating event...')}
                  >
                    <AddCircleRoundedIcon />
                    Create event
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
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

export default events;
