import { fetchPaginatedItems } from './service/repertoryService';
import RepertoryEmptyImage from '../../assets/list-empty.png';
import { useQuery } from '@tanstack/react-query';
import { Table } from './components';

const RepertoryPage = () => {
  const {
    data: items,
    status,
    fetchStatus,
  } = useQuery({
    queryFn: fetchPaginatedItems,
    queryKey: ['repertory'],
  });

  if (fetchStatus === 'fetching') return <p>fetching list</p>;
  if (fetchStatus === 'paused') return <p>fetching paused</p>;

  if (status === 'pending') return <p>Cargando listado</p>;
  if (status === 'error') return <p>Error al cargar los datos</p>;

  return (
    <section className='w-full flex justify-center min-h-full'>
      {items.content.length === 0 ? (
        <figure className='self-center flex flex-col items-center gap-1 w-80 p-5'>
          <img src={RepertoryEmptyImage} alt='Empty Catalog' className='w-28 p-1' />
          <figcaption className='font-medium'>Listado Vac&iacute;o</figcaption>
          <p className='text-sm max-sm:text-xs text-center font-light'>
            Lo sentimos, actualmente no tenemos productos en nuestro listado. Por favor, regresa más
            tarde.
          </p>
        </figure>
      ) : (
        <div className='max-w-2xl w-full flex flex-col gap-3 p-1'>
          <h1 className='h1-custom text-center'>Listado</h1>
          <button className='button-custom'>Descargar PDF&nbsp;&nbsp;📄</button>
          <article className='max-sm:overflow-x-scroll'>
            <Table items={items.content} />
          </article>
        </div>
      )}
    </section>
  );
};

export default RepertoryPage;
