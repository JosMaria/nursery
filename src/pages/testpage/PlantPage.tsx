import { PlantProvider } from './context/provider';
import { PlantContent } from './content';

const PlantPage = () => (
  <PlantProvider>
    <PlantContent />
  </PlantProvider>
);

export default PlantPage;
