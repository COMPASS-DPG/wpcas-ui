import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

import { outfit } from '@/components/FontFamily';
import CommonModal from '@/components/uiComponents/CommonModal';
import SetupConfigurationForm, {
  getEmptySurveyData,
  SurveyDataType,
} from '@/components/wpcasOverView/SetupConfigurationForm';

type PropType = {
  userSurveyDate: SurveyDataType[];
};

const SurveyTable = ({ userSurveyDate }: PropType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editValue, setEditValue] = useState<SurveyDataType>(
    getEmptySurveyData()
  );

  const handleEdit = (data: SurveyDataType) => {
    setIsOpen(true);
    setEditValue(data);
  };

  return (
    <div className='relative h-[52vh] overflow-x-auto overflow-y-auto shadow-md sm:rounded-md  '>
      <CommonModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SetupConfigurationForm
          onClose={() => setIsOpen(false)}
          data={editValue}
        />
      </CommonModal>
      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
        <thead
          className={`bg-[#26292D] text-sm font-normal text-white ${outfit.className} sticky top-0`}
        >
          <tr>
            <th scope='col' className=' w-[60%] px-6 py-3 text-sm font-normal'>
              Department
            </th>
            <th
              scope='col'
              className='w-[15%] px-6 py-3 text-left text-sm font-normal'
            >
              Start Date
            </th>
            <th
              scope='col'
              className=' w-[15%] px-6 py-3 text-left text-sm font-normal'
            >
              End Date
            </th>
            <th
              scope='col'
              className='w-[10%] px-6 py-3 text-center text-sm font-normal'
            ></th>
          </tr>
        </thead>
        <tbody>
          {userSurveyDate?.map((user: SurveyDataType) => {
            return (
              <tr
                key={user?.department}
                className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
              >
                <td className='px-6 py-[14px]  text-sm  font-normal text-[#272728]'>
                  Department Department
                </td>
                <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                  15-02-1995
                </td>
                <td className='px-6 py-[14px]  text-sm font-normal text-[#272728]'>
                  21-32-5652
                </td>
                <td className='px-6 py-[14px]  text-sm font-normal text-[#272728]'>
                  <MdModeEdit
                    className='cursor-pointer'
                    fontSizeAdjust={16}
                    onClick={() => handleEdit(user)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyTable;
