import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='bg-skin-nav bg-opacity-20 flex font-medium text-base max-md:text-sm max-sm:text-xs text-center'>
    <NavLink
      to='.'
      end
      className={({ isActive }) => (isActive ? 'custom-nav-active' : 'custom-nav-inactive')}
    >
      Ficha Tecnica
    </NavLink>
    <NavLink
      to='details'
      className={({ isActive }) => (isActive ? 'custom-nav-active' : 'custom-nav-inactive')}
    >
      Detalles
    </NavLink>
    <NavLink
      to='notes'
      className={({ isActive }) => (isActive ? 'custom-nav-active' : 'custom-nav-inactive')}
    >
      Notas
    </NavLink>
  </nav>
);
