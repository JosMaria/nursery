import axios from 'axios'
import { SingleProductDTO } from '../types'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/products'
})
//localhost:8080/api/v1/products/1
/**
  * Retrieve single product based on the specified ID.
  * 
  * @param {number} id - The ID number to retrieve single product. 
  * @returns {Promise<SingleProductDTO>} A Promise that resolves to the retrieved single product.
  */
export const getProductByID = async (id: number): Promise<SingleProductDTO> => {
  const { data } = await instance.get<SingleProductDTO>(`/${id}`)

  return data
}
