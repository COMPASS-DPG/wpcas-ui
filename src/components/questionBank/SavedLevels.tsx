import { useState } from 'react';
import { TiTick } from 'react-icons/ti';

import Popup2 from '@/components/DeleteLevelPopUp';
import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import SelectTag from '@/components/uiComponents/SelectTag';

import { levelsWithQuestionType } from '@/app/propTypes';

import Delete from '~/svg/delete.svg';
export type QuestionType = {
  competencyLevelName: string;
  question: string;
  competencyLevelNumber: number;
  questionId: string;
};
const SavedLevels = ({
  completeLevel,
  showdeletePopUp,
  setShowdeletePopUp,
  handleDeleteLevel,
  setSavedIdtoDelete,
  updateQuestioninLevel,
}: {
  completeLevel: levelsWithQuestionType;
  showdeletePopUp: boolean;
  setShowdeletePopUp: (value: boolean) => void;
  setSavedIdtoDelete: (value: number) => void;
  handleDeleteLevel: () => void;
  updateQuestioninLevel: (
    competencyLevelNumber: number,
    newQuestion: string
  ) => void;
}) => {
  // console.log(completeLevel, 'ankit');
  const { competencyLevelName, question, competencyLevelNumber } =
    completeLevel;

  const handleDeleteIcon = (competencyLevelNumber: number) => {
    setSavedIdtoDelete(competencyLevelNumber);
    setShowdeletePopUp(true);
  };
  const [isEditable, setIsEditable] = useState(false);

  const handleQuestionChange = (newQuestion: string) => {
    updateQuestioninLevel(competencyLevelNumber, newQuestion); // Update the parent's completeLevels array immediately
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
      <div className='mb-2 mt-8 w-3/5'>
        <label className='text-font-sub-text font-Outfit mb-2 mt-2 text-base  font-medium text-[#6F747E] '>
          Select Level
        </label>
        <div className='mt-3 flex items-center gap-3'>
          <SelectTag
            options={DEPARTMENT_OPTIONS}
            value={competencyLevelName}
            onChange={() => null}
            width='704px'
            placeholder={competencyLevelName}
            paddingY='2px'
            isDisabled={true}
          />
          <span>
            <Delete
              width='37px'
              height='37px'
              className='cursor-pointer'
              onClick={() => handleDeleteIcon(competencyLevelNumber)}
            />
          </span>
        </div>
      </div>

      <div className=' mt-4'>
        <label className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Question
        </label>
        <div>
          <div className='relative mt-2 flex items-center rounded'>
            <input
              className={`focus:#3b82f680 w-full appearance-none rounded border px-4 py-2.5 text-[16px] leading-tight shadow focus:outline-none ${
                question.length == 0
                  ? 'border-red-600 '
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
            {question.length !== 0 &&
              (!isEditable ? (
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
              ))}
          </div>
          {question.length == 0 && (
            <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
              question field is mandatory. Please enter a question!
            </p>
          )}
          {/* new */}
        </div>
      </div>
      <hr className='mt-8 h-[1px] bg-[#65758C33]' />
    </div>
  );
};
export default SavedLevels;
