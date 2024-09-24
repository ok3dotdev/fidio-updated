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
    <div className='relative max-w-screen-xl mx-auto mt-12 font-lexend'>
      <div className='md:p-12 bg-dashSides rounded-[10px] p-8 flex flex-col items-center'>
        <h3 className='font-bold text-3xl text-center'>
          Stay Updated with Our Newsletter
        </h3>
        <p className='text-center mt-2'>
          Get the latest live event updates straight to your inbox.
        </p>
        <div className='mt-4 w-full md:w-auto'>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
            className='flex w-full md:min-w-[500px]'
          >
            <Input
              placeholder='Subscribe'
              className='h-10 text-muted-foreground font-lexend p-2 border-b bg-transparent dark:border-dashBorder text-white flex-1'
              onChange={(e) => setTerm(e?.target?.value)}
              value={term}
            />
            <button
              type='submit'
              className='bg-accentY text-white p-2 rounded ml-2'
            >
              Subscribe
            </button>
          </form>
          {error && (
            <p className='text-red-500 text-left text-xs mt-1'>{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
