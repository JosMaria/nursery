import { ItemsContextProvider } from './context/providers/ItemsProvider';
import { ItemsContent } from './components';

const RepertoryPage = () => (
  <section className='w-full flex flex-col items-center'>
    <h1 className='h1-custom text-center'>Listado</h1>
    <ItemsContextProvider>
      <ItemsContent />
    </ItemsContextProvider>
  </section>
);

export default RepertoryPage;
