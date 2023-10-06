import { Route, Routes } from 'react-router-dom';
import PlantPage from './PlantPage';
import CreatePlantView from './views/CreateView';
import ListView from './views/ListView';

export const PlantRoutes = () => (
  <Routes>
    <Route>
      <Route element={<PlantPage />}>
        <Route index element={<CreatePlantView />} />
        <Route path='list' element={<ListView />} />
      </Route>
      <Route path=':id/modify' element={<p>Editar y eliminar</p>}/>
    </Route>
  </Routes>
);
