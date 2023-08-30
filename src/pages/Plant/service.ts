import { axiosInstance } from '../../config/http';
import { SingleProductResponse } from './types';

export const fetchProductByID = async (id: number): Promise<SingleProductResponse> => {
  const { data } = await axiosInstance.get<SingleProductResponse>(`products/${id}`);
  return data;
};
