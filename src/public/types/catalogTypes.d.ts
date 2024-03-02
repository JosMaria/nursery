import { VALUE_ALL_CLASSIFICATION } from '../pages/Catalog/constants/classifications';
import { PageType } from '../../types';

export type ProductResponseType = {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
  status: StatusType;
  photo_URL: string;
};

export type CatalogPageType = { content: ProductResponseType[] } & PageType;

export type AllClassificationType = typeof VALUE_ALL_CLASSIFICATION;
