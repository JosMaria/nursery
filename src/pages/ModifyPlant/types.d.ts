export type TechnicalSheetType = {
  word: string;
  info: string;
};

export interface SingleProductResponse {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
  status: StatusType;
  classifications: PlantClassificationType[];
  description: string;
  photos_URL: string[];
  notes: string[];
  details: string[];
  technicalSheet: TechnicalSheetType[];
}
