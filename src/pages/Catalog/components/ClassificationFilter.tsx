import { PlantClassificationType } from '../../../types';
import { traduceClassification } from '../../../utils';
import { AllClassificationType } from '../CatalogPage';

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

type Props = {
  classificationSelected: AllClassificationType | PlantClassificationType;
  changeClassification: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const ClassificationsFilter = ({ classificationSelected, changeClassification }: Props) => (
  <article className='self-start flex items-baseline gap-3 bg-custom-medium p-2 max-sm:p-1 h-fit rounded-md'>
    <label htmlFor='classifications' className='font-medium max-sm:text-sm'>
      Filtrar por
    </label>
    <select
      className='input-custom w-44 border-custom-dark border'
      name='classifications'
      id='classifications'
      value={classificationSelected ?? 'ALL'}
      onChange={changeClassification}
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
