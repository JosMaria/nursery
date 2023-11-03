import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { BiLogOut } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';

const GroupNavLinks = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        className='p-6 py-3 hover:bg-blue-400 flex justify-between'
        onClick={() => setActive((prev) => !prev)}
      >
        <p>Items</p>
        {active ? <span>&#9650;</span> : <span>&#9660;</span>}
      </button>
      <div className={`${!active && 'hidden'} flex flex-col`}>
        {SidebarData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'pl-6 py-3 bg-violet-500' : 'pl-6 py-3 hover:bg-green-500'
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

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
          <div className='flex justify-between px-6 py-2 hover:bg-sky-800'>
            <p className='text-lg font-medium'>Planta</p>
            <BiChevronDown size='1.8em' />
          </div>
          <NavLink to='create-plant' className={({ isActive }) => isActive ? 'bg-sky-900 px-10 py-2 flex text-sm' : 'px-10 py-2 flex hover:bg-sky-800 text-sm'}>
            Crear Planta
          </NavLink>
          <NavLink to='list-plants' className={({ isActive }) => isActive ? 'bg-sky-900 px-10 py-2 flex text-sm' : 'px-10 py-2 flex hover:bg-sky-800 text-sm'}>
            Listado de Plantas
          </NavLink>
          <NavLink to='create-family' className={({ isActive }) => isActive ? 'bg-sky-900 px-10 py-2 flex text-sm' : 'px-10 py-2 flex hover:bg-sky-800 text-sm'}>
            Crear Planta
          </NavLink>
          <NavLink to='list-families' className={({ isActive }) => isActive ? 'bg-sky-900 px-10 py-2 flex text-sm' : 'px-10 py-2 flex hover:bg-sky-800 text-sm'}>
            Listado de Familias
          </NavLink>
        </aside>
        <Outlet />
        {/* <aside
          className={
            sidebar
              ? 'bg-red-500 max-w-xs w-full h-screen overflow-y-scroll fixed left-0 duration-200'
              : 'bg-red-500 max-w-xs w-full h-screen overflow-y-scroll fixed left-[-100%] duration-700'
          }
        >
          <div className='flex flex-col text-white'>
            <GroupNavLinks />
          </div>
        </aside>
        <Outlet /> */}
      </main>
    </>
  );
};
