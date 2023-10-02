import { useOutletContext } from 'react-router-dom';
import { ContextType } from '../context';

export const useFamilies = () => {
  const { families } = useOutletContext<ContextType>();
  return {
    families,
    isEmpty: families.length === 0 ? true : false,
  };
};

export const useMutateAsyncFamilies = () => {
  const { 
    createFamiliesMutation, 
    deleteFamilyByIdMutation, 
    updateFamilyMutation 
  } = useOutletContext<ContextType>();

  return {
    createFamiliesMutation,
    deleteFamilyByIdMutation,
    updateFamilyMutation,
  };
};
