import { axiosInstance } from '../../../config';
import { PageCatalog } from '../types';

export const fetchPaginatedProducts = async (): Promise<PageCatalog> => {
  const { data } = await axiosInstance.get<PageCatalog>('page');
  return data;
};
