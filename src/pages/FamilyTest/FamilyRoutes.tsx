import { Route, Routes } from 'react-router-dom';
import FamilyPage from './FamilyPage';

export const FamilyRoutes = () => {
  return (
    <Routes>
      <Route element={<FamilyPage />}>
        <Route index element={<p>crear familia</p>} />
        <Route path='list' element={<p>Listar y modificar</p>} />
      </Route>
    </Routes>
  );
};
