import React from 'react';
import { Input } from '@/components/ui/input';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SubscribeForm = () => {
  const [term, setTerm] = React.useState('');
  async function handleSubscribe() {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST', // Assuming you want to send a POST request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include any necessary data here
          email: term,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('data', data);
    } catch (error) {
      console.error('Oh, something happened: ', error);
    }
  }
  return (
    <div className='relative max-w-screen-xl mx-auto px-4 mt-12'>
      <div className='md:p-12 bg-dashSides rounded-[10px] p-8'>
        <h3 className='font-bold text-3xl flex flex-col text-left'>
          <span>Subscribe to</span>
          <span>Fidio’s newsletter</span>
        </h3>
        <div className='relative block mt-4 max-w-[400px]'>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
          >
            <Input
              placeholder='Subscribe'
              className='text-muted-foreground font-lexend p-2 border-b bg-transparent dark:border-dashBorder '
              onChange={(e) => setTerm(e?.target?.value)}
              value={term}
              onSubmit={handleSubscribe}
            />
          </form>
          <ArrowForwardIcon
            className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer'
            onClick={handleSubscribe}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
