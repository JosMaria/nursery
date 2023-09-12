import { axiosInstance } from '../../../config';
import { CreateFamilyDTO, CreateFamilyResponse } from '../types';

export const createFamilies = async (
  families: CreateFamilyDTO[]
): Promise<CreateFamilyResponse[]> => {
  const { data } = await axiosInstance.post<CreateFamilyResponse[]>('families/batch', families);
  return data;
};

export const fetchAllFamilies = async (): Promise<CreateFamilyResponse[]> => {
  const { data } = await axiosInstance.get<CreateFamilyResponse[]>('families/names');
  return data;
};
