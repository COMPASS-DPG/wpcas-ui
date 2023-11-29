import SingleCompetency from '@/components/3cp/SingleCompetency';

import { CourseType } from '@/app/3cp/marketplace/page';

const Competencies = ({ courseDetails }: { courseDetails: CourseType }) => {
  return (
    <div className='py-4 '>
      {Object.keys(courseDetails?.competency).map((key, index) => {
        return (
          <SingleCompetency
            key={index}
            competency={{
              name: key,
              levels: courseDetails?.competency[key],
            }}
          />
        );
      })}
    </div>
  );
};
export default Competencies;
