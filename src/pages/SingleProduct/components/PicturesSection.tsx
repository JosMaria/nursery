import { useState } from 'react';

interface Props {
  urlPictures: Array<string>;
}

export const PicturesSection = ({ urlPictures }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const previousPicture = () => {
    if (selectedIndex > 0) {
      setLoaded(false);
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const nextPicture = () => {
    if (selectedIndex < urlPictures.length - 1) {
      setLoaded(false);
      setSelectedIndex((prev) => prev + 1);
    }
  };

  const sectionButtons = (
    <div className='flex justify-evenly w-full items-center text-skin-light font-semibold'>
      <Button isDisabled={selectedIndex === 0} action={previousPicture}>
        &#10229;
      </Button>
      <Button
        isDisabled={selectedIndex === urlPictures.length - 1}
        action={nextPicture}
      >
        &#10230;
      </Button>
    </div>
  );

  return (
    <article className='bg-skin-form flex flex-col items-center justify-evenly gap-3 w-96 max-h-96 p-1 border-4 border-black'>
      <img
        src={urlPictures[selectedIndex]}
        alt={`Image ${selectedIndex}`}
        onLoad={() => setLoaded(true)}
        className={`h-72 ${
          loaded ? 'opacity-100 transition-opacity' : 'opacity-0'
        }`}
      />
      {sectionButtons}
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
