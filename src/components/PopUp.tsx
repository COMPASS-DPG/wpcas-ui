'use client';
import Link from 'next/link';

import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

import Success from '../../public/svg/success.svg';

const Popup = ({
  popUpIcon,
  popUpClosingFunction,
  visible,
  topHeading,
  subHeading,
  LeftButtonText,
  rightButtonText,
  leftButtonDestination,
  rightButtonDestination,
}: {
  popUpIcon?: React.ReactElement;
  popUpClosingFunction: (value: boolean) => void;
  visible: boolean;
  topHeading: string;
  subHeading: string;
  LeftButtonText: string;
  rightButtonText: string;
  leftButtonDestination: string;
  rightButtonDestination: string;
}) => {
  // const [isPopupOpen, setIsPopupOpen] = useState(visible);
  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  const closePopup = () => {
    // setIsPopupOpen(false);
    popUpClosingFunction(false);
  };

  return (
    <div>
      {visible && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='backdrop-blur-{none} absolute inset-0 bg-black bg-opacity-50'></div>
          <div className='modal-container z-50 mx-auto h-[336px] w-[550px] overflow-y-auto rounded-3xl bg-white shadow-lg '>
            <div className='modal-content flex h-full flex-col justify-between py-4 pt-[44px] text-left'>
              <div className='flex justify-center'>
                {popUpIcon || <Success width='60' />}
              </div>
              <div className=' h-full'>
                <p className='font-outfit leading-24 mb-4 mt-6 text-center text-[24px]  font-semibold text-black'>
                  {topHeading}
                </p>
                <p className='font-outfit text-16 leading-24 px-6 text-center font-normal text-gray-700'>
                  {subHeading}
                </p>
              </div>
              <div className='flex justify-center gap-3 py-8'>
                <Link href={`${leftButtonDestination}`}>
                  <ButtonOutline
                    onClick={closePopup}
                    classes='bg-[#fff] border-[#26292D] w-[170px]'
                  >
                    {LeftButtonText}
                  </ButtonOutline>
                </Link>
                <Link href={`${rightButtonDestination}`}>
                  <ButtonFill
                    onClick={closePopup}
                    classes='bg-[#26292D] w-[170px]'
                  >
                    {rightButtonText}
                  </ButtonFill>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
