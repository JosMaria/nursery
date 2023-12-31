import { ClassificationType, StatusType } from '../types';

export const translateStatus = (status: StatusType): string => {
  if (status === 'IN_CONSERVATION') {
    return 'EN CONSERVACION';
  } else if (status === 'AVAILABLE') {
    return 'DISPONIBLE';
  } else {
    return 'NO EXISTENTE';
  }
};

export const translateClassification = (classification: ClassificationType): string => {
  if (classification === 'ALIMENTARY') {
    return 'ALIMENTICIA';
  } else if (classification === 'CACTUS') {
    return 'CACTUS';
  } else if (classification === 'EXOTIC') {
    return 'EXOTICA';
  } else if (classification === 'FOREST') {
    return 'FORESTAL';
  } else if (classification === 'FRUITFUL') {
    return 'FRUTAL';
  } else if (classification === 'GRASS') {
    return 'CRASA';
  } else if (classification === 'INDUSTRIAL') {
    return 'INDUSTRIAL';
  } else if (classification === 'MEDICINAL') {
    return 'MEDICINAL';
  } else if (classification === 'ORNAMENTAL') {
    return 'ORNAMENTAL';
  } else if (classification === 'SUCCULENT') {
    return 'SUCULENTA';
  }

  throw new Error(`Classification ${classification} does not founded.`);
};
