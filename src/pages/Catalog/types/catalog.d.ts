import { ItemResponseDTO, Page, StatusType } from '../../../types';

interface ProductResponseDTO extends ItemResponseDTO {
  photo_URL: string;
}

export interface PageCatalog extends Page {
  content: Array<ProductResponseDTO>;
}
