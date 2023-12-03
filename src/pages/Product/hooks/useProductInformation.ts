import { useProductContext } from '../context/ProductContext';

export const useProductInformation = () => {
  const {
    product: {
      commonName,
      scientificName,
      scientistLastnameInitial,
      family,
      status,
      classifications,
      description,
    },
  } = useProductContext();

  return {
    commonName,
    scientificName,
    scientistLastnameInitial,
    family,
    status,
    classifications,
    description,
  };
};
