import { useParams } from 'react-router-dom';
import { PlantContextProvider } from './context';
import { PlantContentPage } from './SingleProductPage';

export const Component = () => {
  const { id } = useParams();

  return (
    <PlantContextProvider plantId={Number(id)}>
      <PlantContentPage />
    </PlantContextProvider>
  );
};

Component.displayName = 'PlantPage';
