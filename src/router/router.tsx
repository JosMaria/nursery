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
import { LayoutPrivate } from '../layout/LayoutPrivate';

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<LayoutPrivate />}>
      <Route path='manual-plant' element={<p>Aqui estara el manual para las funcionalidades</p>} />
      <Route path='create-plant' element={<p>Pagina para Crear Planta</p>} />
      <Route path='list-plants' element={<p>Listado de Plantas</p>} />
      <Route path='create-family' element={<p>Pagina para Crear Familia</p>} />
      <Route path='list-families' element={<p>Listado de Familias</p>} />
    </Route>,
  ])
);

/*
<Route path='/' element={<LayoutPublic />}>
      <Route index element={<CatalogPage />} />
      <Route path='product/:id/*' element={<SingleProductRoutes />} />
      <Route path='repertory' element={<RepertoryPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='news/:id' element={<SingleNewsPage />} />
      <Route path='signin' element={<SignInPage />} />

      <Route path='plant/*' element={<PlantRoutes />} />
      <Route path='family/*' element={<FamilyRoutes />} />

      <Route path='accounts/*' element={<AccountsRoutes />} />

      <Route path='*' element={<p>Ruta no encontrada</p>} />
    </Route>,
*/
