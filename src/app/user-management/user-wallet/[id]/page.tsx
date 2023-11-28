'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { outfit } from '@/components/FontFamily';
import ButtonFill from '@/components/uiComponents/ButtonFill';
import ButtonOutline from '@/components/uiComponents/ButtonOutline';
import CommonModal from '@/components/uiComponents/CommonModal';
import InputTag from '@/components/uiComponents/InputTag';
import Label from '@/components/uiComponents/Label';
import ConfirmTransaction from '@/components/userManagement/ConfirmTransaction';

import { useUserWalletContext } from '@/app/context/UserWalletContext';
import { getTransectionHistory } from '@/services/configurationServices';
type transectionType = {
  toId: string;
  createdAt: string;
  description: string;
  type: string;
  credits: string;
};

import profile from '~/images/profile.jpg';

const isValid = (value: string, setError: (arg: string) => void) => {
  if (!value) {
    setError('credit is required!');
    return false;
  }
  setError('');
  return true;
};

const AddToWallet = ({ params }: { params: { id: string } }) => {
  const { userData, setFetchData, adminId } = useUserWalletContext();

  const [credit, setCredit] = useState('');
  const [error, setError] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isAddWallet, setIsAddWallet] = useState(false);
  const [transections, setTransections] = useState<transectionType[]>([]);
  const [fetchTransectionData, setFetchTransectionData] = useState(true);

  const handleAddWallet = () => {
    if (isValid(credit, setError)) {
      setIsAddWallet(true);
      setIsOpen(true);
    }
  };
  const handleRemoveWallet = () => {
    if (isValid(credit, setError)) {
      setIsAddWallet(false);
      setIsOpen(true);
    }
  };

  const data = userData?.find((item) => item.consumerId === params.id);

  const handleCreditChange = (value: string) => {
    if (error) setError('');
    setCredit(value);
  };

  useEffect(() => {
    if (fetchTransectionData) {
      (async () => {
        try {
          const data = await getTransectionHistory(adminId, params?.id);
          setTransections(data);
          setFetchTransectionData(false);
        } catch (error) {
          toast.error('something went wrong');
        }
      })();
    }
  }, [adminId, fetchTransectionData, params?.id]);

  return (
    <div
      className={`mx-[30px] ${outfit.className} flex flex-wrap justify-between gap-3`}
    >
      <CommonModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCrossShow={false}
      >
        <ConfirmTransaction
          credit={credit}
          onClose={() => setIsOpen(false)}
          isAddWallet={isAddWallet}
          setFetchData={setFetchData}
          adminId={adminId}
          consumerId={params?.id}
          setFetchTransectionData={setFetchTransectionData}
        />
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
              {data?.userName ?? 'DUMMY NAME'}
            </p>
            <p className='text-base text-[#65758C]'>
              {data?.role ?? 'DUMMY ROLE'}
            </p>
          </div>
        </div>
        <div className='mt-[50px] flex flex-wrap justify-between gap-3'>
          <div className='rounded bg-[#FFF7DA] py-[9px] pl-[18px] pr-[76px]'>
            <p className='text-base text-[#65758C]'>Wallet Balance</p>
            <p className='text-2xl font-semibold text-[#385B8B]'>
              Cr {data?.credits ?? '--'}
            </p>
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
            onClick={handleRemoveWallet}
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
        {transections.map((transection: transectionType) => {
          const createdAtDate = new Date(transection?.createdAt);

          const formattedDate = new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }).format(createdAtDate);
          return (
            <div
              key={transection?.toId}
              className='mb-[20px] flex flex-wrap justify-between'
            >
              <div className='text-base text-[#272728]'>
                {transection?.description}
              </div>
              <div className='flex flex-wrap gap-4'>
                {transection?.type !== 'ADD_CREDITS' ? (
                  <div className='text-base font-semibold text-[#ED2B2B]'>
                    -Cr {transection?.credits}
                  </div>
                ) : (
                  <div className='text-base font-semibold text-[#7DCC8A]'>
                    +Cr {transection?.credits}
                  </div>
                )}

                <div className='text-base text-[#65758C]'>{formattedDate}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddToWallet;
