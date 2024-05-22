import React from 'react';
import { Input } from '@/components/ui/input';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SubscribeForm = () => {
  const [term, setTerm] = React.useState('');
  function handleSubscribe() {}
  return (
    <div className='relative max-w-screen-xl mx-auto px-4 mt-12'>
      <div className='p-12 bg-dashSides rounded-[10px]'>
        <h3 className='font-bold text-3xl flex flex-col'>
          <span>Subscribe to</span>
          <span>Fidio’s newsletter</span>
        </h3>
        <div className='relative block mt-2 w-[300px]'>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
          >
            <Input
              placeholder='Subscribe'
              className='text-muted-foreground font-lexend p-1 border-b bg-transparent border-dashBorder '
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
