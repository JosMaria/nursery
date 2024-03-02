
export type TechnicalSheetType = {
  word: string;
  info: string;
};

export interface PlantCreationDTO {
  commonName: string;
  scientificName: string;
  scientistLastnameInitial: string;
  family: string;
  classifications: string[];
  status: string;
  description: string;
  details: string[];
  technicalSheet: TechnicalSheetType[];
}

export interface PlantResponseDTO {
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

export type ImageUploadType = {
  name: string;
  url: string;
};

export interface PlantInfoSimpleResponseDTO {
  id: number;
  commonName: string;
}

export interface FamilyFetchResponseDTO {
  id: number;
  name: string;
}

export interface FamilyCreationDTO {
  family_name: string;
}

export interface FamilyUpdateDTO extends FamilyCreationDTO {
  id: number;
}

export interface FamilyResponseDTO {
  id: number;
  name: string;
}
