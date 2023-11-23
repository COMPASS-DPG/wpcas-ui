import { CourseType } from '@/app/marketplace/page';

import SingleCourse from './SingleCourse';

const CourseItems = ({
  activeSection,
  courseList,
}: {
  activeSection: string;
  courseList: CourseType[];
}) => {
  return (
    <div className='flex flex-col gap-2.5'>
      {courseList.map((course) => {
        return (
          <SingleCourse
            key={course?.courseId}
            activeSection={activeSection}
            course={course}
          />
        );
      })}
    </div>
  );
};
export default CourseItems;
