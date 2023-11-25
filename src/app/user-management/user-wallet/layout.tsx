'use client';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const heading = 'Payments';
  const pathname = usePathname();
  return (
    <div className='w-screen bg-[#F7F9FC]'>
      {pathname?.includes('/user-wallet/') ? (
        <>{children}</>
      ) : (
        <>
          <WpcasNavbar heading={heading} />
          {children}
        </>
      )}
    </div>
  );
}
