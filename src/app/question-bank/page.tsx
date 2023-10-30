'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import SubNavbar from '@/components/navbar/SubNavbar';
import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import SelectTag from '@/components/uiComponents/SelectTag';

import CreateQuestionBank from '@/app/create-question-bank/page';

import Questions from '../../components/wpcasOverView/Questions';

const QuestionBank = () => {
  const router = useRouter();
  const [viewQuestions, setViewQuestions] = useState<boolean>(false);
  const [questions, setQuestions] = useState([]);
  const [option, setOption] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [editQuestion, setEditQuestion] = useState<boolean>(false);

  const handleViewButton = () => {
    if (option == '') {
      setShowError(true);
      return;
    }
    setShowError(false);
    setViewQuestions(true);
    setOption(option);
  };
  useEffect(() => {
    //one quetion how to access hr in that json server
    axios.get(`http://localhost:3000/${option}`).then((r) => {
      setQuestions(r.data);
    });
  }, [option]);

  {
    if (editQuestion) {
      return <CreateQuestionBank questions={questions} />;
    }
  }

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
                  options={DEPARTMENT_OPTIONS}
                  value={option}
                  onChange={(option) => setOption(option)}
                  width='714px'
                  placeholder='Department'
                  paddingY='2px'
                />
                <ButtonFill
                  onClick={handleViewButton}
                  classes='bg-[#385B8B] w-[100px]'
                >
                  view
                </ButtonFill>
              </div>
              {showError && (
                <p className='ml-2 text-red-600'>
                  Please select the competency
                </p>
              )}
            </div>
          </div>
          <div>
            <ButtonFill
              onClick={() => router.push('/create-question-bank')}
              classes='bg-[#7DCC8A] w-[219px]'
            >
              Create Question Bank
            </ButtonFill>
          </div>
        </div>
        {/* question */}
        {viewQuestions && (
          <Questions questions={questions} setEditQuestion={setEditQuestion} />
        )}
      </div>
    </div>
  );
};

export default QuestionBank;
