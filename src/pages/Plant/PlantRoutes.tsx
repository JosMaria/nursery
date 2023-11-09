import { Route, Routes } from 'react-router-dom';
import PlantCreationPage from './pages/PlantCreationPage';
import PlantListPage from './pages/PlantListPage';

export const PlantRoutes = () => (
  <Routes>
    <Route index element={<PlantListPage />} />
    <Route path='creation' element={<PlantCreationPage />} />
    <Route path='*' element={<p>No se pudo encontrar la ruta de la pagina en plant routes</p>} />
  </Routes>
);
