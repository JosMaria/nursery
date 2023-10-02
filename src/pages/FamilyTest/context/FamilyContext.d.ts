import { FamilyResponse } from '../types';

export type ContextType = {
  families: FamilyResponse[];
  createFamiliesMutation: UseMutateAsyncFunction<FamilyResponse[], unknown, CreateFamilyDTO[], unknown>;
  deleteFamilyByIdMutation: UseMutateAsyncFunction<void, unknown, number, unknown>;
  updateFamilyMutation: UseMutateAsyncFunction<FamilyResponse, unknown, UpdateFamilyType, unknown>,
};
