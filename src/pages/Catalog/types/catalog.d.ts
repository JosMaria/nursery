import { ItemResponseDTO, Page, StatusType } from '../../../types'

interface ProductResponseDTO extends ItemResponseDTO {
  urlPicture: Array<string>
}

export interface PageCatalog extends Page {
  content: Array<ProductResponseDTO>
}
