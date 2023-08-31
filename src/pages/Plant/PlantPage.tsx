import { Route, Routes, useParams } from 'react-router-dom';
import { PlantProvider } from './context';
import { PlantContent } from './content';
import { DetailsPage, NotesPage, TechnicalSheetPage } from './pages';

export const Component = () => (
  <Routes>
    <Route path='/' element={<PlantPage />}>
      <Route index element={<TechnicalSheetPage />} />
      <Route path='details' element={<DetailsPage />} />
      <Route path='notes' element={<NotesPage />} />
    </Route>
  </Routes>
);

Component.displayName = 'PlantPage';

export const PlantPage = () => {
  const { id } = useParams();

  return (
    <PlantProvider plantId={Number(id)}>
      <PlantContent />
    </PlantProvider>
  );
};
