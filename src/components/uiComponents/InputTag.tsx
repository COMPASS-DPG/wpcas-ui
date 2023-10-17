import React from 'react';

const InputTag = () => {
  return (
    <input
      type='text'
      className='rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900'
      placeholder='John'
      required
    />
  );
};

export default InputTag;
