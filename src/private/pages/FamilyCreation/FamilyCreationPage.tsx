import { FamilyCreationType, familyCreationSchema } from './validations/validation';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton } from './components/IconButton';
import { BsTrashFill } from 'react-icons/bs';

const FamilyCreationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FamilyCreationType>({
    resolver: yupResolver(familyCreationSchema),
    defaultValues: { families: [{ family_name: '' }] },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'families',
    control,
  });

  return (
    <section className='flex flex-col items-center gap-2'>
      <h2 className='h1-custom'>Familias para crear</h2>
      <form
        className='bg-custom-medium flex flex-col items-center gap-2 rounded-md text-xl p-4 w-full max-w-xs'
        onSubmit={handleSubmit((schema) => console.log(schema))}
      >
        <fieldset className='flex flex-col items-start gap-2'>
          {fields.map((field, index) => (
            <div key={field.id} className='flex flex-col gap-1'>
              <div className='flex gap-2 items-center'>
                <input
                  className='input-custom'
                  type='text'
                  autoComplete='off'
                  placeholder='nombre de la familia'
                  {...register(`families.${index}.family_name` as const)}
                />
                {index !== 0 && (
                  <IconButton
                    action={() => remove(index)}
                    children={<BsTrashFill size='0.8em' />}
                  />
                )}
              </div>
              <p className='msg-error-validation-custom'>
                {errors.families?.[index]?.family_name?.message}
              </p>
            </div>
          ))}
          <button className='button-custom self-end' onClick={() => append({ family_name: '' })}>
            +1 Familia
          </button>
        </fieldset>
        <button type='submit' className='button-custom'>
          Crear
        </button>
      </form>
    </section>
  );
};

export default FamilyCreationPage;
