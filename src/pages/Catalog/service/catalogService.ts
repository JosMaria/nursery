import { axiosInstance } from '../../../config';
import { Page } from '../types/catalogTypes';

export const fetchPaginatedProducts = async (): Promise<Page> => {
  const { data } = await axiosInstance.get<Page>('nursery/products');
  return data;
};
