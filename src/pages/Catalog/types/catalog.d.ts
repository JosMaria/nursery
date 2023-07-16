import { ItemResponseDTO, Page, StatusType } from '../../../types'

export type PlantClassificationType =
  'ORNAMENTAL' |
  'FOREST' |
  'INDUSTRIAL' |
  'ALIMENTARY' |
  'MEDICINAL' |
  'EXOTIC' |
  'CACTUS' |
  'FRUITFUL' |
  'GRASS' |
  'SUCCULENT'

interface ProductResponseDTO extends ItemResponseDTO {
  photo_URL: Array<string>
}

export interface PageCatalog extends Page {
  content: Array<ProductResponseDTO>
}
