import { StatusType } from '../../../types';

export const styleGivenStatus = (status: StatusType): string => {
  const styleGeneral = 'px-1.5 rounded-lg font-medium text-xs border-2';

  if (status === 'AVAILABLE') {
    return `${styleGeneral} bg-green-200 text-green-800 border-green-800`;
  } else if (status === 'NON_EXISTENT') {
    return `${styleGeneral} bg-purple-200 text-purple-800 border-purple-800`;
  } else if (status === 'IN_CONSERVATION') {
    return `${styleGeneral} bg-amber-200 text-amber-800 border-amber-800`;
  } else return '';
};
