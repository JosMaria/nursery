type PlantPicturesProps = {
  urls: string[];
};

export const PlantPictures = ({ urls }: PlantPicturesProps) => (
  <div className='w-fit flex flex-wrap justify-center max-sm:gap-3 gap-5 bg-custom-medium p-2'>
    {urls.map((url, index) => (
      <div className='max-xs:w-32 max-sm:w-36 max-lg:w-40 max-xl:w-52 w-60 h-fit' key={index}>
        <img src={url} alt='img-1' />
      </div>
    ))}
  </div>
);
