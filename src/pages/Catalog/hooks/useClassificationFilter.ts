import { PlantClassificationType } from '../../../types';
import { useCatalogContext } from '../context/CatalogContext';

export const useClassificationFilter = () => {
  const { classificationFilter, changeClassificationFilter } = useCatalogContext();

  return {
    classificationFilter: classificationFilter as PlantClassificationType,
    changeClassificationFilter,
  };
};
