import { FormCreateFamily, List } from './components';

const FamilyPage = () => {
  return (
    <section className='flex flex-wrap gap-10'>
      <FormCreateFamily />
      <List />
    </section>
  );
};

export default FamilyPage;
