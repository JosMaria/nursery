import { Table } from '../components';
import { useQuery } from '@tanstack/react-query';
import { fetchPaginatedItems } from '../service';

export const RepertoryContent = () => {
  const { data: items, status } = useQuery({
    queryFn: fetchPaginatedItems,
    queryKey: ['repertory'],
  });

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'error') return <p>Error al cargar los datos</p>;

  return (
    <section className='flex flex-col items-center w-screen max-w-2xl p-3'>
      <article className='flex justify-between w-full'>
        <h1 className='text-3xl font-semibold font-mono max-sm:text-2xl'>
          Listado
        </h1>
        <button className='custom-btn-form'>Descargar PDF&nbsp;&nbsp;📄</button>
      </article>

      <Table items={items} />
    </section>
  );
};
