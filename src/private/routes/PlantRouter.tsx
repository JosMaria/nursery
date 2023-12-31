import PlantCreationPage from '../pages/PlantCreation/PlantCreationPage';
import FamilyCreationPage from '../pages/FamilyCreation/FamilyCreationPage';
import PlantListPage from '../pages/PlantList/PlantListPage';
import FamilyListPage from '../pages/FamilyList/FamilyListPage';
import ReportPage from '../pages/Report/ReportPage';
import { Route, Routes } from 'react-router-dom';
import InventoryPage from '../pages/Inventory/InventoryPage';
import AccountCreationPage from '../pages/AccountCreation/AccountCreationPage';
import AccountListPage from '../pages/AccountList/AccountListPage';

const PlantRouter = () => (
  <Routes>
    <Route path='create/plant' element={<PlantCreationPage />} />
    <Route path='list/plant' element={<PlantListPage />} />
    <Route path='create/family' element={<FamilyCreationPage />} />
    <Route path='list/family' element={<FamilyListPage />} />
    <Route path='create/account' element={<AccountCreationPage />} />
    <Route path='list/account' element={<AccountListPage />} />
    <Route path='inventory' element={<InventoryPage />} />
    <Route path='reports' element={<ReportPage />} />
    <Route path='*' element={<p>Not found plant router</p>} />
  </Routes>
);

export default PlantRouter;
