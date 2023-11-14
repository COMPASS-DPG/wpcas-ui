import axios from 'axios';

import { ResponseDataType } from '@/components/wpcasOverView/SetupConfigurationForm';

export const getConfigurationList = async () => {
  const data = await axios.get('http://localhost:3000/api/survey-config');
  return data.data.data;
};

export const createSurveyConfig = async (payload: ResponseDataType) => {
  const data = await axios.post(
    `http://localhost:3000/api/survey-config`,
    payload
  );
  return data.data.data;
};

export const updateSurveyConfig = async (
  id: string,
  payload: ResponseDataType
) => {
  const data = await axios.patch(
    `http://localhost:3000/api/survey-config/update/${id}`,
    payload
  );
  return data.data.data;
};

export const getUserList = async () => {
  const data = await axios.get('http://localhost:3000/api/user-metadata');
  return data.data.data;
};
