'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import Pagination from '@/components/wpcasOverView/Pagination';
import SearchUser from '@/components/wpcasOverView/SearchUser';

import { UserWalletDataType } from '@/app/user-management/user-wallet/page';

type PropType = {
  userData: UserWalletDataType[];
  filterUserData: UserWalletDataType[];
  setFilterUserData: (arg: UserWalletDataType[]) => void;
};

const UserWalletTable = ({
  userData,
  setFilterUserData,
  filterUserData,
}: PropType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchInput, setSearchInput] = useState<string>('');

  const router = useRouter();

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
        placeholder='Search User'
      />
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
                Role
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Course Purchased
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Wallet Balance
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Action
              </th>
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
                  className={` px-6 py-3 text-center text-sm  font-normal text-[#272728]`}
                >
                  No Result Found
                </td>
              </tr>
            )}
            {currentData.length > 0 &&
              currentData?.map((user: UserWalletDataType) => {
                return (
                  <tr
                    key={user?.userId}
                    className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
                  >
                    <td className='px-6 py-[7px] text-sm font-normal text-[#272728]'>
                      {user?.userId}
                    </td>
                    <td className='px-6 py-[7px] text-sm font-normal text-[#272728]'>
                      {user.userName}
                    </td>
                    <td className='px-6 py-[7px] text-sm font-normal text-[#272728]'>
                      {user?.role}
                    </td>

                    <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                      {user?.coursePurchased}
                    </td>
                    <td className='px-6 py-[7px] text-center text-sm font-normal text-[#272728]'>
                      {user?.walletBalance}
                    </td>
                    <td className='flex justify-center px-6 py-[7px] text-sm font-normal text-[#272728]'>
                      <ButtonFill
                        onClick={() =>
                          router.push('/user-management/user-wallet/1')
                        }
                        classes='bg-[#385B8B]'
                      >
                        Add/view wallet
                      </ButtonFill>
                    </td>
                  </tr>
                );
              })}
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

export default UserWalletTable;
