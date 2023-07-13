import { Outlet } from 'react-router';
import { Header, Footer } from '../components';

export const Home = () => (
  <div className='flex flex-col justify-between items-center h-screen'>
    <Header />
    <main className='bg-paint-brownLight'>
      <Outlet />
    </main>
    <Footer />
  </div>
)

