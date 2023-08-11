import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => (
  <>
    <Header />
    <main className='h-screen flex flex-col items-center bg-stone-300'>
      <Outlet />
    </main>
    <Footer />
  </>
)
