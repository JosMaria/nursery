import { useSearchParams } from 'react-router-dom';
import { PlantClassificationType } from '../../../types';
import { traduceClassification } from '../../../utils';

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
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  const classificationSearched = searchParams.get('q');

  return (
    <article className='flex items-baseline gap-3 bg-custom-medium px-5 py-2 h-fit rounded-md'>
      <label htmlFor='classifications' className='font-medium'>
        Clasificaci&oacute;n
      </label>
      <select
        className='input-custom w-44 border-custom-dark border'
        name='classifications'
        id='classifications'
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set('q', e.currentTarget.value);
              return prev;
            },
            { replace: true }
          )
        }
        value={classificationSearched ?? ''}
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
