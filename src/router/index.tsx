import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { LayoutPublic } from '../layout';
import {
  CreatePlantPage,
  NewsPage,
  RepertoryPage,
  SignInPage,
  SingleNewsPage,
} from '../pages';
import {
  DetailsPage,
  NotesPage,
  TechnicalSheetPage,
} from '../pages/Plant/pages'
import { NotFound } from '../components';

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<LayoutPublic />} errorElement={<NotFound />}>
      <Route index lazy={() => import('../pages/Catalog')} />

      <Route path='plants/:id' lazy={() => import('../pages/Plant')}>
        <Route index element={<TechnicalSheetPage />} />
        <Route path='details' element={<DetailsPage />} />
        <Route path='notes' element={<NotesPage />} />
      </Route>

      <Route path='list' element={<RepertoryPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='news/:id' element={<SingleNewsPage />} />
      <Route path='signin' element={<SignInPage />} />
      <Route path='create-plant' element={<CreatePlantPage />} />
    </Route>,
  ])
);
