import { StatusType } from '../types';

export const traduceStatus = (status: StatusType): string => {
  if (status === 'IN_CONSERVATION') {
    return 'EN CONSERVACIÓN';
  } else if (status === 'AVAILABLE') {
    return 'DISPONIBLE';
  } else {
    return 'NO EXISTENTE';
  }
};
