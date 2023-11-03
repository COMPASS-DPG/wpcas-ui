'use client';

import Link from 'next/link';
import { useState } from 'react';

import Popup from '@/components/PopUp';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

const ButtonSection = ({ handleAddLevel }: { handleAddLevel: () => void }) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  return (
    <div className='my-3'>
      <Popup
        popUpClosingFunction={setShowPopUp}
        visible={showPopUp}
        topHeading='Question bank created successfully'
        subHeading='Lorem ipsum (Title ) is added to your question bank  Successfully'
        LeftButtonText='Setup New Survey'
        rightButtonText='OK'
        leftButtonDestination='/setup-new-configuration'
        rightButtonDestination='/question-bank'
      />
      <div className='my-3 flex justify-end'>
        <ButtonFill onClick={handleAddLevel} classes='bg-[#385B8B] w-[193px]'>
          + Add Another Level
        </ButtonFill>
      </div>
      <div className='flex gap-10'>
        <Link href='/question-bank'>
          <ButtonOutline
            onClick={() => null}
            classes='bg-[#fff] border-[#26292D] w-[170px]'
          >
            Cancel
          </ButtonOutline>
        </Link>

        <ButtonFill
          onClick={() => setShowPopUp(true)}
          classes='bg-[#26292D] w-[170px]'
        >
          Save
        </ButtonFill>
      </div>
    </div>
  );
};
export default ButtonSection;
