import { useDetailsPlant } from '../hooks';

const DetailsPlantTab = () => {
  const details = useDetailsPlant();

  return (
    <ol className='list-decimal list-inside flex flex-col gap-3'>
      {details.length === 0 ? (
        <p className='text-center font-medium text-base py-3 max-sm:text-xs max-sm:py-2 bg-skin-dark text-skin-light'>
          Sin Detalles
        </p>
      ) : (
        details.map((detail, index) => <li key={index}>{detail}</li>)
      )}
    </ol>
  );
};

export default DetailsPlantTab;
