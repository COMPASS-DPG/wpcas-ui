import Image from 'next/image';
import React from 'react';

import Profile from '~/images/profile.png';

const AdminSelect = () => {
  return (
    <div className='px-[1px] py-[6px] '>
      <div className='flex rounded-3xl border border-solid border-[#E3E7EF] p-1'>
        <Image src={Profile} alt='profile' width={30} height={30} />
        <select
          id='countries'
          className='h-[36px]  cursor-pointer  border-none bg-gray-50 focus:ring-0'
        >
          <option selected>Select User</option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
      </div>
    </div>
  );
};

export default AdminSelect;
