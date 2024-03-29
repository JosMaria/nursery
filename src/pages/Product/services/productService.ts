import { SingleProductResponseType } from '../types/productTypes';
import { axiosInstance } from '../../../config';

export const fetchProductByID = async (id: number): Promise<SingleProductResponseType> => {
  const { data } = await axiosInstance.get<SingleProductResponseType>(`nursery/product/${id}`);
  return data;
};
