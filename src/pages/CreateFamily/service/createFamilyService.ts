import { axiosInstance } from '../../../config/http';
import { CreateFamilyDTO, CreateFamilyResponse } from '../types';

export const createFamilies = async (
  families: CreateFamilyDTO[]
): Promise<CreateFamilyResponse[]> => {
  const { data } = await axiosInstance.post<CreateFamilyResponse[]>(
    'families/batch',
    families
  );
  return data;
};
