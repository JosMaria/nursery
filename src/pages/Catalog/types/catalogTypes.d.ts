import { VALUE_ALL_CLASSIFICATION } from '../constants/classifications';
import { Page, StatusType } from '../../../types';

export type ProductResponseType = {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
  status: StatusType;
  photo_URL: string;
};

export type AllClassificationType = typeof VALUE_ALL_CLASSIFICATION;

export type PageType = {
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export type CatalogPageType = { content: ProductResponse[] } & PageType;
