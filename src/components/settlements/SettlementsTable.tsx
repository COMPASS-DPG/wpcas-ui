'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import Pagination from '@/components/wpcasOverView/Pagination';
import SearchUser from '@/components/wpcasOverView/SearchUser';

import groupProfileImage from '~/images/group-profile-users.png';
export type UserListType = {
  userId: string;
  userName: string;
  wpcasScore: string;
  surveysFilled: number;
  surveysToBeFilled: number;
  dateOfJoining: Date;
  isNewEmployee: boolean;
  designation: string;
  isAdmin: boolean;
  profilePicture: string;
};

type PropType = {
  userData: UserListType[];
  filterUserData: UserListType[];
  setFilterUserData: (arg: UserListType[]) => void;
};

const SettlementsTable = ({
  userData,
  setFilterUserData,
  filterUserData,
}: PropType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchInput, setSearchInput] = useState<string>('');

  const totalPages = Math.ceil(filterUserData?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filterUserData?.slice(startIndex, endIndex);

  const handleSearch = (value: string) => {
    const newData = userData?.filter((item) => {
      const nameMatch = item?.userName
        ?.toLowerCase()
        .includes(value.toLowerCase());
      return nameMatch;
    });
    setSearchInput(value);
    setFilterUserData(newData);
    if (currentPage != 1) setCurrentPage(1);
  };

  return (
    <>
      <SearchUser
        value={searchInput}
        onChange={(value) => handleSearch(value)}
        // handleSearch={() => null}
        placeholder='Search Course Provider'
      />
      <div className='relative overflow-x-auto shadow-md sm:rounded-md'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead
            className={`bg-[#26292D] text-sm font-normal text-white ${outfit.className}`}
          >
            <tr>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Sr No
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Third Party Course Providers
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Total Courses
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Active Users
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Total Credits
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'></th>
            </tr>
          </thead>
          <tbody>
            {currentData.length == 0 && (
              <tr
                className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
              >
                <td
                  align='center'
                  colSpan={6}
                  className={` px-6 py-[7px] text-center text-sm  font-normal text-[#272728]`}
                >
                  No Result Found
                </td>
              </tr>
            )}
            {currentData.length > 0 &&
              currentData?.map((user: UserListType) => {
                return (
                  <tr
                    key={user?.userId}
                    className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
                  >
                    <td className='px-6 py-[7px] text-sm font-normal text-[#272728]'>
                      {user?.userId}
                    </td>
                    <td className='px-6 py-[7px] text-sm font-normal text-[#272728]'>
                      {user?.userName}
                    </td>
                    <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                      {user?.wpcasScore ? user?.wpcasScore : '--'}
                    </td>

                    <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                      {user?.surveysFilled}
                    </td>
                    <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                      {user?.surveysToBeFilled}
                    </td>
                    <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                      {new Date(user?.dateOfJoining).toLocaleDateString(
                        'en-GB'
                      )}
                    </td>
                  </tr>
                );
              })}

            <tr
              // key={user?.userId}
              className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
            >
              <td className='px-6 py-[7px] text-sm font-normal text-[#272728]'>
                1
              </td>
              <td className='px-6 py-[7px] text-sm font-normal text-[#272728]'>
                <div className='flex items-center gap-2'>
                  <Image
                    src={groupProfileImage}
                    alt='img'
                    className='rounded-full'
                    width={20}
                    height={20}
                  />
                  Unacademy
                </div>
              </td>
              <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                16
              </td>

              <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                45
              </td>
              <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                4500
              </td>
              <td className='flex justify-end px-6 py-[7px] text-sm font-normal text-[#272728]'>
                <ButtonFill onClick={() => null} classes='bg-[#26292D]'>
                  Settle
                </ButtonFill>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination
          currentDataLength={currentData?.length}
          handlePageSize={(value: number) => setPageSize(value)}
          pageSize={pageSize}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePage={(value: number) => setCurrentPage(value)}
        />
      </div>
    </>
  );
};

export default SettlementsTable;
