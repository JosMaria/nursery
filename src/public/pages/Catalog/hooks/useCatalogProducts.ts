import { useProductsContext } from '../context/ProductsContext';

export const useCatalogProducts = () => {
  const { content: page } = useProductsContext();

  return {
    isEmpty: page.content.length === 0,
    products: page.content,
  };
};
