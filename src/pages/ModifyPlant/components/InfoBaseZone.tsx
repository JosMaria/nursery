import { useInfoBase } from '../hooks';

export const InfoBaseZone = () => {
  const { commonName, scientificName, scientistLastnameInitial, family, status, classifications } =
    useInfoBase();

  return (
    <section className='bg-skin-form rounded-md p-3'>
      <p>{commonName}</p>
      <p>{scientificName}</p>
      <p>{scientistLastnameInitial}</p>
      <p>{family}</p>
      <p>{status}</p>
      <p>{classifications}</p>
    </section>
  );
};
