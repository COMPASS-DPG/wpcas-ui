'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';
import SubNavbar from '@/components/navbar/SubNavbar';
import Popup from '@/components/PopUp';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import CommonModal from '@/components/uiComponents/CommonModal';
import SetupConfigurationForm from '@/components/wpcasOverView/SetupConfigurationForm';
import SurveyTable from '@/components/wpcasOverView/SurveyTable';

const assessmentGuidelines = [
  'Duis 2 aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
];
export type SurveyDataType = {
  department: string;
  startDate: Date;
  endDate: Date;
};

const SetupNewSurvey = ({ visible }: { visible: boolean }) => {
  const [isOpen, setIsOpen] = useState(visible);
  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);

  const [userSurveyDate, setUserSurveryDate] = useState<SurveyDataType[]>([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/department`).then((r) => {
      setUserSurveryDate(r.data);
    });
  }, []);

  return (
    <div className={`mx-[30px] flex flex-wrap gap-5 ${outfit.className}`}>
      <CommonModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SetupConfigurationForm
          onClose={() => setIsOpen(false)}
          setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
        />
      </CommonModal>
      {isSuccessPopUpOpen && (
        <Popup
          popUpClosingFunction={setIsSuccessPopUpOpen}
          visible={isSuccessPopUpOpen}
          topHeading='Survey has been created successfully'
          subHeading='The survey has assigned to 5 users and it configured.'
          LeftButtonText='Setup New Configuration'
          rightButtonText='OK'
          leftButtonDestination='setup-new-configuration'
          rightButtonDestination='setup-new-configuration'
        />
      )}
      <div className='h-[80vh] w-[58vw]  rounded-sm bg-white px-5'>
        <SubNavbar />
        <div className='my-4 flex justify-end'>
          <ButtonFill onClick={() => setIsOpen(true)} classes='bg-[#385B8B]'>
            Setup New Configuration
          </ButtonFill>
        </div>
        <SurveyTable
          userSurveyDate={userSurveyDate}
          setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
        />
      </div>
      <div className='h-[80vh] w-[21vw] rounded-sm bg-white'>
        <div className='p-[15px] text-lg font-semibold text-[#272728]'>
          Assessment Making Guidelines
        </div>
        <div className=' ml-5 h-[60vh] overflow-y-scroll pr-5'>
          <ol className='list-decimal pl-4'>
            {assessmentGuidelines.map((item, index) => (
              <li
                key={index}
                className='my-2 text-sm font-normal text-[#65758C]'
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SetupNewSurvey;
