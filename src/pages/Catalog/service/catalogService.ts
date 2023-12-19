import { axiosInstance } from '../../../config';
import { PlantClassificationType } from '../../../types';
import { AllClassificationType, CatalogPageType } from '../types/catalogTypes';

export const fetchPaginatedProducts = async (
  page = 0,
  classification: PlantClassificationType | AllClassificationType
): Promise<CatalogPageType> => {
  const endpoint =
    classification === 'ALL'
      ? 'nursery/product'
      : `nursery/product/classification/${classification}`;
  const { data } = await axiosInstance.get<CatalogPageType>(`${endpoint}?page=${page}`);
  return data;
};
