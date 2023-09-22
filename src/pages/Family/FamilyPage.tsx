import { FormCreateFamily, List } from './components';
import { FamiliesProvider } from './context/provider';

const FamilyPage = () => (
  <FamiliesProvider>
    <section className='flex flex-wrap gap-10'>
      <FormCreateFamily />
      <List />
    </section>
  </FamiliesProvider>
);

export default FamilyPage;
