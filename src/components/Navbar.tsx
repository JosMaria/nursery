import { useState } from 'react'
import { PiSignInBold } from 'react-icons/pi';
import { SignIn } from '.';

const navigation = ['Inicio', 'Listado', 'Novedades']

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <nav className='flex justify-between items-center p-5 bg-paint-brown text-white'>
      <p>
        LOGO
      </p>
      <ul className='flex justify-center gap-5 text-xl'>
        {
          navigation.map((item, index) =>
            (<li key={index} onClick={() => console.log(`click on item ${item}`)}>{item}</li>))
        }
      </ul>
      <button onClick={() => setOpenModal(true)}>
        <PiSignInBold size='1.4em' />
      </button>
      <SignIn open={openModal} onClose={() => setOpenModal(false)} />
    </nav>
  )
}