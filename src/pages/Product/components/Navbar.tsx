import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='bg-custom-dark text-custom-light max-sm:text-sm font-medium flex text-center h-10'>
    <NavLink
      to='.'
      end
      className={({ isActive }) =>
        `flex-1 flex flex-col justify-center hover:bg-custom-dark-hover h-full ${
          isActive && 'border-b-2 border-custom-light bg-custom-dark-hover'
        }`
      }
    >
      Ficha T&eacute;cnica
    </NavLink>
    <NavLink
      to='details'
      className={({ isActive }) =>
        `flex-1 flex flex-col justify-center hover:bg-custom-dark-hover h-full ${
          isActive && 'border-b-2 border-custom-light bg-custom-dark-hover'
        }`
      }
    >
      Detalles
    </NavLink>
  </nav>
);
