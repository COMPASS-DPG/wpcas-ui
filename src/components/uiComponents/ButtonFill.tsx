'use client';
import React from 'react';

export type ButtonType = {
  width?: string;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
  classes?: string;
};

const ButtonFill = ({ onClick, children, classes }: ButtonType) => {
  return (
    <button
      className={`rounded-md border ${classes} box-border block px-4 py-2 text-base font-semibold text-white hover:opacity-80`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
