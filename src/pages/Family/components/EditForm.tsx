import { valibotResolver } from '@hookform/resolvers/valibot';
import { UpdateFamilySchema, UpdateFamilySchemaType } from '../validations';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFamilyNameById } from '../services';
import { useForm } from 'react-hook-form';
import { HttpStatusCode } from 'axios';
import toast from 'react-hot-toast';
import { ErrorType } from '../../../types';
import { UpdateFamilyType } from '../types';

interface EditFormProps {
  familyId: number;
  isShow: boolean;
  actualName: string;
  close: () => void;
}

export const EditForm = ({ familyId, isShow, actualName, close }: EditFormProps) => {
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
      queryClient.invalidateQueries({ queryKey: ['families'] });
      toast.success(`Familia actualizada a ${response.name}.`, {
        className: 'custom-toast-success',
      });
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
