import { useCatalogContext } from '../context/CatalogContext';

export const useCatalogProducts = () => {
  const { page } = useCatalogContext();

  return {
    isEmpty: page.content.length === 0,
    products: page.content,
  };
};
