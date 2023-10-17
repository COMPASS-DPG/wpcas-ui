import React from 'react';

import { outfit } from '@/components/FontFamily';
import AdminSelect from '@/components/uiComponents/AdminSelect';

import BellLogo from '~/svg/bellLogo.svg';

const WpcasNavbar = () => {
  return (
    <nav className='flex items-center justify-between bg-white px-[14px] '>
      <div className={`text-2xl font-semibold ${outfit.className}`}>WPCAS</div>
      <div className='flex gap-x-11'>
        <BellLogo className='w-[24px]' />
        <AdminSelect />
      </div>
    </nav>
  );
};

export default WpcasNavbar;
