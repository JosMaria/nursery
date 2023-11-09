import { Route, Routes } from 'react-router-dom';
import PlantCreationPage from './pages/PlantCreationPage';
import PlantListPage from './pages/PlantListPage';
import PlantNotFoundPage from './pages/PlantNotFoundPage';

export const PlantRoutes = () => (
  <Routes>
    <Route index element={<PlantListPage />} />
    <Route path='creation' element={<PlantCreationPage />} />
    <Route path='*' element={<PlantNotFoundPage />} />
  </Routes>
);
