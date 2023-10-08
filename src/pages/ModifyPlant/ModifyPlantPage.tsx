import { useParams } from 'react-router-dom';
import { fetchProductByID } from './services';
import { useQuery } from '@tanstack/react-query';

const ModifyPlantPage = () => {
  const { id } = useParams();

  const { data: plantToModify, status } = useQuery({
    queryKey: ['plant-to-modify'],
    queryFn: () => fetchProductByID(Number(id)),
    refetchOnWindowFocus: false,
  });

  if (status === 'loading') return 'loading plant to modify';
  if (status === 'error') return 'error plant to modify';

  return (
    <section>
      <h1 className='text-2xl font-medium'>{plantToModify.commonName}</h1>
      <details>
        <summary className='text-lg font-mono'>INFORMACI&Oacute;N BASICA</summary>
        <div className='flex flex-col gap-5'>
          <article className='flex gap-5'>
            <p>Nombre cientifico</p>
            <p>{plantToModify.scientificName}</p>
            <button className='border-2 border-black'>Modificar</button>
          </article>
          <article className='flex gap-5'>
            <p>Inicial del nombre cientifico</p>
            <p>{plantToModify.scientistLastnameInitial}</p>
            <button className='border-2 border-black'>Modificar</button>
          </article>
          <article className='flex gap-5'>
            <p>Familia</p>
            <p>{plantToModify.family}</p>
            <button className='border-2 border-black'>Modificar</button>
          </article>
          <article className='flex gap-5'>
            <p>Estado</p>
            <p>{plantToModify.status}</p>
            <button className='border-2 border-black'>Modificar</button>
          </article>
          <article>
            <p>Classificaci&oacute;n</p>
            <ul>
              {plantToModify.classifications.map((classification, index) => (
                <li key={index}>{classification}</li>
              ))}
            </ul>
          </article>
          <button className='border-2 border-black'>Modificar</button>
        </div>
      </details>
      <details>
        <summary className='text-lg font-mono'>NOTAS</summary>
        <ul>
          {plantToModify.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </details>
    </section>
  );
};

export default ModifyPlantPage;
