export type StatusType = 'AVAILABLE' | 'IN_CONSERVATION' | 'NON_EXISTENT';

export type ClassificationType =
  | 'INDUSTRIAL'
  | 'ALIMENTARY'
  | 'ORNAMENTAL'
  | 'SUCCULENT'
  | 'MEDICINAL'
  | 'FRUITFUL'
  | 'FOREST'
  | 'EXOTIC'
  | 'CACTUS'
  | 'GRASS';

export type PageType = {
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  number: number;
  first: boolean;
  empty: boolean;
  last: boolean;
  size: number;
};

export type RoleType = 'ADMINISTRATOR' | 'ASSISTANT';
