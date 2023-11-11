import { useFieldArray, useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import toast from 'react-hot-toast';
import { HttpStatusCode } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFamilies } from '../services';
import { ErrorType } from '../../../types';
import { CreateFamilySchema, CreateFamilySchemaType } from '../validations';
import { TrashButton } from '.';

export const CreateFamilyForm = () => {
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

  const queryClient = useQueryClient();

  const { mutate: createFamilyMutate } = useMutation({
    mutationFn: createFamilies,
    onSuccess(response) {
      queryClient.invalidateQueries({ queryKey: ['families'] });
      reset();
      toast.success(
        response.length > 1 ? 'Familias guardadas exitosamente' : 'Familia guardada exitosamente',
        { className: 'custom-toast-success' }
      );
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
      className='flex flex-col items-center gap-2 rounded-md text-xl'
      onSubmit={handleSubmit((schema) => createFamilyMutate(schema.families))}
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
              <TrashButton action={() => remove(index)} />
            </div>
            <p className='custom-lbl-form-error'>
              {errors.families?.[index]?.family_name?.message}
            </p>
          </div>
        ))}const {
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
      
        const queryClient = useQueryClient();
      
        const { mutate: createFamilyMutate } = useMutation({
          mutationFn: createFamilies,
          onSuccess(response) {
            queryClient.invalidateQueries({ queryKey: ['families'] });
            reset();
            toast.success(
              response.length > 1 ? 'Familias guardadas exitosamente' : 'Familia guardada exitosamente',
              { className: 'custom-toast-success' }
            );
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
            className='flex flex-col items-center gap-2 rounded-md text-xl'
            onSubmit={handleSubmit((schema) => createFamilyMutate(schema.families))}
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
                    <TrashButton action={() => remove(index)} />
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
        );        <button
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
  );
};
