import Image from 'next/image';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';

import { accountType } from '@/app/account-verification/page';

import CourseProviderImage from '~/images/courseProviderImage.png';

const SingleAccount = ({
  activeComponenet,
  account,
}: {
  activeComponenet: string;
  account: accountType;
}) => {
  const { organization } = account;
  {
    activeComponenet;
  }
  return (
    <div
      className={`flex flex-col gap-[18px] rounded-2xl border border-[#EFEFEF] bg-[#fff] p-2.5 ${outfit.className}`}
    >
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            src={CourseProviderImage}
            alt='course-provider-image'
            width='44'
            className='rounded-full border border-[#E3E7EF]'
          />
          <p className='text-[18px] font-bold text-[#272728]'>{organization}</p>
        </div>
        <div className='flex items-center gap-5'>
          <p className='text-[14px] text-[#272728]'>On 22 Oct 2023</p>
          <ButtonOutline
            onClick={() => null}
            classes='bg-[#FFE4E4] text-[#ED2B2B] w-[170px]'
          >
            Reject Account
          </ButtonOutline>
          <ButtonFill onClick={() => null} classes='bg-[#7DCC8A] w-[170px]'>
            Approve Account
          </ButtonFill>
        </div>
      </div>
      {/* details */}
      <div className='flex justify-between'>
        <div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>
              Name of moderator
            </p>
            <p className='text-[16px] '>{account.name}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Email Id</p>
            <p className='text-[16px] '>{account.email}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Phone</p>
            <p className='text-[16px] '>{account.Phone}</p>
          </div>
        </div>
        <div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>
              Name of moderator
            </p>
            <p className='text-[16px] '>{account.name}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Email Id</p>
            <p className='text-[16px] '>{account.email}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Phone</p>
            <p className='text-[16px] '>{account.Phone}</p>
          </div>
        </div>
        <div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>
              Name of moderator
            </p>
            <p className='text-[16px] '>{account.name}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Email Id</p>
            <p className='text-[16px] '>{account.email}</p>
          </div>
          <div className=' my-4 flex flex-col gap-1'>
            <p className='text-[14px] font-medium text-[#6F747E]'>Phone</p>
            <p className='text-[16px] '>{account.Phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleAccount;
