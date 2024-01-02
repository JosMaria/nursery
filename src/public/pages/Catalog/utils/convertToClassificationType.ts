import { CLASSIFICATIONS } from '../constants/classifications';
import { ClassificationType } from '../../../../types';
import { AllClassificationType } from '../../../types';

export const convertToClassificationType = (
  value: string
): ClassificationType | AllClassificationType => {
  const valueSelected = value as ClassificationType;
  return CLASSIFICATIONS.includes(valueSelected) ? valueSelected : 'ALL';
};
