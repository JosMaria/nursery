import { axiosInstance } from '../../../config';
import { useTokenStore } from '../../../store';
import { PageRepertory } from '../types';

export const fetchPaginatedItems = async (): Promise<PageRepertory> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.get<PageRepertory>('nursery/items', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};
