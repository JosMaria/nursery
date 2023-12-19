import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants/navLinksData';

export const Navbar = () => (
  <nav className='flex lg:flex-1 max-lg:order-last w-full max-sm:text-sm max-xs:text-xs'>
    {NAV_LINKS.map((item) => (
      <NavLink
        key={item.text}
        to={item.path}
        className={({ isActive }) =>
          `py-2 max-md:py-1.5 text-center flex-1 hover:bg-custom-dark-hover ${
            isActive && 'border-b-2 border-custom-light bg-custom-dark-hover'
          }`
        }
      >
        {item.text}
      </NavLink>
    ))}
  </nav>
);
