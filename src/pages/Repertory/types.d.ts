import { StatusType } from '../../types';

export interface ItemResponse {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistSurnameInitial: string | null;
  family: string | null;
  status: StatusType;
}

interface PageRepertory extends Page {
  content: ItemResponseDTO[];
}
