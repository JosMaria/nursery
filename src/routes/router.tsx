import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ErrorBoundary, NotFound } from '../components';
import { Suspense, lazy } from 'react';

// import { PlantRoutes } from '../pages/Plant/PlantRoutes';

// import { AccountsRoutes } from '../pages/Accounts/AccountsRoutes';
// import { ProtectedRoute } from '../utils';
// import ReportsPage from '../pages/Reports/ReportsPage';
// import InventoryPage from '../pages/Inventory/InventoryPage';

import { ProtectedRoute } from '../utils';

import { LayoutPrivate } from '../private';

import PlantRouter from '../private/routes/PlantRouter';

import { LayoutPublic } from '../public';

import { SkeletonCatalogPage } from '../public/pages/Catalog/skeletons';
import { SkeletonRepertoryPage } from '../public/pages/Repertory/skeletons';
import { SkeletonSignInPage } from '../public/pages/SignIn/skeletons';
import { SkeletonProductPage } from '../public/pages/Product/skeletons';
import { AccountsRoutes } from '../pages/Accounts/AccountsRoutes';
import InventoryPage from '../private/pages/Inventory/InventoryPage';

const CatalogPage = lazy(() => import('../public/pages/Catalog/CatalogPage'));
const RepertoryPage = lazy(() => import('../public/pages/Repertory/RepertoryPage'));
const NewsPage = lazy(() => import('../public/pages/News/NewsPage'));
const SignInPage = lazy(() => import('../public/pages/SignIn/SignInPage'));
const ProductRouter = lazy(() => import('../public/pages/Product/routes/ProductRouter'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutPrivate />}>
      <Route element={<ProtectedRoute canActivate={true} />}>
        <Route path='nursery/*' element={<PlantRouter />} />
        <Route path='accounts/*' element={<AccountsRoutes />} />
        <Route path='inventory' element={<InventoryPage />} />
        {/* <Route path='reports' element={<ReportsPage />} /> */}
      </Route>

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
            <SkeletonProductPage />
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
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
