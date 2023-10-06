import { useQuery } from '@tanstack/react-query';
import { fetchAllCommonNamesPlants } from '../services';

const ListView = () => {
  const { data: commonNames, status } = useQuery({
    queryKey: ['common-names'],
    queryFn: fetchAllCommonNamesPlants,
  });

  if (status === 'loading') return 'loading common names';
  if (status === 'error') return 'error common names';

  return (
    <>
    <h1>Listado de Plantas creadas</h1>
    <ul>
      {commonNames.map((info) => <li key={info.id}>{info.commonName}</li>)}
    </ul>
    </>
    
  );
};

export default ListView;
