import ImageEmptyPage from '../../../assets/catalog-empty.png';

export const EmptyList = () => (
  <figure className='flex flex-col items-center gap-1 w-80 p-5'>
    <img src={ImageEmptyPage} alt='Empty Catalog' className='w-36 pb-5' />
    <figcaption className='font-medium'>Catalogo Vac&iacute;o</figcaption>
    <p className='text-sm max-sm:text-xs text-center font-light'>
      Lo sentimos, actualmente no tenemos productos en nuestro catálogo. Por favor, regresa más
      tarde.
    </p>
  </figure>
);
