import { Outlet } from 'react-router';
import { Header, Footer } from '../components';

export const Home = () => (
  <div className='flex flex-col w-full justify-between items-center bg-paint-brownLight'>
    <Header />
    <main className='flex flex-col w-full'>
      <Outlet />
    </main>
    <Footer />
  </div>
)
