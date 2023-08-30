import { createContext, useContext, useState } from 'react';
import { SingleProductResponse } from './types';

type PlantContextType = {
  plant: SingleProductResponse;
  changePlant: (plant: SingleProductResponse) => void;
};

const PlantContext = createContext<PlantContextType | null>(null);

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const PlantContextProvider = ({ children }: Props) => {
  const [plant, setPlant] = useState<SingleProductResponse>(
    {} as SingleProductResponse
  );

  const changePlant = (plant: SingleProductResponse) => {
    setPlant((prev) => plant);
  };

  return (
    <PlantContext.Provider value={{ plant, changePlant }}>
      {children}
    </PlantContext.Provider>
  );
};

export const usePlantContext = () => {
  const plantContext = useContext(PlantContext);

  if (!plantContext)
    throw new Error('You need to use this context inside PlantContextProvider');

  return plantContext;
};
