'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { outfit } from '../FontFamily';

type PropType = {
  currentRoute: string;
  children: React.ReactNode;
};

const NavbarLink = ({ currentRoute, children }: PropType) => {
  const pathname = usePathname();

  return (
    <Link href={currentRoute}>
      <li
        className={`flex cursor-pointer items-center py-2.5 pl-4
             text-base font-medium ${outfit.className} ${
          pathname === currentRoute && 'bg-[#67696c]'
        } `}
      >
        {children}
      </li>
    </Link>
  );
};

export default NavbarLink;
