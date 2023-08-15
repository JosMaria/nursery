import { StatusType } from '../types';

export const getStyledGivenStatus = (status: StatusType): string => {
  if (status === 'IN_CONSERVATION') {
    return 'conservation-status';
  } else if (status === 'AVAILABLE') {
    return 'available-status';
  } else {
    return 'non-existent-status';
  }
};
