import { useId } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

// TODO: implemneted forget password and remember me
export const Signin = () => {
  const id = useId()

  const inputUsername = (
    <div className='flex flex-col gap-2'>
      <label
        className='text-sm font-medium text-white'
        htmlFor={`${id}-username`}
      >
        Nombre de usuario
      </label>
      <input
        className='border text-sm rounded-lg w-full p-2.5 bg-slate-700 border-slate-600 placeholder-slate-400 text-white'
        type='text'
        id={`${id}-username`}
        placeholder='consuelo'
        required
      />
    </div>
  )

  const inputPassword = (
    <div className='flex flex-col gap-2'>
      <label
        className='text-sm font-medium text-white'
        htmlFor={`${id}-password`}
      >
        Contrase&ntilde;a
      </label>
      <input
        className='border text-sm rounded-lg w-full p-2.5 bg-slate-700 border-slate-600 placeholder-slate-400 text-white'
        type='password'
        id={`${id}-password`}
        placeholder='•••••••••••'
        required
      />
    </div>
  )

  const form = (
    <form className='flex flex-col gap-6 '>
      {inputUsername}
      {inputPassword}
      <button
        className='w-full text-white mt-2 font-medium rounded-lg text-sm p-3.5 text-center bg-[#3b7631] hover:bg-[#275121] '
        type='submit'
      >
        Iniciar Sesi&oacute;n
      </button>
    </form>
  )

  return (
    <section className='fixed inset-0 backdrop-blur-sm bg-opacity-40 bg-black flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-md bg-slate-800 border-slate-700 border rounded-lg'>
        <div className='self-end cursor-pointer p-1'>
          <AiOutlineCloseCircle color='gray' size='1.3em' />
        </div>
        <div className='flex flex-col gap-5 px-10 pb-7'>
          <h1 className='flex-1 text-center font-bold tracking-tight text-2xl text-white'>
            Inicio de Sesi&oacute;n
          </h1>
          {form}
        </div>
      </div>
    </section>
  )
}