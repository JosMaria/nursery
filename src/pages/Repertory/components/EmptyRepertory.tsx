import ImageEmptyPage from '../../../assets/list-empty.png';

export const EmptyRepertory = () => (
  <figure className='self-center flex flex-col items-center gap-1 w-80 p-5'>
    <img src={ImageEmptyPage} alt='Empty Catalog' className='w-28 pb-5' />
    <figcaption className='font-medium'>Listado Vac&iacute;o</figcaption>
    <p className='text-sm max-sm:text-xs text-center font-light'>
      Lo sentimos, actualmente no tenemos productos en nuestro listado. Por favor, regresa más
      tarde.
    </p>
  </figure>
);
