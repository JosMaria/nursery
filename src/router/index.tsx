import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { lazy } from 'react';

const LayoutPublic = lazy(() => import('../layout/LayoutPublic'));
const CatalogPage = lazy(() => import('../pages/Catalog/CatalogPage'));
const PlantPage = lazy(() => import('../pages/Plant/PlantPage'));
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
      <Route path='plants/:id/*' element={<PlantPage />} />
      <Route path='repertory' element={<RepertoryPage />} />

      <Route path='news' element={<NewsPage />} />
      <Route path='news/:id' element={<SingleNewsPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route path='create-plant' element={<CreatePlantPage />} />
    </Route>,
  ])
);
