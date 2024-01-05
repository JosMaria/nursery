import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchAllFamilies } from './services/service';
import { IconButton } from '../../components';
import { BsTrashFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

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
        <article className='bg-custom-medium max-w-sm w-full flex flex-col items-center gap-2 p-3'>
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
            <ul className='max-w-xs w-full flex flex-col gap-2 max-sm:gap-1 max-sm:text-sm'>
              {families.map((family) => (
                <li
                  key={family.id}
                  className='bg-custom-light hover:bg-custom-medium p-1.5 flex justify-between items-center rounded-md'
                >
                  <span>{family.name}</span>
                  <div className='flex gap-2'>
                    <IconButton color='yellow' children={<FaEdit />} />
                    <IconButton color='red' children={<BsTrashFill color='white' />} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </article>
      )}
    </section>
  );
};

export default FamilyListPage;
