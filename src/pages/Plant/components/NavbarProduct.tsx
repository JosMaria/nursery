import { NavLink } from 'react-router-dom';

export const NavbarProduct = () => {
  const STYLE_NAV = 'py-2 max-sm:px-1 flex-1 w-full';
  const STYLE_NAV_ACTIVE = `${STYLE_NAV} bg-skin-nav text-skin-light`;
  const STYLE_NAV_INACTIVE = `${STYLE_NAV} hover:bg-skin-nav hover:text-skin-light`;

  return (
    <nav className='bg-skin-nav bg-opacity-20 flex font-medium text-base max-md:text-sm max-sm:text-xs text-center'>
      <NavLink
        to='.'
        end
        className={({ isActive }) =>
          isActive ? STYLE_NAV_ACTIVE : STYLE_NAV_INACTIVE
        }
      >
        Ficha tecnica
      </NavLink>
      <NavLink
        to='details'
        className={({ isActive }) =>
          isActive ? STYLE_NAV_ACTIVE : STYLE_NAV_INACTIVE
        }
      >
        Detalles
      </NavLink>
      <NavLink
        to='notes'
        className={({ isActive }) =>
          isActive ? STYLE_NAV_ACTIVE : STYLE_NAV_INACTIVE
        }
      >
        Notas
      </NavLink>
    </nav>
  );
};
