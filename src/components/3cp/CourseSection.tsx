import { useEffect, useState } from 'react';

import CourseItems from '@/components/3cp/CourseItems';
import SearchCourse from '@/components/3cp/SearchCourse';
import { outfit } from '@/components/FontFamily';

import { CourseType } from '@/app/3cp/marketplace/page';
import { OptionType } from '@/app/propTypes';

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
  fetchData,
}: {
  activeSection: string;
  courseList: CourseType[];
  fetchData: () => void;
}) => {
  const [input, setInput] = useState<SearchInputType>(getEmptyValue());
  const [competencyOption, setCompetencyOption] = useState<OptionType[]>([]);
  const [languageOption, setLanguageOption] = useState<OptionType[]>([]);
  const [filterCourse, setFilterCourse] = useState<CourseType[]>([]);
  const handleSearch = () => {
    const filteredCourses = courseList.filter((course) => {
      const courseTitleLower = course.title.toLowerCase();
      const inputCourseLower = input.course.toLowerCase();
      const competencyMatch =
        input.competency === '' ||
        course.competency[input.competency]?.length > 0;

      const languageMatch =
        input.language === '' || course.language.includes(input.language);

      return (
        courseTitleLower.includes(inputCourseLower) &&
        competencyMatch &&
        languageMatch
      );
    });

    setFilterCourse(filteredCourses);
  };

  useEffect(() => {
    const allCompetencies: string[] = courseList.reduce<string[]>(
      (competencies, course) =>
        competencies.concat(Object.keys(course.competency)),
      []
    );
    const uniqueCompetencies: string[] = Array.from(new Set(allCompetencies));

    const competencyOptions: OptionType[] = uniqueCompetencies.map(
      (competency) => ({
        label: competency,
        value: competency,
      })
    );
    const allLanguages: string[] = courseList.reduce<string[]>(
      (languages, course) => languages.concat(course.language),
      []
    );

    const uniqueLanguages: string[] = Array.from(new Set(allLanguages));

    const languageOptions: OptionType[] = uniqueLanguages.map((language) => ({
      label: language,
      value: language,
    }));

    setLanguageOption(languageOptions);
    setCompetencyOption(competencyOptions);
    setFilterCourse(courseList);
  }, [courseList]);
  return (
    <div className={`mx-[30px] ${outfit.className}`}>
      {courseList?.length !== 0 ? (
        <div>
          <SearchCourse
            value={input}
            onChange={setInput}
            competencyOption={competencyOption}
            handleSearch={handleSearch}
            languageOption={languageOption}
          />

          <p className='my-2 text-[18px] font-medium leading-5 text-[#65758C]'>
            {filterCourse?.length} Courses
          </p>
          <CourseItems
            activeSection={activeSection}
            courseList={filterCourse}
            fetchData={fetchData}
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
