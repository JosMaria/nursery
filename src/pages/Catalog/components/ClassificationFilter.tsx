import { PlantClassificationType } from '../../../types';
import { traduceClassification } from '../../../utils';
import { useClassificationFilter } from '../hooks';

const CLASSIFICATIONS: PlantClassificationType[] = [
  'ALIMENTARY',
  'CACTUS',
  'EXOTIC',
  'FOREST',
  'FRUITFUL',
  'GRASS',
  'INDUSTRIAL',
  'MEDICINAL',
  'ORNAMENTAL',
  'SUCCULENT',
];

export const ClassificationsFilter = () => {
  const { classificationFilter, changeClassificationFilter } = useClassificationFilter();
  return (
    <article className='self-start flex items-baseline gap-3 bg-custom-medium p-2 max-sm:p-1 h-fit rounded-md'>
      <label htmlFor='classifications' className='font-medium max-sm:text-sm'>
        Filtrar por
      </label>
      <select
        className='input-custom w-44 border-custom-dark border'
        name='classifications'
        id='classifications'
        onChange={(e) =>
          changeClassificationFilter(e.currentTarget.value as PlantClassificationType)
        }
        value={classificationFilter ?? ''}
      >
        <option value=''>Sin Filtro</option>
        {CLASSIFICATIONS.map((classification, index) => (
          <option key={index} value={classification}>
            {traduceClassification(classification)}
          </option>
        ))}
      </select>
    </article>
  );
};
