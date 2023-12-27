export type ItemResponseType = {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
};

export type PageType = {
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};

export type RepertoryPageType = { content: ItemResponseType[] } & PageType;
