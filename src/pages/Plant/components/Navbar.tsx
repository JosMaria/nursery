import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='bg-skin-nav bg-opacity-20 flex font-medium text-base max-md:text-sm max-sm:text-xs text-center w-full'>
    <NavLink
      to='.'
      end
      className={({ isActive }) => (isActive ? 'custom-nav-active' : 'custom-nav-inactive')}
    >
      Crear Planta
    </NavLink>
    <NavLink
      to='list'
      className={({ isActive }) => (isActive ? 'custom-nav-active' : 'custom-nav-inactive')}
    >
      Listado
    </NavLink>
  </nav>
);
