'use client';
import React from 'react';

import { outfit } from '@/components/FontFamily';
import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import AdminSelect from '@/components/uiComponents/AdminSelect';

import BellLogo from '~/svg/bellLogo.svg';

const WpcasNavbar = ({ heading }: { heading: string }) => {
  return (
    <nav className='flex items-center justify-between bg-white px-[14px] '>
      <div className={`ml-[30px] text-2xl font-semibold ${outfit.className}`}>
        {heading}
      </div>
      <div className='flex gap-x-11'>
        <BellLogo className='w-[24px]' />
        <AdminSelect
          options={DEPARTMENT_OPTIONS}
          onChange={() => null}
          placeholder='user name'
          value=''
        />
      </div>
    </nav>
  );
};

export default WpcasNavbar;
