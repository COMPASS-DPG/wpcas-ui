'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { isValidConfigFormData } from '@/lib/helper';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import DatePickerComponent from '@/components/uiComponents/DatePickerComponent';
import InputTag from '@/components/uiComponents/InputTag';
import Label from '@/components/uiComponents/Label';

import {
  createSurveyConfig,
  updateSurveyConfig,
} from '@/services/configurationServices';

import UploadFileInput from './UploadFileInput';

export type SurveyDataType = {
  id?: string;
  surveyName: string;
  startTime: Date;
  endTime: Date | null;
  file: File | string;
};

export type SurveyErrorType = {
  [key: string]: string;
  surveyName: string;
  startTime: string;
  endTime: string;
  file: string;
};

type PropType = {
  onClose: () => void;
  isEdit?: boolean;
  data?: SurveyDataType | null;
  setIsSuccessPopUpOpen: (value: boolean) => void;
  handleFetchConfigData?: () => void;
};

export const getEmptySurveyData = () => {
  return {
    surveyName: '',
    startTime: new Date(),
    endTime: null,
    file: '',
  };
};

const initialError = () => {
  return {
    surveyName: '',
    startTime: '',
    endTime: '',
    file: '',
  };
};

const SetupConfigurationForm = ({
  handleFetchConfigData,
  onClose,
  data = null,
  isEdit = false,
  setIsSuccessPopUpOpen,
}: PropType) => {
  const [configData, setConfigData] = useState(data ?? getEmptySurveyData());
  const [error, setError] = useState<SurveyErrorType>(initialError());

  // will set values and set error to empty string
  const handleChange = (
    key: string,
    value: string | Date | File | unknown[]
  ) => {
    if (error[key]) {
      setError((prev) => {
        return {
          ...prev,
          [key]: '',
        };
      });
    }
    setConfigData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  // will set error
  const handleError = (key: string, value: string) => {
    setError((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  const handleSaveConfig = async (formData: FormData) => {
    try {
      if (isEdit && data?.id) {
        await updateSurveyConfig(data?.id, formData);
      } else {
        await createSurveyConfig(formData);
      }
      onClose();
      handleFetchConfigData && handleFetchConfigData();
      setIsSuccessPopUpOpen(true);
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.log('Api call error', error);
      toast.error('something went wrong please try again', {
        draggable: false,
      });
    }
  };

  const handleCreate = () => {
    setError(initialError());

    // will check for all valid fields
    if (isValidConfigFormData(configData, handleError, isEdit)) {
      const assesseeForm = new FormData();
      assesseeForm.append('surveyName', configData?.surveyName);
      assesseeForm.append('startTime', configData?.startTime?.toDateString());
      if (configData?.endTime)
        assesseeForm.append('endTime', configData?.endTime?.toDateString());
      if (configData?.file) assesseeForm.append('file', configData?.file);

      // will handle edit and save configuration
      handleSaveConfig(assesseeForm);
    }
  };

  return (
    <div>
      <div
        className={`my-2 mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 ${outfit.className} `}
      >
        <div className='mb-4 text-xl font-semibold text-[#272728]'>
          {isEdit ? 'Edit Configuration' : 'Setup New Configuration'}
        </div>
        <div className='-mx-3 mb-6 md:flex'>
          <div className='px-3 md:w-full'>
            <Label text='Survey Name' />
            <InputTag
              value={configData.surveyName}
              onChange={(value) => handleChange('surveyName', value)}
              placeholder='Enter SurveyName'
              errorMessage={error?.surveyName}
            />
          </div>
          <div></div>
        </div>

        <div className='-mx-3 mb-6 md:flex'>
          <div className='flex flex-wrap items-center justify-start gap-3 px-3 md:w-full'>
            <Label text='Upload Assesses file' />
            <UploadFileInput
              onChange={(updatedValue) => handleChange('file', updatedValue)}
              value={configData?.file}
              errorMessage={error?.file}
            />
          </div>
          <div></div>
        </div>

        <div className='-mx-3 mb-6 md:flex'>
          <div className='mb-6 px-3 md:mb-0 md:w-1/2'>
            <Label text='Start Date' />
            <DatePickerComponent
              data={configData?.startTime}
              onChange={(updatedValue) =>
                handleChange('startTime', updatedValue)
              }
              isSelectStart={true}
              startDate={configData?.startTime}
              endDate={configData?.endTime}
              errorMessage={error.startTime}
            />
          </div>
          <div className='px-3 md:w-1/2'>
            <Label text='End Date' />
            <DatePickerComponent
              data={configData?.endTime}
              onChange={(updatedValue) => handleChange('endTime', updatedValue)}
              isSelectEnd={true}
              startDate={configData?.startTime}
              endDate={configData?.endTime}
              minDate={configData?.startTime}
              errorMessage={error.endTime}
            />
          </div>
        </div>

        <div className='-mx-3 mb-6 mt-3 md:flex'>
          <div className='mb-6 flex gap-2 px-3 md:mb-0 md:w-1/2'>
            <ButtonOutline
              onClick={onClose}
              classes='border-[#26292D] text-[#26292D] w-[200px]'
            >
              Cancel
            </ButtonOutline>
            <ButtonFill onClick={handleCreate} classes='bg-[#26292D] w-[200px]'>
              {isEdit ? 'Edit Survey' : 'Create Survey'}
            </ButtonFill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupConfigurationForm;
