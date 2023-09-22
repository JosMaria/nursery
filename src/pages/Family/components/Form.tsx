import { valibotResolver } from '@hookform/resolvers/valibot';
import { useFieldArray, useForm } from 'react-hook-form';
import { BsTrashFill } from 'react-icons/bs';
import { Input, array, minLength, object, string } from 'valibot';
import { useFamiliesContext } from '../context';

const CreateFamilySchema = object({
  families: array(
    object({
      family_name: string([minLength(1, 'Debe ingresar mas de 1 caracter')]),
    })
  ),
});

type CreateFamilySchemaType = Input<typeof CreateFamilySchema>;

export const FormCreateFamily = () => {
  const { insertFamilies } = useFamiliesContext();

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

  return (
    <article className='bg-skin-form w-80 flex flex-col items-center gap-3 p-2 rounded-xl h-fit'>
      <h1 className='text-xl font-medium'>Crear familias</h1>
      <form
        className='flex flex-col items-center gap-4 rounded-md'
        onSubmit={handleSubmit((schema) => {
          insertFamilies(schema.families, () => reset({ families: [{ family_name: '' }] }));
        })}
      >
        <fieldset className='flex flex-col item-center gap-2'>
          {fields.map((field, index) => (
            <div key={field.id} className='flex flex-col gap-1'>
              <div className='flex gap-3 items-center'>
                <input
                  type='text'
                  autoComplete='off'
                  className='custom-input-form'
                  {...register(`families.${index}.family_name` as const)}
                />
                <button
                  type='button'
                  onClick={() => remove(index)}
                  className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'
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
        </fieldset>

        <button type='submit' className='custom-btn-form'>
          Crear
        </button>
      </form>
    </article>
  );
};