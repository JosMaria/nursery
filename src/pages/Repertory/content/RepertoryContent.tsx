import { Table } from '../components';
import { useQuery } from '@tanstack/react-query';
import { fetchPaginatedItems } from '../service';

export const RepertoryContent = () => {
  const { data: items, status } = useQuery({
    queryFn: fetchPaginatedItems,
    queryKey: ['items'],
  });

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'error') return <p>Error al cargar los datos</p>;

  return (
    <section>
      <Table items={items} />
    </section>
  );
};
