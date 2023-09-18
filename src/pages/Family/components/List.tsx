import { BsTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { FamilyResponse } from '../types';
import { useQuery } from '@tanstack/react-query';
import { fetchAllFamilies } from '../service';
import { FamilyProvider } from '../context/provider';
import { useFamilyContext } from '../context';
import { useForm } from 'react-hook-form';
import { Output, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useState } from 'react';

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
      <ButtonIconEdit />
      <ButtonIconTrash />
      <DeleteFamilyModal />
    </div>
  );
};

const ButtonIconEdit = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded p-1'
      >
        <BiEdit size='1.4em' />
      </button>
      {showModal && <EditFamilyModal close={() => setShowModal(false)} />}
    </>
  );
};

const UpdateFamilySchema = object({
  newName: string([minLength(1, 'Debe ingresar mas de 1 caracter')]),
});

type UpdateFamilySchemaType = Output<typeof UpdateFamilySchema>;

interface EditFamilyModalProps {
  close: () => void;
}

const EditFamilyModal = ({ close }: EditFamilyModalProps) => {
  const { name: oldName, updateFamily } = useFamilyContext();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<UpdateFamilySchemaType>({
    resolver: valibotResolver(UpdateFamilySchema),
  });

  return (
    <dialog className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none w-full h-screen text-skin-dark'>
      <form
        className=' bg-skin-light p-4 rounded flex flex-col justify-center items-center gap-5 relative'
        onSubmit={handleSubmit((data) => {
          updateFamily(data.newName);
          close();
        })}
      >
        <button
          onClick={close}
          className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-none px-1 rounded'
        >
          &times;
        </button>
        <h2 className='font-medium text-base'>Introduzca nuevo nombre</h2>
        <div className='flex flex-col gap-1'>
          <input
            type='text'
            className='custom-input-form'
            placeholder={oldName}
            autoComplete='off'
            {...register('newName')}
          />
          <p className='custom-lbl-form-error'>{errors.newName?.message}</p>
        </div>
        <button className='custom-btn-form' type='submit'>
          Cambiar
        </button>
      </form>
    </dialog>
  );
};

const ButtonIconTrash = () => (
  <button
    onClick={openDeleteFamilyModal}
    className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'
  >
    <BsTrashFill size='1em' />
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
