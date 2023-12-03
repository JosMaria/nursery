import { useDetails } from '../hooks';

const DetailsView = () => {
  const details = useDetails();

  return (
    <div className='flex flex-col gap-1 py-1 px-2 bg-custom-medium border-custom-dark border-x-4 border-b-4 max-sm:text-sm'>
      <ol className='list-decimal list-inside flex flex-col gap-3'>
        {details.length === 0 ? (
          <p className='text-center font-medium text-base py-3 max-sm:text-xs max-sm:py-2 bg-skin-dark text-skin-light'>
            Sin Detalles
          </p>
        ) : (
          details.map((detail, index) => <li key={index}>{detail}</li>)
        )}
      </ol>
    </div>
  );
};

export default DetailsView;
