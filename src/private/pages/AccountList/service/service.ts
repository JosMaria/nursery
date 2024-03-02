import { axiosInstance } from '../../../../config';
import { AccountResponse } from '../../../types';

export const fetchAllAccounts = async (): Promise<AccountResponse[]> => {
  const { data } = await axiosInstance.get<AccountResponse[]>('users');
  return data;
};
