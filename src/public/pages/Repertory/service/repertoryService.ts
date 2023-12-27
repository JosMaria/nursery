import { RepertoryPageType } from '../types/repertoryTypes';
import { axiosInstance } from '../../../../config';

export const fetchPaginatedItems = async (): Promise<RepertoryPageType> => {
  const { data } = await axiosInstance.get<RepertoryPageType>('nursery/item');
  return data;
};
