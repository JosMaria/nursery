import { FamilyResponse } from '../types';

export type ContextType = {
  families: FamilyResponse[];
  deleteFamilyByIdMutation: UseMutateAsyncFunction<void, unknown, number, unknown>;
  updateFamilyMutation: UseMutateAsyncFunction<FamilyResponse, unknown, UpdateFamilyType, unknown>,
};
