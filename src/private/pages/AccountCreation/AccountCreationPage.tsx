import { AccountCreateionSchemaType, accountCreationSchema } from './validations/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useId } from 'react';

const AccountCreationPage = () => {
  const id = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountCreateionSchemaType>({ resolver: yupResolver(accountCreationSchema) });

  // const { mutateAsync: createAccountMutateAsync } = useMutation({
  //   mutationFn: createAccount,
  //   onSuccess: () => {
  //     reset();
  //     alert('Creado exitosamente');
  //   },
  //   onError: () => alert('No se puedo crear la cuenta'),
  // });

  return (
    <section className='flex flex-col items-center gap-2 select-none'>
      <h1 className='h1-custom'>Crear Usuario</h1>
      <form
        className='bg-custom-medium max-w-sm w-full flex flex-col items-center gap-5 p-3 rounded'
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className='flex flex-col items-center gap-3 text-sm'>
          <fieldset className='flex flex-col'>
            <label className='font-medium' htmlFor={`${id}-name`}>
              Nombre
            </label>
            <input
              className='input-custom max-sm:w-64 w-72'
              type='text'
              id={`${id}-name`}
              autoComplete='off'
              {...register('name')}
            />
            <p className='msg-error-validation-custom'>{errors.name?.message}</p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label className='font-medium' htmlFor={`${id}-lastname`}>
              Apellido
            </label>
            <input
              className='input-custom max-sm:w-64 w-72'
              type='text'
              id={`${id}-lastname`}
              autoComplete='off'
              {...register('lastname')}
            />
            <p className='msg-error-validation-custom'>{errors.lastname?.message}</p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label className='font-medium' htmlFor={`${id}-username`}>
              Nombre de Usuario
            </label>
            <input
              className='input-custom max-sm:w-64 w-72'
              type='text'
              id={`${id}-username`}
              autoComplete='off'
              {...register('username')}
            />
            <p className='msg-error-validation-custom'>{errors.username?.message}</p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label className='font-medium' htmlFor={`${id}-password`}>
              Contraseña
            </label>
            <input
              className='input-custom max-sm:w-64 w-72'
              type='password'
              id={`${id}-password`}
              autoComplete='off'
              {...register('password')}
            />
            <p className='msg-error-validation-custom'>{errors.password?.message}</p>
          </fieldset>
        </div>

        <button className='button-custom' type='submit'>
          Crear Usuario
        </button>
      </form>
    </section>
  );
};

export default AccountCreationPage;
