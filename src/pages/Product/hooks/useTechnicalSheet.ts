import { useProductContext } from '../context/ProductContext';

export const useTechnicalSheet = () => {
  const {
    product: { technicalSheet },
  } = useProductContext();

  return technicalSheet;
};
