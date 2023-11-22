import { axiosInstance } from '../../../config';
import { AccountCreationDTO, AccountResponse } from '../types';

export const fetchAllAccounts = async (): Promise<AccountResponse[]> => {
  const { data } = await axiosInstance.get<AccountResponse[]>('/users');
  return data;
};

export const createAccount = async (payload: AccountCreationDTO): Promise<AccountResponse> => {
  const { data } = await axiosInstance.post('/auth/register', payload);
  return data;
};
