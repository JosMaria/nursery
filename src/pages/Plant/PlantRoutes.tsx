import { Route, Routes } from 'react-router-dom';
import PlantPage from './PlantPage';
import CreatePlantView from './views/CreateView';
import ListView from './views/ListView';
import { ModifyPlantView } from './views/ModifyPlantView';

export const PlantRoutes = () => (
  <Routes>
    <Route>
      <Route element={<PlantPage />}>
        <Route index element={<CreatePlantView />} />
        <Route path='list' element={<ListView />} />
      </Route>
      <Route path=':id/modify' element={<ModifyPlantView />} />
    </Route>
  </Routes>
);
