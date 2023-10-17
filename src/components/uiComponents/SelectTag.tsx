import React from 'react';

type OptionType = {
  label: string;
  value: string | number;
};

type PropsType = {
  width: string;
  onChange: (value: string) => void;
  value: string;
  options: OptionType[];
  placeholder: string;
  required?: boolean;
};

const SelectTag = ({
  options,
  width,
  onChange,
  value,
  placeholder,
  required = false,
}: PropsType) => {
  return (
    <select
      className={`border bg-gray-50 w-[${width}] block rounded-lg border-gray-300 p-2.5 text-sm
     text-gray-900 focus:border-blue-400 focus:ring-blue-400`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    >
      <option value='' disabled selected>
        {placeholder}
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectTag;
