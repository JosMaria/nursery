import { axiosInstance } from '../../../config';
import { PlantClassificationType } from '../../../types';
import { AllClassificationType, PageType } from '../types/catalogTypes';

export const fetchPaginatedProducts = async (
  page = 0,
  classification: PlantClassificationType | AllClassificationType
): Promise<PageType> => {
  const endpoint =
    classification === 'ALL'
      ? 'nursery/product'
      : `nursery/product/classification/${classification}`;
  const { data } = await axiosInstance.get<PageType>(`${endpoint}?page=${page}`);
  return data;
};
