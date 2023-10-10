import { useQuery } from '@tanstack/react-query';
import { PlantToModifyContext } from '..';
import { fetchProductByID } from '../../services';

interface Props {
  plantId: number;
  children: JSX.Element | JSX.Element[];
}

export const PlantToModifyProvider = ({ children, plantId }: Props) => {
  const { data: plantToModify, status } = useQuery({
    queryKey: ['plant-to-modify'],
    queryFn: () => fetchProductByID(plantId),
    refetchOnWindowFocus: false,
  });

  if (status === 'loading') return 'loading plant to modify';
  if (status === 'error') return 'error plant to modify';

  return (
    <PlantToModifyContext.Provider value={{ plantToModify }}>
      {children}
    </PlantToModifyContext.Provider>
  );
};
