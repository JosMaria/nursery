import { usePlantToModifyContext } from '../context';

export const useInfoToDeletePlant = () => {
  const { plantToModify } = usePlantToModifyContext();

  return {
    commonName: plantToModify.commonName,
    scientificName: plantToModify.scientificName,
    scientistLastnameInitial: plantToModify.scientistLastnameInitial,
    family: plantToModify.family,
  };
};
