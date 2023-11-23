import SingleAccount from '@/components/3cp/SingleAccount';

import { accountType } from '@/app/account-verification/page';

const AccountItems = ({
  activeComponenet,
  accountList,
}: {
  activeComponenet: string;
  accountList: accountType[];
}) => {
  return (
    <div className='flex flex-col gap-2.5'>
      {/* Review Courses PopUp */}

      {/* <CommonModal isOpen={showReviewPopUp} onClose={() => null}> */}
      {/* <ReviewCourse /> */}
      {/* <RejectedReason /> */}
      {/* </CommonModal> */}

      {accountList.map((account) => {
        return (
          <SingleAccount
            key={account.userId}
            activeComponenet={activeComponenet}
            account={account}
          />
        );
      })}
    </div>
  );
};
export default AccountItems;
