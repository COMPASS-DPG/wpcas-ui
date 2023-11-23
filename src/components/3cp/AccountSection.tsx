import { useEffect, useState } from 'react';

import AccountItems from '@/components/3cp/AccountItems';
import { outfit } from '@/components/FontFamily';

import { accountType } from '@/app/account-verification/page';

import EmptyBox from '~/svg/emptyBox.svg';

const AccountSection = ({
  activeSection,
  courseList,
}: {
  activeSection: string;
  courseList: accountType[];
}) => {
  const [filterAccounts, setfilterAccounts] = useState<accountType[]>([]);

  useEffect(() => {
    setfilterAccounts(courseList);
  }, [courseList]);
  return (
    <div className={`mx-7 ${outfit.className}`}>
      {filterAccounts.length !== 0 ? (
        <div>
          {/* <SearchCourse
            value={input}
            onChange={setInput}
            handleSearch={handleSearch}
          /> */}

          <p className='my-4 text-[18px] font-medium leading-5 text-[#65758C]'>
            {courseList.length} Onboard request
          </p>
          <AccountItems
            activeComponenet={activeSection}
            accountList={filterAccounts}
          />
        </div>
      ) : (
        <div className='mx-7  flex h-[400px] flex-col items-center justify-center gap-2'>
          <EmptyBox width='160px' />
          <p className='font-outfit text-center text-base font-normal text-[#272728]'>
            No courses added yet!
          </p>
        </div>
      )}

      {/* in case of no item show below item */}
    </div>
  );
};
export default AccountSection;
