import { useCallback, useRef, useState } from 'react';

type Props = {
  changeFileSelected: (file: File) => void;
  changePictureSelected: (name: string, url: string) => void;
};

export const DragAndDropPicture = ({ changeFileSelected, changePictureSelected }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

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
      changePictureSelected(fileSelected.name, URL.createObjectURL(fileSelected));
    }
  };

  const handleInputFileClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  return (
    <article
      className='w-full max-w-xl h-44 bg-custom-light border-4 border-dashed border-custom-dark select-none flex justify-center items-center'
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {isDragging ? (
        <span className='font-semibold text-lg tracking-wider text-custom-dark p-1 text-center opacity-70'>
          Suelte la foto aqui
        </span>
      ) : (
        <span className='font-semibold text-lg max-sm:text-base tracking-wider text-skin-dark p-3 text-center h-full flex flex-col justify-center items-center'>
          Arrastre y suelte las fotos aqui o{' '}
          <button className='button-custom' onClick={handleInputFileClick}>
            Elija una foto
          </button>
        </span>
      )}
      <input
        className='hidden'
        ref={fileInputRef}
        onChange={onFileSelect}
        type='file'
        accept='image/*'
      />
    </article>
  );
};
