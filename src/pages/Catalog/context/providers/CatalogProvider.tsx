import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPaginatedProducts } from '../../service/catalogService';
import { CatalogContext } from '../CatalogContext';
import { useSearchParams } from 'react-router-dom';
import { PlantClassificationType } from '../../../../types';

type CatalogContextProviderProps = {
  children: JSX.Element;
};

export const CatalogContextProvider = ({ children }: CatalogContextProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  const queryClient = useQueryClient();

  const changeClassificationFilter = (value: PlantClassificationType | '') => {
    queryClient.invalidateQueries({ queryKey: ['products'] });
    setSearchParams((prev) => {
      prev.set('q', value);
      return prev;
    });
    console.log(searchParams.get('q'));
  };

  const classificationFilter = (): PlantClassificationType | null => {
    const param = searchParams.get('q');
    if (param) {
      return param.length > 0 ? (param as PlantClassificationType) : null;
    } else {
      return null;
    }
  };

  const {
    data: productsPage,
    status,
    fetchStatus,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchPaginatedProducts(classificationFilter()),
  });

  if (fetchStatus === 'fetching') return <p>Fetch Status fething...</p>;
  if (fetchStatus === 'paused') return <p>Fetch Status paused</p>;

  if (status === 'pending') return <p>Status pending product</p>;
  if (status === 'error') return <p>Status error product</p>;

  return (
    <CatalogContext.Provider
      value={{
        page: productsPage,
        classificationFilter: searchParams.get('q') ?? '',
        changeClassificationFilter,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};
