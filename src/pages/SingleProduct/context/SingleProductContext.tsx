import { createContext, useContext } from 'react';
import { SingleProductResponse } from '../types';

type SingleProductContextType = {
  singleProduct: SingleProductResponse;
};

export const SingleProductContext = createContext<SingleProductContextType | null>(null);

export const useSingleProductContext = () => {
  const singleProductContext = useContext(SingleProductContext);

  if (!singleProductContext)
    throw new Error('You need to use this context inside SingleProductProvider');

  return singleProductContext;
};
