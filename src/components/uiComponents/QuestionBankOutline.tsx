'use client';
import { useState } from 'react';

import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import SelectTag from '@/components/uiComponents/SelectTag';
import SubHeading from '@/components/uiComponents/SubHeading';

const QuestionBankOutline = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <div className='mb-5 flex justify-end gap-3'>
        <ButtonOutline
          onClick={() => null}
          classes='bg-[#fff] border-[#26292D] w-[290px]'
        >
          Download Question Bank Template
        </ButtonOutline>
        <ButtonFill onClick={() => null} classes='bg-[#26292D] w-[203px]'>
          Upload Bulk Question
        </ButtonFill>
      </div>
      <SubHeading heading='Select' />
      <div className='w-3/5 pb-[20px]'>
        {' '}
        <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Competency
        </p>
        <SelectTag
          options={DEPARTMENT_OPTIONS}
          value={input}
          onChange={(newValue) => setInput(newValue)}
          width='749px'
          placeholder='Department'
          paddingY='2px'
        />
      </div>
    </div>
  );
};
export default QuestionBankOutline;
