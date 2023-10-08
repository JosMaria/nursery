import { useOutletContext } from 'react-router-dom';
import { PlantContextType } from '../context';

export const useSimpleInfo = () => {
  const { simpleInfo } = useOutletContext<PlantContextType>();

  return {
    simpleInfo,
    isEmpty: simpleInfo.length === 0 ? true : false,
  };
};

export const useFamiliesLoaded = () => {
  const { families } = useOutletContext<PlantContextType>();

  return families;
};
