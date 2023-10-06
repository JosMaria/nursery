import { useOutletContext } from 'react-router-dom';
import { PlantContextType } from '../types';

export const useSimpleInfo = () => {
  const { simpleInfo } = useOutletContext<PlantContextType>();
  return {
    simpleInfo,
    isEmpty: simpleInfo.length === 0 ? true : false,
  };
};
