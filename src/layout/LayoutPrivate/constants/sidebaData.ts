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
      { title: 'Crear Planta', path: 'plants/creation' },
      { title: 'Listado de Plantas', path: 'plants' },
      { title: 'Crear Familia', path: 'families/creation' },
      { title: 'Listado de Familias', path: 'families' },
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
