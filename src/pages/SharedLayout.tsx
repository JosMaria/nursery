import { Outlet } from 'react-router';
import { Header, Footer } from '../components';

export const Home = () => (
  <div className='flex flex-col justify-between items-center bg-paint-brownLight'>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
)

