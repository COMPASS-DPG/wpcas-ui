'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
const TopNavbar = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <div className='flex items-center p-[30px]'>
        <button
          className='mr-[15px] flex h-11 w-11 cursor-pointer 
        items-center justify-center rounded-md border-2 
        border-solid border-[#D9D9D9] bg-[#FFFFFF] hover:bg-gray-100 '
          onClick={handleBack}
        >
          <MdOutlineKeyboardArrowLeft size={28} />
        </button>
        <div className='text-xl font-semibold'>WPCAS</div>
      </div>
    </div>
  );
};

export default TopNavbar;
