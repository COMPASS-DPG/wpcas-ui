'use client';
import React from 'react';

import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import SearchInput from '@/components/uiComponents/SearchInput';
import SelectTag from '@/components/uiComponents/SelectTag';

type PropType = {
  value: SearchInputType;
  onChange: (arg: SearchInputType) => void;
  handleSearch: () => void;
};

import { SearchInputType } from '@/app/wpcas/page';

import SearchIcon from '~/svg/searchIcon.svg';
const SearchUser = ({ value, onChange, handleSearch }: PropType) => {
  return (
    <div className='my-7 flex flex-wrap gap-2.5'>
      <SearchInput
        value={value.user}
        onChange={(updatedValue) => onChange({ ...value, user: updatedValue })}
        placeholder='Search User'
      />
      <SelectTag
        options={DEPARTMENT_OPTIONS}
        value={value?.department}
        onChange={(updatedValue) =>
          onChange({ ...value, department: updatedValue })
        }
        width='320px'
        placeholder='Department'
      />
      {/* <SelectTag options={DEPARTMENT_OPTIONS}
        value={value?.competency}
        onChange={(updatedValue) => onChange({ ...value, competency: updatedValue })}
        width='320px' placeholder='Competency'
      /> */}
      <button
        className='flex items-center justify-between gap-x-2 rounded-md bg-[#385B8B] px-3 py-2 text-white hover:opacity-80'
        onClick={handleSearch}
      >
        <SearchIcon className='w-[18px]' />
        Search
      </button>
    </div>
  );
};

export default SearchUser;
