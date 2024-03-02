import { FamilyResponseType, FamilyUpdateDTOType } from '../../../types';
import { axiosInstance } from '../../../../config';

export const fetchAllFamilies = async (): Promise<FamilyResponseType[]> => {
  const { data } = await axiosInstance.get<FamilyResponseType[]>('families');
  return data;
};

export const deleteFamilyById = async (id: number): Promise<void> => {
  await axiosInstance.delete<void>(`families/${id}`);
};

export const updateFamilyNameById = async (
  id: number,
  payload: FamilyUpdateDTOType
): Promise<FamilyResponseType> => {
  const { data } = await axiosInstance.patch<FamilyResponseType>(`families/${id}`, payload);
  return data;
};
