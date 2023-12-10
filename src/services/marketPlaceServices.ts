import axios from 'axios';

// course manager api
export const getAllCourses = async () => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/courses`
  );
  return data.data.data;
};

// course manager api
export const approveCourse = async (courseId: string) => {
  const data = await axios.patch(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/courses/${courseId}/accept`
  );
  return data.data.data;
};

// course manager api
export const rejectCourse = async (courseId: string, reason: string) => {
  const data = await axios.patch(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/courses/${courseId}/reject`,
    { rejectionReason: reason }
  );
  return data.data.data;
};
