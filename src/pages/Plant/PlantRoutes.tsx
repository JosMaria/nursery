import { Route, Routes } from 'react-router-dom';
import PlantCreationPage from './pages/PlantCreationPage';
import PlantListPage from './pages/PlantListPage';
import PlantNotFoundPage from './pages/PlantNotFoundPage';
import FamilyCreationPage from './pages/FamilyCreationPage';
import FamilyListPage from './pages/FamilyListPage';

export const PlantRoutes = () => (
  <Routes>
    <Route index element={<PlantListPage />} />
    <Route path='creation' element={<PlantCreationPage />} />
    <Route path='families'>
      <Route index element={<FamilyListPage />} />
      <Route path='creation' element={<FamilyCreationPage />} />
    </Route>
    <Route path='*' element={<PlantNotFoundPage />} />
  </Routes>
);
