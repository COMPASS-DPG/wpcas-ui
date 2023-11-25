'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import SubNavbar from '@/components/navbar/SubNavbar';
import Spinner from '@/components/Spinner';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import SelectTag from '@/components/uiComponents/SelectTag';

import { useWpcasContext } from '@/app/context/WpcasContext';
import { getAllLevels } from '@/services/getCompetency';

import Questions from '../../components/wpcasOverView/Questions';

const QuestionBank = () => {
  const {
    competencyArray,
    setLevelsWithQuestion,
    currentCompetency,
    setCurrentCompetency,
    viewQuestions,
    setViewQuestions,
    setCurrentLevelsAndQuestions,
    currentLevelsAnsQuestions,
  } = useWpcasContext();
  const router = useRouter();

  const [showError, setShowError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleViewButton = () => {
    if (!currentCompetency) {
      setShowError('Please select the competency');
      return;
    }
    setShowError('');
    setLoading(true);
    (async () => {
      const levels = await getAllLevels(currentCompetency, setLoading);
      setLevelsWithQuestion(levels?.levelsWithQuestion);
      setCurrentLevelsAndQuestions(levels?.levelsWithQuestion);
    })();
    setViewQuestions(true);
  };

  const handleCreateQuestionButton = () => {
    setCurrentCompetency(null);
    setLevelsWithQuestion([]);

    router.push('/question-bank/create-question-bank');
  };

  return (
    <div className='mx-[30px]'>
      <div className='w-[100%] bg-white px-5 pb-5'>
        <SubNavbar />
        <div className='mr-3  flex justify-between '>
          <div className='w-7/10 ml-5 mr-5'>
            <div>
              <div className='flex justify-between'>
                <p className='font-Outfit  text-lg font-semibold leading-7 text-[#385B8B]'>
                  View Question Bank
                </p>
                <p className='font-Outfit text-right text-sm font-normal leading-6 text-gray-400'>
                  Choose Competencies to view the questions
                </p>
              </div>
              <hr className='w-855 h-0.5 flex-shrink-0 bg-gray-200' />
              <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
                Competency{' '}
                <span className='ml-[-0.0rem] text-[#FF5674]'> *</span>
              </p>
              <div className='flex justify-between gap-2'>
                <SelectTag
                  options={competencyArray}
                  value={currentCompetency}
                  onChange={(option) => {
                    if (typeof option == 'number') setCurrentCompetency(option);
                  }}
                  width='714px'
                  placeholder='Competency'
                  paddingY='2px'
                  errorMessage={currentCompetency === null ? showError : ''}
                />
                <ButtonFill
                  onClick={handleViewButton}
                  classes='bg-[#385B8B] w-[100px] h-[42px]'
                >
                  view
                </ButtonFill>
              </div>
            </div>
          </div>
          <div>
            <ButtonFill
              onClick={() => handleCreateQuestionButton()}
              classes='bg-[#7DCC8A] w-[219px]'
            >
              Create Question Bank
            </ButtonFill>
          </div>
        </div>
        {/* question */}

        {currentCompetency &&
          viewQuestions &&
          (currentLevelsAnsQuestions.length ? (
            <Questions levelsWithQuestion={currentLevelsAnsQuestions} />
          ) : (
            <div className='mt-10 pl-6 text-[18px] font-semibold leading-6 text-[#385B8B]'>
              {loading ? <Spinner /> : 'No Question Found in this competency'}
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuestionBank;
