'use client';
import { nanoid } from 'nanoid';
import { useState } from 'react';

import ButtonSection from '@/components/uiComponents/ButtonSection';
import QuestionBankOutline from '@/components/uiComponents/QuestionBankOutline';
import SavedQuestion from '@/components/uiComponents/SavedQuestion';
import SubHeading from '@/components/uiComponents/SubHeading';
import LevelAndQuestion from '@/components/wpcasOverView/LevelAndQuestion';
import { Question } from '@/components/wpcasOverView/Questions';

const CreateQuestionBank = ({ questions }: { questions?: Question[] }) => {
  const [QuestionArray, setQuestionArray] = useState<Question[]>(
    questions || []
  );
  const [level, setLevel] = useState('');
  const [question, setQuestion] = useState('');
  const handleAddLevel = () => {
    setQuestionArray((prev) => [...prev, { level, question, id: nanoid() }]);
    setLevel('');
    setQuestion('');
  };

  return (
    <div className='mx-[30px] gap-1 bg-white p-5'>
      <QuestionBankOutline />
      <SubHeading heading='Add Level & Questions' />
      {QuestionArray.map((question, index) => {
        return <SavedQuestion key={index} questionData={question} />;
      })}
      <LevelAndQuestion
        level={level}
        setLevel={setLevel}
        question={question}
        setQuestion={setQuestion}
      />
      <ButtonSection handleAddLevel={handleAddLevel} />
    </div>
  );
};
export default CreateQuestionBank;
