import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { LayoutPublic } from '../layout';
import {
  CreatePlantPage,
  NewsPage,
  SignInPage,
  SingleNewsPage,
} from '../pages';
import { NotFound } from '../components';

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<LayoutPublic />} errorElement={<NotFound />}>
      <Route index lazy={() => import('../pages/Catalog')} />
      <Route path='plants/:id/*' lazy={() => import('../pages/Plant')} errorElement={<NotFound />} />
      <Route path='repertory' lazy={() => import('../pages/Repertory')} />
      <Route path='news' element={<NewsPage />} />
      <Route path='news/:id' element={<SingleNewsPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route path='create-plant' element={<CreatePlantPage />} />
    </Route>,
  ])
);
