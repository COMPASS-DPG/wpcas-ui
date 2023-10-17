'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import NavbarLink from './NavbarLink';
import { outfit, oxanium } from '../../components/FontFamily';

import ListIcon from '~/svg/admin.svg';
import DashboardIcon from '~/svg/dashboardIcon.svg';
import MarketPlaceIcon from '~/svg/marketplaceIcon.svg';
import UserIcon from '~/svg/userIcon.svg';
import WalletIcon from '~/svg/walletIcon.svg';
import WpcasIcon from '~/svg/wpcasIcon.svg';

const SideNavbar = () => {
  const pathname = usePathname();
  return (
    <div className='sticky top-0 h-screen w-[200px] bg-[#26292D] text-white'>
      <div
        className={`text-white ${oxanium.className} mx-[22px] mt-[30px] text-3xl font-semibold`}
      >
        COMPASS
      </div>
      <nav className='mt-[80px]'>
        <ul className='flex-col gap-y-4 '>
          <NavbarLink currentRoute='/'>
            <DashboardIcon className='mr-2 w-5' /> Dashboard{' '}
          </NavbarLink>
          <NavbarLink currentRoute='/'>
            <MarketPlaceIcon className='mr-2 w-5' /> Market Place{' '}
          </NavbarLink>
          <li
            className={`flex cursor-pointer items-center py-2.5 pl-4
                     text-base font-medium ${outfit.className} ${
              pathname?.includes('/wpcas') && 'bg-[#67696c]'
            }`}
          >
            <Link href='/wpcas'>
              <div className={`flex `}>
                <WpcasIcon className='mr-2 w-5' />
                WPCAS
              </div>
            </Link>
          </li>
          <li className={`text-base font-medium ${outfit.className}`}>
            <ul>
              <Link href='/setup-new-survey'>
                <li
                  className={`my-2 flex py-2 pl-7 text-sm font-normal
                                  ${
                                    pathname?.includes('/setup-new-survey') &&
                                    'bg-[#67696c]'
                                  }`}
                >
                  <ListIcon className='mr-2 w-3' />
                  Setup New Survey
                </li>
              </Link>
              <Link href='/question-bank'>
                <li
                  className={`my-2 flex py-2 pl-7 text-sm font-normal
                                 ${
                                   pathname?.includes('/question-bank') &&
                                   'bg-[#67696c]'
                                 }`}
                >
                  <ListIcon className='mr-2 w-3' />
                  Question Bank
                </li>
              </Link>
            </ul>
          </li>
          <NavbarLink currentRoute='/'>
            <UserIcon className='mr-2 w-5' /> User Information
          </NavbarLink>
          <NavbarLink currentRoute='/'>
            <WalletIcon className='mr-2 w-5' /> Payment
          </NavbarLink>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
