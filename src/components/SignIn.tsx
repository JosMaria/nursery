import { useId } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface SignInProps {
  open: boolean
  onClose: () => void
}

// TODO: implemneted forget password and remember me
export const SignIn = ({ open, onClose }: SignInProps) => {
  const id = useId()

  if (!open) return null

  const inputUsername = (
    <div className='flex flex-col gap-2'>
      <label className='label-form' htmlFor={`${id}-username`}>
        Nombre de usuario
      </label>
      <input
        className='input-form'
        type='text'
        id={`${id}-username`}
        placeholder='consuelo'
        required
      />
    </div>
  )

  const inputPassword = (
    <div className='flex flex-col gap-2'>
      <label className='label-form' htmlFor={`${id}-password`}>
        Contrase&ntilde;a
      </label>
      <input
        className='input-form'
        type='password'
        id={`${id}-password`}
        placeholder='••••••••••'
        required
      />
    </div>
  )

  const form = (
    <form className='flex flex-col gap-6 '>
      {inputUsername}
      {inputPassword}
      <button className='button-submit-form w-full mt-2' type='submit'>
        Iniciar Sesi&oacute;n
      </button>
    </form>
  )

  return (
    <section className='fixed inset-0 backdrop-blur-sm bg-opacity-30 bg-black flex justify-center items-center'>
      <div className={`bg-form-color border-form-color flex flex-col w-full max-w-md border rounded-lg`}>
        <div className='self-end cursor-pointer pt-2 pr-2' onClick={onClose}>
          <AiOutlineCloseCircle color='gray' size='1.2em' />
        </div>
        <div className='flex flex-col gap-5 px-8 pb-5 select-none'>
          <h1 className='flex-1 text-center font-bold tracking-tight text-2xl text-white'>
            Inicio de Sesi&oacute;n
          </h1>
          {form}
        </div>
      </div>
    </section>
  )
}
