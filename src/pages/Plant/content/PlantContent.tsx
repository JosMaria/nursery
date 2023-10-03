import { NavLink, Outlet } from 'react-router-dom';

export const PlantContent = () => (
  <div className='flex flex-col items-center gap-3 w-full'>
    <nav className='bg-skin-nav bg-opacity-20 flex font-medium text-base max-md:text-sm max-sm:text-xs text-center max-xs:w-full max-sm:w-3/4 max-lg:w-2/3 max-xl:w-1/2 w-1/3'>
      <NavLink
        to='.'
        end
        className={({ isActive }) => (isActive ? 'custom-nav-active' : 'custom-nav-inactive')}
      >
        Crear Planta
      </NavLink>
      <NavLink
        to='list'
        className={({ isActive }) => (isActive ? 'custom-nav-active' : 'custom-nav-inactive')}
      >
        Listado
      </NavLink>
    </nav>
    <Outlet />
  </div>
);
