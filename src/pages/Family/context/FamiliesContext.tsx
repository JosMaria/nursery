import { createContext, useContext } from 'react';
import { CreateFamilyDTO, FamilyResponse } from '../types';

type FamiliesContextType = {
  families: FamilyResponse[];
  insertFamilies: (families: CreateFamilyDTO[], resetFields: () => void) => void;
};

export const FamiliesContext = createContext<FamiliesContextType | null>(null);

export const useFamiliesContext = () => {
  const familiesContext = useContext(FamiliesContext);

  if (!familiesContext) {
    throw new Error('You need to use this context inside FamilyProvider');
  }

  return familiesContext;
};
