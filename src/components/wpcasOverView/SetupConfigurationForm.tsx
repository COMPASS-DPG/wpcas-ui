'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { outfit } from '@/components/FontFamily';
import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import DatePickerComponent from '@/components/uiComponents/DatePickerComponent';
import Label from '@/components/uiComponents/Label';
import SelectTag from '@/components/uiComponents/SelectTag';

export type SurveyDataType = {
  department: string;
  startDate: Date;
  endDate: Date;
};

type PropType = {
  onClose: () => void;
  data?: SurveyDataType | null;
  setIsSuccessPopUpOpen: (value: boolean) => void;
};

export const getEmptySurveyData = () => {
  return {
    department: '',
    startDate: new Date(),
    endDate: new Date(),
  };
};

const initialError = () => {
  return {
    department: '',
    startDate: '',
    endDate: '',
  };
};

const SetupConfigurationForm = ({
  onClose,
  data = null,
  setIsSuccessPopUpOpen,
}: PropType) => {
  const [formData, setFormData] = useState(data ?? getEmptySurveyData());
  const [error, setError] = useState(initialError());

  const handleChange = (key: string, value: string | Date) => {
    if (key === 'department' && error.department) {
      setError((prev) => {
        return {
          ...prev,
          [key]: '',
        };
      });
    }
    if (key === 'startDate' && error.startDate) {
      setError((prev) => {
        return {
          ...prev,
          [key]: '',
        };
      });
    }
    if (key === 'endDate' && error.endDate) {
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

  const isValidData = (data: SurveyDataType): boolean => {
    setError(initialError());
    if (!data.department) {
      setError((pre) => {
        return {
          ...pre,
          department: 'department is required!',
        };
      });
      return false;
    }
    if (!data.startDate) {
      setError((pre) => {
        return {
          ...pre,
          startDate: 'start date is required!',
        };
      });
      return false;
    }
    if (!data.endDate) {
      setError((pre) => {
        return {
          ...pre,
          startDate: 'start date is required!',
        };
      });
      return false;
    }
    return true;
  };

  const handleCreate = () => {
    if (isValidData(formData)) {
      onClose();
      setIsSuccessPopUpOpen(true);
      toast.success('data saved successful');
    }
  };

  return (
    <div>
      <div
        className={`my-2 mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 ${outfit.className} `}
      >
        <div className='mb-4 text-xl font-semibold text-[#272728]'>
          Setup New Configuration
        </div>
        <div className='-mx-3 mb-6 md:flex'>
          <div className='px-3 md:w-full'>
            <Label text='Department' />
            <SelectTag
              options={DEPARTMENT_OPTIONS}
              value={formData.department}
              onChange={(updatedValue) =>
                handleChange('department', updatedValue)
              }
              placeholder='Department'
              errorMessage={error?.department}
            />
          </div>
          <div></div>
        </div>
        <div className='-mx-3 mb-6 md:flex'>
          <div className='mb-6 px-3 md:mb-0 md:w-1/2'>
            <Label text='Start Date' />
            <DatePickerComponent
              data={formData?.startDate}
              onChange={(updatedValue) =>
                handleChange('startDate', updatedValue)
              }
              isSelectStart={true}
              startDate={formData?.startDate}
              endDate={formData?.endDate}
              errorMessage={error.startDate}
            />
          </div>
          <div className='px-3 md:w-1/2'>
            <Label text='End Date' />
            <DatePickerComponent
              data={formData?.endDate}
              onChange={(updatedValue) => handleChange('endDate', updatedValue)}
              isSelectEnd={true}
              startDate={formData?.startDate}
              endDate={formData?.endDate}
              minDate={formData?.startDate}
              errorMessage={error.endDate}
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
              Create Survey
            </ButtonFill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupConfigurationForm;
