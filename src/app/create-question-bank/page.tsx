'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Popup from '@/components/PopUp';
import SavedLevels from '@/components/questionBank/SavedLevels';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import QuestionUploadAndDownload from '@/components/uiComponents/QuestionUploadAndDownload';
import SelectTag, { OptionType } from '@/components/uiComponents/SelectTag';
import SubHeading from '@/components/uiComponents/SubHeading';
type Question = {
  level: string;
  question: string;
};

const CreateQuestionBank = ({ competency = '' }: { competency: string }) => {
  const [currentcompetency, setCurrentCompetency] =
    useState<string>(competency);
  const [competencyArray, setCompetencyArray] = useState<OptionType[]>([]);
  const [remainingLevels, setRemainingLevels] = useState<OptionType[]>([]);
  const [completeLevels, setCompleteLevels] = useState<Question[]>([]);
  const [level, setLevel] = useState<string>('');
  const [question, SetQuestion] = useState<string>('');
  const [error, setError] = useState(false);
  const [showSavePopUp, setShowSavePopUp] = useState<boolean>(false);
  const [showdeletePopUp, setShowdeletePopUp] = useState<boolean>(false);
  const [savedIdtoDelete, setSavedIdtoDelete] = useState('');

  // fill the competencyArray
  useEffect(() => {
    axios.get('http://localhost:3000/dependency').then((response) => {
      // Map the response data to the desired format (OptionType)
      const mappedData = response.data.map((item: string) => ({
        label: item,
        value: item,
      }));
      setCompetencyArray(mappedData);
    });
  }, []);
  // render the component if the competency change
  useEffect(() => {
    if (currentcompetency == '') return;
    axios.get(`http://localhost:3000/${currentcompetency}`).then((response) => {
      const mappedData = response.data.map((item: string) => ({
        label: item,
        value: item,
      }));
      setRemainingLevels(mappedData);
    });
    setLevel('');
    SetQuestion('');
    setCompleteLevels([]);
  }, [currentcompetency]);

  // add level function
  const handleAddLevel = () => {
    if (level == '' || question == '') {
      setError(true);
      return;
    }
    setError(false);
    setCompleteLevels((prev) => {
      const updatedCompleteLevels = [...prev, { level, question }];

      const updatedRemainingLevels = remainingLevels.filter(
        (item) => item.value !== level
      );

      setRemainingLevels(updatedRemainingLevels);

      return updatedCompleteLevels;
    });
    setLevel('Select level');
    SetQuestion('');
  };
  // handle save button
  const handleSaveButton = async () => {
    if (completeLevels.length == 0 && (level == '' || question == '')) {
      setError(true);
      return;
    }
    for (const item of completeLevels) {
      if (!item.level || !item.question) {
        setError(true);
        return;
      }
    }

    const newCompleteLevels = completeLevels;
    if (level !== '' && question !== '') {
      newCompleteLevels.push({ level, question });
    }

    //save you data using axios ans is new CompeleteArray
    // console.log(newCompleteLevels);
    setShowSavePopUp(true);
  };

  // handleDelete button
  const handleDeleteLevel = () => {
    const updatedCompleteLevels = completeLevels.filter(
      (item) => item.level !== savedIdtoDelete
    );

    setRemainingLevels((prevRemainingLevels) => [
      ...prevRemainingLevels,
      { label: savedIdtoDelete, value: savedIdtoDelete },
    ]);

    setCompleteLevels(updatedCompleteLevels);
    setShowdeletePopUp(false);
  };
  //Edit question inside level
  const updateQuestioninLevel = (levelToEdit: string, newQuestion: string) => {
    const updatedCompleteLevels = completeLevels.map((item) => {
      if (item.level === levelToEdit) {
        return { level: item.level, question: newQuestion };
      }
      return item;
    });

    setCompleteLevels(updatedCompleteLevels);
  };

  return (
    <div className='mx-[30px] gap-1 bg-white p-5'>
      {/* Upload and download section */}
      <QuestionUploadAndDownload />
      {/* Upload and download section end */}
      {/* select Competency */}
      <SubHeading heading='Select' />
      <div className='w-3/5 pb-[20px]'>
        {' '}
        <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Competency
        </p>
        <SelectTag
          options={competencyArray}
          value={currentcompetency}
          onChange={(newValue) => setCurrentCompetency(newValue)}
          width='749px'
          placeholder='Select Competency'
          paddingY='2px'
        />
      </div>
      {/* select cometency section end */}
      {/* add level and questions */}
      {currentcompetency && <SubHeading heading='Add Level & Questions' />}

      {/* saved levels start*/}

      {completeLevels.map((completeLevel) => {
        return (
          <SavedLevels
            key={completeLevel.level}
            completeLevel={completeLevel}
            setSavedIdtoDelete={setSavedIdtoDelete}
            showdeletePopUp={showdeletePopUp}
            setShowdeletePopUp={setShowdeletePopUp}
            handleDeleteLevel={handleDeleteLevel}
            updateQuestioninLevel={updateQuestioninLevel}
          />
        );
      })}
      {/* saved levels end */}

      {/* editable levels */}
      {currentcompetency && (
        <div>
          <div>
            <div className='w-3/5'>
              <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
                Select Level
              </p>
              <SelectTag
                options={remainingLevels}
                value={level}
                onChange={(option) => setLevel(option)}
                width='710px'
                placeholder='Select level'
                paddingY='2px'
              />
            </div>

            <div className='1'>
              <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
                Question
              </p>

              <input
                className='focus:#3b82f680 w-full appearance-none rounded border border-gray-200 px-4 py-2.5 text-[16px] leading-tight shadow hover:border-gray-400 focus:outline-none'
                id='username'
                type='text'
                value={question}
                onChange={(e) => SetQuestion(e.target.value)}
                placeholder='Enter Level'
              />
            </div>
          </div>
        </div>
      )}
      {/* editable levels end*/}

      {currentcompetency && (
        <>
          {/* add levels  */}
          <div className='my-3 flex justify-between'>
            {error ? (
              <p className='text-center text-[#ff0000]'>
                all field are must required*
              </p>
            ) : (
              <div></div>
            )}
            <ButtonFill
              onClick={handleAddLevel}
              classes='bg-[#385B8B] w-[193px]'
            >
              + Add Another Level
            </ButtonFill>
          </div>
          {/* add levels end*/}
          {/* save and cancel button */}
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
              <Link href='/question-bank'>
                <ButtonOutline
                  onClick={() => null}
                  classes='bg-[#fff] border-[#26292D] w-[170px]'
                >
                  Cancel
                </ButtonOutline>
              </Link>
              <div>
                <ButtonFill
                  onClick={handleSaveButton}
                  classes='bg-[#26292D] w-[170px]'
                >
                  Save
                </ButtonFill>
              </div>
            </div>
          </div>
          {/* save and cancel button end */}
        </>
      )}
    </div>
  );
};
export default CreateQuestionBank;
