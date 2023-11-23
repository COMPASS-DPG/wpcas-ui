import Image from 'next/image';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';

import ColoredText from '@/components/3cp/ColoredText';
import RejectedReason from '@/components/3cp/RejectedReason';
import ReviewCourse from '@/components/3cp/ReviewCourse';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import CommonModal from '@/components/uiComponents/CommonModal';

import { CourseType } from '@/app/marketplace/page';

import CourseImage from '~/images/course.png';
import CourseProvider from '~/images/courseProviderImage.png';

const SingleCourse = ({
  activeSection,
  course,
}: {
  activeSection: string;
  course: CourseType;
}) => {
  const { course_name, rating, author, credit } = course;
  const [showReviewPopUp, setShowPreviewPopUp] = useState(false);
  const [showReviewReasonPopUp, setShowReviewReasonPopUp] = useState(false);

  return (
    <div className='mb-4 rounded-2xl bg-white p-2.5'>
      {/* Review Courses PopUp */}

      <CommonModal
        width='1000px'
        isOpen={showReviewPopUp}
        onClose={() => setShowPreviewPopUp(false)}
      >
        <ReviewCourse
          courseDetails={course}
          setShowPreviewPopUp={setShowPreviewPopUp}
          activeSection={activeSection}
          setShowReviewReasonPopUp={setShowReviewReasonPopUp}
        />
      </CommonModal>
      {/* <RejectedReason popup /> */}
      <CommonModal
        isOpen={showReviewReasonPopUp}
        onClose={() => setShowReviewReasonPopUp(false)}
      >
        <RejectedReason setShowReviewReasonPopUp={setShowReviewReasonPopUp} />
      </CommonModal>

      <div className='flex gap-4'>
        {/* image */}
        <div className='flex flex-shrink-0 align-bottom '>
          <Image src={CourseImage} alt='course-image' />
        </div>
        {/* centeritem */}
        <div className='flex flex-grow flex-col justify-between'>
          <div>
            <p className='pb-2 text-[16px] font-bold text-[#272728]'>
              {course_name}
            </p>
            <div className='pl-6 '>
              <ol className='grid  list-decimal grid-cols-2 text-[14px] text-[#787878] '>
                <li>Pregnancy Identification (L1,L2)</li>
                <li>
                  Vaginal Examination and plotting on partograph
                  (L1,L2,L3,L4,L5)
                </li>
                <li>lorem ipsum dolps kihdkkf for PW(L1,L2,L3)</li>
                <li>Birth Planning and preparedness for PW(L1,L2,L3)</li>
              </ol>
            </div>
          </div>
          <div>
            <div className='items- mt-2 flex gap-2 align-bottom'>
              <Image
                src={CourseProvider}
                alt='course provide image'
                width='24'
                className='rounded-3xl border border-[#E3E7EF]'
              />
              <p className='text-[15px] font-bold text-[#272728]'>Unacademy</p>
              <FaUserEdit />
              <p className='text-[14px] font-medium uppercase text-[#272728]'>
                {author}
              </p>
              <ColoredText
                text='English'
                classes='bg-[#DAFFDA] text-[#4ACB5F]'
              />
              <ColoredText text='Hindi' classes='bg-[#C7DEFF] text-[#385B8B]' />
            </div>
          </div>
        </div>
        {/* three dot */}
        <div className='relative flex flex-col items-end justify-between'>
          <div className='flex w-full justify-end gap-4'>
            {activeSection === 'approvedSection' && (
              <p className='flex items-center gap-1 text-[14px] font-bold leading-4 text-[#787878]'>
                {rating} <AiFillStar fill='#FFD029' width='12px' />
              </p>
            )}
            <div className='rounded-lg bg-[#FFECAA] px-3 py-0.5'>
              <p className='text-[16px] font-bold text-[#272728]'>
                Cr.{credit}
              </p>
            </div>
          </div>
          <div>
            <ButtonFill
              onClick={() => setShowPreviewPopUp(true)}
              classes='bg-[#26292D]'
            >
              Review the course
            </ButtonFill>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCourse;
