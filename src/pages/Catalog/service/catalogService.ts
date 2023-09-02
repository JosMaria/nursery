import { axiosInstance } from '../../../config/http';
import { PageCatalog } from '../types';

export const fetchPaginatedProducts = async (): Promise<PageCatalog> => {
  const { data } = await axiosInstance.get<PageCatalog>('page');
  return data;
};
