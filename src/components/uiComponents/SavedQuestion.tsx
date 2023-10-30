import { useState } from 'react';

import Popup from '@/components/PopUp';
import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import SelectTag from '@/components/uiComponents/SelectTag';
import { Question } from '@/components/wpcasOverView/Questions';

import Delete from '../../../public/svg/delete.svg';

DEPARTMENT_OPTIONS;
interface SavedQuestionProps {
  questionData: Question;
  handleDeleteLevel: () => void;
}

const SavedQuestion = ({
  questionData,
  handleDeleteLevel,
}: SavedQuestionProps) => {
  const [option, setOption] = useState<string>('');
  const { question } = questionData;
  const [questionValue, setQuestionValue] = useState(question);
  const [isEditable, setIsEditable] = useState(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const handleDeletePopUp = () => {
    handleDeleteLevel();
    setShowPopUp(false);
  };
  return (
    <div>
      <div key={1}>
        <Popup
          popUpIcon={<Delete width='60' />}
          popUpClosingFunction={handleDeletePopUp}
          visible={showPopUp}
          topHeading='Are you sure ?'
          subHeading='Do you want to delete this competency level?   '
          LeftButtonText='No'
          rightButtonText='Yes'
          leftButtonDestination='/create-question-bank'
          rightButtonDestination='/create-question-bank'
        />
        <div className='w-3/5'>
          <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
            Select Level
          </p>
          <div className='flex items-center gap-2'>
            <SelectTag
              options={DEPARTMENT_OPTIONS}
              value={option}
              onChange={(option) => setOption(option)}
              width='704px'
              placeholder='Department'
              paddingY='2px'
              isDisabled={true}
            />
            <span>
              <Delete
                width='37px'
                height='37px'
                className='cursor-pointer'
                onClick={() => setShowPopUp(true)}
              />
            </span>
          </div>
        </div>

        <div>
          <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
            Question
          </p>
          <div>
            <div className='flex  items-center rounded border  border-gray-200'>
              <input
                className='focus:#3b82f680 w-full appearance-none rounded border-none px-4 py-2.5 text-[16px] leading-tight shadow focus:outline-none'
                id='username'
                type='text'
                value={questionValue}
                onChange={(e) => setQuestionValue(e.target.value)}
                placeholder='Entry Level'
                disabled={!isEditable}
              />
              <span
                className='cursor-pointer border-none px-2 text-gray-400'
                onClick={() => setIsEditable(true)}
              >
                ✎
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SavedQuestion;
