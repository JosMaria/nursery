import { SingleProductResponseType } from '../../../types';
import { createContext, useContext } from 'react';

const initialState: SingleProductResponseType = {
  id: 0,
  commonName: '',
  scientificName: '',
  scientistLastnameInitial: '',
  family: '',
  status: 'NON_EXISTENT',
  classifications: [],
  description: '',
  photos_URL: [],
  notes: [],
  details: [],
  technicalSheet: [],
};

type ProductStateType = typeof initialState;

type ProductContextType = {
  product: ProductStateType;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = (): ProductContextType => {
  const productContext = useContext(ProductContext);
  if (!productContext) {
    throw new Error('useProductContext should be used inside The ProductContextProvider');
  }

  return productContext;
};
