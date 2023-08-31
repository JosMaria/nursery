import { createContext, useContext } from 'react';
import { SingleProductResponse } from '../types';

type PlantContextType = {
  plant: SingleProductResponse;
};

export const PlantContext = createContext<PlantContextType | null>(null);

export const usePlantContext = () => {
  const plantContext = useContext(PlantContext);

  if (!plantContext)
    throw new Error('You need to use this context inside PlantContextProvider');

  return plantContext;
};
