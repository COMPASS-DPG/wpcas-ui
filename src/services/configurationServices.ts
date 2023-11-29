import axios from 'axios';

export const getConfigurationList = async () => {
  const data = await axios.get('http://localhost:3000/api/survey-config');
  return data.data.data;
};

export const downloadUserList = async () => {
  const data = await axios.get('http://localhost:3000/api/user-metadata');
  return data.data.data;
};

export const downloadAssessesList = async () => {
  const data = await axios.get(
    'http://localhost:3000/api/survey-config/user-mapping-sample'
  );
  return data.data.data;
};

export const createSurveyConfig = async (payload: FormData) => {
  await axios.post(`http://localhost:3000/api/survey-config`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
    },
  });
};

export const updateSurveyConfig = async (id: string, payload: FormData) => {
  await axios.patch(
    `http://localhost:3000/api/survey-config/update/${id}`,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
      },
    }
  );
};

export const getUserList = async () => {
  const data = await axios.get('http://localhost:3000/api/survey/home-screen');
  return data.data.data;
};

export const getSettlementsData = async (adminId: string) => {
  const data = await axios.get(
    `http://localhost:4005/api/admin/${adminId}/providers/settlements`
  );
  return data.data.data;
};
export const handleSettlement = async (userId: string, adminId: string) => {
  const payload = { id: userId };
  const data = await axios.post(
    `http://localhost:4005/api/admin/${adminId}/providers/settlements`,
    payload
  );
  return data.data.data;
};

export const getUserWalletDetails = async (adminId: string) => {
  const data = await axios.get(
    `http://localhost:4000/api/admin/${adminId}/consumers`
  );
  return data.data.data;
};
type addCreditpayloadType = {
  credits: number;
  consumerId: string;
};
export const addCreditToUser = async (
  payload: addCreditpayloadType,
  adminId: string
) => {
  const data = await axios.post(
    `http://localhost:4000/api/admin/${adminId}/addCredits`,
    payload
  );
  return data.data.data;
};
export const removeCreditFromUser = async (
  payload: addCreditpayloadType,
  adminId: string
) => {
  const data = await axios.post(
    `http://localhost:4000/api/admin/${adminId}/reduceCredits`,
    payload
  );
  return data.data.data;
};
export const getTransectionHistory = async (
  adminId: string,
  consumerId: string
) => {
  const data = await axios.get(
    `http://localhost:4000/api/admin/${adminId}/userWallets/transactions/${consumerId}`
  );
  return data.data.data;
};
