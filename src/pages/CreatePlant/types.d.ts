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
  classifications: PlantClassificationType[];
  status: StatusType;
  description: string;
  details: string[];
  notes: string[];
  technicalSheet: TechnicalSheetType[];
}
