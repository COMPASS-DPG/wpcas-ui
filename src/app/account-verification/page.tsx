'use client';
import { useState } from 'react';

import AccountSection from '@/components/3cp/AccountSection';
import MarketPlaceNavbar from '@/components/navbar/MarketPlaceNavbar';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

const getinitialValue = () => {
  return [
    {
      userId: 2,
      name: 'Lakshmi Narayana',
      organization: 'Unacademy',
      Phone: '9876543210',
      email: 'sampletest@gmail.com',
      bank: 'SBI',
      branch: 'Allahabad',
      accountNumber: '56156156456421562165',
      ifscCode: 'SBI0000456',
      state: 'rejected',
      logo: '../../../public/images/courseProvider.png',
      panNumber: 'SABCA456116P',
      gstNumber: '62651616262162',
    },
  ];
};
export type accountType = {
  userId: number;
  name: string;
  organization: string;
  Phone: string;
  email: string;
  bank: string;
  branch: string;
  accountNumber: string;
  ifscCode: string;
  state: string;
  logo?: string;
  panNumber: string;
  gstNumber: string;
};

const AccountVefication = () => {
  const [activeSection, setActiveSection] = useState<string>('approvedSection');
  const [currentAccountList, setCurrentAccountList] = useState<accountType[]>(
    getinitialValue()
  );
  {
    setCurrentAccountList;
  }
  return (
    <div className='w-full bg-[#f7f9fc]'>
      <WpcasNavbar heading='3CP-Account Verification' />
      <MarketPlaceNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <AccountSection
        activeSection={activeSection}
        courseList={currentAccountList}
      />
    </div>
  );
};
export default AccountVefication;
