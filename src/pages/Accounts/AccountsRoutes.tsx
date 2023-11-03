import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import AccountsPage from './AccountsPage';
import AccountCreationPage from './AccountCreationPage';

export const AccountsRoutes = () => (
  <Routes>
    <Route index element={<AccountsPage />} />
    <Route path='create' element={<AccountCreationPage />} />
    <Route path=':id' element={<AccountsPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);
