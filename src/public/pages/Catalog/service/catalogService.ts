import { AllClassificationType, CatalogPageType } from '../../../types';
import { ClassificationType } from '../../../../types';
import { axiosInstance } from '../../../../config';

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
