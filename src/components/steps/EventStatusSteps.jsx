import React, { useEffect, useState } from 'react';
import Ticket from '../Ticket';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Link from 'next/link';
import { cn, getButtonsForStep } from '@/lib/utils';
import SearchBar from '@/components/inputs/SearchBar';
import { useRouter } from 'next/router';
import apiReq from '/modules/utility/api/apiReq';
import TicketLoadingSkeleton from '@/components/skeletons/TicketLoadingSkeleton';

const EventStatusSteps = (props) => {
  const [step, setStep] = useState('pending');
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const statusColors = [
    { status: 'draft', color: 'bg-dashFg' },
    { status: 'pending', color: 'bg-accentY' },
    { status: 'approved', color: 'bg-green-300' },
    { status: 'past', color: 'bg-blue-300' },
  ];

  // useEffect(() => {
  //   fetchTickets(step);
  // }, [step, props?._loggedIn?.identifier]);
  // const router = useRouter();
  // const fetchTickets = async (status) => {
  //   setLoading(true);
  //   if (props && props?._loggedIn?.identifier) {
  //     const res = await apiReq('/product/getProducts', {
  //       apiUrl: props?.apiUrl,
  //       pagination: 0,
  //       extra: {
  //         owner: props?._loggedIn?.identifier,
  //       },
  //       meta: {
  //         status,
  //       },
  //     });
  //     setTickets(res.products || []);
  //     // console.log('tix', tickets);
  //     setLoading(false);
  //   }
  // };

  const handleStepChange = (newStep) => {
    if (newStep !== step) {
      // setLoading(true);
      setStep(newStep);
    }
  };

  const handleView = (id) => {
    router.push(`/studio/events/${id}`);
  };

  return (
    <div className='mt-6'>
      <h3 className='font-sans'>Events</h3>
      <div className='flex gap-4 my-2'>
        {statusColors.map(({ status, color }) => (
          <div
            key={status}
            className={cn(
              'p-2 rounded-[1.5rem] font-sans cursor-pointer',
              step === status ? `${color} text-black` : 'text-white'
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
  );
};

export default EventStatusSteps;
