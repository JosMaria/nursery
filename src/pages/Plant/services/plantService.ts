import { axiosInstance } from '../../../config';
import {
  CreatePlant,
  CreatePlantResponse,
  FetchFamilyResponse,
  SimpleInfoPlantResponseDTO,
  SingleProductResponse,
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

export const fetchProductByID = async (id: number): Promise<SingleProductResponse> => {
  const { data } = await axiosInstance.get<SingleProductResponse>(`nursery/products/${id}`);
  return data;
};
