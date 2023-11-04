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
          <ItemsWithContent />
        </aside>
        <Outlet />
      </main>
    </>
  );
};

const ITEMS_WITH_CONTENT_LINKS = [
  {
    text: 'Plantas',
    content: [
      { title: 'Crear Planta', path: 'create-plant' },
      { title: 'Listado de Plantas', path: 'list-plants' },
      { title: 'Crear Familia', path: 'create-family' },
      { title: 'Listado de Familias', path: 'list-families' },
    ],
  },
  {
    text: 'Usuarios',
    content: [
      { title: 'Crear Usuario', path: 'create-user' },
      { title: 'Listado de Usuarios', path: 'list-users' },
    ],
  },
];

const ITEMS_WITHOUT_CONTENT_LINKS = [
  { title: 'Catalogo', path: 'catalog' },
  { title: 'Repertorio', path: 'repertory' },
  { title: 'Reportes', path: 'repertory' },
  { title: 'Inventario', path: 'inventory' },
];

const PLANT_ITEMS = [
  { title: 'Crear Planta', path: 'create-plant' },
  { title: 'Listado de Plantas', path: 'list-plants' },
  { title: 'Crear Familia', path: 'create-family' },
  { title: 'Listado de Familias', path: 'list-families' },
];

const ItemsWithContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {ITEMS_WITH_CONTENT_LINKS.map((item) => (
        <>
          <div
            className='hover:bg-sky-800 px-6 py-2 flex justify-between text-sm'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <p className='text-lg font-medium'>{item.text}</p>
            <BiChevronDown size='1.9em' className={`${!isOpen && '-rotate-90'} duration-300`} />
          </div>
          <div className={`${!isOpen && 'hidden'}`}>
            {item.content.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `${isActive ? 'bg-sky-900' : 'hover:bg-sky-800'} px-10 py-2 flex text-sm`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </>
      ))}
    </>
  );
};

const USER_ITEMS = [
  { title: 'Crear Usuario', path: 'create-user' },
  { title: 'Listado de Usuarios', path: 'list-users' },
];

const NavbarUsers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='hover:bg-sky-800 px-6 py-2 flex justify-between text-sm'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className='text-lg font-medium'>Usuarios</p>
        <BiChevronDown size='1.9em' className={`${!isOpen && '-rotate-90'} duration-300`} />
      </div>
      <div className={`${!isOpen && 'hidden'}`}>
        {USER_ITEMS.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${isActive ? 'bg-sky-900' : 'hover:bg-sky-800'} px-10 py-2 flex text-sm`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};
