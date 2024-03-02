type PlantPicturesProps = {
  urls: string[];
};

export const PlantPictures = ({ urls }: PlantPicturesProps) => (
  <div className='flex flex-wrap justify-center max-sm:gap-3 gap-4 p-2'>
    {urls.map((url, index) => (
      <div
        className='max-xs:w-32 max-sm:w-36 max-lg:w-40 max-xl:w-52 w-60 flex flex-col justify-between gap-0.5 bg-custom-dark max-sm:p-1 p-1.5 rounded'
        key={index}
      >
        <img src={url} alt='img-1' />
        <button
          className='focus:outline-none focus:border focus:border-custom-light focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5 leading-3 text-sm w-full tracking-wider'
          onClick={() => console.log('asd')}
        >
          Borrar
        </button>
      </div>
    ))}
  </div>
);
