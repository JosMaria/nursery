import { PageType } from '../../types';

export type ItemResponseType = {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
};

export type RepertoryPageType = { content: ItemResponseType[] } & PageType;
