// import { usePathname, useRouter } from 'next/navigation';

import SelectTag from '@/components/uiComponents/SelectTag';
import SubHeading from '@/components/uiComponents/SubHeading';

import { useWpcasContext } from '@/app/context/WpcasContext';

const SelectComeptency = () => {
  const { competencyArray, currentCompetency, setCurrentCompetency } =
    useWpcasContext();

  // const router = useRouter();
  // const pathname = usePathname();
  // const isEdit = pathname?.includes('/edit-question-bank');

  return (
    <div>
      <SubHeading heading='Select' />
      <div className='w-3/5 pb-[20px]'>
        {' '}
        <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
          Competency
        </p>
        <SelectTag
          options={competencyArray}
          value={currentCompetency}
          onChange={(option) => {
            if (typeof option == 'number') {
              setCurrentCompetency(option);
            }
          }}
          width='749px'
          placeholder='Select Competency'
          paddingY='2px'
          // isDisabled={isEdit}
        />
      </div>
    </div>
  );
};
export default SelectComeptency;
