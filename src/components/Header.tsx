import { Link, NavLink } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';

const NAV_LINKS = [
  { text: 'Inicio', path: '.' },
  { text: 'Listado', path: 'repertory' },
  { text: 'Novedades', path: 'news' },
];

const Navbar = () => (
  <nav className='max-sm:row-start-2 max-sm:col-span-full justify-self-center place-self-end flex w-96 max-sm:w-full max-md:text-sm max-xs:text-xs'>
    {NAV_LINKS.map((item) => (
      <NavLink
        key={item.text}
        to={item.path}
        className={({ isActive }) =>
          `py-2 max-sm:py-1 grid place-content-center flex-1 ${
            isActive && 'border-b-4 bg-skin-nav border-skin-nav'
          }`
        }
      >
        {item.text}
      </NavLink>
    ))}
  </nav>
);

export const Header = () => (
  <header className='bg-skin-dark text-skin-light font-medium grid grid-cols-3 max-sm:grid-cols-2 max-sm:grid-rows-2 items-center max-sm:items-end gap-1'>
    <h1 className='ml-2 text-2xl flex items-end gap-2'>
      <span>🪴</span>
      <p className='text-xl max-sm:text-base'>VIVERO</p>
    </h1>
    <Navbar />
    <Link
      to='signin'
      className='mr-2 justify-self-end text-3xl max-md:text-2xl font-medium active:bg-skin-btn-hover'
    >
      <BiLogIn />
    </Link>
  </header>
);
