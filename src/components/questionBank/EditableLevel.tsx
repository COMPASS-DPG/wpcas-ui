import { useState } from 'react';

import SaveandDeleteButton from '@/components/questionBank/SaveandDeleteButton';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import SelectTag from '@/components/uiComponents/SelectTag';

import { OptionType } from '@/app/propTypes';

const EditableLevel = ({
  levelsWithoutQuestion,
  handleAddLevel,
  handleSaveButton,
  showSavePopUp,
  setShowSavePopUp,
}: {
  levelsWithoutQuestion: OptionType[];
  handleAddLevel: (val: null | number, str: string) => void;
  handleSaveButton: (val: null | number, str: string) => void;
  showSavePopUp: boolean;
  setShowSavePopUp: (value: boolean) => void;
}) => {
  const [input, setInput] = useState<{
    level: null | number;
    question: string;
  }>({ level: null, question: '' });

  const handleAddLevelButton = () => {
    if (input.level == null || input.question == '') {
      return;
    }

    handleAddLevel(input.level, input.question);
    setInput({ level: null, question: '' });
  };

  return (
    <div>
      {levelsWithoutQuestion.length !== 0 ? (
        <div>
          <div className='mt-8 w-3/5'>
            <p className='text-font-sub-text font-Outfit mb-2  mt-3 text-base  font-medium text-[#6F747E] '>
              Select Level
            </p>
            <SelectTag
              options={levelsWithoutQuestion}
              value={input.level}
              onChange={(option) => {
                if (typeof option == 'number') {
                  setInput({ ...input, level: option });
                }
              }}
              width='710px'
              placeholder='Select level'
              paddingY='2px'
            />
          </div>

          <div className='1'>
            <p className='text-font-sub-text font-Outfit mb-3 mt-3 text-base  font-medium text-[#6F747E] '>
              Question
            </p>

            <input
              className='focus:#3b82f680 w-full appearance-none rounded border border-gray-200 px-4 py-2.5 text-[16px] leading-tight shadow hover:border-gray-400 focus:outline-none'
              id='username'
              type='text'
              value={input.question}
              onChange={(e) => setInput({ ...input, question: e.target.value })}
              placeholder='Enter Level'
            />
          </div>

          <div className='my-5 flex justify-end'>
            {input.level !== null && input.question !== '' ? (
              <ButtonFill
                onClick={handleAddLevelButton}
                classes='bg-[#385B8B] w-[193px]'
              >
                + Add Another Level
              </ButtonFill>
            ) : (
              <button className='box-border block w-[193px] cursor-auto rounded-md border bg-[#80a0cc] px-4 py-2 text-base font-semibold text-white'>
                + Add Another Level
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className='my-8 text-[14px] font-medium'>
          No more levels to add questions
        </div>
      )}
      <SaveandDeleteButton
        handleSaveButton={() => handleSaveButton(input.level, input.question)}
        showSavePopUp={showSavePopUp}
        setShowSavePopUp={setShowSavePopUp}
      />
    </div>
  );
};
export default EditableLevel;
