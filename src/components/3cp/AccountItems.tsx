import SingleAccount from '@/components/3cp/SingleAccount';

import { accountType } from '@/app/account-verification/page';

const AccountItems = ({
  activeSection,
  accountList,
}: {
  activeSection: string;
  accountList: accountType[];
}) => {
  return (
    <div className='flex flex-col gap-2.5'>
      {accountList.map((account) => {
        return (
          <SingleAccount
            key={account?.userId}
            activeSection={activeSection}
            account={account}
          />
        );
      })}
    </div>
  );
};
export default AccountItems;
