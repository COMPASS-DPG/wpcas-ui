import React, { MutableRefObject, useRef } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

type PropType = {
  value: string | File;
  onChange: (arg: File) => void;
  errorMessage: string;
};

const UploadFileInput = ({ value, onChange, errorMessage }: PropType) => {
  const fileInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const handleLabelClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        onChange(selectedFile);
      }
    }
  };

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
          onChange={handleFileChange}
          ref={fileInputRef}
          type='file'
        />
      </div>
      {value && typeof value !== 'string' && <span>{value?.name}</span>}

      {errorMessage && (
        <p className='mt-2 w-full text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default UploadFileInput;
