import { SurveyDataType } from '@/components/wpcasOverView/SetupConfigurationForm';

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

// will check for all data and set error
export const isValidData = (
  data: SurveyDataType,
  handleError: (key: string, value: string) => void
): boolean => {
  let flag = true;
  if (!data.department) {
    handleError('department', 'department is required!');
    flag = false;
  }
  if (!data.startDate) {
    handleError('startDate', 'start date is required!');
    flag = false;
  }
  if (!data.endDate) {
    handleError('endDate', 'end date is required!');
    flag = false;
  }
  if (!data?.assessesFile) {
    handleError('assessesFile', 'assesses file is required!');
    flag = false;
  }
  return flag;
};
