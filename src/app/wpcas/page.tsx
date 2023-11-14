'use client';
import Feedback from '@/components/wpcasOverView/Feedback';
import UserTable from '@/components/wpcasOverView/UserTable';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

export type SearchInputType = {
  user: string;
  department: number | string;
};

const Wpcas = () => {
  return (
    <div className='w-screen bg-[#f7f9fc]'>
      <WpcasNavbar />
      <div className='mb-[110px] px-[40px] pb-[10px] pt-[30px]'>
        <Feedback />
        <UserTable />
      </div>
    </div>
  );
};

export default Wpcas;
