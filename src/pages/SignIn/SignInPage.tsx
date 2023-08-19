import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { Input, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';

const schema = object({
  username: string([minLength(1, 'Introducir nombre de usuario')]),
  password: string([minLength(1, 'Introducir contraseña')]),
});

type SignInType = Input<typeof schema>;

export const SignInPage = () => {
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: valibotResolver(schema),
  });

  const inputUsername = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium text-sm' htmlFor={`${id}-username`}>
        Nombre de usuario
      </label>
      <input
        className='custom-input-form'
        type='text'
        id={`${id}-username`}
        placeholder='admin'
        autoComplete='off'
        {...register('username')}
      />
      <p className='text-xs text-red-600 font-medium bg-red-100 px-2 rounded-lg w-fit'>
        {errors.username?.message}
      </p>
    </div>
  );

  const inputPassword = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium text-sm' htmlFor={`${id}-password`}>
        Contrase&ntilde;a
      </label>
      <input
        className='custom-input-form w-full'
        type='password'
        id={`${id}-password`}
        placeholder='••••••••••'
        {...register('password')}
      />
      <p className='text-xs text-red-600 font-medium bg-red-100 px-2 rounded-lg w-fit'>
        {errors.password?.message}
      </p>
    </div>
  );

  return (
    <section className='flex flex-col items-center min-h-full w-full justify-center py-5'>
      <div className='bg-skin-form w-96 max-h-80 max-sm:w-full p-5 flex flex-col gap-5'>
        <h1 className='font-medium text-2xl text-center'>Vivero de FDRyT</h1>
        <form
          className='flex flex-col items-center justify-center gap-5'
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          {inputUsername}
          {inputPassword}
          <button type='submit' className='custom-btn-form'>
            Iniciar Sesi&oacute;n
          </button>
        </form>
      </div>
    </section>
  );
};
