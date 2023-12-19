import { axiosInstance } from '../../../config';
import { useTokenStore } from '../../../store';
import { PlantCreationDTO, PlantInfoSimpleResponseDTO, PlantResponseDTO } from '../types';

export const createPlant = async (payload: PlantCreationDTO): Promise<PlantResponseDTO> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.post<PlantResponseDTO>('plants', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchAllCommonNamesPlants = async (): Promise<PlantInfoSimpleResponseDTO[]> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.get<PlantInfoSimpleResponseDTO[]>('plants/simple-info', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
