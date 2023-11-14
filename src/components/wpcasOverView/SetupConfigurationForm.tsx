'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { isValidData } from '@/lib/helper';

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
  surveyName: string;
  startTime: Date;
  endTime: Date | null;
  file: File | string;
};

export type ResponseDataType = {
  surveyName: string;
  startTime: Date;
  endTime: Date | null;
  file: FormData;
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
  onClose,
  data = null,
  isEdit = false,
  setIsSuccessPopUpOpen,
}: PropType) => {
  const [formData, setFormData] = useState(data ?? getEmptySurveyData());
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
    setFormData((prev) => {
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

  const handleUpdateConfig = async (formData: ResponseDataType) => {
    try {
      const data = await updateSurveyConfig('dfds', formData);
      onClose();
      setIsSuccessPopUpOpen(true);
      return data;
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.log('Api call error', error);
      toast.error('something went wrong please try again');
    }
  };

  const handleCreateConfig = async (formData: ResponseDataType) => {
    try {
      const data = await createSurveyConfig(formData);
      onClose();
      setIsSuccessPopUpOpen(true);
      return data;
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.log('Api call error', error);
      toast.error('something went wrong please try again');
    }
  };

  const handleCreate = () => {
    setError(initialError());
    if (isValidData(formData, handleError)) {
      const assesseeFormData = new FormData();
      assesseeFormData.append('file', formData.file);
      const data = {
        ...formData,
        file: assesseeFormData,
      };
      // console.log('formData', formData)
      // console.log('newFormData', data)

      if (isEdit) {
        handleUpdateConfig(data);
      } else {
        handleCreateConfig(data);
      }
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
              value={formData.surveyName}
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
              value={formData?.file}
              errorMessage={error?.file}
            />
          </div>
          <div></div>
        </div>

        <div className='-mx-3 mb-6 md:flex'>
          <div className='mb-6 px-3 md:mb-0 md:w-1/2'>
            <Label text='Start Date' />
            <DatePickerComponent
              data={formData?.startTime}
              onChange={(updatedValue) =>
                handleChange('startTime', updatedValue)
              }
              isSelectStart={true}
              startDate={formData?.startTime}
              endDate={formData?.endTime}
              errorMessage={error.startTime}
            />
          </div>
          <div className='px-3 md:w-1/2'>
            <Label text='End Date' />
            <DatePickerComponent
              data={formData?.endTime}
              onChange={(updatedValue) => handleChange('endTime', updatedValue)}
              isSelectEnd={true}
              startDate={formData?.startTime}
              endDate={formData?.endTime}
              minDate={formData?.startTime}
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
