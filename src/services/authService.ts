import axios from 'axios';

import { LoginDataType } from '@/app/login/page';

// course manager
export const loginAdmin = async (userData: LoginDataType) => {
  const data = await axios.post(
    'http://localhost:4005/api/admin/login',
    userData
  );
  return data.data.data;
};

export const signupAdmin = async (userData: FormData) => {
  const data = await axios.post(
    'http://localhost:4005/api/admin/signup',
    userData
  );
  return data.data.data;
};
