import { axiosInstance } from '../../../config';
import { useTokenStore } from '../../../store';
import { FamilyCreationDTO, FamilyResponseDTO, FamilyUpdateDTO } from '../types';

export const createFamilies = async (
  families: FamilyCreationDTO[]
): Promise<FamilyResponseDTO[]> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.post<FamilyResponseDTO[]>('families/batch', families, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchAllFamilies = async (): Promise<FamilyResponseDTO[]> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.get<FamilyResponseDTO[]>('families', {
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
  payload: FamilyUpdateDTO
): Promise<FamilyResponseDTO> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.patch<FamilyResponseDTO>(`families/${id}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
