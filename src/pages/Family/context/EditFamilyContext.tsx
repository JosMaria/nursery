import { createContext, useContext } from 'react';

type EditFamilyContextType = {
  updateFamily: (id: number, newName: string) => void;
  oldName: string;
};

export const EditFamilyContext = createContext<EditFamilyContextType | null>(null);

export const useEditFamilyContext = () => {
  const editFamilyContext = useContext(EditFamilyContext);

  if (!editFamilyContext) {
    throw new Error('You need to use this context inside EditFamilyProvider');
  }

  return editFamilyContext;
};
