import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { FamiliesCreationSchemaType, familiesCreationSchema } from '../validations';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { HttpStatusCode } from 'axios';
import { ErrorType } from '../../../types';
import { createFamilies } from '../services';
import { TrashButton } from '../components';

const FamilyCreationPage = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createFamilyMutateAsync } = useMutation({
    mutationFn: createFamilies,
    onSuccess(response) {
      queryClient.invalidateQueries({ queryKey: ['families'] });
      reset();
      toast.success(
        response.length > 1 ? 'Familias guardadas exitosamente' : 'Familia guardada exitosamente',
        { className: 'successfully-alert-custom' }
      );
    },
    onError(error: ErrorType) {
      const { response } = error;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(response.data.reason, { className: 'error-alert-custom' });
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FamiliesCreationSchemaType>({
    resolver: yupResolver(familiesCreationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'families',
  });

  return (
    <section className='w-full flex flex-col items-center gap-2'>
      <h2 className='h1-custom'>Crear Familias</h2>
      <form
        className='flex flex-col items-center gap-2 bg-custom-medium max-w-md w-full py-5'
        onSubmit={handleSubmit((schema) => createFamilyMutateAsync(schema.families))}
      >
        <fieldset className='flex flex-col item-center gap-2'>
          {fields.map((field, index) => (
            <div key={field.id} className='flex flex-col gap-1'>
              <div className='flex gap-2 items-center'>
                <input
                  type='text'
                  autoComplete='off'
                  className='input-custom'
                  {...register(`families.${index}.family_name` as const)}
                />
                <TrashButton action={() => remove(index)} />
              </div>
              <p className='msg-error-validation-custom'>
                {errors.families?.[index]?.family_name?.message}
              </p>
            </div>
          ))}
          <button className='button-custom' onClick={() => append({ family_name: '' })}>
            +1 Familia
          </button>
        </fieldset>
        <button type='submit' className='button-custom'>
          Guardar Familias
        </button>
      </form>
    </section>
  );
};

export default FamilyCreationPage;
