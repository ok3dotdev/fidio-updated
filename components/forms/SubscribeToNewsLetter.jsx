import React from 'react';
import { Input } from '@/components/ui/input';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useToast } from '@/components/ui/use-toast';

const SubscribeForm = () => {
  const { toast } = useToast();
  const [term, setTerm] = React.useState('');
  const [error, setError] = React.useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  async function handleSubscribe() {
    if (!term) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(term)) {
      setError('Invalid email address');
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: term,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.email) {
        setTerm('');
        setError('');
        toast({
          title: 'Subscribed',
          description: 'Thanks for subscribing',
          status: 'success',
        });
      }
    } catch (error) {
      console.error('Oh, something happened: ', error);
      setError('Subscription failed. Please try again later.');
    }
  }
  return (
    <div className='relative max-w-screen-xl mx-auto mt-12 font-lexend px-4'>
      <div className='md:p-12 bg-dashSides rounded-[10px] p-8'>
        <h3 className='font-bold text-3xl flex flex-col text-left'>
          <span>Subscribe to</span>
          <span>Fidio’s Newsletter</span>
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
              className='text-muted-foreground font-lexend p-2 border-b bg-transparent dark:border-dashBorder text-white'
              onChange={(e) => setTerm(e?.target?.value)}
              value={term}
              onSubmit={handleSubscribe}
            />
          </form>
          {error && (
            <p className='text-red-500 text-left text-xs mt-1'>{error}</p>
          )}
          <ArrowForwardIcon
            className='absolute right-2 top-2.5 h-4 w-4  cursor-pointer text-accentY'
            onClick={handleSubscribe}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
