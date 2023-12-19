import { useState } from 'react';

export const usePhotosSlider = (countPhotos = 0) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const previousPhoto = () => {
    if (selectedIndex > 0) {
      setLoaded(() => false);
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const nextPhoto = () => {
    if (selectedIndex < countPhotos - 1) {
      setLoaded(() => false);
      setSelectedIndex((prev) => prev + 1);
    }
  };

  return {
    selectedIndex,
    loaded,
    setLoadedToTrue: () => setLoaded(() => true),
    previousPhoto,
    nextPhoto,
  };
};
