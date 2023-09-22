export interface CreateFamilyDTO {
  family_name: string;
}

export interface FamilyResponse {
  id: number;
  name: string;
}

export interface UpdateFamilyDTO {
  name: string;
}