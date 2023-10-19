import EditIcon from '../../../public/svg/editIcon.svg';

const Questions = () => {
  return (
    <div className='ml-5 mr-5 mt-10'>
      <div>
        <div className='font-Outfit text-base font-semibold leading-[130%] text-[#385B8B]'>
          Questions
        </div>
        <div>
          <button>
            <EditIcon width='17' height='17' />
          </button>
        </div>
      </div>
      <hr className='w-855 mb-5 h-0.5 flex-shrink-0 bg-gray-200' />
      <div className='pb-10'>
        {new Array(3)
          .fill({
            title: 'Understands health of males and females and initial',
            description:
              'How do you cope with anxiety during times of uncertainty?',
          })
          .map((data, index) => {
            return (
              <div className='my-3' key={index + 1}>
                <p className='font-Outfit  text-base font-medium leading-[130%] text-black'>
                  Level {index + 1} : {data.title}
                </p>

                <p className='font-Outfit mt-2 text-base font-normal leading-[130%] text-[#272728]'>
                  {data.description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Questions;
