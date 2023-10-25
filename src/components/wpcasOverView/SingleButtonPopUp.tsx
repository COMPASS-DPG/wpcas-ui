import Success from '../../../public/svg/success.svg';

const SingleButtonPopUp = ({
  visible,
  topHeading,
  subHeading,
  buttonText,
}: {
  visible?: boolean;
  topHeading?: string;
  subHeading?: string;
  buttonText?: string;
}) => {
  return (
    <div>
      {visible && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='backdrop-blur-{none} absolute inset-0 bg-black bg-opacity-50'></div>
          <div className='modal-container z-50 mx-auto h-[336px] w-[550px] overflow-y-auto rounded-3xl bg-white shadow-lg '>
            <div className='modal-content flex h-full flex-col justify-between py-4 pt-[44px] text-left'>
              <div className='flex justify-center'>
                <Success width='60' height='60' />
              </div>
              <div className='h-full'>
                <p className='font-outfit leading-24 mb-4 mt-6 text-center text-[24px]  font-semibold text-black'>
                  {topHeading || 'Survey has been created successfully'}
                </p>
                <p className='font-outfit text-16 leading-24 px-6 text-center font-normal text-gray-700'>
                  {subHeading ||
                    'The survey has assigned to 5 users and it is configured.'}
                </p>
              </div>
              <div className='flex justify-center gap-3 py-8'>
                <button className='rounded-4 flex w-[145px] items-center  justify-center  gap-1 rounded-md border border-solid border-gray-700 bg-[#26292D] px-[16px] py-[4px]'>
                  <span className='font-outfit leading-24 text-center font-semibold text-[px] text-white'>
                    {buttonText || 'OK'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleButtonPopUp;
