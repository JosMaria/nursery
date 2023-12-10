import { axiosInstance } from '../../../config';
import { SingleProductResponseType } from '../types/productTypes';

export const fetchProductByID = async (id: number): Promise<SingleProductResponseType> => {
  const { data } = await axiosInstance.get<SingleProductResponseType>(`nursery/product/${id}`);
  return data;
};
