import { Route, Routes } from 'react-router-dom';
import PlantPage from './PlantPage';
import CreatePlantView from './views/CreatePlantView';
import ListPlantView from './views/ListPlantView';

export const PlantRoutes = () => (
  <Routes>
    <Route element={<PlantPage />}>
      <Route index element={<CreatePlantView />} />
      <Route path='list' element={<ListPlantView />} />
    </Route>
  </Routes>
);
