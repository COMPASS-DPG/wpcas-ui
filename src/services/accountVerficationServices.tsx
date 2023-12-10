import axios from 'axios';

// course manager
export const getAllProviders = async () => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/providers`
  );
  return data.data.data;
};

// course manager
export const approvedAccount = async (providerId: string) => {
  await axios.patch(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/providers/${providerId}/verify`
  );
};

// course manager
export const rejectAccount = async (providerId: string, reason: string) => {
  await axios.patch(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL}/api/admin/providers/${providerId}/reject`,
    { rejectionReason: reason }
  );
};
