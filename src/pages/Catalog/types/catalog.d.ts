import { ItemResponseDTO, Page, StatusType } from '../../../types'

interface ProductResponseDTO extends ItemResponseDTO {
  photo_URL: Array<string>
}

export interface PageCatalog extends Page {
  content: Array<ProductResponseDTO>
}
