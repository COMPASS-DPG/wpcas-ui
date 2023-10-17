import React from 'react';
import { MdModeEdit } from 'react-icons/md';

import { outfit } from '@/components/FontFamily';

const SurveyTable = () => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-md'>
      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
        <thead
          className={`bg-[#26292D] text-sm font-normal text-white ${outfit.className}`}
        >
          <tr>
            <th scope='col' className='px-6 py-3 text-sm font-normal'>
              Department
            </th>
            <th scope='col' className='px-6 py-3 text-sm font-normal'>
              Start Date
            </th>
            <th scope='col' className='px-6 py-3 text-sm font-normal'>
              End Date
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-center text-sm font-normal'
            ></th>
          </tr>
        </thead>
        <tbody>
          {/* {userData?.map((user: any) => {
                        return ( */}
          <tr
            className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
          >
            <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
              Nursing
            </td>
            <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
              15-02-1995
            </td>
            <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
              21-32-5652
            </td>
            <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
              <MdModeEdit fontSizeAdjust={16} />
            </td>
          </tr>
          {/* )
                    })} */}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyTable;
