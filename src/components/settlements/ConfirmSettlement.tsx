import React from 'react';
import { toast } from 'react-toastify';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

import { handleSettlement } from '@/services/configurationServices';

const ConfirmSettlement = ({
  onClose,
  id,
}: {
  onClose: () => void;
  id: string;
}) => {
  const handleConfirmSettlement = async () => {
    try {
      await handleSettlement(id);
      toast.success('Settlement done successfully');
    } catch (error) {
      toast.error('something went wrong');
    }
    onClose();
  };

  return (
    <div className={`${outfit.className}`}>
      <div className='mt-[40px] text-center text-2xl font-semibold text-black'>
        Confirm the Settlement
      </div>
      <div className='mt-[20px] text-center text-base text-[#272728]'>
        After confirming the settlement the credits would be reset to zero
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
          ok
        </ButtonFill>
      </div>
    </div>
  );
};

export default ConfirmSettlement;
