import { useState } from 'react';
import { usePlantPhotos } from '../hooks';
import EmptyImage from '../../../assets/no-image.png';

const mock_photos_URL = ['https://2.bp.blogspot.com/-l9eR_k0eBJ8/Wbfkgm5KS7I/AAAAAAAAFlA/z5a-50G_i2IwHvtKe3EEh3l9AbqLJ4l8gCLcBGAs/s1600/BROMELIA1.jpg',
'https://i0.wp.com/ornamentalis.com/wp-content/uploads/2019/09/flores-ornamentales-decorativas.jpg',
'https://image.slidesharecdn.com/plantasornamentales-120219192812-phpapp01/95/plantas-ornamentales-1-728.jpg?cb=1329679775',
'https://www.diphuelva.es/export/sites/dph/agricultura/.galleries/imagenes/Plantas_de_temporada.jpg']

export const PicturesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const photos_URL = usePlantPhotos();

  const previousPicture = () => {
    if (selectedIndex > 0) {
      setLoaded(false);
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const nextPicture = () => {
    if (selectedIndex < photos_URL.length - 1) {
      setLoaded(false);
      setSelectedIndex((prev) => prev + 1);
    }
  };

  return (
    <article className='bg-skin-form flex flex-col items-center justify-evenly gap-3 w-96 max-h-96 p-1 border-4 border-black'>
      {mock_photos_URL.length > 0 ? (
        <>
          <img
            src={photos_URL[selectedIndex]}
            alt={`Image ${selectedIndex}`}
            onLoad={() => setLoaded(true)}
            className={`h-72 ${
              loaded ? 'opacity-100 transition-opacity' : 'opacity-0'
            }`}
          />

          <div className='flex justify-evenly w-full items-center text-skin-light font-semibold'>
            <Button isDisabled={selectedIndex === 0} action={previousPicture}>
              &#10229;
            </Button>
            <Button
              isDisabled={selectedIndex === photos_URL.length - 1}
              action={nextPicture}
            >
              &#10230;
            </Button>
          </div>
        </>
      ) : (
        <img src={EmptyImage} alt='Empty Image' />
      )}
    </article>
  );
};

interface ButtonProps {
  isDisabled: boolean;
  action: () => void;
  children: React.ReactNode;
}

const Button = ({ isDisabled, action, children }: ButtonProps) => (
  <button
    onClick={action}
    disabled={isDisabled}
    className={`${
      isDisabled && 'invisible'
    } px-4 py-0.5 bg-skin-btn hover:bg-skin-btn-hover rounded-md`}
  >
    {children}
  </button>
);
