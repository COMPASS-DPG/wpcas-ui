import { useRouter } from 'next/navigation';
import React from 'react';

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
        <button
          className='block w-[210px] rounded-md border bg-[#385B8B] 
        px-8 py-[10px] text-base font-semibold text-white hover:opacity-80'
          onClick={() => handleRoute('/setup-new-survey')}
        >
          Setup New Survey
        </button>
        <button
          className='mt-2 block w-[210px] rounded-md border border-solid 
        border-[#385B8B] px-8 py-[10px] text-base font-semibold text-[#385B8B] hover:opacity-80'
          onClick={() => handleRoute('/question-bank')}
        >
          Question Bank
        </button>
      </div>
    </div>
  );
};

export default Feedback;
