import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { LayoutPublic } from '../layout';
import { SingleProductRoutes } from '../pages/SingleProduct/SingleProductRoutes';
import { PlantRoutes } from '../pages/Plant/PlantRoutes';
import { FamilyRoutes } from '../pages/Family/FamilyRoutes';

import CatalogPage from '../pages/Catalog/CatalogPage';
import RepertoryPage from '../pages/Repertory/RepertoryPage';
import NewsPage from '../pages/News/NewsPage';
import SingleNewsPage from '../pages/SingleNews/SingleNewsPage';
import SignInPage from '../pages/SignIn/SignInPage';
import { AccountsRoutes } from '../pages/Accounts/AccountsRoutes';
import { LayoutPrivate } from '../layout/LayoutPrivate/LayoutPrivate';
import { ProtectedRoute } from '../utils';

const isAuthenticate = false;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={isAuthenticate ? <LayoutPrivate /> : <LayoutPublic />}>
      <Route index element={<p>Pagina para el catalogo</p>} />
      <Route element={<ProtectedRoute canActivate={isAuthenticate} />}>
        <Route path='plants/*' element={<PlantRoutes />} />
        <Route path='accounts/*' element={<p>sub rutas para las accounts page</p>} />
        <Route path='inventory' element={<p>pagina para el inventario</p>} />
        <Route path='reports' element={<p>pagina para los reportes</p>} />
      </Route>

      <Route path='repertory' element={<p>Pagina para el repertorio</p>} />
      <Route path='news' element={<p>Pagina para las novedades</p>} />
      <Route path='signin' element={<SignInPage />} />
      <Route path='*' element={<p>ruta no encontrada desde App routes main</p>} />
    </Route>
  )
);

/*
<Route path='/' element={<LayoutPublic />}>
      <Route path='product/:id/*' element={<SingleProductRoutes />} />
      
*/
