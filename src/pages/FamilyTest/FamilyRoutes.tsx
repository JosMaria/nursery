import { Route, Routes } from 'react-router-dom';
import FamilyPage from './FamilyPage';
import CreateFamilyView from './views/CreateFamily/CreateFamilyView';
import { ListView } from './views/List/ListView';

export const FamilyRoutes = () => (
  <Routes>
    <Route element={<FamilyPage />}>
      <Route index element={<CreateFamilyView />} />
      <Route path='list' element={<ListView />} />
    </Route>
  </Routes>
);
