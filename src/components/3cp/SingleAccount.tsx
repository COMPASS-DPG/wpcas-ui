import Image from 'next/image';
import React, { useState } from 'react';

import RejectedReason from '@/components/3cp/RejectedReason';
import RejectSummary from '@/components/3cp/RejectSummary';
import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import CommonModal from '@/components/uiComponents/CommonModal';

import { accountType } from '@/app/account-verification/page';

import CourseProviderImage from '~/images/courseProviderImage.png';

const SingleAccount = ({
  activeSection,
  account,
}: {
  activeSection: string;
  account: accountType;
}) => {
  const [showReviewReasonPopUp, setShowReviewReasonPopUp] = useState(false);

  const handleApprovedButton = () => {
    //call api and handle approve accout here
  };
  return (
    <div
      className={`flex flex-col gap-[18px] rounded-2xl border border-[#EFEFEF] bg-[#fff] p-2.5 ${outfit.className}`}
    >
      <CommonModal
        isOpen={showReviewReasonPopUp}
        onClose={() => setShowReviewReasonPopUp(false)}
      >
        <RejectedReason
          setShowReviewReasonPopUp={setShowReviewReasonPopUp}
          heading='Account Rejection Reason'
        />
      </CommonModal>
      {/* head line */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            src={CourseProviderImage}
            alt='course-provider-image'
            width='44'
            className='rounded-full border border-[#E3E7EF]'
          />
          <p className='text-[18px] font-bold text-[#272728]'>
            {account?.date}
          </p>
        </div>
        {activeSection === 'pendingSection' ? (
          <div className='flex items-center gap-5'>
            <p className='text-[14px] text-[#272728]'>On {account?.date}</p>
            <ButtonOutline
              onClick={() => setShowReviewReasonPopUp(true)}
              classes='bg-[#FFE4E4] text-[#ED2B2B] w-[170px]'
            >
              Reject Account
            </ButtonOutline>
            <ButtonFill
              onClick={handleApprovedButton}
              classes='bg-[#7DCC8A] w-[170px]'
            >
              Approve Account
            </ButtonFill>
          </div>
        ) : (
          <div className='flex items-center justify-between'>
            <p
              className={`text-[14px] ${
                activeSection === 'rejectedSection'
                  ? 'text-[#FF5674]'
                  : 'text-[#385B8B]'
              } `}
            >
              {activeSection === 'rejectedSection' ? 'Rejected' : 'Onboard'} On
              22 Oct 2023
            </p>
          </div>
        )}
      </div>
      {/* details */}
      <div className='mr-[200px] flex justify-between'>
        <div>
          <SingleDetail subHeading='Name of moderator'>
            {account?.name}
          </SingleDetail>
          <SingleDetail subHeading='Email Id'>{account?.email}</SingleDetail>
          <SingleDetail subHeading='Phone'>{account?.Phone}</SingleDetail>
        </div>
        <div>
          <SingleDetail subHeading='Bank'>{account?.bank}</SingleDetail>
          <SingleDetail subHeading='Branch'>{account?.branch}</SingleDetail>
          <SingleDetail subHeading='Account Number'>
            {account?.accountNumber}
          </SingleDetail>
        </div>
        <div>
          <SingleDetail subHeading='IFSC Code'>
            {account?.ifscCode}
          </SingleDetail>
          <SingleDetail subHeading='PAN Number'>
            {account?.panNumber}
          </SingleDetail>
          <SingleDetail subHeading='GST Number'>
            {account?.gstNumber}
          </SingleDetail>
        </div>
      </div>

      {activeSection === 'rejectedSection' && (
        <div>
          <RejectSummary />
        </div>
      )}
    </div>
  );
};

const SingleDetail = ({
  children,
  subHeading,
}: {
  children: React.ReactNode;
  subHeading: string;
}) => {
  return (
    <div className=' my-4 flex flex-col gap-1'>
      <p className='text-[14px] font-medium text-[#6F747E]'>{subHeading}</p>
      <p className='text-[16px] '>{children}</p>
    </div>
  );
};
export default SingleAccount;
