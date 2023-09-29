import { Route, Routes } from 'react-router-dom';
import TechnicalSheetView from './views/TechnicalSheeet/TechnicalSheetPlantTab';
import SingleProductPage from './SingleProductPage';
import DetailsView from './views/Details/DetailsView';
import NotesView from './views/Notes/NotesView';

export const SingleProductRoutes = () => (
  <Routes>
    <Route path='product/:id' element={<SingleProductPage />}>
      <Route index element={<TechnicalSheetView />} />
      <Route path='details' element={<DetailsView />} />
      <Route path='notes' element={<NotesView />} />
      <Route path='*' element={<p>mmo encontardo desde single product page</p>} />
    </Route>
  </Routes>
);
