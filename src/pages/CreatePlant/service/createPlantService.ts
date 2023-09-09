import { axiosInstance } from '../../../config';
import { CreatePlant, CreatePlantResponse, FetchFamilyResponse } from '../types';

export const createPlant = async (payload: CreatePlant): Promise<CreatePlantResponse> => {
  const { data } = await axiosInstance.post<CreatePlantResponse>('plants', payload, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTQyMDM4NTgsImV4cCI6MTY5NDI5MDI1OH0.4R26eB20vymYA5ri0QVB_CJ0P1CEmVOIpGPk_VNeGsc',
    },
  });
  return data;
};

export const fetchAllFamilies = async (): Promise<FetchFamilyResponse[]> => {
  const { data } = await axiosInstance.get<FetchFamilyResponse[]>('families/names');
  return data;
};
