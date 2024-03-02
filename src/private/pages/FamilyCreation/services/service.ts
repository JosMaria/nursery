import { FamilyCreateDTOType, FamilyResponseType } from '../../../types';
import { axiosInstance } from '../../../../config';

export const createFamilies = async (families: FamilyCreateDTOType[]): Promise<FamilyResponseType[]> => {
  const { data } = await axiosInstance.post<FamilyResponseType[]>('families/batch', families);
  return data;
};
