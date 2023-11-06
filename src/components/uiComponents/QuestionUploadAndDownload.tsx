'use client';

import React, { MutableRefObject, useRef, useState } from 'react';
import * as xlsx from 'xlsx';

import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import SingleButtonPopUp from '@/components/wpcasOverView/SingleButtonPopUp';

import Warning from '~/svg/warning.svg';

const QuestionUploadAndDownload = () => {
  const fileInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);
  const [showErrorPopUp, setShowErrorPopUp] = useState(false);

  const handleLabelClick = () => {
    fileInputRef?.current?.click();
  };
  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e?.target?.result;
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        json;
        // setShowSuccessPopUp(true);
        setShowErrorPopUp(true);
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  }

  return (
    <div className='mb-5 flex justify-end gap-3'>
      {showSuccessPopUp && (
        <SingleButtonPopUp
          handleClick={setShowSuccessPopUp}
          visible={showSuccessPopUp}
          topHeading='Question bank created successfully'
          subHeading='ingestion of question bank has been uploaded successfully'
          buttonText='Ok'
          buttondestination='/question-bank'
        />
      )}
      {showErrorPopUp && (
        <SingleButtonPopUp
          icon={<Warning width='60px' />}
          handleClick={setShowErrorPopUp}
          visible={showErrorPopUp}
          topHeading='Question bank upload failed'
          subHeading='ingestion of question bank upload is failed'
          buttonText='Try again'
          buttondestination='/question-bank'
        />
      )}
      <ButtonOutline
        onClick={() => null}
        classes='bg-[#fff] border-[#26292D] w-[300px]'
      >
        Download Question Bank Template
      </ButtonOutline>
      <ButtonFill onClick={handleLabelClick} classes='bg-[#26292D] w-[203px]'>
        Upload Bulk Question
        <input
          className='hidden'
          onChange={handleFile}
          ref={fileInputRef}
          type='file'
        />
      </ButtonFill>
    </div>
  );
};
export default QuestionUploadAndDownload;
