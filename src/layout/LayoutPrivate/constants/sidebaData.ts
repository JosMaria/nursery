import { SidebarDataType } from '../types/sidebarTypes';

export const SIDEBAR_DATA: SidebarDataType[] = [
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
