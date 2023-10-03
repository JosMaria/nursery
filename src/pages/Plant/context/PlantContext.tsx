import { createContext, useContext } from 'react';
import { FetchFamilyResponse } from '../types';

type PlantContextType = {
  families: FetchFamilyResponse[];
  createPlant: () => void;
};

export const PlantContext = createContext<PlantContextType | null>(null);

export const usePlantContext = () => {
  const plantContext = useContext(PlantContext);

  if (!plantContext) throw new Error('You need to use this context inside PlantProvider');

  return plantContext;
};
