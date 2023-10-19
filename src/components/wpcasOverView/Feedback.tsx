import { useRouter } from 'next/navigation';
import React from 'react';

import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

const Feedback = () => {
  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <div className='flex flex-wrap justify-between gap-2  '>
      <div className='h-[100px] w-[340px] rounded-md bg-white px-4 py-4'>
        <div className='mb-4 text-lg font-medium text-[#65758C] '>
          Feedback surveys sent
        </div>
        <div className='text-[26px] font-bold text-[#272728]'>170</div>
      </div>

      <div className='h-[100px] w-[340px] rounded-md bg-white  px-4 py-4'>
        <div className='mb-4 text-lg font-medium text-[#65758C] '>
          Feedback surveys filled
        </div>
        <div className='text-[26px] font-bold text-[#272728]'>158</div>
      </div>

      <div className='h-[100px] w-[340px] rounded-md bg-white  px-4 py-4'>
        <div className='mb-4 text-lg font-medium text-[#65758C] '>
          Feedback surveys yet to be filled
        </div>
        <div className='text-[26px] font-bold text-[#272728]'>12</div>
      </div>

      <div className='h-[100px] w-[190px]'>
        <ButtonFill
          onClick={() => handleRoute('/setup-new-configuration')}
          classes='bg-[#385B8B] w-[210px]'
        >
          Setup New Survey
        </ButtonFill>

        <ButtonOutline
          onClick={() => handleRoute('/question-bank')}
          classes='border-[#385B8B] text-[#385B8B] w-[210px] mt-2'
        >
          Question Bank
        </ButtonOutline>
      </div>
    </div>
  );
};

export default Feedback;
