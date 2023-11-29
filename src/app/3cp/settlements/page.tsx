'use client';
import React, { useEffect, useState } from 'react';

import SettlementsTable from '@/components/settlements/SettlementsTable';
import Spinner from '@/components/Spinner';

import { getSettlementsData } from '@/services/configurationServices';

export type SettlementDataType = {
  id: string;
  imgLink: string;
  name: string;
  totalCourses: number;
  activeUsers: number;
  totalCredits: number;
};

const Settlements = () => {
  const adminId = localStorage.getItem('adminId') ?? '';
  const [filterUserData, setFilterUserData] = useState<SettlementDataType[]>(
    []
  );
  const [userData, setUserData] = useState<SettlementDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    if (fetchData) {
      (async () => {
        try {
          const data = await getSettlementsData(adminId);
          setLoading(false);
          setUserData(data);
          setFetchData(false);
          setFilterUserData(data);
        } catch (error) {
          // Handle any errors that occur during the API call
          // eslint-disable-next-line no-console
          console.error('API call error:', error);
          setLoading(false);
          setError(true);
        }
      })();
    }
  }, [fetchData, adminId, setFetchData]);

  return (
    <>
      {loading && (
        <div className='mt-[100px] text-center'>
          <Spinner />
        </div>
      )}
      {error && <div className='mt-[100px] text-center'>Error...</div>}
      {!loading && !error && (
        <div className='mb-[110px] px-[30px] py-[10px] '>
          <SettlementsTable
            userData={userData}
            filterUserData={filterUserData}
            setFilterUserData={(value) => setFilterUserData(value)}
            adminId={adminId}
            setFetchData={setFetchData}
          />
        </div>
      )}
    </>
  );
};

export default Settlements;
