import { usePlantToModifyContext } from '../context';

export const useInfoToDeletePlant = () => {
  const {
    plantToModify: { commonName, scientificName, scientistLastnameInitial, family },
  } = usePlantToModifyContext();

  return {
    commonName,
    scientificName,
    scientistLastnameInitial,
    family,
  };
};

export const useInfoBase = () => {
  const {
    plantToModify: {
      commonName,
      scientificName,
      scientistLastnameInitial,
      family,
      status,
      classifications,
    },
  } = usePlantToModifyContext();

  return {
    commonName,
    scientificName,
    scientistLastnameInitial,
    family,
    status,
    classifications,
  };
};
