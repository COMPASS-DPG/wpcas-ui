'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';
import Pagination from '@/components/wpcasOverView/Pagination';

import { SearchInputType } from '@/app/wpcas/page';

type UserType = {
  userId: string;
  userName: string;
  department: string;
  role: string;
  wpcas: string;
  surveysFilled: number;
  surveyYetToFilled: number;
  onBoardingOn: string;
};

const UserTable = ({ user, department }: SearchInputType) => {
  const [userData, setUserData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/table?userName_like=${user}&department_like=${department}&_page=${page}&_limit=${limit}`
      )
      .then((r) => {
        setUserData(r.data);
        setTotal(Number(r.headers['x-total-count']));
      });
  }, [page, limit, user, department]);

  return (
    <>
      <div className='relative overflow-x-auto shadow-md sm:rounded-md'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead
            className={`bg-[#26292D] text-sm font-normal text-white ${outfit.className}`}
          >
            <tr>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                User Id
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                User Name
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Department
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Role
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                WPCAS
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Surveys Filled
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Survey yet to Filled
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Onboarding On
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user: UserType) => {
              return (
                <tr
                  key={user?.userId}
                  className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
                >
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.userId}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.userName}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.department}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.role}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.wpcas}
                  </td>

                  <td className='px-6 py-[14px] text-center text-sm font-normal text-[#272728]'>
                    {user.surveysFilled}
                  </td>
                  <td className='px-6 py-[14px] text-center text-sm font-normal text-[#272728]'>
                    {user.surveyYetToFilled}
                  </td>
                  <td className='px-6 py-[14px] text-center text-sm font-normal text-[#272728]'>
                    {user.onBoardingOn}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          handleLimit={(value: number) => setLimit(value)}
          limit={limit}
          total={total}
          page={page}
          handlePage={(value: number) => setPage(value)}
        />
      </div>
    </>
  );
};

export default UserTable;
