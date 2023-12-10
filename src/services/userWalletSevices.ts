import axios from 'axios';

export const getUserWalletDetails = async (adminId: string) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_MARKETPLACE_SERVICE_BACKEND_URL}/api/admin/${adminId}/consumers`
  );
  return data.data.data;
};

type addCreditPayloadType = {
  credits: number;
  consumerId: string;
};

// marketplace
export const addCreditToUser = async (
  payload: addCreditPayloadType,
  adminId: string
) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_MARKETPLACE_SERVICE_BACKEND_URL}/api/admin/${adminId}/addCredits`,
    payload
  );
  return data.data.data;
};

// marketplace
export const removeCreditFromUser = async (
  payload: addCreditPayloadType,
  adminId: string
) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_MARKETPLACE_SERVICE_BACKEND_URL}/api/admin/${adminId}/reduceCredits`,
    payload
  );
  return data.data.data;
};

export const getTransactionHistory = async (
  adminId: string,
  consumerId: string
) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_MARKETPLACE_SERVICE_BACKEND_URL}/api/admin/${adminId}/userWallets/transactions/${consumerId}`
  );
  return data.data.data;
};
