import { useId } from 'react'

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
        className='border text-sm rounded-lg w-full p-3 bg-slate-700 border-slate-600 placeholder-slate-400 text-white'
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
        className='border text-sm rounded-lg w-full p-3 bg-slate-700 border-slate-600 placeholder-slate-400 text-white'
        type='password'
        id={`${id}-password`}
        placeholder='•••••••••••'
        required
      />
    </div>
  )

  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-5 px-10 py-8 w-full max-w-md rounded-lg border bg-slate-800 border-slate-700 '>
        <h1 className='text-center font-bold tracking-tight text-2xl text-white'>
          Inicio de Sesi&oacute;n
        </h1>
        <form className='flex flex-col gap-7'>
          {inputUsername}
          {inputPassword}
          <button
            className='w-full text-white mt-2 font-medium rounded-lg text-sm p-3.5 text-center bg-[#275121] hover:bg-[#3b7631]'
            type='submit'
          >
            Iniciar Sesi&oacute;n
          </button>
        </form>
      </div>
    </section>
  )
}