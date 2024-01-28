import { PictureUploadType } from '../../../types';

type DragAndDropImageProps = {
  isDragging: boolean;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  changeFileSelected: (file: File) => void;
  setPictureSelected: React.Dispatch<React.SetStateAction<PictureUploadType | null>>;
};

export const DragAndDropImage = ({
  isDragging,
  fileInputRef,
  setIsDragging,
  changeFileSelected,
  setPictureSelected,
}: DragAndDropImageProps) => {
  const onDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  };

  const onDragLeave = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    fileReadyToUpload(files);
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    fileReadyToUpload(files);
  };

  const fileReadyToUpload = (fileList: FileList | null) => {
    if (fileList && fileList.length >= 0) {
      const fileSelected = fileList[0];
      changeFileSelected(fileSelected);
      setPictureSelected({ name: fileSelected.name, url: URL.createObjectURL(fileSelected) });
    }
  };

  return (
    <article
      className='w-full max-w-xl h-44 bg-custom-light border-4 border-dashed border-custom-dark select-none flex justify-center items-center'
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {isDragging ? (
        <span className='font-bold text-lg tracking-wider text-custom-dark p-1 text-center opacity-70'>
          Suelte la foto aqui
        </span>
      ) : (
        <span className='font-bold text-lg max-sm:text-base tracking-wider text-skin-dark p-3 text-center h-full flex flex-col justify-center items-center'>
          Arrastre y suelte las fotos aqui o{' '}
          <button className='button-custom' onClick={() => console.log('asdsad')}>
            Elija una foto
          </button>
        </span>
      )}
      <input className='hidden' type='file' ref={fileInputRef} onChange={onFileSelect} />
    </article>
  );
};
