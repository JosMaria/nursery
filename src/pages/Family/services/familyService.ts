import { axiosInstance } from '../../../config';
import { CreateFamilyDTO, FamilyResponse, UpdateFamilyDTO } from '../types';

export const createFamilies = async (families: CreateFamilyDTO[]): Promise<FamilyResponse[]> => {
  const { data } = await axiosInstance.post<FamilyResponse[]>('families/batch', families);
  return data;
};

export const fetchAllFamilies = async (): Promise<FamilyResponse[]> => {
  const { data } = await axiosInstance.get<FamilyResponse[]>('families');
  return data;
};

export const deleteFamilyById = async (id: number): Promise<void> => {
  await axiosInstance.delete<void>(`families/${id}`);
};

export const updateFamilyNameById = async (
  id: number,
  payload: UpdateFamilyDTO
): Promise<FamilyResponse> => {
  const { data } = await axiosInstance.patch<FamilyResponse>(`families/${id}`, payload);
  return data;
};
