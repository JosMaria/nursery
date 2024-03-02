import { ClassificationType } from '../../types';

export type SingleProductResponseType = {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
  status: StatusType;
  price: number;
  classifications: ClassificationType[];
  description: string;
  photos_URL: string[];
  notes: string[];
  details: string[];
  technicalSheet: {
    word: string;
    info: string;
  }[];
};
