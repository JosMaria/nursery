import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Suspense, lazy } from 'react';
import { SkeletonTab } from '../pages/Plant/content';

const LayoutPublic = lazy(() => import('../layout/LayoutPublic'));
const CatalogPage = lazy(() => import('../pages/Catalog/CatalogPage'));

const PlantPage = lazy(() => import('../pages/Plant/PlantPage'));
const TechnicalSheetTab = lazy(
  () => import('../pages/Plant/tabs/TechnicalSheetTab')
);
const DetailsTab = lazy(() => import('../pages/Plant/tabs/DetailsTab'));
const NotesTab = lazy(() => import('../pages/Plant/tabs/NotesTab'));
const NotFoundTab = lazy(() => import('../pages/Plant/tabs/NotFoundTab'));

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
          element={
            <Suspense fallback={<SkeletonTab />}>
              <TechnicalSheetTab />
            </Suspense>
          }
        />
        <Route
          path='details'
          errorElement={<p>error fallback por react router en details pages</p>}
          element={
            <Suspense fallback={<SkeletonTab />}>
              <DetailsTab />
            </Suspense>
          }
        />
        <Route
          path='notes'
          errorElement={<p>error fallback por react router en notes pages</p>}
          element={
            <Suspense fallback={<SkeletonTab />}>
              <NotesTab />
            </Suspense>
          }
        />
        <Route path='*' element={<NotFoundTab />} />
      </Route>

      <Route path='repertory' element={<RepertoryPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='news/:id' element={<SingleNewsPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route path='create-plant' element={<CreatePlantPage />} />
    </Route>,
  ])
);
