import { axiosInstance } from '../../../config';
import { SingleProductResponse } from '../types/productTypes';

export const fetchProductByID = async (id: number): Promise<SingleProductResponse> => {
  const { data } = await axiosInstance.get<SingleProductResponse>(`nursery/product/${id}`);
  return data;
};
