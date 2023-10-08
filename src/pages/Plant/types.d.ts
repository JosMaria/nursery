import { PlantClassificationType, StatusType } from '../../types';

export type TechnicalSheetType = {
  word: string;
  info: string;
};

export interface CreatePlant {
  commonName: string;
  scientificName: string;
  scientistLastnameInitial: string;
  family: string;
  classifications: string[];
  status: string;
  description: string;
  details: string[];
  notes: string[];
  technicalSheet: TechnicalSheetType[];
}

export interface CreatePlantResponse {
  id: number;
  commonName: string;
  scientificName: string;
  scientistLastnameInitial: string;
  family: string;
  classifications: PlantClassificationType[];
  status: StatusType;
  description: string;
  numberDetails: number;
  numberNotes: number;
  technicalSheet: TechnicalSheetType[];
}

export interface FetchFamilyResponse {
  id: number;
  name: string;
}

export type ImageUploadType = {
  name: string;
  url: string;
};

export interface SimpleInfoPlantResponseDTO {
  id: number;
  commonName: string;
}
