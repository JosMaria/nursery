import { useFieldArray, useForm } from 'react-hook-form';
import { CreateFamilySchema, CreateFamilySchemaType } from './validations';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { BsTrashFill } from 'react-icons/bs';

const CreateFamilyView = () => {
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
    <article className='bg-skin-form w-full p-2'>
      <form
        className='flex flex-col items-center gap-2 rounded-md text-xl'
        onSubmit={handleSubmit((schema) => {
          console.log(schema);
          //insertFamilies(schema.families, () => reset({ families: [{ family_name: '' }] }));
        })}
      >
        <h2 className='font-medium text-xl'>Familias para crear</h2>

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
            className='custom-btn-form w-fit self-start'
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

export default CreateFamilyView;
