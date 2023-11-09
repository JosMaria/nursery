import { Outlet, Route, Routes } from 'react-router-dom';
import PlantPage from './PlantPage';
import CreatePlantView from './views/CreatePlantView';
import ListPlantView from './views/ListPlantView';
import PlantCreationPage from './pages/PlantCreationPage';

export const PlantRoutes = () => (
  <Routes>
    <Route index element={<p>En aqui se puede ver las plantas</p>} />
    <Route path='creation' element={<PlantCreationPage />} />
    <Route path='*' element={<p>No se pudo encontro la pagina</p>} />
  </Routes>
);
