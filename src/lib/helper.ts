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
export const isValidConfigFormData = (
  data: SurveyDataType,
  handleError: (key: string, value: string) => void,
  isEdit = false
): boolean => {
  let flag = true;
  if (!data.surveyName) {
    handleError('surveyName', 'survey name is required!');
    flag = false;
  }
  if (!data.startTime) {
    handleError('startTime', 'start Date is required!');
    flag = false;
  }
  if (!data.endTime) {
    handleError('endTime', 'end Date is required!');
    flag = false;
  }
  if (!data?.file && !isEdit) {
    handleError('file', 'assesses file is required!');
    flag = false;
  }
  return flag;
};
