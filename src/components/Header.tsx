import { Link, NavLink } from 'react-router-dom';
import { NAVLINKS } from './constants';

export const Header = () => {
  const title = (
    <h1 className='ml-4 text-3xl'>
      🪴
      <span className='ml-2 text-2xl max-md:text-xl'>Vivero</span>
    </h1>
  );

  const navbar = (
    <nav className='flex w-96 tracking-widest max-md:order-last max-md:text-sm max-md:w-full'>
      {NAVLINKS.map((item) => (
        <NavLink
          key={item.text}
          to={item.path}
          className={({ isActive }) =>
            isActive ? 'navlink-active' : 'navlink-inactive'
          }
        >
          {item.text}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header className='bg-color-mark font-medium p-2 flex items-center justify-between gap-2 max-md:flex-wrap max-md:pt-3 max-md:p-0'>
      {title}
      {navbar}
      <Link
        to='signin'
        className='px-2 max-md:text-2xl text-3xl font-medium active:bg-teal-700'
      >
        &#8677;
      </Link>
    </header>
  );
};
