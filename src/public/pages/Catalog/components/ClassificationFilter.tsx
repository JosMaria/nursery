import { CLASSIFICATIONS, VALUE_ALL_CLASSIFICATION } from '../constants/classifications';
import { translateClassification } from '../../../utils';
import { useClassificationFilter } from '../hooks';


export const ClassificationsFilter = () => {
  const { classificationSelected, changeClassification } = useClassificationFilter();

  return (
    <article className='self-start flex items-baseline gap-3 bg-custom-medium p-2 max-sm:p-1 h-fit rounded-md'>
      <label htmlFor='classifications' className='font-medium max-sm:text-sm'>
        Filtrar por
      </label>
      <select
        className='input-custom w-44 border-custom-dark border'
        name='classifications'
        id='classifications'
        value={classificationSelected}
        onChange={changeClassification}
      >
        <option value={VALUE_ALL_CLASSIFICATION}>Sin Filtro</option>
        {CLASSIFICATIONS.map((classification, index) => (
          <option key={index} value={classification}>
            {translateClassification(classification)}
          </option>
        ))}
      </select>
    </article>
  );
};
