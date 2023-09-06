import { Suspense, lazy } from 'react';
import { ErrorBoundaryPage } from '../components';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const LayoutPublic = lazy(() => import('../layout/LayoutPublic'));

// start block - Catalog Page
import SkeletonCatalogPage from '../pages/Catalog/SkeletonCatalogPage';

const CatalogPage = lazy(() => import('../pages/Catalog/CatalogPage'));
// end block - Catalog Page

// start block - Plant Page and its Tabs
import SkeletonPlantPage from '../pages/Plant/SkeletonPlantPage';
import {
  ErrorBoundaryPlantTab,
  NotFoundPlantTab,
  SkeletonPlantTab,
} from '../pages/Plant/tabs';

const PlantPage = lazy(() => import('../pages/Plant/PlantPage'));
const TechnicalSheetTab = lazy(
  () => import('../pages/Plant/tabs/TechnicalSheetPlantTab')
);
const DetailsTab = lazy(() => import('../pages/Plant/tabs/DetailsPlantTab'));
const NotesTab = lazy(() => import('../pages/Plant/tabs/NotesPlantTab'));
// end block - Plant Page and its Tabs

const RepertoryPage = lazy(() => import('../pages/Repertory/RepertoryPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const SingleNewsPage = lazy(() => import('../pages/SingleNews/SingleNewsPage'));
const SignInPage = lazy(() => import('../pages/SignIn/SignInPage'));

// start block - Create Plant Page
import SkeletonCreatePlantPage from '../pages/CreatePlant/SkeletonCreatePlantPage';

const CreatePlantPage = lazy(() => import('../pages/CreatePlant/CreatePlantPage'));
// end block - Create Plant Page

import SkeletonCreateFamilyPage from '../pages/CreateFamily/SkeletonCreateFamilyPage';

import CreateFamilyPage from '../pages/CreateFamily/CreateFamilyPage';


export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<LayoutPublic />}>
      {/* <Route
        index
        errorElement={<ErrorBoundaryPage />}
        element={
          <Suspense fallback={<SkeletonCatalogPage />}>
            <CatalogPage />
          </Suspense>
        }
      /> */}

      <Route
        path='plants/:id'
        errorElement={<ErrorBoundaryPage />}
        element={
          <Suspense fallback={<SkeletonPlantPage />}>
            <PlantPage />
          </Suspense>
        }
      >
        <Route
          index
          errorElement={<ErrorBoundaryPlantTab />}
          element={
            <Suspense fallback={<SkeletonPlantTab />}>
              <TechnicalSheetTab />
            </Suspense>
          }
        />
        <Route
          path='details'
          errorElement={<ErrorBoundaryPlantTab />}
          element={
            <Suspense fallback={<SkeletonPlantTab />}>
              <DetailsTab />
            </Suspense>
          }
        />
        <Route
          path='notes'
          errorElement={<ErrorBoundaryPlantTab />}
          element={
            <Suspense fallback={<SkeletonPlantTab />}>
              <NotesTab />
            </Suspense>
          }
        />
        <Route path='*' element={<NotFoundPlantTab />} />
      </Route>

      <Route
        path='create-plant'
        errorElement={<ErrorBoundaryPage />}
        element={
          <Suspense fallback={<SkeletonCreatePlantPage />}>
            <CreatePlantPage />
          </Suspense>
        }
      />

      <Route
        index
        errorElement={<ErrorBoundaryPage />}
        element={
          <Suspense fallback={<SkeletonCreateFamilyPage />}>
            <CreateFamilyPage />
          </Suspense>
        }
      />

      <Route path='repertory' element={<RepertoryPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='news/:id' element={<SingleNewsPage />} />
      <Route path='signin' element={<SignInPage />} />
    </Route>,
  ])
);
