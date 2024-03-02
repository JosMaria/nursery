import { STYLE_TAB, STYLE_TAB_SELECTED } from '../constants';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='max-md:order-last flex font-medium max-md:text-sm max-xs:text-xs w-full md:max-w-xl'>
    <NavLink
      className={({ isActive }) => `${STYLE_TAB} ${isActive && STYLE_TAB_SELECTED}`}
      to='/'
      children='Inicio'
    />
    <NavLink
      className={({ isActive }) => `${STYLE_TAB} ${isActive && STYLE_TAB_SELECTED}`}
      to='repertory'
      children='Listado'
    />
    <NavLink
      className={({ isActive }) => `${STYLE_TAB} ${isActive && STYLE_TAB_SELECTED}`}
      to='news'
      children='Novedades'
    />
  </nav>
);
