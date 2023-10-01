import { Route, Routes } from 'react-router-dom';
import FamilyPage from './FamilyPage';
import CreateFamilyView from './views/CreateFamily/CreateFamilyView';
import { ListView } from './views/List/ListView';
import { fetchAllFamilies } from './services';
import { FamilyResponse } from './types';
import { axiosInstance } from '../../config';

export const FamilyRoutes = () => {
  return (
    <Routes>
      <Route element={<FamilyPage />}>
        <Route index element={<CreateFamilyView />} />
        <Route
          path='list'
          element={<ListView />}
        />
      </Route>
    </Routes>
  );
};
