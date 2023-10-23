import { axiosInstance } from '../../../config';
import { useTokenStore } from '../../../store';
import {
  CreatePlant,
  CreatePlantResponse,
  FetchFamilyResponse,
  SimpleInfoPlantResponseDTO,
} from '../types';

export const createPlant = async (payload: CreatePlant): Promise<CreatePlantResponse> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.post<CreatePlantResponse>('plants', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchAllFamilies = async (): Promise<FetchFamilyResponse[]> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.get<FetchFamilyResponse[]>('families', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchAllCommonNamesPlants = async (): Promise<SimpleInfoPlantResponseDTO[]> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.get<SimpleInfoPlantResponseDTO[]>('plants/simple-info', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
