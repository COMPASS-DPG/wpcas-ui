'use client';
import { useEffect, useState } from 'react';

import Feedback from '@/components/wpcasOverView/Feedback';
import UserTable, { UserListType } from '@/components/wpcasOverView/UserTable';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

import { getUserList } from '@/services/configurationServices';

export type SearchInputType = {
  user: string;
  department: number | string;
};

const Wpcas = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState<UserListType[]>([]);
  const [filterUserData, setFilterUserData] = useState<UserListType[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getUserList();
        setLoading(false);
        setUserData(data);
        setFilterUserData(data);
      } catch (error) {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.error('API call error:', error);
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <div className='w-screen bg-[#f7f9fc]'>
      <WpcasNavbar />
      {loading && <div className='mt-[100px] text-center'>Loading...</div>}
      {error && <div className='mt-[100px] text-center'>Error...</div>}
      {!loading && !error && (
        <div className='mb-[110px] px-[40px] pb-[10px] pt-[30px]'>
          <Feedback />
          <UserTable
            userData={userData}
            filterUserData={filterUserData}
            setFilterUserData={(value) => setFilterUserData(value)}
          />
        </div>
      )}
    </div>
  );
};

export default Wpcas;
