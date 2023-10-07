import { Route, Routes } from 'react-router-dom';
import FamilyPage from './FamilyPage';
import CreateFamilyView from './views/CreateFamilyView';
import ListFamilyView from './views/ListFamilyView';

export const FamilyRoutes = () => (
  <Routes>
    <Route element={<FamilyPage />}>
      <Route index element={<CreateFamilyView />} />
      <Route path='list' element={<ListFamilyView />} />
    </Route>
  </Routes>
);
