import { BiChevronDown } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const STYLE_ITEM = 'font-medium hover:bg-custom-dark-hover py-1.5 pl-8';
const STYLE_ITEM_SELECTED = 'bg-custom-dark-hover';

export const SidebarLarge = () => {
  return (
    <aside className='lg:max-w-xs w-full bg-custom-dark text-custom-light flex flex-col'>
      <div className='font-medium hover:bg-custom-dark-hover cursor-pointer flex justify-between items-center px-5 py-2'>
        <p>Plantas</p>
        <BiChevronDown
          size='1.5em'
          className={`duration-300 rounded-full ${!true && '-rotate-90'} ${
            false && 'bg-custom-dark-hover'
          }`}
        />
      </div>
      <div className='flex flex-col'>
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/create/plant'
          children='Crear Planta'
        />
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/list/plant'
          children='Listado de Plantas'
        />
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/create/family'
          children='Crear Familias'
        />
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/list/family'
          children='Listado de Familias'
        />
      </div>

      <div className='font-medium hover:bg-custom-dark-hover cursor-pointer flex justify-between items-center px-5 py-2'>
        <p>Cuentas</p>
        <BiChevronDown
          size='1.5em'
          className={`duration-300 rounded-full ${!true && '-rotate-90'} ${
            false && 'bg-custom-dark-hover'
          }`}
        />
      </div>
      <div className='flex flex-col'>
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/list/account'
          children='Listado de Cuentas'
        />
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/create/account'
          children='Crear cuenta'
        />
      </div>

      <div className='font-medium hover:bg-custom-dark-hover cursor-pointer flex justify-between items-center px-5 py-2'>
        <p>Inventario</p>
        <BiChevronDown
          size='1.5em'
          className={`duration-300 rounded-full ${!true && '-rotate-90'} ${
            false && 'bg-custom-dark-hover'
          }`}
        />
      </div>
      <div className='flex flex-col'>
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/inventory'
          children='Ver Inventario'
        />
      </div>

      <div className='font-medium hover:bg-custom-dark-hover cursor-pointer flex justify-between items-center px-5 py-2'>
        <p>Reportes</p>
        <BiChevronDown
          size='1.5em'
          className={`duration-300 rounded-full ${!true && '-rotate-90'} ${
            false && 'bg-custom-dark-hover'
          }`}
        />
      </div>
      <div className='flex flex-col'>
        <NavLink
          className={({ isActive }) => `${STYLE_ITEM} ${isActive && STYLE_ITEM_SELECTED}`}
          to='nursery/reports'
          children='Ver Reportes'
        />
      </div>
    </aside>
  );
};
