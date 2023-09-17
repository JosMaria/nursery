import { BsTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { FamilyResponse } from '../types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchAllFamilies, updateFamilyNameById } from '../service';
import { toast } from 'react-hot-toast';
import { ErrorType } from '../../../types';
import { HttpStatusCode } from 'axios';
import { EditModalTest } from '.';
import { FamilyProvider } from '../context/provider';
import { useFamilyContext } from '../context';

const openDeleteFamilyModal = () => {
  const modal = document.getElementById('delete-family-modal') as HTMLDialogElement;
  modal.showModal();
};

export const List = () => {
  const { data: families } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
    initialData: [],
    cacheTime: 3000,
  });

  return (
    <article className='bg-skin-form rounded-xl flex flex-col items-center gap-5 w-80 text-sm p-2 text-skin-dark'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {families.length === 0 ? <ListEmpty /> : <ListWithItems families={families} />}
    </article>
  );
};

const ListEmpty = () => (
  <p className='bg-skin-light font-medium text-center overflow-y-hidden px-3 text-lg select-none'>
    No hay ninguna familia registrada
  </p>
);

interface ListWithItemsProps {
  families: FamilyResponse[];
}

const ListWithItems = ({ families }: ListWithItemsProps) => {
  const queryClient = useQueryClient();

  const { mutate: updateFamilyNameByIdMutate } = useMutation({
    mutationFn: (data: { id: number; newName: string }) =>
      updateFamilyNameById(data.id, { name: data.newName }),
    onSuccess: () => {
      toast.success(`Familia actualizada.`, { className: 'custom-toast-success' });
      queryClient.invalidateQueries({ queryKey: ['families'] });
    },
    onError(error: ErrorType) {
      const { response } = error;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(response.data.reason, { className: 'custom-toast-error' });
      }
    },
  });

  return (
    <ul className='flex flex-col cursor-grab w-full bg-skin-light'>
      {families.map((family) => (
        <li key={family.id} className='py-1.5 px-3 flex justify-between items-center gap-2'>
          <p>{family.name}</p>
          <FamilyProvider id={family.id} name={family.name}>
            <ListItem />
          </FamilyProvider>
        </li>
      ))}
    </ul>
  );
};

const ListItem = () => {
  return (
    <div className='flex gap-3'>
      <button>
        <BiEdit size='2em' className='bg-yellow-400 hover:bg-yellow-500 rounded-md p-0.5' />
      </button>
      <ButtonIconTrash />
      <DeleteFamilyModal />
    </div>
  );
};

const ButtonIconTrash = () => (
  <button
    onClick={openDeleteFamilyModal}
    className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded px-1.5'
  >
    <BsTrashFill size='1.3em' />
  </button>
);

const DeleteFamilyModal = () => {
  const { name, deleteFamily } = useFamilyContext();

  return (
    <dialog id='delete-family-modal' className='modal backdrop-blur-sm select-none cursor-auto'>
      <div className='w-72 bg-skin-form p-4 rounded shadow flex flex-col items-center gap-3 relative'>
        <h3 className='text-center'>
          Seguro que quiere eliminar la familia: <span className='font-medium'>{name}</span>
        </h3>
        <form method='dialog'>
          <button className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-none px-1 rounded'>
            &times;
          </button>
          <button className='custom-btn-form' onClick={deleteFamily}>
            Eliminar
          </button>
        </form>
      </div>
    </dialog>
  );
};
