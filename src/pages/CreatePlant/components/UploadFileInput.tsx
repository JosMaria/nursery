import { useRef, useState } from 'react';

export const UploadFileInput = () => {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const selectFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;

      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;

      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const uploadImage = () => {
    console.log('Images: ', images);
  };

  return (
    <section className='place-self-center col-span-full flex flex-col items-center gap-2 max-w-xl'>
      <p className='text-center font-medium text-2xl'>Fotos</p>
      <article
        className='border-4 border-dashed border-skin-focus bg-skin-light select-none flex justify-center items-center flex-wrap max-w-md w-full h-44'
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className='font-bold text-xl tracking-wider text-skin-dark p-1 text-center opacity-70'>
            Suelte las fotos aqui
          </span>
        ) : (
          <span className='font-bold text-xl tracking-wider text-skin-dark p-1 text-center'>
            Arrastre y suelte las imagenes aqui o{' '}
            <button
              className='font-medium text-sm tracking-wide p-2 bg-gray-200 rounded-md border-2 border-gray-300 cursor-pointer hover:bg-gray-300'
              onClick={selectFiles}
            >
              Elija una foto
            </button>
          </span>
        )}
        <input
          type='file'
          multiple
          className='hidden'
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </article>
      <div className='flex flex-wrap justify-evenly gap-4 bg-skin-light p-2 items-center border-4 border-skin-focus'>
        {images.map((image, index) => (
          <div className='relative w-28' key={index}>
            <span
              className='text-xl absolute right-0 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md leading-3 p-1 cursor-pointer'
              onClick={() => deleteImage(index)}
            >
              &times;
            </span>
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
      <button type='button' onClick={uploadImage}>
        Upload
      </button>
    </section>
  );
};
