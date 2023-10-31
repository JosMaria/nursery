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

export const router = createBrowserRouter(
  createRoutesFromElements([
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
  ])
);
