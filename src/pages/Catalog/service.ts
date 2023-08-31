import { PageCatalog } from './types';
import { axiosInstance } from '../../config/http';

export const fetchPaginatedProducts = async (): Promise<PageCatalog> => {
  const { data } = await axiosInstance.get<PageCatalog>('page');
  return data;
};
