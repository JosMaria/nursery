import { FetchFamilyResponse, SimpleInfoPlantResponseDTO } from '../types';

export type PlantContextType = {
  simpleInfo: SimpleInfoPlantResponseDTO[];
  families: FetchFamilyResponse[];
};
