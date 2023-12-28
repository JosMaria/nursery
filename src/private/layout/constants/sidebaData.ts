import { SidebarDataType } from '../types/sidebarTypes';

export const SIDEBAR_DATA: SidebarDataType[] = [
  {
    header: 'Plantas',
    content: [
      { title: 'Crear Planta', path: 'plants/creation' },
      { title: 'Listado de Plantas', path: 'plants' },
      { title: 'Crear Familia', path: 'plants/families/creation' },
      { title: 'Listado de Familias', path: 'families' },
    ],
  },
  {
    header: 'Usuarios',
    content: [
      { title: 'Crear Usuario', path: 'accounts/creation' },
      { title: 'Listado de Usuarios', path: 'accounts' },
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
