export interface CreateFamilyDTO {
  family_name: string;
}

export interface FamilyResponse {
  id: number;
  name: string;
}

export interface UpdateFamilyDTO {
  family_name: string;
}

export type UpdateFamilyType = {
  id: number;
  payload: UpdateFamilyDTO;
};
