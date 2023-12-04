import CatalogEmptyImage from '../../../assets/catalog-empty.png';

export const EmptyContent = () => (
  <article className='h-full flex justify-center items-center'>
    <figure className='flex flex-col items-center max-w-xs'>
      <img src={CatalogEmptyImage} alt='Empty Catalog' className='w-36 p-3' />
      <figcaption className='font-medium'>C&aacute;talogo Vac&iacute;o</figcaption>
      <p className='text-sm max-sm:text-xs text-center font-light'>
        Lo sentimos, actualmente no tenemos productos en nuestro cat&aacute;logo. Por favor, regresa
        m&aacute;s tarde.
      </p>
    </figure>
  </article>
);
