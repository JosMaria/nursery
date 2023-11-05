import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
import { BiLogOut } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';

export const LayoutPrivate = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header className='px-5 py-2 bg-sky-700 text-sky-100 font-bold flex justify-between items-center'>
        {/* <button className='text-3xl active:bg-pink-400 ' onClick={showSidebar}>
          &equiv;
        </button> */}
        <h1 className='text-2xl flex items-center gap-2'>
          <span>🪴</span>
          <p className='text-xl max-sm:text-base'>VIVERO</p>
        </h1>
        <BiLogOut className='text-2xl font-semibold cursor-pointer hover:text-sky-200' />
      </header>

      <main className='flex bg-pink-300'>
        <aside className='bg-sky-700 max-w-sm w-full h-screen text-sky-100'>
          {SIDEBAR_DATA.map((item, index) => (
            <NavLinkSection key={index} section={item} />
          ))}
        </aside>
        <Outlet />
      </main>
    </>
  );
};

const SIDEBAR_DATA: SidebarDataType[] = [
  {
    header: 'Publico',
    content: [
      { title: 'Categorias', path: 'category' },
      { title: 'Repertorio', path: 'repertory' },
      { title: 'Novedades', path: 'news' },
    ],
  },
  {
    header: 'Plantas',
    content: [
      { title: 'Crear Planta', path: 'create-plant' },
      { title: 'Listado de Plantas', path: 'list-plants' },
      { title: 'Crear Familia', path: 'create-family' },
      { title: 'Listado de Familias', path: 'list-families' },
    ],
  },
  {
    header: 'Usuarios',
    content: [
      { title: 'Crear Usuario', path: 'create-user' },
      { title: 'Listado de Usuarios', path: 'list-users' },
    ],
  },
  {
    header: 'Reportes',
    content: [{ title: 'Ver Reportes', path: 'reports' }],
  },
  {
    header: 'Inventario',
    content: [{ title: 'Ver Inventario', path: 'inventory' }],
  },
];

type NavLinkItemType = {
  title: string;
  path: string;
};

type SidebarDataType = {
  header: string;
  content: NavLinkItemType[];
};

interface NavLinkSectionProps {
  section: SidebarDataType;
}

const NavLinkSection = ({ section }: NavLinkSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='hover:bg-sky-800 px-6 py-2 flex justify-between text-sm cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className='text-lg font-medium'>{section.header}</p>
        <BiChevronDown size='1.9em' className={`${!isOpen && '-rotate-90'} ${isOpen && 'bg-sky-800'} duration-300 rounded-full`} />
      </div>

      <div className={`${!isOpen && 'hidden'} text-sm font-medium`}>
        {section.content.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${isActive ? 'bg-sky-900' : 'hover:bg-sky-800'} px-10 py-2 flex`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};
