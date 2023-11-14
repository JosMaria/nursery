import { Page, StatusType } from '../../../types';

export interface ProductResponse {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
  status: StatusType;
  photo_URL: string;
}

export interface PageCatalog extends Page {
  content: ProductResponse[];
}
