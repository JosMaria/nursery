import { axiosInstance } from '../../../config';
import { useTokenStore } from '../../../store';
import { PageCatalog } from '../types';

export const fetchPaginatedProducts = async (): Promise<PageCatalog> => {
  const token = useTokenStore.getState().token;

  const { data } = await axiosInstance.get<PageCatalog>('nursery/products', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};
