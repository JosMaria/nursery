import { useProductContext } from '../context/ProductContext';

export const useDetails = (): string[] => {
  const {
    product: { details },
  } = useProductContext();

  return details;
};
