import { useInfoToDeletePlant } from '../hooks';

interface Props {
  close: () => void;
}

export const DeletePlantModal = ({ close }: Props) => {
  const { commonName, scientificName, scientistLastnameInitial, family } = useInfoToDeletePlant();

  return (
    <dialog className='inset-0 fixed backdrop-blur-sm bg-black bg-opacity-40 shadow-xl h-screen w-full flex items-center justify-center'>
      <div className='p-2 max-sm:p-1 bg-skin-light rounded flex flex-col justify-center items-center gap-1 relative w-full max-w-lg'>
        <div className='flex justify-between items-center w-full px-1'>
          <h3 className='text-sm'>
            Eliminar <span className='font-medium'>{commonName}</span>
          </h3>
          <CloseButton close={close} />
        </div>

        <div className='grid grid-cols-2 gap-x-2 border-y-2 border-black border-opacity-20 w-full py-2 text-sm max-sm:text-xs'>
          <p className='font-medium place-self-end'>Nombre comun:</p>
          <p className='first-letter:uppercase'>{commonName}</p>
          <p className=' font-medium place-self-end'>Nombre cientifico: </p>
          <p className={`${scientificName && 'first-letter:uppercase italic'}`}>
            {scientificName
              ? `${scientificName} ${scientistLastnameInitial?.toUpperCase()}`
              : 'sin nombre cientifico'}
          </p>
          <p className=' font-medium place-self-end'>Familia: </p>
          <p className='first-letter:uppercase'>{family ?? 'sin familia'}</p>
        </div>

        <button onClick={close} className='custom-btn-form w-full max-sm:text-xs'>
          Quiero eliminar la planta
        </button>
      </div>
    </dialog>
  );
};

export const CloseButton = ({ close }: Props) => (
  <button type='button' onClick={close} className='custom-btn-form text-xl p-1 leading-3'>
    &times;
  </button>
);
