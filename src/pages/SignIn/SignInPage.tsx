import { useId } from 'react';

export const SignInPage = () => {
  const id = useId();

  const inputUsername = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium' htmlFor={`${id}-username`}>
        Nombre de usuario
      </label>
      <input
        className='form-input'
        type='text'
        id={`${id}-username`}
        placeholder='consuelo'
        required
      />
    </div>
  );

  const inputPassword = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium' htmlFor={`${id}-password`}>
        Contrase&ntilde;a
      </label>
      <input
        className=' text-sm px-3 py-2 border rounded-md  focus:ring-opacity-40 focus:outline-none focus:ring bg-gray-300 border-gray-400 focus:border-blue-300 focus:ring-blue-300'
        type='password'
        id={`${id}-password`}
        placeholder='••••••••••'
        required
      />
    </div>
  );

  return (
    <form className=' justify-center gap-5 bg-slate-400 p-5 w-full h-fit flex flex-col items-center'>
      <h1 className='font-medium text-2xl'>Vivero de FDRyT</h1>
      {inputUsername}
      {inputPassword}
      <button type='submit' className='form-btn'>
        Iniciar Sesi&oacute;n
      </button>
    </form>
  );
};
