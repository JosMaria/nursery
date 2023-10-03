import { Route, Routes } from 'react-router-dom';
import PlantPage from './PlantPage';
import CreatePlantView from './views/CreatePlant/CreatePlantView';
import ListView from './views/List/ListView';

export const PlantRoutes = () => (
  <Routes>
    <Route element={<PlantPage />}>
      <Route index element={<CreatePlantView />} />
      <Route path='list' element={<ListView />} />
    </Route>
  </Routes>
);
