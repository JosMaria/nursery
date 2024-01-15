import { useFamilyEditStore } from './zustand-store/familyEditStore';
import { DeleteFamilyModal, EditFamilyModal } from './components';
import { fetchAllFamilies } from './services/service';
import { useQuery } from '@tanstack/react-query';
import { IconButton } from '../../components';
import { BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';

const FamilyListPage = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const { changeValue } = useFamilyEditStore();

  const { data: families, status } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
  });

  return (
    <section className='flex flex-col items-center'>
      <DeleteFamilyModal isOpen={isOpenDeleteModal} close={() => setIsOpenDeleteModal(false)} />
      <EditFamilyModal isOpen={isOpenEditModal} close={() => setIsOpenEditModal(false)} />
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
                  className='bg-custom-light hover:bg-custom-medium px-2 py-0.5  flex justify-between items-center rounded-md'
                  key={family.id}
                >
                  <span>{family.name}</span>
                  <div className='flex gap-2'>
                    <IconButton
                      color='yellow'
                      children={<FaEdit />}
                      action={() => {
                        changeValue({ familyId: family.id, familyName: family.name });
                        setIsOpenEditModal(true);
                      }}
                    />
                    <IconButton
                      color='red'
                      children={<BsTrashFill color='white' />}
                      action={() => {
                        changeValue({ familyId: family.id, familyName: family.name });
                        setIsOpenDeleteModal(true);
                      }}
                    />
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
