import React, { useState } from 'react';
import Menu from 'customModules/features/AltMenu';
import { Input } from '@/components/ui/input';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const ResourceLayout = (props) => {
  const [term, setTerm] = useState('');
  const { children } = props;

  const handleSearch = () => {};
  return (
    <div className='font-lexend bg-dashBg h-full '>
      <Menu {...props} />
      <div className='max-w-7xl mx-auto pb-20'>
        <div className='flex flex-col items-center pt-20 px-4'>
          <h1 className='text-4xl font-bold'>Find resources</h1>
          <div className='space-y-2 text-center mt-8'>
            <div className='relative  md:block'>
              <form
                action=''
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                <Input
                  placeholder='Find resources'
                  className='text-muted-foreground font-lexend border-2'
                  onChange={(e) => setTerm(e?.target?.value)}
                  value={term}
                  onSubmit={handleSearch}
                />
              </form>
              <SearchOutlinedIcon className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground' />
            </div>
            <p>
              Find relevant information regarding our policies, guides,
              technology compliance and FAQs
            </p>
          </div>
          <hr className='w-full mt-8 mb-8' />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ResourceLayout;
