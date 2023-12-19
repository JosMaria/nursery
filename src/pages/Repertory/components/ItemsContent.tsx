import RepertoryEmptyImage from '../../../assets/list-empty.png';
import { useRepertoryItems } from '../hooks';
import { Table } from '.';

export const ItemsContent = () => {
  const { empty } = useRepertoryItems();

  return (
    <>
      {empty ? (
        <EmptyContent />
      ) : (
        <div className='max-w-2xl w-full flex flex-col gap-3 p-1'>
          <button className='button-custom'>Descargar PDF&nbsp;&nbsp;📄</button>
          <article className='max-sm:overflow-x-scroll'>
            <Table />
          </article>
        </div>
      )}
    </>
  );
};

const EmptyContent = () => (
  <figure className='self-center flex flex-col items-center gap-1 w-80 p-2'>
    <img src={RepertoryEmptyImage} alt='Empty Catalog' className='w-28 p-1' />
    <figcaption className='font-medium'>Listado Vac&iacute;o</figcaption>
    <p className='text-sm max-sm:text-xs text-center font-light'>
      Lo sentimos, actualmente no tenemos productos en nuestro listado. Por favor, regresa más
      tarde.
    </p>
  </figure>
);
