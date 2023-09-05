import { useParams } from 'react-router-dom';
import { PlantContent } from './content';
import { PlantProvider } from './context';

const PlantPage = () => {
  const { id } = useParams();

  return (
    <PlantProvider plantId={Number(id)}>
      <PlantContent />
    </PlantProvider>
  );
};

export default PlantPage;
