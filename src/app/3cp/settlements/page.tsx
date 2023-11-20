'use client';
import React from 'react';

import SettlementsTable from '@/components/settlements/SettlementsTable';

const Settlesments = () => {
  // const [filterUserData, setFilterUserData] = useState([])
  // const [loading,setLoading]=useState(false)
  // const [error,setError]=useState(false)

  return (
    <>
      {/* {loading && <div className='mt-[100px] text-center'>Loading...</div>} */}
      {/* {error && <div className='mt-[100px] text-center'>Error...</div>} */}
      {/* {!loading && !error && ( */}
      <div className='mb-[110px] px-[40px] py-[10px] '>
        <SettlementsTable
          userData={[]}
          filterUserData={[]}
          setFilterUserData={(value) => value}
        />
      </div>
      {/* // )} */}
    </>
  );
};

export default Settlesments;
