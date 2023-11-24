import { useEffect, useState } from 'react';

import AccountItems from '@/components/3cp/AccountItems';
import { outfit } from '@/components/FontFamily';
import SearchInput from '@/components/uiComponents/SearchInput';

import { accountType } from '@/app/account-verification/page';

import EmptyBox from '~/svg/emptyBox.svg';

const AccountSection = ({
  activeSection,
  accountList,
}: {
  activeSection: string;
  accountList: accountType[];
}) => {
  const [input, setInput] = useState<string>('');

  const [filterAccounts, setfilterAccounts] = useState<accountType[]>([]);
  const handleSearch = () => {
    //   // filter based on the  input
    //   //filter from above courseList and set in present course list
    //   // console.log(input);
    //   // setFilterCourse([]);
  };

  useEffect(() => {
    handleSearch();
  }, [input]);

  useEffect(() => {
    setfilterAccounts(accountList);
  }, [accountList]);
  return (
    <div className={`mx-7 ${outfit.className}`}>
      {filterAccounts.length !== 0 ? (
        <div className='mt-4'>
          {activeSection !== 'pendingSection' && (
            <SearchInput
              value={input}
              onChange={(value: string) => setInput(value)}
              placeholder='Search Course Provider'
            />
          )}

          <p className='my-4 text-[18px] font-medium leading-5 text-[#65758C]'>
            {accountList.length}{' '}
            {activeSection === 'pendingSection'
              ? 'Onboard request'
              : 'Third Party Course Providers'}
          </p>
          <AccountItems
            activeSection={activeSection}
            accountList={filterAccounts}
          />
        </div>
      ) : (
        <div className='mx-7  flex h-[400px] flex-col items-center justify-center gap-2'>
          <EmptyBox width='160px' />
          <p className='font-outfit text-center text-base font-normal text-[#272728]'>
            No Account Present yet!
          </p>
        </div>
      )}
    </div>
  );
};
export default AccountSection;
