import { createContext, useContext } from 'react';
import { Page } from '../types/catalogTypes';

const initialState: Page = {
  content: [],
  empty: true,
  first: true,
  last: true,
  number: 0,
  numberOfElements: 0,
  size: 0,
  totalPages: 0,
  totalElements: 0,
};

type CatalogStateType = typeof initialState;

type CatalogContextType = {
  catalog: CatalogStateType;
};

export const CatalogContext = createContext<CatalogContextType | null>(null);

export const useCatalogContext = (): CatalogContextType => {
  const catalogContext = useContext(CatalogContext);

  if (!catalogContext) {
    throw new Error('useCatalogContext should be used inside The CatalogContextProvider');
  }

  return catalogContext;
};
