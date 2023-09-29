import { useSingleProductContext } from '../context';

export const useSingleProductPhotos = () => {
  const {
    singleProduct: { photos_URL },
  } = useSingleProductContext();

  return photos_URL;
};

export const useInfoBaseSingleProduct = () => {
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

export const useTechnicalSheetSingleProduct = () => {
  const {
    singleProduct: { technicalSheet },
  } = useSingleProductContext();

  return technicalSheet;
};

export const useDetailsSingleProduct = () => {
  const {
    singleProduct: { details },
  } = useSingleProductContext();

  return details;
};

export const useNotesSingleProduct = () => {
  const {
    singleProduct: { notes },
  } = useSingleProductContext();

  return notes;
};
