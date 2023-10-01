import { FamilyResponse } from '../types';

export type ContextType = {
  families: FamilyResponse[];
  createFamiliesMutation: UseMutateAsyncFunction<FamilyResponse[], unknown, CreateFamilyDTO[], unknown>;
};
