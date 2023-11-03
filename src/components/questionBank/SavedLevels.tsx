import { useState } from 'react';

import Popup2 from '@/components/PopUp2';
import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import SelectTag from '@/components/uiComponents/SelectTag';

import Delete from '~/svg/delete.svg';
type Question = {
  level: string;
  question: string;
};
const SavedLevels = ({
  completeLevel,
  showdeletePopUp,
  setShowdeletePopUp,
  handleDeleteLevel,
  setSavedIdtoDelete,
  updateQuestioninLevel,
}: {
  completeLevel: Question;
  showdeletePopUp: boolean;
  setShowdeletePopUp: (value: boolean) => void;
  setSavedIdtoDelete: (value: string) => void;
  handleDeleteLevel: () => void;
  updateQuestioninLevel: (level: string, newQuestion: string) => void;
}) => {
  const { level, question } = completeLevel;
  const handleDeleteIcon = (level2: string) => {
    setSavedIdtoDelete(level2);
    setShowdeletePopUp(true);
  };
  const [isEditable, setIsEditable] = useState(false);

  const handleQuestionChange = (newQuestion: string) => {
    updateQuestioninLevel(level, newQuestion); // Update the parent's completeLevels array immediately
  };
  return (
    <div>
      <Popup2
        popUpIcon={<Delete width='60' />}
        popUpClosingFunction={setShowdeletePopUp}
        handleDeleteButton={handleDeleteLevel}
        visible={showdeletePopUp}
        topHeading='Are you sure'
        subHeading='Do you want to delete this competency level?   '
        LeftButtonText='No'
        rightButtonText='Yes'
      />
      <div className='w-3/5'>
        <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Select Level
        </p>
        <div className='flex items-center gap-2'>
          <SelectTag
            options={DEPARTMENT_OPTIONS}
            value={level}
            onChange={() => null}
            width='704px'
            placeholder={level}
            paddingY='2px'
            isDisabled={true}
          />
          <span>
            <Delete
              width='37px'
              height='37px'
              className='cursor-pointer'
              onClick={() => handleDeleteIcon(level)}
            />
          </span>
        </div>
      </div>

      <div>
        <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Question
        </p>
        <div>
          <div className='relative flex items-center rounded'>
            <input
              className='focus:#3b82f680 w-full appearance-none rounded border border-gray-200 px-4 py-2.5 text-[16px] leading-tight shadow hover:border-gray-400 focus:outline-none'
              id='username'
              type='text'
              value={question}
              onChange={(e) => handleQuestionChange(e.target.value)}
              placeholder={question}
              disabled={!isEditable}
            />
            <span
              className='absolute end-2 cursor-pointer px-2 text-gray-400 '
              onClick={() => setIsEditable(true)}
            >
              ✎
            </span>
          </div>
          {/* new */}
        </div>
      </div>
    </div>
  );
};
export default SavedLevels;
