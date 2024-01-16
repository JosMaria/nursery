import { PlantCreationSchemaType } from '../validations/validation';
import { PlantCreationDTOType } from '../../../types';

export const toPlantCreationDTOType = (schema: PlantCreationSchemaType): PlantCreationDTOType => {
  const { details, technicalSheet, ...schemaTyped } = schema;
  const detailsTyped = details.map((item) => item.detail);
  const technicalSheetTyped = technicalSheet.map((item) => ({
    word: item.word,
    info: item.value,
  }));

  return {
    ...schemaTyped,
    details: detailsTyped,
    technicalSheet: technicalSheetTyped,
  };
};
