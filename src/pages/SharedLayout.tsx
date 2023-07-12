import { Outlet } from 'react-router';
import { Header, Footer } from '../components';

export const Home = () => (
  <>
    <Header />
    <main className='bg-paint-brownLight'>
      <Outlet />
    </main>
    <Footer />
  </>
)

