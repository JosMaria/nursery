import { NavLink, Outlet } from 'react-router-dom';

const STYLE_NAV = 'py-2 max-sm:px-1 flex-1 w-full';
const STYLE_NAV_ACTIVE = `${STYLE_NAV} bg-skin-nav text-skin-light`;
const STYLE_NAV_INACTIVE = `${STYLE_NAV} hover:bg-skin-nav hover:text-skin-light`;

const PlantPage = () => {
  return (
    <div className='flex flex-col gap-3'>
      <nav className='bg-skin-nav bg-opacity-20 flex font-medium text-base max-md:text-sm max-sm:text-xs text-center h-fit w-full'>
        <NavLink
          to='.'
          end
          className={({ isActive }) => (isActive ? STYLE_NAV_ACTIVE : STYLE_NAV_INACTIVE)}
        >
          Crear Planta
        </NavLink>
        <NavLink
          to='plant-list'
          className={({ isActive }) => (isActive ? STYLE_NAV_ACTIVE : STYLE_NAV_INACTIVE)}
        >
          Listado
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default PlantPage;
