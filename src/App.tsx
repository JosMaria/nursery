import { Footer, Header } from './components';
import { CatalogPage } from './pages';

export const App = () => (
  <div className='flex flex-col h-screen'>
    <Header />
    <main className='bg-paint-brownLight'>
      <CatalogPage />
    </main>
    <Footer />
  </div>

)
