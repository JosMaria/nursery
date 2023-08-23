import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  RepertoryPage,
  NewsPage,
  SingleNews,
  SignInPage,
  CatalogPage,
  CreatePlantPage,
  SingleProductPage,
} from '../pages';
import { Layout } from '../components';
import {
  DetailsPage,
  NotesPage,
  TechnicalSheetPage,
} from '../pages/SingleProduct/pages';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CatalogPage />} />

        <Route path='products/:id' element={<SingleProductPage />}>
          <Route index element={<TechnicalSheetPage />} />
          <Route path='details' element={<DetailsPage />} />
          <Route path='notes' element={<NotesPage />} />
        </Route>

        <Route path='list' element={<RepertoryPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:id' element={<SingleNews />} />
        <Route path='signin' element={<SignInPage />} />
        <Route path='create-plant' element={<CreatePlantPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
