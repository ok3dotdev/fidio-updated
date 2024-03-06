import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchQuery);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-[2rem] bg-white mt-4">
      <input
        type="text"
        className="w-full py-2 px-3 text-gray-700 rounded-[2rem] focus:outline-none bg-transparent font-sans"
        placeholder="Search for events"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        className="flex-shrink-0 bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-[2rem] ml-2"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
