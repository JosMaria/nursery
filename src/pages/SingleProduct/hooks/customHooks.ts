import { usePlantContext } from '../PlantPageContext';

export const usePlantPhotos = () => {
  const {
    plant: { photos_URL },
  } = usePlantContext();

  return photos_URL;
};

export const useInfoBasePlant = () => {
  const { plant } = usePlantContext();

  return {
    commonName: plant.commonName,
    scientificName: plant.scientificName,
    scientistLastnameInitial: plant.scientistLastnameInitial,
    family: plant.family,
    status: plant.status,
    classifications: plant.classifications,
    description: plant.description,
  };
};
