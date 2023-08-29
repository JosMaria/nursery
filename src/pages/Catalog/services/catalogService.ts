import { PageCatalog } from '../types';
import { axiosInstance } from '../../../config/http';

/**
 * Retrieve paginated products based on the specified page number and classification.
 *
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @param {PlantClassificationType} classification - The classification of the products to retrieve.
 * @returns {Promise<PageCatalog>} A Promise that resolves to the retrieved page of products.
 */
// export const getPaginatedProducts = async (numberPage: number = 0, classification?: PlantClassificationType): Promise<PageCatalog> => {
//   const filtersByClassification = `classifications/${classification}`
//   const withoutFilter = ''

//   const path = classification ?  filtersByClassification : withoutFilter
//   const { data } = await axiosInstance.get<PageCatalog>(path, {
//     params: {
//       page: numberPage
//     }
//   })

//   return data
// }

export const getPaginatedProducts = async (): Promise<PageCatalog> => {
  const { data } = await axiosInstance.get<PageCatalog>('products');
  return data;
};
