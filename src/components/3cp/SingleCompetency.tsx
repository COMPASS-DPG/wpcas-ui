import { useState } from 'react';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { outfit, poppins } from '@/components/FontFamily';

type propType = {
  key: number;
  name: string;
  levels: string[];
};

const SingleCompetency = ({ competency }: { competency: propType }) => {
  const [open, setOpen] = useState(false);
  const { name, levels } = competency;
  return (
    <div className={`${outfit.className} mb-3 text-[#272728]`}>
      <div className=' rounded-lg border p-2'>
        <div className='flex justify-between'>
          <p className='text-[16px] font-medium leading-[18px]'>{name}</p>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <MdKeyboardArrowUp size='20px' />
            ) : (
              <MdKeyboardArrowDown size='20px' />
            )}
          </div>
        </div>
        {open && (
          <div>
            <div className='flex items-center gap-1 py-3'>
              <BiSolidBarChartAlt2 size='18px' />
              <p className={`${poppins.className} text-[14px] font-semibold`}>
                Level
              </p>
            </div>
            <ul className='flex flex-col gap-2 pl-2'>
              {levels.map((level, index) => {
                return (
                  <li key={index} className='flex items-start'>
                    &bull; {level}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default SingleCompetency;
