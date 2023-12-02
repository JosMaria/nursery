import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { LayoutPublic } from '../layout';
import { PlantRoutes } from '../pages/Plant/PlantRoutes';

import CatalogPage from '../pages/Catalog/CatalogPage';
import RepertoryPage from '../pages/Repertory/RepertoryPage';
import NewsPage from '../pages/News/NewsPage';
import SignInPage from '../pages/SignIn/SignInPage';
import { AccountsRoutes } from '../pages/Accounts/AccountsRoutes';
import { LayoutPrivate } from '../layout/LayoutPrivate/LayoutPrivate';
import { ProtectedRoute } from '../utils';
import ReportsPage from '../pages/Reports/ReportsPage';
import InventoryPage from '../pages/Inventory/InventoryPage';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense, lazy } from 'react';
import { SkeletonProductPage } from '../pages/Product/SkeletonProductPage';

const ProductRouter = lazy(() => import('../pages/Product/routes/ProductRouter'));

const isAuthenticate = true;
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutPublic />}>
      <Route index element={<CatalogPage />} />

      <Route
        path='product/:id/*'
        element={
          <ErrorBoundary fallback={<p>error bpoundary product page</p>}>
            <Suspense fallback={<SkeletonProductPage />}>
              <ProductRouter />
            </Suspense>
          </ErrorBoundary>
        }
      />

      <Route path='repertory' element={<RepertoryPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route element={<ProtectedRoute canActivate={isAuthenticate} />}>
        <Route path='plants/*' element={<PlantRoutes />} />
        <Route path='accounts/*' element={<AccountsRoutes />} />
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
