import { useRouter } from 'next/navigation';

import { levelsWithQuestionType } from '@/app/propTypes';

import EditIcon from '../../../public/svg/editIcon.svg';

export type Question = {
  id: string;
  competencyLevelName: string;
  question: string;
};

export type QuestionsProps = {
  questions: Question[];
};

const Questions = ({
  levelsWithQuestion,
}: {
  levelsWithQuestion: levelsWithQuestionType[];
}) => {
  const router = useRouter();

  return (
    <div className='ml-5 mr-5 mt-5'>
      <div className='flex justify-between'>
        <div className='font-Outfit text-base font-semibold leading-[130%] text-[#385B8B]'>
          Questions
        </div>
        <div>
          <button
            className='py-0.25 flex items-center gap-0.5 rounded-md border border-solid	 border-[#2D2D2D] bg-white px-1 pl-1 pr-3 font-semibold'
            onClick={() => router.push('/question-bank/edit-question-bank')}
          >
            <EditIcon width='17' height='17' /> Edit
          </button>
        </div>
      </div>
      <hr className='w-855 mb-5 mt-1 h-0.5 flex-shrink-0 bg-gray-200' />
      <div className='h-[300px]  overflow-y-auto pb-10'>
        {levelsWithQuestion.map((data, index) => {
          return (
            <div className='my-3' key={index + 1}>
              <p className='font-Outfit  text-base font-medium leading-[130%] text-black'>
                Level: {data.competencyLevelNumber}
              </p>

              <p className='font-Outfit mt-2 text-base font-normal leading-[130%] text-[#272728]'>
                {data.question}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Questions;
