import { useParams } from 'react-router-dom';
import { PlantProvider } from './context';
import { PlantContent } from './content';

export const Component = () => {
  const { id } = useParams();

  return (
    <PlantProvider plantId={Number(id)}>
      <PlantContent />
    </PlantProvider>
  );
};

Component.displayName = 'PlantPage';
