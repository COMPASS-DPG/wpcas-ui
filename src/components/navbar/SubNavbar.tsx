'use client';

import React from 'react';

import { outfit } from '@/components/FontFamily';
import SubNavbarLink from '@/components/navbar/SubNavLink';

const SubNavbar = () => {
  return (
    <div className={`sticky top-0 z-10 bg-white  ${outfit.className}`}>
      <nav className='p-[10px] '>
        <ul className='flex flex-row border-b  border-solid border-gray-200 font-medium'>
          <SubNavbarLink
            routeName='Setup Survey Configuration'
            currentPath='/setup-new-configuration'
          />
          <SubNavbarLink
            routeName='Question Bank'
            currentPath='/question-bank'
          />
        </ul>
      </nav>
    </div>
  );
};

export default SubNavbar;
