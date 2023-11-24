import { yupResolver } from '@hookform/resolvers/yup';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';

const accountCreationSchema = object({
  name: string().required('El nombre es requerido'),
  lastname: string().required('El apellido es requerido'),
  username: string().required('El nombre de usuario es requerido'),
  password: string().required('La contraseña es requerida'),
});

type AccountCreateionSchemaType = InferType<typeof accountCreationSchema>;

const AccountCreationPage = () => {
  const id = useId();

  const {
    register,
    resetField,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountCreateionSchemaType>({ resolver: yupResolver(accountCreationSchema) });

  return (
    <section className='flex flex-col items-center gap-2 select-none'>
      <h1 className='h1-custom'>Crear Usuario</h1>
      <form
        className='bg-custom-medium max-w-sm w-full flex flex-col items-center gap-5 py-3 px-5'
        onSubmit={handleSubmit((e) => console.log(e))}
      >
        <div className='flex flex-col items-center gap-3 text-sm'>
          <fieldset className='flex flex-col gap-1'>
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

          <fieldset className='flex flex-col gap-1'>
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

          <fieldset className='flex flex-col gap-1'>
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

          <fieldset className='flex flex-col gap-1'>
            <label className='font-medium' htmlFor={`${id}-password`}>
              Constraseña
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
