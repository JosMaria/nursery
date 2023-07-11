import { useState } from "react"
import { SignIn } from "."

const navigation = ['Inicio', 'Listado', 'Novedades']

export const Navbar = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <nav className='flex justify-between items-center p-5 bg-slate-700 text-white'>
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
        Acceder
      </button>
      <SignIn open={openModal} onClose={() => setOpenModal(false)} />
    </nav>
  )
}