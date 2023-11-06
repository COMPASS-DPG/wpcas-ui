import { useState } from 'react';
import { TiTick } from 'react-icons/ti';

import Popup2 from '@/components/DeleteLevelPopUp';
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
        <label className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Select Level
        </label>
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
        <label className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Question
        </label>
        <div>
          <div className='relative flex items-center rounded'>
            <input
              className={`focus:#3b82f680 w-full appearance-none rounded border px-4 py-2.5 text-[16px] leading-tight shadow focus:outline-none ${
                question.length == 0
                  ? 'border-red-600'
                  : isEditable
                  ? 'border-gray-400 text-[#00000]'
                  : 'border-gray-200 text-[#888]'
              }`}
              id='username'
              type='text'
              value={question}
              onChange={(e) => handleQuestionChange(e.target.value)}
              placeholder={question}
              disabled={!isEditable}
            />
            {!isEditable ? (
              <span
                className='absolute end-2 cursor-pointer px-2 text-gray-400 '
                onClick={() => setIsEditable(true)}
              >
                ✎
              </span>
            ) : (
              <span
                className='absolute end-2 cursor-pointer px-2 text-gray-400 '
                onClick={() => setIsEditable(false)}
              >
                <TiTick />
              </span>
            )}
          </div>
          {question.length == 0 && (
            <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
              question is required!
            </p>
          )}
          {/* new */}
        </div>
      </div>
    </div>
  );
};
export default SavedLevels;
