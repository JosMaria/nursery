import { useFieldArray, useForm } from 'react-hook-form';
import { CreateFamilySchema, CreateFamilySchemaType } from './validations';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { BsTrashFill } from 'react-icons/bs';
import { useMutateAsyncFamilies } from '../../hooks';
import toast from 'react-hot-toast';
import { ErrorType } from '../../../../types';
import { HttpStatusCode } from 'axios';
import { CreateFamilyDTO } from '../../types';

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

  const { createFamiliesMutation } = useMutateAsyncFamilies();

  const handleCreateFamilies = async (payload: CreateFamilyDTO[]) => {
    try {
      const response = await createFamiliesMutation(payload);
      reset();
      toast.success(
        response.length > 1 ? 'Familias guardadas exitosamente' : 'Familia guardada exitosamente',
        { className: 'custom-toast-success' }
      );
    } catch (error) {
      const { response } = error as ErrorType;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(response.data.reason, { className: 'custom-toast-error' });
      }
    }
  };

  return (
    <article className='bg-skin-form w-full p-2'>
      <form
        className='flex flex-col items-center gap-2 rounded-md text-xl'
        onSubmit={handleSubmit((schema) => handleCreateFamilies(schema.families))}
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
                <ButtonTrash action={() => remove(index)} />
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

interface ButtonTrashProps {
  action: () => void;
}
const ButtonTrash = ({ action }: ButtonTrashProps) => (
  <button
    type='button'
    onClick={action}
    className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'
  >
    <BsTrashFill />
  </button>
);

export default CreateFamilyView;
