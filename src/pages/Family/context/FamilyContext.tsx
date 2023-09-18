import { createContext, useContext } from 'react';

type FamilyContextType = {
  name: string;
  deleteFamily: () => void;
  updateFamily: (name: string) => void;
};

export const FamilyContext = createContext<FamilyContextType | null>(null);

export const useFamilyContext = () => {
  const familyContext = useContext(FamilyContext);

  if (!familyContext) {
    throw new Error('You need to use this context inside FamilyProvider');
  }

  return familyContext;
};
