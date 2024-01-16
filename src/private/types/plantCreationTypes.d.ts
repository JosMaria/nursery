import { ClassificationType, StatusType } from '../../types';

export type TechnicalSheetType = {
  word: string;
  info: string;
};

export type PlantCreationDTOType = {
  commonName: string;
  scientificName: string;
  scientistLastnameInitial: string;
  family: string;
  classifications: string[];
  status: string;
  description: string;
  details: string[];
  technicalSheet: TechnicalSheetType[];
};

export type PlantResponseDTOType = {
  id: number;
  commonName: string;
  scientificName: string;
  scientistLastnameInitial: string;
  family: string;
  classifications: ClassificationType[];
  status: StatusType;
  description: string;
  numberDetails: number;
  numberNotes: number;
  technicalSheet: TechnicalSheetType[];
};
