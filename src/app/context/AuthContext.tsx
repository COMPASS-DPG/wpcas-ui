'use client';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

export type AdminDataType = {
  admin: string;
  name: string;
  image: string;
};

interface AuthContextValue {
  adminData: AdminDataType | null;
  setAdminData: (arg: AdminDataType) => void;
}

const AuthProvider = createContext<AuthContextValue>({
  adminData: null,
  setAdminData: () => null,
});

const AuthContextContext = ({ children }: { children: React.ReactElement }) => {
  const data = localStorage.getItem('adminData') || '';
  let parseData = null;
  if (data !== '') {
    parseData = JSON.parse(data);
  }
  // const parseData=JSON.parse(data)
  const [adminData, setAdminData] = useState<AdminDataType | null>(
    parseData ?? null
  );
  const router = useRouter();

  useEffect(() => {
    if (!adminData?.admin) {
      router.push('/login');
    } else {
      router.push('/dashboard');
    }
  }, [adminData?.admin, router]);

  return (
    <AuthProvider.Provider
      value={{
        adminData,
        setAdminData,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export const useAuthContext = () => useContext(AuthProvider);
export default AuthContextContext;
