import { axiosInstance } from '../../../config/http';
import { PageRepertory } from '../types';

export const fetchPaginatedItems = async (): Promise<PageRepertory> => {
  const { data } = await axiosInstance.get<PageRepertory>('pageItems');
  return data;
};
