import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import AccountsPage from './pages/AccountsPage';
import AccountCreationPage from './AccountCreationPage';

export const AccountsRoutes = () => (
  <Routes>
    <Route index element={<AccountsPage />} />
    <Route path='creation' element={<p>Crea usuarios pagina</p>} />
    {/* <Route path=':id' element={<AccountsPage />} /> */}
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);
