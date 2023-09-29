import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { LayoutPublic } from '../layout';
import CatalogPage from '../pages/Catalog/CatalogPage';
import { SingleProductRoutes } from '../pages/SingleProduct/SingleProductRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<LayoutPublic />}>
      <Route index element={<CatalogPage />} />
      <Route path='product/:id/*' element={<SingleProductRoutes />} />
      <Route path='*' element={<p>Ruta no encontrada</p>} />
    </Route>,
  ])
);
