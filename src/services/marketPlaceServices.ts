import axios from 'axios';

export const getAllCourses = async () => {
  const data = await axios.get('http://localhost:4005/api/admin/courses');
  return data.data.data;
};
export const approveCourse = async (courseId: number) => {
  const data = await axios.patch(
    `http://localhost:4005/api/admin/courses/${courseId}/accept`
  );
  return data.data.data;
};
export const rejectCourse = async (courseId: number, reason: string) => {
  const data = await axios.patch(
    `http://localhost:4005/api/admin/courses/${courseId}/reject`,
    { rejectionReason: reason }
  );
  return data.data.data;
};
