import React from 'react';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

const ConfirmTransaction = ({
  onClose,
  credit,
}: {
  onClose: () => void;
  credit: string;
}) => {
  const handleConfirmSettlement = () => {
    onClose();
  };

  return (
    <div className={`${outfit.className}`}>
      <div className='mt-[40px] text-center text-2xl font-semibold text-black'>
        Confirm the Transaction
      </div>
      <div className='mt-[20px] text-center text-base text-[#272728]'>
        Are you sure want to add {credit} Cr to this wallet
      </div>
      <div className='my-[40px] flex justify-center gap-6'>
        <ButtonOutline
          onClick={onClose}
          classes='border-[#000000] text-[#000000] w-[160px]'
        >
          Cancel
        </ButtonOutline>
        <ButtonFill
          onClick={handleConfirmSettlement}
          classes='bg-[#000000] w-[160px]'
        >
          Proceed
        </ButtonFill>
      </div>
    </div>
  );
};

export default ConfirmTransaction;
