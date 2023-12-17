import { useProductsContext } from '../context/ProductsContext';

export const useClassificationFilter = () => {
  const {
    classificationSelected,
    actions: { changeClassification },
  } = useProductsContext();

  return {
    classificationSelected,
    changeClassification,
  };
};
