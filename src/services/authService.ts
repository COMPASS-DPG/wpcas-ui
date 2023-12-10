import axios from 'axios';

import { LoginDataType } from '@/app/login/page';

// course manager
export const loginAdmin = async (userData: LoginDataType) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/login`,
    userData
  );
  return data.data.data;
};

export const signupAdmin = async (userData: FormData) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/signup`,
    userData
  );
  return data.data.data;
};
