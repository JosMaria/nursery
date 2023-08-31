import { usePlantContext } from '../context';

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

export const useTechnicalSheetPlant = () => {
  const {
    plant: { technicalSheet },
  } = usePlantContext();

  return technicalSheet;
};

export const useDetailsPlant = () => {
  const {
    plant: { details },
  } = usePlantContext();

  return details;
};

export const useNotesPlant = () => {
  const {
    plant: { notes },
  } = usePlantContext();

  return notes;
};
