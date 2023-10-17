'use client';
import * as React from 'react';

import TopNavbar from '@/components/navbar/TopNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();

  return (
    <div className='w-screen bg-[#E3E7EF]'>
      <TopNavbar />
      {children}
    </div>
  );
}
