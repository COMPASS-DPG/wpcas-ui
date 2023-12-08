import axios from 'axios';

// course manager
export const getAllProviders = async () => {
  const data = await axios.get('http://localhost:4005/api/admin/providers');
  return data.data.data;
};

// course manager
export const approvedAccount = async (providerId: string) => {
  await axios.patch(
    `http://localhost:4005/api/admin/providers/${providerId}/verify`
  );
};

// course manager
export const rejectAccount = async (providerId: string, reason: string) => {
  await axios.patch(
    `http://localhost:4005/api/admin/providers/${providerId}/reject`,
    { rejectionReason: reason }
  );
};
