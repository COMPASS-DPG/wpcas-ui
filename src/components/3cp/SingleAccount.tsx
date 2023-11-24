import Image from 'next/image';
import { useState } from 'react';

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
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>
              Name of moderator
            </p>
            <p className='text-[16px] '>{account?.name}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Email Id</p>
            <p className='text-[16px] '>{account?.email}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Phone</p>
            <p className='text-[16px] '>{account?.Phone}</p>
          </div>
        </div>
        <div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Bank</p>
            <p className='text-[16px] '>{account?.bank}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Branch</p>
            <p className='text-[16px] '>{account?.branch}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>
              Account Number
            </p>
            <p className='text-[16px] '>{account?.accountNumber}</p>
          </div>
        </div>
        <div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>IFSC Code</p>
            <p className='text-[16px] '>{account?.ifscCode}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>PAN Number</p>
            <p className='text-[16px] '>{account?.panNumber}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>GST Number</p>
            <p className='text-[16px] '>{account?.gstNumber}</p>
          </div>
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
export default SingleAccount;
