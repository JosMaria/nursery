import { createContext, useContext } from 'react';
import { Page } from '../types/catalogTypes';
import { PlantClassificationType } from '../../../types';

type CatalogContextType = {
  page: Page;
  classificationFilter: string;
  changeClassificationFilter: (value: PlantClassificationType | '') => void;
};

export const CatalogContext = createContext<CatalogContextType | null>(null);

export const useCatalogContext = (): CatalogContextType => {
  const catalogContext = useContext(CatalogContext);

  if (!catalogContext) {
    throw new Error('useCatalogContext should be used inside The CatalogContextProvider');
  }

  return catalogContext;
};
