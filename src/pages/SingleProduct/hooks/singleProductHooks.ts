import { useSingleProductContext } from '../context';

export const usePhotos = () => {
  const {
    singleProduct: { photos_URL },
  } = useSingleProductContext();

  return photos_URL;
};

export const useInfoBase = () => {
  const { singleProduct } = useSingleProductContext();

  return {
    commonName: singleProduct.commonName,
    scientificName: singleProduct.scientificName,
    scientistLastnameInitial: singleProduct.scientistLastnameInitial,
    family: singleProduct.family,
    status: singleProduct.status,
    classifications: singleProduct.classifications,
    description: singleProduct.description,
  };
};

export const useTechnicalSheet = () => {
  const {
    singleProduct: { technicalSheet },
  } = useSingleProductContext();

  return technicalSheet;
};

export const useDetails = () => {
  const {
    singleProduct: { details },
  } = useSingleProductContext();

  return details;
};

export const useNotes = () => {
  const {
    singleProduct: { notes },
  } = useSingleProductContext();

  return notes;
};
