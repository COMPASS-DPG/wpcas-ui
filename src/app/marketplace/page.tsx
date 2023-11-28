'use client';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import CourseSection from '@/components/3cp/CourseSection';
import MarketPlaceNavbar from '@/components/navbar/MarketPlaceNavbar';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

import { getAllCourses } from '@/services/marketPlaceServices';

type competencyType = {
  [key: string]: string[];
};

export type CourseType = {
  id: number;
  title: string;
  competency: competencyType;
  CourseProvider: string;
  author: string;
  language: string[];
  avgRating: number;
  credits: number;
  verificationStatus: string;
  imgLink: string;
  description: string;
  rejectionReason?: string;
};

const MarketPlace = () => {
  const [activeSection, setActiveSection] = useState<string>('PENDING');
  const [courseList, setCourseList] = useState<CourseType[]>([]);

  const [currentCourseList, setCurrentCourseList] = useState<CourseType[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await getAllCourses();

      // setCurrentCourseList(filterResult);
      setCourseList(response);
    } catch (error) {
      toast.error('something went wrong');
    }
  }, []);

  const filterCourse = (courseType: string) => {
    const filteredResult = courseList.filter((course: CourseType) => {
      return course.verificationStatus === courseType;
    });
    setCurrentCourseList(filteredResult);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  useEffect(() => {
    const filterResult = courseList.filter((course: CourseType) => {
      return course.verificationStatus === activeSection;
    });
    setCurrentCourseList(filterResult);
  }, [activeSection, courseList]);

  return (
    <div className='w-screen bg-[#f7f9fc]'>
      <WpcasNavbar heading='Marketplace' />
      <MarketPlaceNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        filterCourse={filterCourse}
      />
      <div className=''>
        <CourseSection
          activeSection={activeSection}
          courseList={currentCourseList}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};
export default MarketPlace;
