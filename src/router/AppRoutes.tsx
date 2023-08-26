import { createBrowserRouter } from 'react-router-dom';
import { LayoutPublic } from '../layout';
import {
  CatalogPage,
  CreatePlantPage,
  NewsPage,
  RepertoryPage,
  SignInPage,
  SingleNewsPage,
  SingleProductPage,
} from '../pages';
import {
  DetailsPage,
  NotesPage,
  TechnicalSheetPage,
} from '../pages/SingleProduct/pages';
import { NotFound } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <CatalogPage /> },
      {
        path: 'products/:id',
        element: <SingleProductPage />,
        children: [
          { index: true, element: <TechnicalSheetPage /> },
          { path: 'details', element: <DetailsPage /> },
          { path: 'notes', element: <NotesPage /> },
        ],
      },
      { path: 'list', element: <RepertoryPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:id', element: <SingleNewsPage /> },
      { path: 'signin', element: <SignInPage /> },
      { path: 'create-plant', element: <CreatePlantPage /> },
    ],
  },
]);
