import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { LayoutPublic } from '../layout';
import { PlantRoutes } from '../pages/Plant/PlantRoutes';

import { AccountsRoutes } from '../pages/Accounts/AccountsRoutes';
import { ProtectedRoute } from '../utils';
import ReportsPage from '../pages/Reports/ReportsPage';
import InventoryPage from '../pages/Inventory/InventoryPage';
import { Suspense, lazy } from 'react';

import { SkeletonCatalogPage } from '../pages/Catalog/skeletons';
import { SkeletonProductPage } from '../pages/Product/skeletons';
import { SkeletonRepertoryPage } from '../pages/Repertory/skeletons';
import { SkeletonSignInPage } from '../pages/SignIn/skeletons';

import { ErrorBoundary } from '../components';

const ProductRouter = lazy(() => import('../pages/Product/routes/ProductRouter'));
const CatalogPage = lazy(() => import('../pages/Catalog/CatalogPage'));
const RepertoryPage = lazy(() => import('../pages/Repertory/RepertoryPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const SignInPage = lazy(() => import('../pages/SignIn/SignInPage'));

const isAuthenticate = true;

// TODO: test with errorElement en vez de usar error boundary
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutPublic />}>
      <Route
        index
        errorElement={<ErrorBoundary />}
        element={
          <Suspense fallback={<SkeletonCatalogPage />}>
            <CatalogPage />
          </Suspense>
        }
      />

      <Route
        path='product/:id/*'
        errorElement={<ErrorBoundary />}
        element={
          <Suspense fallback={<SkeletonProductPage />}>
            <ProductRouter />
          </Suspense>
        }
      />

      <Route
        path='repertory'
        errorElement={<ErrorBoundary />}
        element={
          <Suspense fallback={<SkeletonRepertoryPage />}>
            <RepertoryPage />
          </Suspense>
        }
      />

      <Route
        path='news'
        errorElement={<ErrorBoundary />}
        element={
          <Suspense fallback={<p>suspense news page</p>}>
            <NewsPage />
          </Suspense>
        }
      />

      <Route
        path='signin'
        errorElement={<ErrorBoundary />}
        element={
          <Suspense fallback={<SkeletonSignInPage />}>
            <SignInPage />
          </Suspense>
        }
      />

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
