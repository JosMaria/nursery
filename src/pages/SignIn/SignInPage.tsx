import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { Input, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { toast } from 'react-hot-toast';
import { useToken } from '../../store';
import { authenticate } from './services';
import { SignInType } from './types';
import { useNavigate } from 'react-router-dom';

const SignInSchema = object({
  username: string([minLength(1, 'Introducir nombre de usuario')]),
  password: string([minLength(1, 'Introducir contraseña')]),
});

type SignInValidationType = Input<typeof SignInSchema>;

export const SignInPage = () => {
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInValidationType>({
    resolver: valibotResolver(SignInSchema),
  });

  const { changeToken } = useToken();
  const navigate = useNavigate()

  const startSession = (payload: SignInType) => {
    authenticate(payload)
      .then((response) => {
        changeToken(response.token);
        toast.success(`validacion existosa`, {
          className: 'custom-toast-success',
        });
        navigate('/')
      })
      .catch((error) => {
        const { response } = error;
        if (response) {
          if (response.status) {
            if (response.status === 403) {
              reset();
              toast.error('Datos incorrectos');
            }
          }
        }
      });
  };

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
      <p className='custom-lbl-form-error'>{errors.username?.message}</p>
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
      <p className='custom-lbl-form-error'>{errors.password?.message}</p>
    </div>
  );

  return (
      <section className='bg-skin-form w-96 max-h-80 max-sm:w-full p-5 flex flex-col gap-5 self-center'>
        <h1 className='font-medium text-2xl text-center'>Vivero de FDRyT</h1>
        <form
          className='flex flex-col items-center justify-center gap-5'
          onSubmit={handleSubmit(startSession)}
        >
          {inputUsername}
          {inputPassword}
          <button type='submit' className='custom-btn-form'>
            Iniciar Sesi&oacute;n
          </button>
        </form>
      </section>
  );
};
