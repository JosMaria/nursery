import { fetchPaginatedItems } from '../../service/repertoryService';
import { useQuery } from '@tanstack/react-query';
import { SkeletonItems } from '../../skeletons';
import { ItemsContext } from '../ItemsContext';

type Props = {
  children: JSX.Element;
};

export const ItemsContextProvider = ({ children }: Props) => {
  const {
    data: repertoryPage,
    status,
    fetchStatus,
  } = useQuery({
    queryFn: fetchPaginatedItems,
    queryKey: ['repertory'],
  });

  if (fetchStatus === 'fetching') return <SkeletonItems />;
  if (fetchStatus === 'paused') return <p>fetching paused</p>;

  if (status === 'pending') return <SkeletonItems />;
  if (status === 'error') return <p>Error al cargar los datos</p>;

  return (
    <ItemsContext.Provider value={{ pageContent: repertoryPage }}>{children}</ItemsContext.Provider>
  );
};
