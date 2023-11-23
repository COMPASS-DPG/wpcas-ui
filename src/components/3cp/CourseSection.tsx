import { useEffect, useState } from 'react';

import CourseItems from '@/components/3cp/CourseItems';
import SearchCourse from '@/components/3cp/SearchCourse';
import { outfit } from '@/components/FontFamily';

import { CourseType } from '@/app/marketplace/page';

import EmptyBox from '~/svg/emptyBox.svg';

export type SearchInputType = {
  course: string;
  competency: string;
  language: string;
};
const getEmptyValue = () => {
  return { course: '', competency: '', language: '' };
};

const CourseSection = ({
  activeSection,
  courseList,
}: {
  activeSection: string;
  courseList: CourseType[];
}) => {
  const [input, setInput] = useState<SearchInputType>(getEmptyValue());
  const [filterCourse, setFilterCourse] = useState<CourseType[]>([]);
  const handleSearch = () => {
    //   // filter based on the  input
    //   //filter from above courseList and set in present course list
    //   // console.log(input);
    //   // setFilterCourse([]);
  };

  useEffect(() => {
    setFilterCourse(courseList);
  }, [courseList]);
  return (
    <div className={`mx-7 ${outfit.className}`}>
      {filterCourse.length !== 0 ? (
        <div>
          <SearchCourse
            value={input}
            onChange={setInput}
            handleSearch={handleSearch}
          />

          <p className='my-2 text-[18px] font-medium leading-5 text-[#65758C]'>
            {courseList.length} Courses
          </p>
          <CourseItems
            activeSection={activeSection}
            courseList={filterCourse}
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
export default CourseSection;
