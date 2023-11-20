'use client';
import React, { useEffect, useState } from 'react';

import UserWalletTable from '@/components/userManagement/UserWalletTable';

import { getUserWalletDetails } from '@/services/configurationServices';

export type UserWalletDataType = {
  userId: string;
  userName: string;
  role: string;
  coursePurchased: number;
  walletBalance: string;
};

const Wallet = () => {
  const [filterUserData, setFilterUserData] = useState<UserWalletDataType[]>(
    []
  );
  const [userData, setUserData] = useState<UserWalletDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getUserWalletDetails();
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
    <>
      {loading && <div className='mt-[100px] text-center'>Loading...</div>}
      {error && <div className='mt-[100px] text-center'>Error...</div>}
      {!loading && !error && (
        <div className='mb-[110px] px-[40px] py-[10px] '>
          <UserWalletTable
            userData={userData}
            filterUserData={filterUserData}
            setFilterUserData={(value) => setFilterUserData(value)}
          />
        </div>
      )}
    </>
  );
};

export default Wallet;
