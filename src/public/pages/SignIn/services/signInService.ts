import { ResponseAuthType, SignInType } from '../types/signInTypes';
import { axiosInstance } from '../../../../config';

export const authenticate = async (payload: SignInType): Promise<ResponseAuthType> => {
  const { data } = await axiosInstance.post<ResponseAuthType>('auth/authenticate', payload);
  return data;
};
