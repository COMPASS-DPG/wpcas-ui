'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import CommonModal from '@/components/uiComponents/CommonModal';
import InputTag from '@/components/uiComponents/InputTag';
import Label from '@/components/uiComponents/Label';
import ConfirmTransaction from '@/components/userManagement/ConfirmTransaction';

import profile from '~/images/profile.jpg';

const isValid = (value: string, setError: (arg: string) => void) => {
  if (!value) {
    setError('credit is required!');
    return false;
  }
  setError('');
  return true;
};

const AddToWallet = () => {
  const [credit, setCredit] = useState('');
  const [error, setError] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleAddWallet = () => {
    if (isValid(credit, setError)) {
      setIsOpen(true);
    }
  };

  const handleCreditChange = (value: string) => {
    if (error) setError('');
    setCredit(value);
  };

  return (
    <div
      className={`mx-[30px] ${outfit.className} flex flex-wrap justify-between gap-3`}
    >
      <CommonModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCrossShow={false}
      >
        <ConfirmTransaction credit={credit} onClose={() => setIsOpen(false)} />
      </CommonModal>
      <div className='mr-[30px] w-[38vw]'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <Image
              src={profile}
              width={100}
              height={100}
              alt='img'
              className='rounded-full'
            />
          </div>
          <div>
            <p className='text-xl font-medium text-[#272728] '>
              Sushama Kumari
            </p>
            <p className='text-base text-[#65758C]'>Head Nurse</p>
          </div>
        </div>
        <div className='mt-[50px] flex flex-wrap justify-between gap-3'>
          <div className='rounded bg-[#FFF7DA] py-[9px] pl-[18px] pr-[76px]'>
            <p className='text-base text-[#65758C]'>Wallet Balance</p>
            <p className='text-2xl font-semibold text-[#385B8B]'>Cr 200</p>
          </div>
          <div className='w-[350px]'>
            <Label text='Credit' />
            <InputTag
              errorMessage={error}
              type='number'
              onChange={handleCreditChange}
              placeholder='Enter Credit'
              value={credit}
            />
          </div>
        </div>
        <div className='mt-[40px] flex flex-wrap justify-end gap-6'>
          <ButtonOutline
            onClick={() => null}
            classes='border-[#385B8B] text-[#385B8B] w-[200px]'
          >
            Remove from Wallet
          </ButtonOutline>
          <ButtonFill
            onClick={handleAddWallet}
            classes='bg-[#385B8B] w-[200px]'
          >
            Add to Wallet
          </ButtonFill>
        </div>
      </div>
      <div className='w-[38vw] bg-white p-[20px]'>
        <div className='mb-[30px] text-xl font-medium text-[#272728]'>
          Transaction History
        </div>
        <div className='mb-[20px] flex flex-wrap justify-between'>
          <div className='text-base text-[#272728]'>Purchased Course ABC</div>
          <div className='flex flex-wrap gap-4'>
            <div className='text-base font-semibold text-[#ED2B2B]'>
              -Cr 200
            </div>
            <div className='text-base text-[#65758C]'>20 Sep 2023</div>
          </div>
        </div>
        <div className='mb-[20px] flex flex-wrap justify-between'>
          <div className='text-base text-[#272728]'>Purchased Course ABC</div>
          <div className='flex flex-wrap gap-4'>
            <div className='text-base font-semibold text-[#ED2B2B]'>
              -Cr 200
            </div>
            <div className='text-base text-[#65758C]'>20 Sep 2023</div>
          </div>
        </div>
        <div className='mb-[20px] flex flex-wrap justify-between'>
          <div className='text-base text-[#272728]'>Purchased Course ABC</div>
          <div className='flex flex-wrap gap-4'>
            <div className='text-base font-semibold text-[#7DCC8A]'>
              +Cr 200
            </div>
            <div className='text-base text-[#65758C]'>20 Sep 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToWallet;
