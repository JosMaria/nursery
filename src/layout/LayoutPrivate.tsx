import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { BiLogOut } from 'react-icons/bi';

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
      <header className='px-5 navbar bg-slate-400 flex justify-between items-center'>
        <button className='text-3xl active:bg-pink-400 ' onClick={showSidebar}>
          &equiv;
        </button>
        <BiLogOut className='text-2xl' />
      </header>

      <IconContext.Provider value={{ color: 'undefined' }}>
        <aside
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
      </IconContext.Provider>
      <Outlet />
    </>
  );
};
