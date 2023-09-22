import { Page, StatusType } from '../../types';

export interface ItemResponse {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
}

export interface PageRepertory extends Page {
  content: ItemResponse[]
}