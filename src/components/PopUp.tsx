'use client';
import Success from '../../public/svg/success.svg';
const Popup: React.FC = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isPopupOpen = false;
  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };

  return (
    <div>
      {isPopupOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='backdrop-blur-{none} absolute inset-0 bg-black bg-opacity-50'></div>
          <div className='modal-container z-50 mx-auto h-[336px] w-[550px] overflow-y-auto rounded-3xl bg-white shadow-lg '>
            <div className='modal-content flex h-full flex-col justify-between py-4 pt-[44px] text-left'>
              <div className='flex justify-center'>
                <Success width='60' height='60' />
              </div>
              <div className='h-full'>
                <p className='font-outfit leading-24 mb-4 mt-6 text-center text-[24px]  font-semibold text-black'>
                  Survey has been created successfully
                </p>
                <p className='font-outfit text-16 leading-24 px-6 text-center font-normal text-gray-700'>
                  The survey has assigned to 5 users and it is configured.
                </p>
              </div>
              <div className='flex justify-center gap-3 py-8'>
                <button className='w-215px flex items-center justify-center gap-1 rounded-md border border-solid border-gray-700 bg-white px-[16px] py-[4px]'>
                  <span className=' font-outfit leading-24 rounded-lg text-center font-semibold text-[#26292D] text-[px]'>
                    Setup New Configuration
                  </span>
                </button>
                <button className='rounded-4 flex w-[145px] items-center  justify-center  gap-1 rounded-md border border-solid border-gray-700 bg-[#26292D] px-[16px] py-[4px]'>
                  <span className='font-outfit leading-24 text-center font-semibold text-[px] text-white'>
                    OK
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

export default Popup;
