import { Route, Routes } from 'react-router-dom';
import TechnicalSheetView from './views/TechnicalSheeet/TechnicalSheetPlantTab';
import DetailsView from './views/Details/DetailsView';
import NotesView from './views/Notes/NotesView';
import SingleProductPage from './SingleProductPage';
import { NotFoundView } from './views/shared';

export const SingleProductRoutes = () => (
  <Routes>
    <Route element={<SingleProductPage />}>
      <Route index element={<TechnicalSheetView />} />
      <Route path='details' element={<DetailsView />} />
      <Route path='notes' element={<NotesView />} />
      <Route path='*' element={<NotFoundView />} />
    </Route>
  </Routes>
);
