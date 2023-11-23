'use client';
import Image from 'next/image';
import { FaUserEdit } from 'react-icons/fa';

import ColoredText from '@/components/3cp/ColoredText';
import Competencies from '@/components/3cp/Competency';
import RejectSummary from '@/components/3cp/RejectSummary';
import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

import { CourseType } from '@/app/marketplace/page';

import CourseFullImage from '~/images/course.png';
import CourseProvider from '~/images/courseProviderImage.png';

// import { EditIcon, Star } from '~/svg';

const ReviewCourse = ({
  activeSection,
  courseDetails,
  setShowPreviewPopUp,
  setShowReviewReasonPopUp,
}: {
  activeSection: string;
  courseDetails: CourseType;
  setShowPreviewPopUp: (value: boolean) => void;
  setShowReviewReasonPopUp: (value: boolean) => void;
}) => {
  const handleApprovedButton = () => {
    setShowPreviewPopUp(false);
  };
  const handleRejectButton = () => {
    setShowReviewReasonPopUp(true);
    setShowPreviewPopUp(false);
  };

  return (
    <div
      className={`${outfit.className} h-[580px] w-[1000px] overflow-y-auto pr-2`}
    >
      <div className='mb-4 flex items-center gap-2'>
        <Image
          src={CourseProvider}
          alt='course provide image'
          width='24'
          className='rounded-3xl border border-[#E3E7EF]'
        />
        <p className='text-[15px] font-bold text-[#272728]'>
          {courseDetails?.course_provider}
        </p>
      </div>
      <div className='flex gap-4'>
        {/* image */}
        <div className='flex flex-shrink-0 align-bottom '>
          <Image src={CourseFullImage} alt='course-image' />
        </div>
        {/* centeritem */}
        <div className='flex flex-grow flex-col justify-between'>
          <p className='text-[16px] font-bold text-[#272728]'>
            {courseDetails?.course_name}
          </p>

          <div className='flex items-center gap-2 align-bottom'>
            <FaUserEdit />
            <p className='text-[14px] font-medium uppercase text-[#272728]'>
              {courseDetails?.author}
            </p>
          </div>
          <div className='flex justify-between'>
            <div className=' flex gap-2'>
              <ColoredText
                text='English'
                classes='bg-[#DAFFDA] text-[#4ACB5F]'
              />
              <ColoredText text='Hindi' classes='bg-[#C7DEFF] text-[#385B8B]' />
            </div>
            <div className='rounded-lg bg-[#FFECAA] px-3 py-0.5'>
              <p className='text-[16px] font-bold text-[#272728]'>
                Cr. {courseDetails?.credit}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Course */}
      <div>
        <p className='pt-5 text-[16px] font-semibold leading-6 text-[#272728]'>
          About Course
        </p>
        <p className='py-3 text-[16px] leading-6 text-[#65758C]'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatuNemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sunt in culpa qui officia deserunt
          mollit anim id essed quia consequuntur maExcepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id es
        </p>
      </div>
      {/* compitency */}
      <div>
        <p className='pt-5 text-[16px] font-semibold leading-6 text-[#272728]'>
          Competencies
        </p>

        <Competencies />
      </div>
      {/* button */}

      {activeSection === 'rejectedSection' ? (
        <div>
          <RejectSummary />
        </div>
      ) : (
        <div className='flex gap-4'>
          <ButtonOutline
            onClick={handleRejectButton}
            classes='bg-[#FFE4E4] text-[#ED2B2B] w-[170px]'
          >
            Reject
          </ButtonOutline>
          <ButtonFill
            onClick={handleApprovedButton}
            classes='bg-[#7DCC8A] w-[170px]'
          >
            Confirm Approval
          </ButtonFill>
        </div>
      )}
    </div>
  );
};
export default ReviewCourse;
