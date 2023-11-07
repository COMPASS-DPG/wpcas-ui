import { isArray } from 'lodash';
import React, { MutableRefObject, useRef } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import * as xlsx from 'xlsx';

type PropType = {
  value: string | File;
  onChange: (arg: File | string) => void;
  errorMessage: string;
};

const UploadFileInput = ({ value, onChange, errorMessage }: PropType) => {
  const fileInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const handleLabelClick = () => {
    fileInputRef?.current?.click();
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const selectedFile = e.target.files[0];
  //     if (selectedFile) {
  //       onChange(selectedFile);
  //     }
  //   }
  // };

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      onChange(event.target.files[0]);

      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e?.target?.result;
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        return json;
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  }

  return (
    <>
      <div
        className={`relative border ${
          errorMessage ? 'border-red-600' : 'border-[#4ACB5F]'
        }  min-w-[200px] rounded-md border-solid`}
      >
        <label
          title='Click to upload'
          className='flex cursor-pointer items-center gap-4 px-4 py-[10px]   before:absolute  '
          onClick={handleLabelClick}
        >
          <div className='relative w-max'>
            <AiOutlineCloudUpload
              size={28}
              className={`${errorMessage ? 'text-red-600' : 'text-[#4ACB5F]'}`}
            />
          </div>
          <div className='relative flex gap-3'>
            <span
              className={`relative block text-base font-semibold ${
                errorMessage ? 'text-red-600' : 'text-[#4ACB5F]'
              } `}
            >
              {value ? 'File Selected' : 'Upload a file'}
            </span>
          </div>
        </label>
        <input
          className='hidden'
          onChange={handleFile}
          ref={fileInputRef}
          type='file'
          accept='.csv'
          value={
            typeof value !== 'number' &&
            typeof value !== 'undefined' &&
            isArray(value) &&
            value instanceof File
              ? value
              : ''
          }
        />
      </div>
      {value && typeof value !== 'string' && (
        <>
          <span>{value?.name}</span>
          <RxCross2
            size={24}
            className='ml-3 cursor-pointer hover:text-red-500'
            onClick={() => onChange('')}
          />
        </>
      )}

      {errorMessage && (
        <p className='mt-2 w-full text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default UploadFileInput;
