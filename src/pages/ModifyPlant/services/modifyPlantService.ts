import { axiosInstance } from '../../../config';
import { useTokenStore } from '../../../store';
import { SingleProductResponse } from '../types';

export const fetchProductByID = async (id: number): Promise<SingleProductResponse> => {
  const token = useTokenStore.getState().token;
  const { data } = await axiosInstance.get<SingleProductResponse>(`nursery/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};
