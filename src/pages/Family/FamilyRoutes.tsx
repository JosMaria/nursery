import { Route, Routes } from 'react-router-dom';
import FamilyPage from './FamilyPage';
import CreateView from './views/Create/CreateView';
import ListView from './views/List/ListView';

export const FamilyRoutes = () => (
  <Routes>
    <Route element={<FamilyPage />}>
      <Route index element={<CreateView />} />
      <Route path='list' element={<ListView />} />
    </Route>
  </Routes>
);
