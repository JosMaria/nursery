import { NavLink } from 'react-router-dom';

const STYLE_ITEM = 'font-medium hover:bg-custom-dark-hover px-5 py-2';
const STYLE_ITEM_SELECTED = 'bg-custom-dark-hover';

export const SidebarLarge = () => {
  return (
    <aside className='max-w-xs w-full bg-custom-dark text-custom-light flex flex-col border-custom-light border-y-2'>
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
    </aside>
  );
};
