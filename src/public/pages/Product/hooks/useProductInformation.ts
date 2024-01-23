import { useProductContext } from '../context/ProductContext';

export const useProductInformation = () => {
  const {
    product: {
      commonName,
      scientificName,
      scientistLastnameInitial,
      family,
      status,
      price,
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
    price,
    classifications,
    description,
  };
};
