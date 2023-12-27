import { AllClassificationType, ClassificationType } from '../types/catalogTypes';
import { CLASSIFICATIONS } from '../constants/classifications';

export const convertToClassificationType = (
  value: string
): ClassificationType | AllClassificationType => {
  const valueSelected = value as ClassificationType;
  return CLASSIFICATIONS.includes(valueSelected) ? valueSelected : 'ALL';
};
