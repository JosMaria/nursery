import { useQuery } from '@tanstack/react-query';
import { PlantContext } from '..';
import { fetchProductByID } from '../../services';
import { SkeletonPlantPage } from '../../SkeletonPlantPage';

type Props = {
  plantId: number;
  children: JSX.Element | JSX.Element[];
};

export const PlantProvider = ({ plantId, children }: Props) => {
  const { data: plant, status } = useQuery({
    queryFn: () => fetchProductByID(plantId),
    queryKey: ['plants', plantId],
  });

  if (status === 'loading') return <SkeletonPlantPage />;
  if (status === 'error') return <p>Error</p>;

  return (
    <PlantContext.Provider value={{ plant }}>{children}</PlantContext.Provider>
  );
};
