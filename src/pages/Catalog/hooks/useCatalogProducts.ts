import { useCatalogContext } from '../context/CatalogContext';

export const useCatalogProducts = () => {
  const { catalog } = useCatalogContext();

  return {
    isEmpty: catalog.content.length === 0,
    products: catalog.content,
  };
};
