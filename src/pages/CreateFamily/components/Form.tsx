import { valibotResolver } from '@hookform/resolvers/valibot';
import { useFieldArray, useForm } from 'react-hook-form';
import { BsTrashFill } from 'react-icons/bs';
import { Input, array, minLength, object, string } from 'valibot';
import { createFamilies } from '../service';
import { toast } from 'react-hot-toast';

const CreateFamilySchema = object({
  families: array(
    object({
      family_name: string([minLength(1, 'Debe ingresar mas de 1 caracter')]),
    })
  ),
});

type CreateFamilySchemaType = Input<typeof CreateFamilySchema>;

export const Form = () => {
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

  const handleCreateFamily = (schema: CreateFamilySchemaType) => {
    createFamilies(schema.families)
      .then(() => {
        toast.success('Familias guardadas exitosamente', {
          className: 'custom-toast-success m-0',
        });
        reset({ families: [{ family_name: '' }] });
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.reason, { className: 'custom-toast-error'});
        }
      });
  };

  return (
    <form
      className='flex flex-col items-center gap-5'
      onSubmit={handleSubmit(handleCreateFamily)}
    >
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
        className='custom-btn-form self-start'
        onClick={() => append({ family_name: '' })}
      >
        +1 Familia
      </button>
      <button type='submit' className='custom-btn-form'>
        Crear
      </button>
    </form>
  );
};
