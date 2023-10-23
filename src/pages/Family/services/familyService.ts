import { axiosInstance } from '../../../config';
import { useTokenStore } from '../../../store';
import { CreateFamilyDTO, FamilyResponse, UpdateFamilyDTO } from '../types';

export const createFamilies = async (families: CreateFamilyDTO[]): Promise<FamilyResponse[]> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.post<FamilyResponse[]>('families/batch', families, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchAllFamilies = async (): Promise<FamilyResponse[]> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.get<FamilyResponse[]>('families', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const deleteFamilyById = async (id: number): Promise<void> => {
  const token = useTokenStore.getState().token;
  await axiosInstance.delete<void>(`families/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateFamilyNameById = async (
  id: number,
  payload: UpdateFamilyDTO
): Promise<FamilyResponse> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.patch<FamilyResponse>(`families/${id}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
