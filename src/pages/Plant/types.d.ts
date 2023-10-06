import { PlantClassificationType, StatusType } from '../../types';

type TechnicalSheetType = {
  word: string;
  info: string;
};

interface CreatePlant {
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

interface CreatePlantResponse {
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

interface FetchFamilyResponse {
  id: number;
  name: string;
}

type ImageUploadType = {
  name: string;
  url: string;
};

interface SimpleInfoPlantResponseDTO {
  id: number;
  commonName: string;
}
