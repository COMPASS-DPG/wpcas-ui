'use client';
import React from 'react';

export type ButtonType = {
  width: string;
  onClick: () => void;
  children: React.ReactNode;
};

const ButtonFill = ({ width, onClick, children }: ButtonType) => {
  return (
    <button
      className={`rounded-md border bg-[#385B8B] px-8 py-[10px] 
    text-base font-semibold text-white hover:opacity-80 w-[${width}] block`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
