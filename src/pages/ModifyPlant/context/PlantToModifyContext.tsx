import { createContext, useContext } from 'react';
import { SingleProductResponse } from '../types';

type PlantToModifyContextType = {
  plantToModify: SingleProductResponse;
};

export const PlantToModifyContext = createContext<PlantToModifyContextType | null>(null);

export const usePlantToModifyContext = () => {
  const plantToModifyContext = useContext(PlantToModifyContext);

  if (!plantToModifyContext)
    throw new Error('You need to use this context inside PlantToModifyProvider');

  return plantToModifyContext;
};
