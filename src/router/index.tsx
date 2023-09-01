import { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const LayoutPublic = lazy(() => import('../layout/LayoutPublic'));
const CatalogPage = lazy(() => import('../pages/Catalog/CatalogPage'));

// start block - Plant Page and its Tabs
import {
  ErrorBoundaryPlantTab,
  NotFoundPlantTab,
  SkeletonPlantTab,
} from '../pages/Plant/tabs';

const PlantPage = lazy(() => import('../pages/Plant/PlantPage'));
const TechnicalSheetTab = lazy(() => import('../pages/Plant/tabs/TechnicalSheetPlantTab'));
const DetailsTab = lazy(() => import('../pages/Plant/tabs/DetailsPlantTab'));
const NotesTab = lazy(() => import('../pages/Plant/tabs/NotesPlantTab'));
// end block - Plant Page and its Tabs

const RepertoryPage = lazy(() => import('../pages/Repertory/RepertoryPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const SingleNewsPage = lazy(() => import('../pages/SingleNews/SingleNewsPage'));
const SignInPage = lazy(() => import('../pages/SignIn/SignInPage'));
const CreatePlantPage = lazy(
  () => import('../pages/CreatePlant/CreatePlantPage')
);

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<LayoutPublic />}>
      <Route index element={<CatalogPage />} />

      <Route path='plants/:id' element={<PlantPage />}>
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

      <Route path='repertory' element={<RepertoryPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='news/:id' element={<SingleNewsPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route path='create-plant' element={<CreatePlantPage />} />
    </Route>,
  ])
);
