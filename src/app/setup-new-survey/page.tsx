'use client';
import React from 'react';

import SubNavbar from '@/components/navbar/SubNavbar';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import SurveyTable from '@/components/wpcasOverView/SurveyTable';

const SetupNewSurvey = () => {
  const handleClick = () => {
    return null;
  };

  return (
    <div className='mx-[30px] flex p-5'>
      <div className='w-[65%]  bg-white'>
        <SubNavbar />
        <div className='my-4 flex justify-end'>
          <ButtonFill width='300px' onClick={() => handleClick}>
            Setup New Configuration
          </ButtonFill>
        </div>
        <SurveyTable />
      </div>
      <div className='w-[30%]  bg-white'></div>
    </div>
  );
};

export default SetupNewSurvey;
