'use client';
import exportFromJSON from 'export-from-json';
import React, { useState } from 'react';

import { outfit } from '@/components/FontFamily';
import SubNavbar from '@/components/navbar/SubNavbar';
import Popup from '@/components/questionBank/PopUp';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import CommonModal from '@/components/uiComponents/CommonModal';
import SetupConfigurationForm from '@/components/wpcasOverView/SetupConfigurationForm';
import SurveyTable from '@/components/wpcasOverView/SurveyTable';

import {
  downloadAssessesList,
  downloadUserList,
} from '@/services/configurationServices';

const assessmentGuidelines = [
  'Duis 2 aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
];
export type SurveyDataType = {
  id: string;
  surveyName: string;
  startTime: Date;
  endTime: Date;
  assessesFile: string | File;
  departmentId: string;
  onboardingTimeUnit: string;
  onboardingTime: string;
};

type DownloadUserListType = {
  id: string;
  email: string;
  role: string;
  userName: string;
  profile: string;
  designation: string;
  Level: {
    levelNumber: string;
  };
  Department: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};

const SetupNewSurvey = ({ visible }: { visible: boolean }) => {
  const [isOpen, setIsOpen] = useState(visible);
  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);

  const handleAssessesFileDownload = () => {
    (async () => {
      const response = await downloadAssessesList();
      const data = response?.map((item: DownloadUserListType) => {
        return {
          ...item,
          Level: item?.Level?.levelNumber,
          Department: item?.Department?.name,
        };
      });
      const fileName = 'user-list';
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data, fileName, exportType });
    })();
  };

  const handleUserListDownload = () => {
    (async () => {
      const response = await downloadUserList();
      const data = response?.map((item: DownloadUserListType) => {
        return {
          ...item,
          Level: item?.Level?.levelNumber,
          Department: item?.Department?.name,
        };
      });
      const fileName = 'user-list';
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data, fileName, exportType });
    })();
  };

  return (
    <div
      className={`mx-[0px] flex flex-wrap gap-5 lg:mx-[30px] ${outfit.className}`}
    >
      <CommonModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SetupConfigurationForm
          onClose={() => setIsOpen(false)}
          setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
        />
      </CommonModal>
      {isSuccessPopUpOpen && (
        <Popup
          openSurveyConfigModal={() => setIsOpen(true)}
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
      <div className='h-[80vh] w-[80vw] rounded-sm  bg-white px-5 lg:w-[58vw]'>
        <SubNavbar />
        <div className='my-4 flex flex-wrap justify-end gap-3'>
          <ButtonOutline
            onClick={handleUserListDownload}
            classes='border-[#385B8B] text-[#385B8B]'
          >
            Download User List
          </ButtonOutline>
          <ButtonOutline
            onClick={handleAssessesFileDownload}
            classes='border-[#385B8B] text-[#385B8B]'
          >
            Download Assesses File Template
          </ButtonOutline>
          <ButtonFill onClick={() => setIsOpen(true)} classes='bg-[#385B8B]'>
            Setup New Configuration
          </ButtonFill>
        </div>
        <SurveyTable
          // userSurveyDate={userSurveyData}
          setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
        />
      </div>
      <div className='h-[80vh] w-[80vw] rounded-sm bg-white lg:w-[21vw]'>
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
