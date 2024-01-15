type Props = {
  isOpen: boolean;
};

export const DeleteFamyModal = ({ isOpen }: Props) => {
  return (
    <dialog
      className='max-sm:text-sm h-screen w-full bg-black bg-opacity-40 backdrop-blur-sm inset-0 fixed'
      open={isOpen}
    >
      <div className='flex justify-center items-center h-full'>
        <div className='relative bg-custom-light border-custom-dark rounded border-4 max-sm:w-72 w-80 flex flex-col items-center gap-2 max-sm:pt-3.5 pt-4 max-sm:p-1.5 p-2'>
          <button
            type='button'
            onClick={() => console.log('close dialog')}
            className='absolute flex justify-center items-center leading-none text-lg border rounded max-sm:px-1 px-1.5 right-0 top-0 text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'
          >
            &times;
          </button>
          <h3 className='text-center'>
            Seguro que quiere eliminar la familia: <span className='font-medium'>MiFamilia</span>
          </h3>
          <button className='button-custom'>Si, Eliminar</button>
        </div>
      </div>
    </dialog>
  );
};
