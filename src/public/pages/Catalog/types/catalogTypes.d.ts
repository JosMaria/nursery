import { VALUE_ALL_CLASSIFICATION } from '../constants/classifications';
import { PageType, StatusType } from '../../../../types';

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

export type CatalogPageType = { content: ProductResponseType[] } & PageType;
