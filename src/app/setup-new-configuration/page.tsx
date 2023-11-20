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

import { assessmentGuidelines } from '@/app/contantData/constant-data';
import {
  downloadAssessesList,
  downloadUserList,
} from '@/services/configurationServices';

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

const SetupNewSurvey = ({ visible }: { visible: boolean }) => {
  const [isOpen, setIsOpen] = useState(visible);
  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);
  const [isNewForm, setIsNewForm] = useState(false);

  // to fetch survey config details after new survey form create or update
  const [fetchData, setFetchData] = useState(true);

  const handleAssessesFileDownload = () => {
    (async () => {
      const data = await downloadAssessesList();
      const fileName = 'assesses-file-template';
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data, fileName, exportType });
    })();
  };

  const handleNewConfiguration = () => {
    setIsOpen(true);
    setIsNewForm(true);
  };

  // for download userList
  const handleUserListDownload = () => {
    (async () => {
      const data = await downloadUserList();
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
          handleFetchConfigData={() => setFetchData(true)}
        />
      </CommonModal>
      {isSuccessPopUpOpen && (
        <Popup
          openSurveyConfigModal={() => setIsOpen(true)}
          popUpClosingFunction={setIsSuccessPopUpOpen}
          visible={isSuccessPopUpOpen}
          topHeading={`Survey has been ${
            isNewForm ? 'created' : 'updated'
          } successfully`}
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
          <ButtonFill onClick={handleNewConfiguration} classes='bg-[#385B8B]'>
            Setup New Configuration
          </ButtonFill>
        </div>

        {/* survey config table, search functionality and pagination component */}
        <SurveyTable
          fetchData={fetchData}
          setFetchData={setFetchData}
          setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
          handleEditMessage={() => setIsNewForm(false)}
        />
      </div>
      <div className='h-[80vh] w-[80vw] rounded-sm bg-white lg:w-[21vw]'>
        <div className='p-[15px] text-lg font-semibold text-[#272728]'>
          Assessment Making Guidelines
        </div>
        <div className=' ml-5 h-[60vh] overflow-y-scroll pr-5'>
          <ol className='list-decimal pl-4'>
            {assessmentGuidelines?.map((item, index) => (
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
