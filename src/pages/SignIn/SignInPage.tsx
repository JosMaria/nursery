import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { useTokenStore } from '../../store';
import { authenticate } from './services';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ErrorType } from '../../types';
import { SignInSchemaType, signInValidation } from './validations';

const SignInPage = () => {
  const id = useId();
  const navigate = useNavigate();
  const { updateToken } = useTokenStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: yupResolver(signInValidation),
  });

  const { mutateAsync: authenticateMutateAsync } = useMutation({
    mutationFn: authenticate,
    onSuccess(data, variables) {
      updateToken(data.token);
      toast.success(`Bienvenido ${variables.username}`, { className: 'custom-toast-success' });
      navigate('/');
    },
    onError(error) {
      const { response } = error as ErrorType;
      if (response) {
        toast.error('Datos incorrectos', { className: 'custom-toast-error' });
      }
    },
  });

  return (
    <section className='bg-skin-form w-96 max-h-80 max-sm:w-full p-5 flex flex-col gap-5 self-center'>
      <h1 className='font-medium text-2xl text-center'>Inicio de Sesi&oacute;n</h1>
      <form
        className='flex flex-col items-center justify-center gap-5'
        onSubmit={handleSubmit((payload) => authenticateMutateAsync(payload))}
      >
        <fieldset className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor={`${id}-username`}>
            Nombre de usuario
          </label>
          <input
            className='custom-input-form'
            type='text'
            id={`${id}-username`}
            placeholder='usuario'
            autoComplete='off'
            {...register('username')}
          />
          <p className='custom-lbl-form-error'>{errors.username?.message}</p>
        </fieldset>

        <fieldset className='flex flex-col gap-1'>
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
        </fieldset>
        <button type='submit' className='custom-btn-form'>
          Iniciar Sesi&oacute;n
        </button>
      </form>
    </section>
  );
};

export default SignInPage;
