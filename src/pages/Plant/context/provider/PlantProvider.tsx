import { useMutation } from '@tanstack/react-query';
import { PlantContext } from '..';
import toast from 'react-hot-toast';
import { HttpStatusCode } from 'axios';
import { ErrorType } from '../../../../types';
import { createPlant } from '../../services';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const PlantProvider = ({ children }: Props) => {
  const { mutate: createPlantMutate } = useMutation({
    mutationFn: createPlant,

    onSuccess: (_, variables) => {
      toast.success(`Planta ${variables.commonName} guardada exitosamente`, {
        className: 'custom-toast-success',
      });
      //reset();
    },

    onError: (error: ErrorType) => {
      const { response } = error;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(error.response.data.reason, {
          className: 'custom-toast-error',
        });
      }
    },
  });

  // const { data: families } = useQuery({
  //   queryKey: ['families'],
  //   queryFn: fetchAllFamilies,
  //   initialData: [],
  // });

  return (
    <PlantContext.Provider value={{ families: [], createPlant: () => createPlantMutate }}>
      {children}
    </PlantContext.Provider>
  );
};
