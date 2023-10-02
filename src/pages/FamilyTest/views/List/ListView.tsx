import { BsTrashFill } from 'react-icons/bs';
import { useFamilies } from '../../hooks';
import { BiEdit } from 'react-icons/bi';
import { useState } from 'react';
import { Input, object, regex, string } from 'valibot';
import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { UpdateFamilyType } from '../../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFamilyNameById } from '../../services';
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
  return (
    <>
      <li className='w-72 py-1.5 px-3 flex justify-between items-center gap-2'>
        <p>{name}</p>
        <div className='flex gap-3'>
          <ButtonIconEdit isShow={showFormEdit} action={() => setShowFormEdit((prev) => !prev)} />
          <ButtonIconTrash />
        </div>
      </li>
      <FormEditFamily
        familyId={id}
        isShow={showFormEdit}
        close={() => setShowFormEdit(false)}
        actualName={name}
      />
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

const ButtonIconTrash = () => (
  <button className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'>
    <BsTrashFill size='1em' />
  </button>
);
