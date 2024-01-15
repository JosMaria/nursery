import { FamilyResponseType } from '../../../types';
import { axiosInstance } from '../../../../config';

export const fetchAllFamilies = async (): Promise<FamilyResponseType[]> => {
  const { data } = await axiosInstance.get<FamilyResponseType[]>('families');
  return data;
};
