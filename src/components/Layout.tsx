import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => (
  <>
    <Header />
    <main className='h-screen'>
      <Outlet />
    </main>
    <Footer />
  </>
)
