import axios from 'axios'
import { PageCatalog, PlantClassificationType } from '../types'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/products/'
})

/**
 * Retrieve paginated products based on the specified page number and classification.
 * 
 * @param {PlantClassificationType} classification - The classification of the products to retrieve.
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @returns {Promise<PageCatalog>} A Promise that resolves to the retrieved page of products.
 */
export const getPaginatedProducts = async (classification: PlantClassificationType, numberPage: number = 0): Promise<PageCatalog> => {
  console.log({classification})
  const path = classification ? `classifications/${classification}` : ''
  const { data } = await instance.get<PageCatalog>(path, {
    params: {
      page: numberPage
    }
  })

  return data
}
