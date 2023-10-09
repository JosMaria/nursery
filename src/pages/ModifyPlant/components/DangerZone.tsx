import { useState } from 'react';

export const DangerZone = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <section className='max-w-2xl w-full bg-skin-form p-3 flex flex-col gap-1'>
      <h2 className='text-skin-dark text-xl font-medium'>Zona Peligrosa</h2>
      <article className='w-full border-2 border-red-600 rounded-md p-1.5 flex flex-wrap items-center justify-between gap-2 bg-skin-light'>
        <div className='text-sm'>
          <p className='font-medium text-base max-sm:text-sm'>Eliminar esta planta</p>
          <p className='max-sm:text-xs'>
            Una vez que eliminas la planta, no hay vuelta atrás. Por favor esté seguro.
          </p>
        </div>
        <button
          className='rounded text-sm max-sm:text-xs font-medium py-1 px-3 h-fit border border-red-500 text-red-800 bg-red-100 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600'
          onClick={() => setShowModal(true)}
        >
          Eliminar esta planta
        </button>
      </article>
      {showModal && <DeletePlantModal close={() => setShowModal(false)} />}
    </section>
  );
};

interface DeletePlantModalProps {
  close: () => void;
}

const DeletePlantModal = ({ close }: DeletePlantModalProps) => (
  <div className='inset-0 fixed backdrop-blur-sm bg-black bg-opacity-40 shadow-xl h-screen w-full flex items-center justify-center'>
    <div className='p-2 max-sm:p-1 bg-skin-light rounded flex flex-col justify-center items-center gap-1 relative w-full max-w-lg'>
      <div className='flex justify-between items-center w-full px-1'>
        <h3 className='text-sm'>Eliminar "nombrecomun"</h3>
        <CloseButton close={close} />
      </div>

      <div className='grid grid-cols-2 gap-x-2 border-y-2 border-black border-opacity-20 w-full py-2 text-sm max-sm:text-xs'>
        <p className='font-medium place-self-end'>Nombre comun:</p>
        <p className=''>valor nombre comun</p>
        <p className=' font-medium place-self-end'>Nombre cientifico: </p>
        <p className='italic'>valor nombre cientifico</p>
        <p className=' font-medium place-self-end'>Familia: </p>
        <p className=''>valor familia</p>
      </div>

      <button onClick={close} className='custom-btn-form w-full max-sm:text-xs'>
        Quiero eliminar la planta
      </button>
    </div>
  </div>
);

interface CloseButtonProps {
  close: () => void;
}

export const CloseButton = ({ close }: CloseButtonProps) => (
  <button type='button' onClick={close} className='custom-btn-form text-2xl p-1.5 leading-3'>
    &times;
  </button>
);
