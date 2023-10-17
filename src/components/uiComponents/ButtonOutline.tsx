'use client';
import React from 'react';

import { ButtonType } from '@/components/uiComponents/ButtonFill';

const ButtonOutline = ({ width, onClick, children }: ButtonType) => {
  return (
    <button
      className={`rounded-md border border-solid border-[#385B8B] px-8 py-[10px] 
        text-base font-semibold w-[${width}] mt-2 block text-[#385B8B] hover:opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
