'use client';
import * as React from 'react';

import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const heading = '3CP-Settlements';
  return (
    <div className='w-screen bg-[#F7F9FC]'>
      <WpcasNavbar heading={heading} />
      {children}
    </div>
  );
}
