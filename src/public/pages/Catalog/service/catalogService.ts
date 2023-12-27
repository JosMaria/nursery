import { axiosInstance } from '../../../../config';
import { AllClassificationType, CatalogPageType, ClassificationType } from '../types/catalogTypes';

export const fetchPaginatedProducts = async (
  page = 0,
  classification: ClassificationType | AllClassificationType
): Promise<CatalogPageType> => {
  const endpoint =
    classification === 'ALL'
      ? 'nursery/product'
      : `nursery/product/classification/${classification}`;
  const { data } = await axiosInstance.get<CatalogPageType>(`${endpoint}?page=${page}`);
  return data;
};
