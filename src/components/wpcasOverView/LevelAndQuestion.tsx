'use client';
import { DEPARTMENT_OPTIONS } from '@/components/SelectOptions';
import SavedQuestion from '@/components/uiComponents/SavedQuestion';
import SelectTag from '@/components/uiComponents/SelectTag';
SavedQuestion;

type LevelAndQuestionProps = {
  level: string;
  setLevel: (level: string) => void;
  question: string;
  setQuestion: (question: string) => void;
};

const LevelAndQuestion = ({
  level,
  setLevel,
  question,
  setQuestion,
}: LevelAndQuestionProps) => {
  // const [isEditable, setIsEditable] = useState(false);
  // const [option, setOption] = useState('');
  return (
    <div>
      <div>
        <div className='w-3/5'>
          <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
            Select Level
          </p>
          <SelectTag
            options={DEPARTMENT_OPTIONS}
            value={level}
            onChange={(option) => {
              if (typeof option === 'string') {
                setLevel(option);
              }
            }}
            width='710px'
            placeholder='Department'
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
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Entry Level'
          />
        </div>
      </div>
    </div>
  );
};
export default LevelAndQuestion;
