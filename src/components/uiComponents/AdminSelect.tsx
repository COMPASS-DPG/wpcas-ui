'use client';
import Image from 'next/image';
import React from 'react';
import Select, { SingleValue } from 'react-select';

import { PropsType } from '@/components/uiComponents/SelectTag';

import { OptionType } from '@/app/propTypes';

import Profile from '~/images/profile.png';

const AdminSelect = ({ options, onChange, placeholder, value }: PropsType) => {
  return (
    <div className='px-[1px] py-[6px] focus-within:border-blue-400 '>
      <div className='flex rounded-3xl border border-solid border-[#E3E7EF] p-1'>
        <Image src={Profile} alt='profile' width={30} height={30} />
        <Select
          options={options}
          value={options.find((item: OptionType) => item.value === value)}
          placeholder={placeholder}
          onChange={(e: SingleValue<OptionType>) => {
            if (e) {
              onChange(e?.value);
            }
          }}
          styles={{
            input: (base) => ({
              ...base,
              'input:focus': {
                boxShadow: 'none',
              },
              width: '150px',
            }),
            control: (baseStyles) => ({
              ...baseStyles,
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            }),
          }}
        />
      </div>
    </div>
  );
};

export default AdminSelect;
