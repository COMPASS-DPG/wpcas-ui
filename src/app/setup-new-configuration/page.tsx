'use client';
import React, { useState } from 'react';

import { outfit } from '@/components/FontFamily';
import SubNavbar from '@/components/navbar/SubNavbar';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import CommonModal from '@/components/uiComponents/CommonModal';
import SetupConfigurationForm from '@/components/wpcasOverView/SetupConfigurationForm';
import SurveyTable from '@/components/wpcasOverView/SurveyTable';

const SetupNewSurvey = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mx-[30px] flex flex-wrap gap-5 ${outfit.className}`}>
      <CommonModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SetupConfigurationForm onClose={() => setIsOpen(false)} />
      </CommonModal>
      <div className='h-[80vh] w-[58vw]  rounded-sm bg-white px-5'>
        <SubNavbar />
        <div className='my-4 flex justify-end gap-3'>
          <ButtonOutline
            onClick={() => setIsOpen(true)}
            classes='border-[#385B8B] text-[#385B8B]'
          >
            Download User List
          </ButtonOutline>
          <ButtonOutline
            onClick={() => setIsOpen(true)}
            classes='border-[#385B8B] text-[#385B8B]'
          >
            Download Assesses File Template
          </ButtonOutline>
          <ButtonFill onClick={() => setIsOpen(true)} classes='bg-[#385B8B]'>
            Setup New Configuration
          </ButtonFill>
        </div>
        <SurveyTable
          userSurveyDate={[
            {
              department: '',
              startDate: new Date(),
              endDate: new Date(),
              assessesFile: '',
            },
          ]}
        />
      </div>
      <div className='h-[80vh] w-[21vw] rounded-sm bg-white'>
        <div className='p-[15px] text-lg font-semibold text-[#272728]'>
          Assessment Making Guidelines
        </div>
        <div className=' ml-5 h-[60vh] overflow-y-scroll pr-5'>
          <ol className='list-decimal pl-4'>
            <li className='my-2 text-sm font-normal text-[#65758C]'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </li>
            <li className='my-2 text-sm font-normal text-[#65758C]'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </li>
            <li className='my-2 text-sm font-normal text-[#65758C]'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </li>
            <li className='my-2 text-sm font-normal text-[#65758C]'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SetupNewSurvey;
