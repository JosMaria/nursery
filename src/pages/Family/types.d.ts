interface CreateFamilyDTO {
  family_name: string;
}

interface FamilyResponse {
  id: number;
  name: string;
}

interface UpdateFamilyDTO {
  family_name: string;
}

export type UpdateFamilyType = {
  id: number;
  payload: UpdateFamilyDTO;
};
