import EmptyImage from '../../../assets/no-image.png';
import { usePhotosSlider } from '../hooks';

const mock_photos_URL = [
  'https://2.bp.blogspot.com/-l9eR_k0eBJ8/Wbfkgm5KS7I/AAAAAAAAFlA/z5a-50G_i2IwHvtKe3EEh3l9AbqLJ4l8gCLcBGAs/s1600/BROMELIA1.jpg',
  'https://i0.wp.com/ornamentalis.com/wp-content/uploads/2019/09/flores-ornamentales-decorativas.jpg',
  'https://image.slidesharecdn.com/plantasornamentales-120219192812-phpapp01/95/plantas-ornamentales-1-728.jpg?cb=1329679775',
  'https://www.diphuelva.es/export/sites/dph/agricultura/.galleries/imagenes/Plantas_de_temporada.jpg',
];

export const Photos = () => {
  const { selectedIndex, loaded, previousPhoto, nextPhoto, setLoadedToTrue } = usePhotosSlider(
    mock_photos_URL.length
  );

  return (
    <article className='col-span-2 bg-custom-medium flex flex-col items-center justify-evenly gap-1.5 max-w-[24rem] w-full max-h-96 p-0.5 border-4 border-custom-dark rounded'>
      {mock_photos_URL.length === 0 ? (
        <img src={EmptyImage} alt='Empty Image' />
      ) : (
        <>
          <img
            src={mock_photos_URL[selectedIndex]}
            alt={mock_photos_URL[selectedIndex]}
            onLoad={setLoadedToTrue}
            className={`h-72 max-xs:h-60 rounded transition-opacity ${
              loaded ? 'opacity-100' : 'opacity-10'
            }`}
          />

          <div className='flex justify-evenly w-full items-center'>
            <button
              onClick={previousPhoto}
              disabled={selectedIndex === 0}
              className={`button-custom py-1.5 font-bold ${
                selectedIndex === 0 && 'opacity-40 hover:bg-custom-dark cursor-not-allowed'
              }`}
            >
              &#10229;
            </button>
            <button
              onClick={nextPhoto}
              disabled={selectedIndex >= mock_photos_URL.length - 1}
              className={`button-custom py-1.5 font-bold ${
                selectedIndex >= mock_photos_URL.length - 1 &&
                'opacity-40 hover:bg-custom-dark cursor-not-allowed'
              }`}
            >
              &#10230;
            </button>
          </div>
        </>
      )}
    </article>
  );
};
