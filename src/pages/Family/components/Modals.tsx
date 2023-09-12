interface Props {
  close: () => void;
}

export const EditModal = ({ close }: Props) => (
  <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none'>
    <div className=' bg-skin-light p-4 rounded flex flex-col justify-center items-center gap-5 relative'>
      <button
        className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold text-xl leading-3 p-1 rounded'
        onClick={close}
      >
        &times;
      </button>
      <h2 className='font-medium text-base'>Introduzca nuevo nombre</h2>
      <input type='text' className='custom-input-form' />
      <button className='custom-btn-form'>Cambiar Nombre</button>
    </div>
  </div>
);

export const deleteModal = () => {
  return <></>;
};
