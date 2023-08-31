import { Route, Routes, useParams } from 'react-router-dom';
import { PlantProvider } from './context';
import { PlantContent } from './content';
import { TechnicalSheetPage } from './pages';
import { Suspense, lazy } from 'react';

const DetailsPage = lazy(() => import('./pages/DetailsPage'));
const NotesPage = lazy(() => import('./pages/NotesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PlantContentPage = () => {
  const { id } = useParams();

  return (
    <PlantProvider plantId={Number(id)}>
      <PlantContent />
    </PlantProvider>
  );
};

const PlantPage = () => (
  <Suspense fallback={<p>Suspense a nivel de plant page</p>}>
    <Routes>
      <Route path='/' element={<PlantContentPage />}>
        <Route index element={<TechnicalSheetPage />} />
        <Route path='details' element={<DetailsPage />} />
        <Route path='notes' element={<NotesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default PlantPage;
