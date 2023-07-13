import { PiSignInBold } from 'react-icons/pi';

export const Header = () => {
  const logo = (
    <p>LOGO</p>
  )

  const signIn = (
    <div>
      <PiSignInBold size='1.4em' />
    </div>
  )

  return (
    <header className='w-full flex justify-between items-center p-4 bg-paint-brown text-white'>
      {logo}
      <Navbar />
      {signIn}
    </header >
  )
}

const NAV_ITEMS = ['Inicio', 'Listado', 'Novedades']

const Navbar = () => (
  <nav className='flex justify-center gap-5 text-lg font-medium'>
    {NAV_ITEMS.map((item, index) => (
      <div key={index} onClick={() => console.log(`click on item ${item}`)}>{item}</div>
    ))}
  </nav>
)
