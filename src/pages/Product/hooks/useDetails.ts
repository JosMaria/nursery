import { useProductContext } from '../context/ProductContext';

export const useDetails = () => {
  const {
    product: { details },
  } = useProductContext();

  return details;
};
