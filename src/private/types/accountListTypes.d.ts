export type RoleType = 'ADMINISTRATOR' | 'ASSISTANT';

export interface AccountResponse {
  id: number;
  name: string;
  lastname: string;
  username: string;
  role: RoleType;
}
