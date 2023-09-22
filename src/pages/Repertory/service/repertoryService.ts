import { axiosInstance } from '../../../config';
import { PageRepertory } from '../types';

export const fetchPaginatedItems = async (): Promise<PageRepertory> => {
  const { data } = await axiosInstance.get<PageRepertory>('nursery/items');
  return data;
};
