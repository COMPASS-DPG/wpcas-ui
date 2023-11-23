import { useState } from 'react';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

const RejectedReason = ({
  setShowReviewReasonPopUp,
}: {
  setShowReviewReasonPopUp: (value: boolean) => void;
}) => {
  const handleProceedButton = () => {
    //call api to handle the proceed button
    setShowReviewReasonPopUp(false);
  };
  const [text, setText] = useState('');
  return (
    <div className={`${outfit} mx-3 mt-2`}>
      <p className='mb-8 text-[20px] font-semibold leading-6 text-[#272728]'>
        Describe Rejection Reason
      </p>
      <div className='flex flex-col'>
        <label
          htmlFor=''
          className='mb-2 text-[14px] font-medium text-[#6F747E]'
        >
          Rejection Reason
        </label>
        <textarea
          name='Enter...'
          id=''
          value={text}
          onChange={(e) => setText(e.target.value)}
          cols={30}
          rows={10}
          placeholder=''
          className='rounded-lg border border-[#E3E7EF] bg-[#fff] text-[16px] leading-5'
        ></textarea>
        <div className='mb-4 mt-6 flex gap-9'>
          <ButtonOutline
            classes='border-[#000] w-[150px]'
            onClick={() => setShowReviewReasonPopUp(false)}
          >
            Cancel
          </ButtonOutline>
          <ButtonFill
            classes='bg-[#000] text-[#fff] w-[150px]'
            onClick={handleProceedButton}
          >
            Proceed
          </ButtonFill>
        </div>
      </div>
    </div>
  );
};
export default RejectedReason;
