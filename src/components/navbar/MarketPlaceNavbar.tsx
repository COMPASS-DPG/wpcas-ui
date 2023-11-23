'use client';

import { outfit } from '@/components/FontFamily';

const MarketPlaceNavbar = ({
  activeSection,
  setActiveSection,
  filterCourse,
}: {
  activeSection: string;
  setActiveSection: (value: string) => void;
  filterCourse?: (value: string) => void;
}) => {
  const handleClick = (type: string) => {
    setActiveSection(type);
    if (type === 'approvedSection' && filterCourse) {
      filterCourse('approved');
    } else if (type === 'pendingSection' && filterCourse) {
      filterCourse('pending');
    } else if (type === 'rejectedSection' && filterCourse) {
      filterCourse('rejected');
    }
  };
  return (
    <div
      className={`border-[#ECECEC]' mx-5 mt-5 flex justify-between border-b-2 ${outfit.className}`}
    >
      <div className='flex  gap-5'>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeSection === 'pendingSection'
              ? 'border-b-[3px] border-black'
              : ''
          } `}
        >
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeSection == 'pendingSection'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('pendingSection')}
          >
            Approval Pending
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeSection == 'approvedSection' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeSection == 'approvedSection'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('approvedSection')}
          >
            Approved Courses
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeSection == 'rejectedSection' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeSection == 'rejectedSection'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('rejectedSection')}
          >
            Rejected Course
          </nav>
        </div>
      </div>
    </div>
  );
};
export default MarketPlaceNavbar;
