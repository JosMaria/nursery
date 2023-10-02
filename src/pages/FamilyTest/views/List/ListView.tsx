import { BsTrashFill } from 'react-icons/bs';
import { useFamilies } from '../../hooks';
import { BiEdit } from 'react-icons/bi';
import { useState } from 'react';
import { Input, object, regex, string } from 'valibot';
import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { UpdateFamilyType } from '../../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFamilyById, updateFamilyNameById } from '../../services';
import toast from 'react-hot-toast';
import { HttpStatusCode } from 'axios';
import { ErrorType } from '../../../../types';

export const ListView = () => {
  const { isEmpty } = useFamilies();

  return (
    <article className='w-full bg-skin-form rounded-xl flex flex-col items-center gap-3 text-sm p-2 h-fit'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {isEmpty ? (
        <p className='bg-skin-light font-medium text-center px-3 text-lg select-none'>
          No hay ninguna familia registrada
        </p>
      ) : (
        <ListWithItems />
      )}
    </article>
  );
};

const ListWithItems = () => {
  const { families } = useFamilies();

  return (
    <ul className='flex flex-col cursor-grab bg-skin-light'>
      {families.map((family) => (
        <Item key={family.id} id={family.id} name={family.name} />
      ))}
    </ul>
  );
};

interface ItemProps {
  id: number;
  name: string;
}
const Item = ({ id, name }: ItemProps) => {
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <li className='w-72 py-1.5 px-3 flex justify-between items-center gap-2'>
        <p>{name}</p>
        <div className='flex gap-3'>
          <ButtonIconEdit isShow={showFormEdit} action={() => setShowFormEdit((prev) => !prev)} />
          <ButtonIconTrash action={() => setShowDeleteModal(true)} />
        </div>
      </li>
      <FormEditFamily
        familyId={id}
        isShow={showFormEdit}
        close={() => setShowFormEdit(false)}
        actualName={name}
      />
      {showDeleteModal && (
        <DeleteFamilyModal
          familyId={id}
          familyName={name}
          close={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};

interface ButtonIconEditProps {
  isShow: boolean;
  action?: () => void;
}

const ButtonIconEdit = ({ isShow, action }: ButtonIconEditProps) => (
  <button
    className={`bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded p-1 ${
      isShow && 'opacity-60'
    }`}
    onClick={action}
  >
    <BiEdit size='1.4em' />
  </button>
);

const UpdateFamilySchema = object({
  newName: string([regex(/^[a-z]+$/, 'Introduzca la palabra en minuscula.')]),
});

type UpdateFamilySchemaType = Input<typeof UpdateFamilySchema>;

interface FormEditFamily {
  familyId: number;
  isShow: boolean;
  actualName: string;
  close: () => void;
}

const FormEditFamily = ({ familyId, isShow, actualName, close }: FormEditFamily) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFamilySchemaType>({
    resolver: valibotResolver(UpdateFamilySchema),
  });

  const queryClient = useQueryClient();

  const { mutate: updateFamilyMutate } = useMutation({
    mutationFn: ({ id, payload }: UpdateFamilyType) => updateFamilyNameById(id, payload),
    onSuccess(response) {
      toast.success(`Familia actualizada a ${response.name}.`, {
        className: 'custom-toast-success',
      });
      queryClient.invalidateQueries({ queryKey: ['families'] });
      close();
    },
    onError(error: ErrorType) {
      const { response } = error;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(response.data.reason, { className: 'custom-toast-error' });
      }
    },
  });

  return (
    <form
      className={`${
        !isShow && 'hidden'
      } bg-skin-form flex flex-col gap-1 px-2 pb-5 border-t-4 border-skin-focus`}
      onSubmit={handleSubmit((schema) =>
        updateFamilyMutate({ id: familyId, payload: { family_name: schema.newName } })
      )}
    >
      <h2 className='font-medium'>Introduzcar nuevo nombre</h2>
      <fieldset className='flex flex-col gap-1'>
        <input
          type='text'
          className='custom-input-form p-1.5'
          placeholder={actualName}
          autoComplete='off'
          {...register('newName')}
        />
        <p className='custom-lbl-form-error'>{errors.newName?.message}</p>
      </fieldset>
      <button className='custom-btn-form py-1.5 px-4' type='submit'>
        Cambiar
      </button>
    </form>
  );
};

interface ButtonIconTrashProps {
  action: () => void;
}

const ButtonIconTrash = ({ action }: ButtonIconTrashProps) => (
  <button
    className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'
    onClick={action}
  >
    <BsTrashFill size='1em' />
  </button>
);

interface DeleteFamilyModalProps {
  familyId: number;
  familyName: string;
  close: () => void;
}

const DeleteFamilyModal = ({ familyId, familyName, close }: DeleteFamilyModalProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteFamilyMutate } = useMutation({
    mutationFn: (data: { id: number; name: string }) => deleteFamilyById(data.id),
    onSuccess(_, variables) {
      toast.success(`Familia: ${variables.name} eliminada.`, { className: 'custom-toast-success' });
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
    <dialog className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none w-full h-screen text-skin-dark'>
      <div className=' bg-skin-light p-4 rounded flex flex-col justify-center items-center gap-3 relative w-80'>
        <button
          onClick={close}
          className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-none px-1 rounded'
        >
          &times;
        </button>
        <h3 className='text-center'>
          Seguro que quiere eliminar la familia: <span className='font-medium'>{familyName}</span>
        </h3>

        <button
          className='custom-btn-form'
          onClick={() => deleteFamilyMutate({ id: familyId, name: familyName })}
        >
          Eliminar
        </button>
      </div>
    </dialog>
  );
};
