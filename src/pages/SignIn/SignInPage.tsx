import { useId } from 'react';

export const SignInPage = () => {
  const id = useId();

  const inputUsername = (
    <div className='custom-container-input'>
      <label className='font-medium text-sm' htmlFor={`${id}-username`}>
        Nombre de usuario
      </label>
      <input
        className='custom-input-form'
        type='text'
        id={`${id}-username`}
        placeholder='admin'
        required
      />
    </div>
  );

  const inputPassword = (
    <div className='custom-container-input'>
      <label className='font-medium text-sm' htmlFor={`${id}-password`}>
        Contrase&ntilde;a
      </label>
      <input
        className='custom-input-form'
        type='password'
        id={`${id}-password`}
        placeholder='••••••••••'
        required
      />
    </div>
  );

  return (
    <section className='flex justify-center'>
      <form className='w-96 h-80 bg-skin-form max-sm:w-full flex flex-col items-center justify-center gap-5 m-5'>
        <h1 className='font-medium text-2xl'>Vivero de FDRyT</h1>
        {inputUsername}
        {inputPassword}
        <button type='submit' className='custom-btn-form'>
          Iniciar Sesi&oacute;n
        </button>
      </form>
    </section>
  );
};
