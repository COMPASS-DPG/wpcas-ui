'use client';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AccountSection from '@/components/3cp/AccountSection';
import MarketPlaceNavbar from '@/components/navbar/MarketPlaceNavbar';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

import { getAllProviders } from '@/services/accountVerficationServices';
// {
//     "IFSC": "HDFC0000009",
//     "accNo": "8483654687",
//     "bankName": "HDFC",
//     "branchName": "HSR Layout"
// }

export type accountType = {
  id: string;
  name: string;
  email: string;
  organization: string;
  Phone: string;
  paymentInfo: {
    IFSC: string;
    accNo: string;
    bankName: string;
    branchName: string;
  };
  status: string;
  logo?: string;
  panNumber: string;
  gstNumber: string;
  date: string;
};

const AccountVefication = () => {
  const [activeSection, setActiveSection] = useState<string>('PENDING');
  const [currentAccountList, setCurrentAccountList] = useState<accountType[]>(
    []
  );
  const [AccountList, setAccountList] = useState<accountType[]>([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await getAllProviders();
      const pendingCourses = response?.filter(
        (account: accountType) => account.status === activeSection
      );

      setCurrentAccountList(pendingCourses);
      setAccountList(response);
    } catch (error) {
      toast.error('something went wrong');
    }
  }, [activeSection]);
  const filterCourse = (courseType: string) => {
    const filteredResult = AccountList.filter((course: accountType) => {
      return course.status === courseType;
    });
    setCurrentAccountList(filteredResult);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
        fetchData={fetchData}
      />
    </div>
  );
};
export default AccountVefication;
