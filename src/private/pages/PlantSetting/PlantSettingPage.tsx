// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';
// import { fetchPlantById } from './services/service';
// import { IoIosArrowDown } from 'react-icons/io';
// import { translateStatus } from '../../../utils';

import { InformationBaseSection, PicturesSection } from './views';

const PlantSettingPage = () => {
  //const { id } = useParams();

  // const {
  //   data: plant,
  //   status,
  //   fetchStatus,
  // } = useQuery({ queryKey: ['plant', id], queryFn: () => fetchPlantById(Number(id)) });

  // if (fetchStatus === 'fetching') return <p>fetch status fetching</p>;
  // if (fetchStatus === 'paused') return <p>fetch status paused</p>;
  // if (status === 'pending') return <p>status pending</p>;
  // if (status === 'error') return <p>status error</p>;

  return (
    <section className='flex flex-col items-center gap-3'>
      <h1 className='h1-custom'>Configuracion de la Planta</h1>
      <InformationBaseSection />
      <PicturesSection />
    </section>
  );
};

export default PlantSettingPage;
