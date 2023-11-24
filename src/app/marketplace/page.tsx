'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import CourseSection from '@/components/3cp/CourseSection';
import MarketPlaceNavbar from '@/components/navbar/MarketPlaceNavbar';
import WpcasNavbar from '@/components/wpcasOverView/WpcasNavbar';

export type CourseType = {
  courseId: number;
  course_name: string;
  competency_list: string[];
  course_provider: string;
  author: string;
  language: string[];
  rating: number;
  credit: number;
  status: string;
};
const getinitialValule = () => {
  return [
    {
      courseId: 1,
      course_name: 'Mastering Data Structures with Advanced Python Programming',
      competency_list: [
        'Advanced Data Structures for Efficient Algorithms',
        'Algorithmic Problem Solving with Python',
        'Data Manipulation and Analysis Techniques',
        'Optimizing Code Performance',
        'Python Programming Best Practices',
      ],
      course_provider: 'Coursera',
      author: 'Smith',
      language: ['English', 'Spanish'],
      rating: 4.5,
      credit: 75,
      status: 'approved',
    },
    {
      courseId: 2,
      course_name:
        'Building Scalable and Responsive Applications in Full Stack Web Development',
      competency_list: [
        'Fundamentals of HTML5 Markup',
        'CSS3 Styling Techniques',
        'Modern JavaScript Development',
        'Server-Side Development with Node.js',
        'Client-Server Communication',
      ],
      course_provider: 'edX',
      author: 'Johnson',
      language: ['English', 'French'],
      rating: 4.2,
      credit: 60,
      status: 'pending',
    },
    {
      courseId: 3,
      course_name:
        'Financial Management: Strategic Budgeting, Investing, and Retirement Planning',
      competency_list: [
        'Effective Budgeting Strategies',
        'Strategic Investment Planning',
        'Retirement Income Optimization',
        'Financial Decision-Making Skills',
      ],
      course_provider: 'Udemy',
      author: 'Miller',
      language: ['English', 'Chinese'],
      rating: 4.8,
      credit: 90,
      status: 'rejected',
    },
  ];
};

const MarketPlace = () => {
  const [activeSection, setActiveSection] = useState<string>('pendingSection');
  const [currentCourseList, setCurrentCourseList] = useState<CourseType[]>(
    getinitialValule()
  );
  const [courseList, setCourseList] = useState<CourseType[]>(
    getinitialValule()
  );

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/courses');

      const pendingCourses = response.data.filter(
        (course: CourseType) => course.status === 'pending'
      );
      setCurrentCourseList(pendingCourses);
      setCourseList(response.data);
    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };
  const filterCourse = (courseType: string) => {
    const filteredResult = courseList.filter((course: CourseType) => {
      return course.status === courseType;
    });
    setCurrentCourseList(filteredResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-screen bg-[#f7f9fc]'>
      <WpcasNavbar heading='Marketplace' />
      <MarketPlaceNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        filterCourse={filterCourse}
      />
      <div className='h-full'>
        <CourseSection
          activeSection={activeSection}
          courseList={currentCourseList}
        />
      </div>
    </div>
  );
};
export default MarketPlace;
