import axios from 'axios';

export const getSettlementsData = async (adminId: string) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/${adminId}/providers/settlements`
  );
  return data.data.data;
};

export const handleSettlement = async (userId: string, adminId: string) => {
  const payload = { id: userId };
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/${adminId}/providers/settlements`,
    payload
  );
  return data.data.data;
};
