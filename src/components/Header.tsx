import { PiSignInBold } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const logo = (
    <p>LOGO</p>
  )

  const signIn = (
    <div onClick={() => console.log('click signin')}>
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

const NAVLINKS = [
  {
    text: 'Inicio',
    path: '.'
  },
  {
    text: 'Listado',
    path: 'list'
  },
  {
    text: 'Novedades',
    path: 'news'
  }
]

const Navbar = () => (
  <nav className='flex justify-center gap-5 text-lg font-medium'>
    {NAVLINKS.map(item => (
      <NavLink
        key={item.text}
        to={item.path}
        className={({ isActive }) => isActive ? 'underline' : ''}
      >
        {item.text}
      </NavLink>
    ))}
  </nav>
)
