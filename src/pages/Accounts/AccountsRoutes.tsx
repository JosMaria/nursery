import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import AccountsPage from './pages/AccountsPage';
import AccountCreationPage from './pages/AccountCreationPage';

export const AccountsRoutes = () => (
  <Routes>
    <Route index element={<AccountsPage />} />
    <Route path='creation' element={<AccountCreationPage />} />
    {/* <Route path=':id' element={<AccountsPage />} /> */}
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);
