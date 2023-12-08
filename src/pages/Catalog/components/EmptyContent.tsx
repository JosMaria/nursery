import CatalogEmptyImage from '../../../assets/catalog-empty.png';
import { PlantClassificationType } from '../../../types';
import { traduceClassification } from '../../../utils';
import { AllClassificationType } from '../CatalogPage';

interface Props {
  classificationSelected: PlantClassificationType | AllClassificationType;
}

export const EmptyContent = ({ classificationSelected }: Props) => (
  <article className='h-full flex justify-center items-center'>
    <figure className='flex flex-col items-center max-w-xs'>
      <img src={CatalogEmptyImage} alt='Empty Catalog' className='w-36 p-3' />
      {classificationSelected !== 'ALL' ? (
        <>
          <figcaption className='font-medium'>No encontrado</figcaption>
          <p className='text-sm max-sm:text-xs text-center font-light'>
            No encontramos plantas seg&uacute;n la clasificaci&oacute;n{' '}
            {traduceClassification(classificationSelected)}, puede intentar seleccionando otra
            clasificaci&oacute;n o sin filtros{' '}
          </p>
        </>
      ) : (
        <>
          <figcaption className='font-medium'>C&aacute;talogo Vac&iacute;o</figcaption>
          <p className='text-sm max-sm:text-xs text-center font-light'>
            Lo sentimos, actualmente no tenemos plantines en nuestro cat&aacute;logo del vivero. Por
            favor, regresa m&aacute;s tarde.
          </p>
        </>
      )}
    </figure>
  </article>
);
