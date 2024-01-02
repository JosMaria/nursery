import { AllClassificationType, CatalogPageType } from '../../../types';
import { ClassificationType } from '../../../../types';
import { createContext, useContext } from 'react';

type ProductsContextType = {
  content: CatalogPageType;
  classificationSelected: ClassificationType | AllClassificationType;
  actions: {
    firstPage: {
      move: () => void;
      isDisabled: boolean;
    };
    previousPage: {
      move: () => void;
      isDisabled: boolean;
    };
    nextPage: {
      move: () => void;
      isDisabled: boolean;
    };
    lastPage: {
      move: () => void;
      isDisabled: boolean;
    };
    changeClassification: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

export const useProductsContext = (): ProductsContextType => {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    throw new Error('useProductsContext should be used inside The ProductsContextProvider');
  }

  return productsContext;
};
