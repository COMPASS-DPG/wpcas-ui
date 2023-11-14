'use client';
import React from 'react';

import SearchInput from '@/components/uiComponents/SearchInput';
import SelectTag from '@/components/uiComponents/SelectTag';

type PropType = {
  value: SearchInputType;
  onChange: (arg: SearchInputType) => void;
  handleSearch: () => void;
};

import ButtonFill from '@/components/uiComponents/ButtonFill';

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
        options={[
          { label: '3', value: 3 },
          { label: '2', value: 2 },
        ]}
        value={value?.department}
        onChange={(updatedValue) =>
          onChange({ ...value, department: updatedValue })
        }
        width='300px'
        placeholder='Department'
        paddingY='2px'
      />
      <ButtonFill onClick={handleSearch} classes='bg-[#385B8B] w-[120px]'>
        <div className='flex justify-between'>
          <SearchIcon className='w-[18px]' />
          <span>Search</span>
        </div>
      </ButtonFill>
    </div>
  );
};

export default SearchUser;
