'use client';
import React from 'react';

export type ButtonType = {
  onClick: () => void;
  children: React.ReactNode;
  classes: string;
};

const ButtonFill = ({ onClick, children, classes }: ButtonType) => {
  return (
    <button
      className={`box-border block rounded-md border px-4 py-2 text-base font-semibold text-white hover:opacity-80 ${classes}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
