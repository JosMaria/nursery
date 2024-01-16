import { FamilyResponseType, PlantCreationDTOType, PlantResponseDTOType } from '../../../types';
import { axiosInstance } from '../../../../config';

export const fetchAllFamilies = async (): Promise<FamilyResponseType[]> => {
  const { data } = await axiosInstance.get<FamilyResponseType[]>('families');
  return data;
};

export const createPlant = async (payload: PlantCreationDTOType): Promise<PlantResponseDTOType> => {
  const { data } = await axiosInstance.post<PlantResponseDTOType>('plants', payload);
  return data;
};
