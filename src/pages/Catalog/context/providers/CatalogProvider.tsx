import { useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from '../../service/catalogService';
import { CatalogContext } from '../CatalogContext';

type CatalogContextProviderProps = {
  children: JSX.Element;
  // filterClassification: PlantClassificationType | 'ALL';
};

export const CatalogContextProvider = ({ children }: CatalogContextProviderProps) => {
  const {
    data: productsPage,
    status,
    fetchStatus,
  } = useQuery({ queryKey: ['products'], queryFn: fetchPaginatedProducts });

  if (fetchStatus === 'fetching') return <p>Fetch Status fething...</p>;
  if (fetchStatus === 'paused') return <p>Fetch Status paused</p>;

  if (status === 'pending') return <p>Status pending product</p>;
  if (status === 'error') return <p>Status error product</p>;

  return (
    <CatalogContext.Provider value={{ catalog: productsPage }}>{children}</CatalogContext.Provider>
  );
};
