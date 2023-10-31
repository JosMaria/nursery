import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';

export const AccountsRoutes = () => (
  <Routes>
    <Route index element={<p>Pagina para listado</p>} />
    <Route path='create' element={<p>Pagina para el formulario</p>} />
    <Route path=':id' element={<p>pagina para usuario informacion</p>} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);
