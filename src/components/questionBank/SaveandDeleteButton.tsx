import { useRouter } from 'next/navigation';

import Popup from '@/components/questionBank/PopUp';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

type propType = {
  handleSaveButton: () => void;
  showSavePopUp: boolean;
  setShowSavePopUp: (value: boolean) => void;
};

const SaveandDeleteButton = ({
  handleSaveButton,
  showSavePopUp,
  setShowSavePopUp,
}: propType) => {
  const router = useRouter();

  return (
    <div className='my-3'>
      <Popup
        popUpClosingFunction={setShowSavePopUp}
        visible={showSavePopUp}
        topHeading='Question bank created successfully'
        subHeading='Lorem ipsum (Title ) is added to your question bank  Successfully'
        LeftButtonText='Setup New Survey'
        rightButtonText='OK'
        leftButtonDestination='/setup-new-configuration'
        rightButtonDestination='/question-bank'
      />

      <div className='flex gap-10'>
        <ButtonOutline
          onClick={() => router.back()}
          classes='bg-[#fff] border-[#26292D] w-[170px]'
        >
          Cancel
        </ButtonOutline>

        <div>
          <ButtonFill
            onClick={() => handleSaveButton()}
            classes='bg-[#26292D] w-[170px]'
          >
            Save
          </ButtonFill>
        </div>
      </div>
    </div>
  );
};
export default SaveandDeleteButton;
