import { RoleType } from '../../types';

export interface AccountResponse {
  id: number;
  name: string;
  lastname: string;
  username: string;
  role: RoleType;
}
