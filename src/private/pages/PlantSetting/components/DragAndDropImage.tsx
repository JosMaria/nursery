type DragAndDropImageProps = {
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLElement>) => void;
  onDrop: (event: React.DragEvent<HTMLElement>) => void;
  isDragging: boolean;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DragAndDropImage = ({
  onDragOver,
  onDragLeave,
  onDrop,
  isDragging,
  fileInputRef,
  onFileSelect,
}: DragAndDropImageProps) => (
  <article
    className='w-full max-w-md h-44 bg-custom-medium border-4 border-dashed border-custom-dark select-none flex justify-center items-center'
    onDragOver={onDragOver}
    onDragLeave={onDragLeave}
    onDrop={onDrop}
  >
    {isDragging ? (
      <span className='font-bold text-lg tracking-wider text-custom-dark p-1 text-center opacity-70'>
        Suelte la foto aqui
      </span>
    ) : (
      <span className='font-bold text-lg max-sm:text-base tracking-wider text-skin-dark p-3 text-center'>
        Arrastre y suelte las fotos aqui o  {' '}
        <button className='button-custom' onClick={() => console.log('asdsad')}>
          Elija una foto
        </button>
      </span>
    )}
    <input className='hidden' type='file' ref={fileInputRef} onChange={onFileSelect} />
  </article>
);
