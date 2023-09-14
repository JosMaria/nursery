import { FormCreateFamily, List } from './components';

const FamilyPage = () => {
  return (
    <section className='flex gap-10'>
      <FormCreateFamily />
      <List />
    </section>
  );
};

export default FamilyPage;
