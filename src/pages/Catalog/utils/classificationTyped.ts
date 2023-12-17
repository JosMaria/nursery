import { CLASSIFICATIONS } from '../constants/classifications';
import { PlantClassificationType } from '../../../types';
import { AllClassificationType } from '../types/catalogTypes';

export const classificationTyped = (
  value: string
): PlantClassificationType | AllClassificationType => {
  const valueSelected = value as PlantClassificationType;
  return CLASSIFICATIONS.includes(valueSelected) ? valueSelected : 'ALL';
};
