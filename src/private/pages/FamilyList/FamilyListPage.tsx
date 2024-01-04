import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchAllFamilies } from './services/service';

const FamilyListPage = () => {
  const { data: families, status } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
  });

  return (
    <section className='flex flex-col items-center'>
      <h2 className='h1-custom'>Listado familias</h2>
      {status === 'pending' && <p>Cargando familias</p>}
      {status === 'error' && <p>Error al cargar los datos</p>}
      {status === 'success' && (
        <article className='bg-custom-medium max-w-sm w-full flex flex-col items-center gap-2 py-3'>
          {families.length === 0 ? (
            <>
              <p className='font-medium text-center select-none'>
                No hay ninguna familia registrada
              </p>
              <Link className='button-custom' to='../create/family'>
                Crear Familia&nbsp;&nbsp;&#10230;
              </Link>
            </>
          ) : (
            <>
              {families.map((family) => (
                <p key={family.id}>{family.name}</p>
              ))}
            </>
          )}
        </article>
      )}
    </section>
  );
};

export default FamilyListPage;
