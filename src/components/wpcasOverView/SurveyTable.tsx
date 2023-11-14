import React, { useEffect, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

import { outfit } from '@/components/FontFamily';
import CommonModal from '@/components/uiComponents/CommonModal';
import SetupConfigurationForm, {
  getEmptySurveyData,
  SurveyDataType,
} from '@/components/wpcasOverView/SetupConfigurationForm';

import { getConfigurationList } from '@/services/configurationServices';

type PropType = {
  // userSurveyDate: SurveyDataType[];
  setIsSuccessPopUpOpen: (value: boolean) => void;
};

const SurveyTable = ({ setIsSuccessPopUpOpen }: PropType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const
  const [userSurveyData, setUserSurveyData] = useState<SurveyDataType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editValue, setEditValue] = useState<SurveyDataType>(
    getEmptySurveyData()
  );

  const handleEdit = (data: SurveyDataType) => {
    setIsOpen(true);
    const formattedStartDate = new Date(data?.startTime);
    const formattedEndDate = data?.endTime && new Date(data?.endTime);
    const formattedData = {
      ...data,
      startTime: formattedStartDate,
      endTime: formattedEndDate,
    };

    setEditValue(formattedData);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getConfigurationList();
        setLoading(false);
        setUserSurveyData(data);
        // console.log(data)
      } catch (error) {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.log('Api call error', error);
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <div className='relative h-[52vh] overflow-x-auto overflow-y-auto shadow-md sm:rounded-md  '>
      <CommonModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SetupConfigurationForm
          onClose={() => setIsOpen(false)}
          isEdit={true}
          data={editValue}
          setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
        />
      </CommonModal>
      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
        <thead
          className={`bg-[#26292D] text-sm font-normal text-white ${outfit.className} sticky top-0`}
        >
          <tr>
            <th scope='col' className=' w-[60%] px-6 py-3 text-sm font-normal'>
              Survey Name
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
          {loading && (
            <tr
              className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
            >
              <td
                align='center'
                colSpan={4}
                className={` px-6 py-[14px] text-center 
             text-sm  font-normal text-[#272728]`}
              >
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr
              className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
            >
              <td
                align='center'
                colSpan={4}
                className={` px-6 py-[14px] text-center 
             text-sm  font-normal text-[#272728]`}
              >
                Error...
              </td>
            </tr>
          )}

          {!loading &&
            !error &&
            userSurveyData?.map((user) => {
              const { endTime, startTime, surveyName } = user;
              return (
                <>
                  {endTime && new Date() <= new Date(endTime) && (
                    <tr
                      key={user?.surveyName}
                      className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
                    >
                      <td className='px-6 py-[14px]  text-sm  font-normal text-[#272728]'>
                        {surveyName}
                      </td>
                      <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                        {new Date(startTime).toLocaleDateString('en-GB')}
                      </td>
                      <td className='px-6 py-[14px]  text-sm font-normal text-[#272728]'>
                        {endTime &&
                          new Date(endTime).toLocaleDateString('en-GB')}
                      </td>
                      <td className='px-6 py-[14px]  text-sm font-normal text-[#272728]'>
                        {startTime && new Date() < new Date(startTime) && (
                          <MdModeEdit
                            className='cursor-pointer'
                            fontSizeAdjust={16}
                            onClick={() => handleEdit(user)}
                          />
                        )}
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyTable;
