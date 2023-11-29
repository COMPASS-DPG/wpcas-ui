import axios from 'axios';

export const getAllProviders = async () => {
  const data = await axios.get('http://localhost:4005/api/admin/providers');
  return data.data.data;
};
export const approvedAccount = async (providerId: string) => {
  await axios.patch(
    `http://localhost:4005/api/admin/providers/${providerId}/verify`
  );
};
export const rejectAccount = async (providerId: string, reasone: string) => {
  await axios.patch(
    `http://localhost:4005/api/admin/providers/${providerId}/reject`,
    { rejectionReason: reasone }
  );
};
