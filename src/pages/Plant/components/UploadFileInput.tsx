import { useRef, useState } from 'react';
import { ImageUploadType } from '../types';


export const UploadFileInput = () => {
  const [images, setImages] = useState<ImageUploadType[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const selectFiles = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    if (!files || files.length === 0) return;
    addImages(files);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    addImages(files);
  };

  const addImages = (files: FileList): void => {
    Array.from(files).forEach((file) => {
      if (file.type.split('/')[0] === 'image') {
        if (!images.some((image) => image.name === file.name)) {
          setImages((prevImages) => [
            ...prevImages,
            { name: file.name, url: URL.createObjectURL(file) },
          ]);
        }
      }
    });
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

  const uploadImage = () => {
    console.log('Images: ', images);
  };

  return (
    <section className='place-self-center col-span-full flex flex-col items-center gap-2 max-w-md w-full'>
      <p className='font-medium'>Imagenes de la planta</p>
      <article
        className='border-4 border-dashed border-skin-focus bg-skin-light select-none flex justify-center items-center flex-wrap w-full h-44'
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className='font-bold text-xl tracking-wider text-skin-dark p-1 text-center opacity-70'>
            Suelte las fotos aqui
          </span>
        ) : (
          <span className='font-bold text-lg max-sm:text-base tracking-wider text-skin-dark p-3 text-center'>
            Arrastre y suelte las imagenes aqui o{' '}
            <button className='custom-btn-form' onClick={selectFiles}>
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
      <ImagesToUpload images={images} deleteImage={(index) => deleteImage(index)} />
      <button type='button' onClick={uploadImage}>
        Imprimir result
      </button>
    </section>
  );
};

interface ImagesToUploadProps {
  images: ImageUploadType[];
  deleteImage: (index: number) => void;
}

const ImagesToUpload = ({ images, deleteImage }: ImagesToUploadProps) => (
  <div className='flex flex-wrap justify-evenly gap-4 bg-skin-light p-2 items-center border-4 border-skin-focus w-full'>
    {images.length === 0 ? (
      <p className='text-lg max-sm:text-sm font-medium p-3 text-center'>
        En esta secci&oacute;n se mostraran las imagenes a subir
      </p>
    ) : (
      images.map((image, index) => (
        <div className='relative w-28' key={index}>
          <button
            className='text-xl absolute right-0 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-none leading-3 p-1 cursor-pointer'
            type='button'
            onClick={() => deleteImage(index)}
          >
            &times;
          </button>
          <img src={image.url} alt={image.name} />
        </div>
      ))
    )}
  </div>
);
