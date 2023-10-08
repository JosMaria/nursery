import { axiosInstance } from '../../../config';
import {
  CreatePlant,
  CreatePlantResponse,
  FetchFamilyResponse,
  SimpleInfoPlantResponseDTO,
} from '../types';

export const createPlant = async (payload: CreatePlant): Promise<CreatePlantResponse> => {
  const { data } = await axiosInstance.post<CreatePlantResponse>('plants', payload);
  return data;
};

export const fetchAllFamilies = async (): Promise<FetchFamilyResponse[]> => {
  const { data } = await axiosInstance.get<FetchFamilyResponse[]>('families');
  return data;
};

export const fetchAllCommonNamesPlants = async (): Promise<SimpleInfoPlantResponseDTO[]> => {
  const { data } = await axiosInstance.get<SimpleInfoPlantResponseDTO[]>('plants/simple-info');
  return data;
};
