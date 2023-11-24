'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import AccountSection from '@/components/3cp/AccountSection';
import MarketPlaceNavbar from '@/components/navbar/MarketPlaceNavbar';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

const getinitialValue = () => {
  return [
    {
      userId: 1,
      name: 'Lakshmi Narayana a',
      organization: 'Unacademy',
      Phone: '9876543210',
      email: 'sampletest@gmail.com',
      bank: 'SBI',
      branch: 'Allahabad',
      accountNumber: '56156156456421562165',
      ifscCode: 'SBI0000456',
      status: 'approved',
      logo: '../../../public/images/courseProvider.png',
      panNumber: 'SABCA456116P',
      gstNumber: '62651616262162',
      date: '22 Oct 2023',
    },
    {
      userId: 2,
      name: 'Lakshmi Narayana p',
      organization: 'Unacademy',
      Phone: '9876543210',
      email: 'sampletest@gmail.com',
      bank: 'SBI',
      branch: 'Allahabad',
      accountNumber: '56156156456421562165',
      ifscCode: 'SBI0000456',
      status: 'pending',
      logo: '../../../public/images/courseProvider.png',
      panNumber: 'SABCA456116P',
      gstNumber: '62651616262162',
      date: '22 Oct 2023',
    },
    {
      userId: 3,
      name: 'Lakshmi Narayana r',
      organization: 'Unacademy',
      Phone: '9876543210',
      email: 'sampletest@gmail.com',
      bank: 'SBI',
      branch: 'Allahabad',
      accountNumber: '56156156456421562165',
      ifscCode: 'SBI0000456',
      status: 'rejected',
      logo: '../../../public/images/courseProvider.png',
      panNumber: 'SABCA456116P',
      gstNumber: '62651616262162',
      date: '22 Oct 2023',
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
  status: string;
  logo?: string;
  panNumber: string;
  gstNumber: string;
  date: string;
};

const AccountVefication = () => {
  const [activeSection, setActiveSection] = useState<string>('pendingSection');
  const [currentAccountList, setCurrentAccountList] = useState<accountType[]>(
    getinitialValue()
  );
  const [AccountList, setAccountList] = useState<accountType[]>(
    getinitialValue()
  );
  const fetchData = async () => {
    const response = await axios.get('http://127.0.0.1:3001/accounts');

    const pendingCourses = response.data.filter(
      (course: accountType) => course.status === 'pending'
    );
    setCurrentAccountList(pendingCourses);
    setAccountList(response.data);
  };
  const filterCourse = (courseType: string) => {
    const filteredResult = AccountList.filter((course: accountType) => {
      return course.status === courseType;
    });
    setCurrentAccountList(filteredResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full bg-[#f7f9fc]'>
      <WpcasNavbar heading='3CP-Account Verification' />
      <MarketPlaceNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        filterCourse={filterCourse}
      />
      <AccountSection
        activeSection={activeSection}
        accountList={currentAccountList}
      />
    </div>
  );
};
export default AccountVefication;
