import { axiosInstance } from '../../../../config';
import { PlantSimpleInfoType } from '../../../types';

export const fetchAllPlants = async (): Promise<PlantSimpleInfoType[]> => {
  const { data } = await axiosInstance.get<PlantSimpleInfoType[]>('plants/simple-info');
  return data;
};
