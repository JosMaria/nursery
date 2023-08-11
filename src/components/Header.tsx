import { NavLink } from 'react-router-dom';

const NAVLINKS = [
  { text: 'Inicio', path: '.' },
  { text: 'Listado', path: 'list' },
  { text: 'Novedades', path: 'news' },
];

export const Header = () => {
  const title = (
    <h1 className='ml-4 text-3xl'>
      🪴
      <span className='ml-2 text-2xl font-mono font-semibold max-md:text-xl'>
        Vivero
      </span>
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
    <header className='bg-teal-800 text-white p-2 flex items-center justify-between gap-2 max-md:flex-wrap max-md:pt-3 max-md:p-0'>
      {title}
      {navbar}
      <button className='mr-4 max-md:text-2xl text-3xl'>&#8677;</button>
    </header>
  );
};
