import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import { PlantRoutes } from '../pages/Plant/PlantRoutes';

// import { AccountsRoutes } from '../pages/Accounts/AccountsRoutes';
// import { ProtectedRoute } from '../utils';
// import ReportsPage from '../pages/Reports/ReportsPage';
// import InventoryPage from '../pages/Inventory/InventoryPage';

import { SkeletonProductPage } from '../pages/Product/skeletons';

import { ErrorBoundary, NotFound } from '../components';

import { LayoutPublic } from '../public';

import { SkeletonCatalogPage } from '../public/pages/Catalog/skeletons';
const CatalogPage = lazy(() => import('../public/pages/Catalog/CatalogPage'));

import { SkeletonRepertoryPage } from '../public/pages/Repertory/skeletons';
const RepertoryPage = lazy(() => import('../public/pages/Repertory/RepertoryPage'));

const NewsPage = lazy(() => import('../public/pages/News/NewsPage'));

import { SkeletonSignInPage } from '../public/pages/SignIn/skeletons';
const SignInPage = lazy(() => import('../public/pages/SignIn/SignInPage'));

const ProductRouter = lazy(() => import('../pages/Product/routes/ProductRouter'));

// const isAuthenticate = true;

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

      {/* <Route element={<ProtectedRoute canActivate={isAuthenticate} />}>
        <Route path='plants/*' element={<PlantRoutes />} />
        <Route path='accounts/*' element={<AccountsRoutes />} />
        <Route path='inventory' element={<InventoryPage />} />
        <Route path='reports' element={<ReportsPage />} />
      </Route> */}
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
