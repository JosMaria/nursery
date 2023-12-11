import { axiosInstance } from '../../../config';
import { PlantClassificationType } from '../../../types';
import { AllClassificationType } from '../CatalogPage';
// import { PlantClassificationType } from '../../../types';
// import { AllClassificationType } from '../CatalogPage';
import { Page } from '../types/catalogTypes';

// export const fetchPaginatedProducts = async (
//   classification: PlantClassificationType | AllClassificationType
// ): Promise<Page> => {
//   console.log('Esta es mi classification axios', classification);
//   const requestURL =
//     classification === 'ALL'
//       ? 'nursery/product'
//       : `nursery/product/classification/${classification}`;
//   const { data } = await axiosInstance.get<Page>(requestURL);

//   return data;
// };

export const fetchPaginatedProducts = async (
  page = 0,
  classification: PlantClassificationType | AllClassificationType
): Promise<Page> => {
  const endpoint =
    classification === 'ALL'
      ? 'nursery/product'
      : `nursery/product/classification/${classification}`;
  const { data } = await axiosInstance.get<Page>(`${endpoint}?page=${page}`);
  return data;
};
