import PlantCreationPage from '../pages/PlantCreation/PlantCreationPage';
import FamilyCreationPage from '../pages/FamilyCreation/FamilyCreationPage';
import PlantListPage from '../pages/PlantList/PlantListPage';
import FamilyListPage from '../pages/FamilyList/FamilyListPage';
import { Route, Routes } from 'react-router-dom';

const PlantRouter = () => (
  <Routes>
    <Route path='create/plant' element={<PlantCreationPage />} />
    <Route path='create/family' element={<FamilyCreationPage />} />
    <Route path='list/plant' element={<PlantListPage />} />
    <Route path='list/family' element={<FamilyListPage />} />
    <Route path='*' element={<p>Not found plant router</p>} />
  </Routes>
);

export default PlantRouter;
