import { axiosInstance } from '../../../config';
import { CreatePlant, CreatePlantResponse, FetchFamilyResponse } from '../types';

export const createPlant = async (payload: CreatePlant): Promise<CreatePlantResponse> => {
  const { data } = await axiosInstance.post<CreatePlantResponse>('plants', payload);
  return data;
};

export const fetchAllFamilies = async (): Promise<FetchFamilyResponse[]> => {
  const { data } = await axiosInstance.get<FetchFamilyResponse[]>('families/names');
  return data;
};
