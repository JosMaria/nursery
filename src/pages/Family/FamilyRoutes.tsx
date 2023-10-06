import { Route, Routes } from 'react-router-dom';
import FamilyPage from './FamilyPage';
import CreateView from './views/CreateView';
import ListView from './views/ListView';

export const FamilyRoutes = () => (
  <Routes>
    <Route element={<FamilyPage />}>
      <Route index element={<CreateView />} />
      <Route path='list' element={<ListView />} />
    </Route>
  </Routes>
);
