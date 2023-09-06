import { DevTool } from '@hookform/devtools';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useFieldArray, useForm } from 'react-hook-form';
import { BsTrashFill } from 'react-icons/bs';
import { Input, array, minLength, object, string } from 'valibot';

const CreateFamilySchema = object({
  families: array(
    object({
      family_name: string([minLength(1, 'Debe ingresar mas de 1 caracter')]),
    })
  ),
});

type CreateFamilySchemaType = Input<typeof CreateFamilySchema>;

const CreateFamilyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<CreateFamilySchemaType>({
    resolver: valibotResolver(CreateFamilySchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'families',
  });

  const handleCreateFamily = (e: CreateFamilySchemaType) => {
    console.log(e)
    reset({families: [{family_name: ''}]})
  }

  return (
    <section className='bg-skin-form w-1/2 flex flex-col items-center gap-5 p-5'>
      <h1 className='text-xl font-medium tracking-wider'>Crear familias</h1>
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
        <DevTool control={control} />
      </form>
    </section>
  );
};

export default CreateFamilyPage;
