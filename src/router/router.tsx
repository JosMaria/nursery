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
import ReportsPage from '../pages/Reports/ReportsPage';
import InventoryPage from '../pages/Inventory/InventoryPage';

const isAuthenticate = false;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={isAuthenticate ? <LayoutPrivate /> : <LayoutPublic />}>
      <Route index element={<CatalogPage />} />
      <Route path='repertory' element={<RepertoryPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route element={<ProtectedRoute canActivate={isAuthenticate} />}>
        <Route path='plants/*' element={<PlantRoutes />} />
        <Route path='accounts/*' element={<p>sub rutas para las accounts page</p>} />
        <Route path='inventory' element={<InventoryPage />} />
        <Route path='reports' element={<ReportsPage />} />
      </Route>
      <Route path='*' element={<p>ruta no encontrada desde App routes main</p>} />
    </Route>
  )
);

/*
<Route path='/' element={<LayoutPublic />}>
      <Route path='product/:id/*' element={<SingleProductRoutes />} />
      
*/
