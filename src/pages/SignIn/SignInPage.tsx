import { useId } from 'react';

export const SignInPage = () => {
  const id = useId();

  const inputUsername = (
    <div className='container-input'>
      <label className='font-medium' htmlFor={`${id}-username`}>
        Nombre de usuario
      </label>
      <input
        className='form-input'
        type='text'
        id={`${id}-username`}
        placeholder='admin'
        required
      />
    </div>
  );

  const inputPassword = (
    <div className='container-input'>
      <label className='font-medium' htmlFor={`${id}-password`}>
        Contrase&ntilde;a
      </label>
      <input
        className='form-input'
        type='password'
        id={`${id}-password`}
        placeholder='••••••••••'
        required
      />
    </div>
  );

  return (
    <form className='bg-stone-400 w-96 h-80 max-sm:w-full flex flex-col items-center justify-center gap-5 m-5'>
      <h1 className='font-medium text-3xl'>Vivero de FDRyT</h1>
      {inputUsername}
      {inputPassword}
      <button type='submit' className='form-btn'>
        Iniciar Sesi&oacute;n
      </button>
    </form>
  );
};
