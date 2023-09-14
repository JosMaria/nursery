import { valibotResolver } from '@hookform/resolvers/valibot';
import { useFieldArray, useForm } from 'react-hook-form';
import { BsTrashFill } from 'react-icons/bs';
import { Input, array, minLength, object, string } from 'valibot';
import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFamilies } from '../service';
import { HttpStatusCode } from 'axios';
import { ErrorType } from '../../../types';

const CreateFamilySchema = object({
  families: array(
    object({
      family_name: string([minLength(1, 'Debe ingresar mas de 1 caracter')]),
    })
  ),
});

type CreateFamilySchemaType = Input<typeof CreateFamilySchema>;

export const FormCreateFamily = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<CreateFamilySchemaType>({
    resolver: valibotResolver(CreateFamilySchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'families',
  });

  const { mutate: createFamiliesMutate } = useMutation({
    mutationFn: createFamilies,
    onSuccess: (data) => {
      toast.success(
        data.length > 1 ? 'Familias guardadas exitosamente' : 'Familia guardada exitosamente',
        { className: 'custom-toast-success' }
      );
      reset({ families: [{ family_name: '' }] });
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
    <article className='bg-skin-form w-80 flex flex-col items-center gap-5 p-2 rounded-xl h-fit'>
      <h1 className='text-xl font-medium'>Crear familias</h1>
      <form
        className='flex flex-col items-center gap-4 rounded-md'
        onSubmit={handleSubmit((schema) => createFamiliesMutate(schema.families))}
      >
        <div className='flex flex-col item-center gap-4'>
          {fields.map((field, index) => (
            <div key={field.id} className='flex flex-col gap-1'>
              <div className='flex gap-3 items-center'>
                <input
                  type='text'
                  className='custom-input-form'
                  {...register(`families.${index}.family_name` as const)}
                />
                <button
                  type='button'
                  onClick={() => remove(index)}
                  className='bg-red-500 text-white p-2 w-fit rounded-md hover:bg-red-600 cursor-pointer'
                >
                  <BsTrashFill />
                </button>
              </div>
              <p className='custom-lbl-form-error'>
                {errors.families?.[index]?.family_name?.message}
              </p>
            </div>
          ))}

          <button
            className='custom-btn-form w-fit self-end'
            onClick={() => append({ family_name: '' })}
          >
            +1 Familia
          </button>
        </div>

        <button type='submit' className='custom-btn-form'>
          Crear
        </button>
      </form>
    </article>
  );
};
