import { Footer, Header } from './components';
import { CatalogPage } from './pages';

export const App = () => (
  <>
    <Header />
    <main className='bg-paint-brownLight h-screen'>
      <CatalogPage />
    </main>
    <Footer />
  </>

)
