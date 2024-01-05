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
      <button className='button-custom'>Open</button>
      <dialog
        className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center select-none w-full h-screen p-2'
        open={true}
      >
        <div className='bg-custom-light p-4 rounded-md flex flex-col justify-center items-center gap-3 relative w-80 max-sm:text-sm border-4 border-custom-dark'>
          <button className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-custom-light focus:border text-white font-bold text-lg leading-none px-1 rounded'>
            &times;
          </button>
          <h3 className='text-center'>
            ¿Seguro que quieres eliminar la familia:{' '}
            <span className='font-medium'>nombre de la familia</span>?
          </h3>
          <button className='button-custom' onClick={() => console.log('click button modal')}>
            Si, Eliminar
          </button>
        </div>
      </dialog>

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
