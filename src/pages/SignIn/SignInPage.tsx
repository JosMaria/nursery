import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { useTokenStore } from '../../store';
import { authenticate } from './services/signInService';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
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
      toast.success(`Bienvenido ${variables.username}`, { className: 'successfully-alert-custom' });
      navigate('/');
    },
    onError() {},
  });

  return (
    <section className='w-full flex flex-col items-center gap-2'>
      <h1 className='h1-custom'>Inicio de Sesi&oacute;n</h1>
      <form
        className='bg-custom-medium py-5 max-w-sm w-full flex flex-col items-center gap-4'
        onSubmit={handleSubmit((payload) => authenticateMutateAsync(payload))}
      >
        <fieldset className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor={`${id}-username`}>
            Nombre de usuario
          </label>
          <input
            className='input-custom w-72'
            type='text'
            id={`${id}-username`}
            placeholder='usuario'
            autoComplete='off'
            {...register('username')}
          />
          <p className='msg-error-validation-custom'>{errors.username?.message}</p>
        </fieldset>

        <fieldset className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor={`${id}-password`}>
            Contrase&ntilde;a
          </label>
          <input
            className='input-custom w-72'
            type='password'
            id={`${id}-password`}
            placeholder='••••••••••'
            {...register('password')}
          />
          <p className='msg-error-validation-custom'>{errors.password?.message}</p>
        </fieldset>

        <button type='submit' className='button-custom'>
          Iniciar Sesi&oacute;n
        </button>
      </form>
    </section>
  );
};

export default SignInPage;
