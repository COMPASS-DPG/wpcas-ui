'use client';
import React from 'react';

import SearchInput from '@/components/uiComponents/SearchInput';

type PropType = {
  value: string;
  onChange: (arg: string) => void;
  // handleSearch: () => void;
};

// import ButtonFill from '@/components/uiComponents/ButtonFill';

// import SearchIcon from '~/svg/searchIcon.svg';

const SearchUser = ({ value, onChange }: PropType) => {
  return (
    <div className='my-7 flex flex-wrap gap-2.5'>
      <SearchInput
        value={value}
        onChange={(updatedValue) => onChange(updatedValue)}
        placeholder='Search User'
      />
      {/* <ButtonFill onClick={handleSearch} classes='bg-[#385B8B] w-[120px]'>
        <div className='flex justify-between'>
          <SearchIcon className='w-[18px]' />
          <span>Search</span>
        </div>
      </ButtonFill> */}
    </div>
  );
};

export default SearchUser;
