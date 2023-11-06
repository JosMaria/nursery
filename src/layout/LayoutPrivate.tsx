import { Fragment, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';

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

export const LayoutPrivate = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = () => setIsOpenSidebar(true);
  const closeSidebar = () => setIsOpenSidebar(false);

  const header = (
    <header className='h-14 px-3 max-sm:px-1 bg-sky-700 text-sky-100 font-bold flex justify-between items-center'>
      <div className='flex'>
        {isOpenSidebar ? (
          <button
            className='leading-none rounded-md text-2xl active:bg-sky-900 lg:hidden w-8 h-8'
            onClick={closeSidebar}
          >
            &times;
          </button>
        ) : (
          <button
            className='leading-none rounded-md text-3xl active:bg-sky-900 lg:hidden w-8 h-8'
            onClick={openSidebar}
          >
            &equiv;
          </button>
        )}

        <h1 className='text-2xl flex items-end'>
          <span>🪴</span>
          <p className='text-xl max-sm:text-base'>VIVERO</p>
        </h1>
      </div>

      <div className='flex items-center gap-3'>
        <div className='flex flex-col text-sm max-sm:text-xs font-medium bg-sky-950 text-sky-100 items-end rounded-md py-1 px-4 max-sm:px-2'>
          <p>JosMaria</p>
          <p>ADMINISTRADOR</p>
        </div>
        <button className='flex justify-center items-center font-semibold text-2xl rounded-md hover:bg-sky-900 leading-none w-8 h-8'>
          <BiLogOut />
        </button>
      </div>
    </header>
  );

  return (
    <>
      {header}
      <div className='lg:hidden'>
        {isOpenSidebar ? (
          <SidebarToDeviceSmall closeSidebar={closeSidebar} />
        ) : (
          <main className='bg-pink-600 w-full h-screen'>asd</main>
        )}
      </div>

      <div className='flex max-lg:hidden'>
        <SidebarToDeviceLarge />
        <main className='bg-pink-600 w-full h-screen'>asd</main>
      </div>
    </>
  );
};

const SidebarToDeviceLarge = () => (
  <aside className='bg-sky-700 max-w-xs w-full h-screen text-sky-100'>
    {SIDEBAR_DATA.map((item, index) => (
      <NavLinkSection key={index} section={item} />
    ))}
  </aside>
);

interface SidebarToDeviceSmallProps {
  closeSidebar: () => void;
}

const SidebarToDeviceSmall = ({ closeSidebar }: SidebarToDeviceSmallProps) => (
  <aside className='w-full bg-sky-700 text-sky-100'>
    {SIDEBAR_DATA.map((item, index) => (
      <Fragment key={index}>
        <div className='flex flex-col'>
          <h2 className='font-medium px-4 py-2 max-sm:py-1.5 max-sm:text-sm'>{item.header}</h2>
          {item.content.map((navlinkItem, index) => (
            <NavLink
              key={index}
              to={navlinkItem.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-sky-950' : 'hover:bg-sky-800'
                } px-10 py-2 max-sm:py-1.5 flex text-sm max-sm:text-xs`
              }
            >
              {navlinkItem.title}
            </NavLink>
          ))}
        </div>
      </Fragment>
    ))}
  </aside>
);

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
        <BiChevronDown
          size='1.9em'
          className={`${!isOpen && '-rotate-90'} ${
            isOpen && 'bg-sky-800'
          } duration-300 rounded-full`}
        />
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
