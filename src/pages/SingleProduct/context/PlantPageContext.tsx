import { createContext, useContext } from 'react';
import { SingleProductResponse } from '../types';
import { useQuery } from '@tanstack/react-query';
import { fetchProductByID } from '../service';

type PlantContextType = {
  plant: SingleProductResponse;
};

const PlantContext = createContext<PlantContextType | null>(null);

type Props = {
  plantId: number;
  children: JSX.Element | JSX.Element[];
};

export const PlantContextProvider = ({ children, plantId }: Props) => {
  const { data: plant, status } = useQuery({
    queryFn: () => fetchProductByID(plantId),
    queryKey: ['plants', plantId],
  });

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'error') return <p>Error</p>;

  return (
    <PlantContext.Provider value={{ plant }}>{children}</PlantContext.Provider>
  );
};

export const usePlantContext = () => {
  const plantContext = useContext(PlantContext);

  if (!plantContext)
    throw new Error('You need to use this context inside PlantContextProvider');

  return plantContext;
};
