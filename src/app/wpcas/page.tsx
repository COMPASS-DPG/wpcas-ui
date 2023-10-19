'use client';
import React, { useState } from 'react';

import Feedback from '@/components/wpcasOverView/Feedback';
import SearchUser from '@/components/wpcasOverView/SearchUser';
import UserTable from '@/components/wpcasOverView/UserTable';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

const getEmptyValue = () => {
  return {
    user: '',
    department: '',
  };
};

export type SearchInputType = {
  user: string;
  department: string;
};

const Wpcas = () => {
  const [searchInput, setSearchInput] = useState<SearchInputType>(
    getEmptyValue()
  );

  const handleSearch = () => {
    setSearchInput(getEmptyValue());
  };

  return (
    <div className='w-screen   bg-[#f7f9fc]'>
      <WpcasNavbar />
      <div className='mb-[110px] px-[40px] pb-[10px] pt-[30px]'>
        <Feedback />
        <SearchUser
          value={searchInput}
          onChange={(value) => setSearchInput(value)}
          handleSearch={handleSearch}
        />
        <UserTable />
      </div>
    </div>
  );
};

export default Wpcas;
