'use client';
import { SearchIcon } from 'lucide-react';
import React from 'react';

import { SearchInputType } from '@/components/3cp/CourseSection';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import SearchInput from '@/components/uiComponents/SearchInput';
import SelectTag from '@/components/uiComponents/SelectTag';

import { OptionType } from '@/app/propTypes';

type PropType = {
  value: SearchInputType;
  onChange: (arg: SearchInputType) => void;
  handleSearch: () => void;
  competencyOption: OptionType[];
  languageOption: OptionType[];
};
const SearchCourse = ({
  value,
  onChange,
  handleSearch,
  competencyOption,
  languageOption,
}: PropType) => {
  return (
    <div className='my-7 flex flex-wrap justify-between gap-3'>
      <SearchInput
        value={value.course}
        onChange={(updatedValue) =>
          onChange({ ...value, course: updatedValue })
        }
        placeholder='Search Course by title'
      />
      <SelectTag
        options={competencyOption}
        value={value?.competency}
        onChange={(updatedValue) => {
          if (typeof updatedValue == 'string') {
            onChange({ ...value, competency: updatedValue });
          }
        }}
        width='350px'
        placeholder='Competency'
        paddingY='2px'
      />
      <SelectTag
        options={languageOption}
        value={value?.language}
        onChange={(updatedValue) => {
          if (typeof updatedValue == 'string') {
            onChange({ ...value, language: updatedValue });
          }
        }}
        width='150px'
        placeholder='Language'
        paddingY='2px'
      />
      <ButtonFill onClick={handleSearch} classes='bg-[#26292D] w-[120px]'>
        <div className='flex justify-between'>
          <SearchIcon className='w-[18px]' />
          <span>Search</span>
        </div>
      </ButtonFill>
    </div>
  );
};

export default SearchCourse;
