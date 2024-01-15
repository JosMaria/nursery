import { FamilyResponseType } from '../../../types';
import { axiosInstance } from '../../../../config';

export const fetchAllFamilies = async (): Promise<FamilyResponseType[]> => {
  const { data } = await axiosInstance.get<FamilyResponseType[]>('families');
  return data;
};

export const deleteFamilyById = async (id: number): Promise<void> => {
  await axiosInstance.delete<void>(`families/${id}`);
};
