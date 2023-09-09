import { axiosInstance } from '../../../config';
import { ItemResponse } from '../types';

export const fetchPaginatedItems = async (): Promise<ItemResponse[]> => {
  const { data } = await axiosInstance.get<ItemResponse[]>('items');
  return data;
};
