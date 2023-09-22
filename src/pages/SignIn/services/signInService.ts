import { axiosInstance } from '../../../config';
import { ResponseAuthType, SignInType } from '../types';

export const authenticate = async (payload: SignInType): Promise<ResponseAuthType> => {
  const { data } = await axiosInstance.post<ResponseAuthType>(
    'auth/authenticate',
    payload
  );

  return data;
};
